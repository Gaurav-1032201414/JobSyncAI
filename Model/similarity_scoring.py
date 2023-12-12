from torch import cosine_similarity
from transformers import AutoModel, AutoTokenizer
import torch
import re
import pymongo

# MongoDB setup
mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
db = mongo_client["JobInfo"]
resumefile_collection = db["JobFieldInput"]
jobsyncAI_collection = db["JobSyncAI"]

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_path = "C:/Users/untaw/Desktop/Capstone Project Final/saved_models"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModel.from_pretrained(model_path)
model.to(device)

# Set a maximum length for input sequences
max_length = 512


def preprocess_text(text):
    text = text.lower()
    text = re.sub('[^a-zA-Z]', ' ', text)
    return text


def predict_similarity(user_resume_text, job_description_text):
    # Truncate or pad the input sequences to fit the maximum length
    user_resume_inputs = tokenizer(user_resume_text, return_tensors="pt", truncation=True, padding=True,
                                   max_length=max_length).to(device)
    job_description_inputs = tokenizer(job_description_text, return_tensors="pt", truncation=True, padding=True,
                                       max_length=max_length).to(device)

    with torch.no_grad():
        user_resume_outputs = model(**user_resume_inputs)
        job_description_outputs = model(**job_description_inputs)

    user_resume_embeddings = user_resume_outputs.last_hidden_state.mean(dim=1).detach().to("cpu").numpy().squeeze()
    job_description_embeddings = job_description_outputs.last_hidden_state.mean(dim=1).detach().to(
        "cpu").numpy().squeeze()

    user_resume_embeddings = torch.tensor(user_resume_embeddings).to(device)
    job_description_embeddings = torch.tensor(job_description_embeddings).to(device)

    similarity_score = float(
        cosine_similarity(user_resume_embeddings.reshape(1, -1), job_description_embeddings.reshape(1, -1)).item())
    return similarity_score


def fetch_resume_text(resume_id):
    resume_data = resumefile_collection.find_one({"resume_id": resume_id})
    if resume_data and resume_data.get("resume_text"):
        return resume_data["resume_text"]
    return ""


def fetch_job_description(job_id):
    job_data = jobsyncAI_collection.find_one({"job_id": job_id})
    if job_data and job_data.get("job_description"):
        return job_data["job_description"]
    return ""


def fetch_resume_ids():
    resume_ids = [doc["resume_id"] for doc in resumefile_collection.find({}, {"resume_id": 1})]
    return resume_ids


def fetch_job_ids():
    job_ids = [doc["job_id"] for doc in jobsyncAI_collection.find({}, {"job_id": 1})]
    return job_ids


# Example usage
resume_ids = fetch_resume_ids()
job_ids = fetch_job_ids()

similarity_scores = []

for resume_id in resume_ids:
    user_resume_text = fetch_resume_text(resume_id)
    user_resume_text = preprocess_text(user_resume_text)

    for job_id in job_ids:
        job_description_text = fetch_job_description(job_id)
        job_description_text = preprocess_text(job_description_text)

        similarity_score = predict_similarity(user_resume_text, job_description_text)

        similarity_scores.append({
            'resume_id': resume_id,
            'job_id': job_id,
            'similarity_score': similarity_score
        })

        # Update JobSyncAI collection with similarity scores
        jobsyncAI_collection.update_one({"job_id": job_id}, {"$set": {"similarity_score": similarity_score}},
                                        upsert=True)

# Print similarity_scores
print(similarity_scores)
