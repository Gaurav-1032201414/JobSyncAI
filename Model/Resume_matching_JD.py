from PyPDF2 import PdfReader
from nltk import pos_tag, sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from transformers import AutoModel, BertTokenizer, AutoTokenizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import AnyStr
import numpy as np
import pandas as pd
import re
import torch
import os
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger')


# import string
# from tqdm import tqdm
# from flask import Flask, request, jsonify

# def print_files(path):
#     with os.scandir(path) as entries:
#         for entry in entries:
#             if entry.is_file():
#                 print(entry.path)
#             elif entry.is_dir():
#                 print_files(entry.path)


def print_files(path: AnyStr) -> None:
    with os.scandir(path) as entries:
        entry_list = list(entries)
        for entry in entry_list:
            if entry.is_file():
                print(entry.path)
            elif entry.is_dir():
                print_files(entry.path)


print_files('C:/Users/untaw/Desktop/Capstone Project Final/Datasets/Resumes_Data')
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def extract_text_from_pdf(file_path):
    reader = PdfReader(file_path)
    text = "".join(page.extract_text() for page in reader.pages)
    return text


def preprocess_text(text):
    text = text.lower()
    text = re.sub('[^a-zA-Z]', ' ', text)
    sentences = sent_tokenize(text)
    features = {'feature': ""}
    stop_words = set(stopwords.words("english"))
    for sent in sentences:
        if any(criteria in sent for criteria in ['skills', 'education']):
            words = word_tokenize(sent)
            words = [word for word in words if word not in stop_words]
            tagged_words = pos_tag(words)
            filtered_words = [word for word, tag in tagged_words if tag not in ['DT', 'IN', 'TO', 'PRP', 'WP']]
            features['feature'] += " ".join(filtered_words)
    return features


def process_resume_data(df):
    id = df['ID']
    category = df['Category']
    text = extract_text_from_pdf(
        f"C:/Users/untaw/Desktop/Capstone Project Final/Datasets/Resumes_Data/{category}/{id}.pdf")
    features = preprocess_text(text)
    df['Feature'] = features['feature']
    return df


def process_real_time_data(resume_text, job_description_text):
    resume_features = preprocess_text(resume_text)['feature']
    job_desc_features = preprocess_text(job_description_text)['feature']
    return resume_features, job_desc_features


def get_embeddings(text, model, tokenizer):
    inputs = tokenizer(str(text), return_tensors="pt", truncation=True, padding=True).to(device)
    outputs = model(**inputs)
    embeddings = outputs.last_hidden_state.mean(dim=1).detach().to("cpu").numpy()
    return embeddings


def predict_similarity(user_resume_embeddings, linkedin_job_desc_embeddings):
    similarities = cosine_similarity([linkedin_job_desc_embeddings], [user_resume_embeddings])[0][0]
    return similarities


def train_and_save_model():
    # Training and saving the model
    resume_data = pd.read_csv("C:/Users/untaw/Desktop/Capstone Project Final/Datasets/Resume.csv")
    resume_data = resume_data.drop(["Resume_html"], axis=1)
    resume_data = resume_data.apply(process_resume_data, axis=1)
    resume_data = resume_data.drop(columns=['Resume_str'])
    resume_data.to_csv("/resume_data.csv", index=False)

    job_description = pd.read_csv("C:/Users/untaw/Desktop/Capstone Project Final/Datasets/training_data.csv")
    job_description = job_description[["job_description", "position_title"]][:15]
    job_description['Features'] = job_description['job_description'].apply(lambda x: preprocess_text(x)['feature'])

    model_name = "bert-base-uncased"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModel.from_pretrained(model_name)
    model.to(device)

    job_desc_embeddings = np.array(
        [get_embeddings(desc, model, tokenizer) for desc in job_description['Features']]).squeeze()
    resume_embeddings = np.array([get_embeddings(text, model, tokenizer) for text in resume_data['Feature']]).squeeze()

    model.save_pretrained("C:/Users/untaw/Desktop/Capstone Project Final/saved_models")  # Save the model
    tokenizer.save_vocabulary("C:/Users/untaw/Desktop/Capstone Project Final/saved_models")

    return model, tokenizer, job_desc_embeddings, resume_embeddings


def main():
    # Check if the model has already been trained and saved
    model_path = "C:/Users/untaw/Desktop/Capstone Project Final/saved_models"
    if os.path.exists(model_path):
        # If the model is already trained, load the pre-trained model
        tokenizer = BertTokenizer.from_pretrained(model_path)
        model = AutoModel.from_pretrained(model_path)
        print("Tokenizer Vocab Size:", tokenizer.vocab_size)

    else:
        # If the model is not trained, train and save it
        model, tokenizer, job_desc_embeddings, resume_embeddings = train_and_save_model()


if __name__ == "__main__":
    main()
