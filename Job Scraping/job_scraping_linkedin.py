# import requests
# from pymongo import MongoClient
#
# job_ids = []
#
# # Connect to MongoDB
# client = MongoClient('127.0.0.1', 27017)
# db = client['JobInfo']
# collection = db['JobSyncAI']
# field_collection = db['JobFieldInput']
#
# API_KEY = "65722a4470252e7175782766"
#
# # Fetch field and geoid from the JobFieldInput collection
# field_document = field_collection.find_one({}, {'field': 1, 'geoid': 1})
# field_value = field_document.get('field', 'default_field')
# geoid_value = field_document.get('geoid', 'default_geoid')
#
# collection.delete_many({})
#
# # Define the URL and parameters
# url = "https://api.scrapingdog.com/linkedinjobs/"
# params_1 = {
#         "api_key": API_KEY,
#         "field": field_value,   # field_value
#         "geoid": geoid_value,       # "100293800" geoid_value
#         "page": 1
#     }
#
# # Send a GET request with the parameters
# response = requests.get(url, params=params_1)
#
# # Check if the request was successful (status code 200)
# if response.status_code == 200:
#
#     data = response.json()
#     # print(data)
#     job_ids = [job.get('job_id') for job in data]
#     # job_link = [job.get('job_link') for job in data]
#
# else:
#     print("Request failed with status code:", response.status_code)
#
# job_descriptions = []
#
# for i in range(len(job_ids)):
#     params_2 = {
#         "api_key": API_KEY,
#         "job_id": job_ids[i]
#     }
#
#     response = requests.get(url, params=params_2)
#
#     if response.status_code == 200:
#         # print(response.text)
#         job_data = response.json()
#         # Exclude 'similar_jobs' from the job data
#         job_data[0].pop('people_also_viewed', None)
#         job_descript = job_data[0].get('job_description', '')
#
#         # Store job description in the list
#         job_descriptions.append(job_descript)
#
#         # Store job data in MongoDB
#         collection.insert_one(job_data[0])
#
#     else:
#         print(f"Request failed with status code: {response.status_code}")
#
# # Print stored job descriptions
# print(job_descriptions)
#
# # Close the MongoDB connection
# client.close()

import requests
from pymongo import MongoClient

job_ids = []

# Connect to MongoDB
client = MongoClient('127.0.0.1', 27017)
db = client['JobInfo']
collection = db['JobSyncAI']
field_collection = db['JobFieldInput']

API_KEY = "65722a4470252e7175782766"

# Fetch field and geoid from the JobFieldInput collection
field_document = field_collection.find_one({}, {'field': 1, 'geoid': 1})
field_value = field_document.get('field', 'default_field')
geoid_value = field_document.get('geoid', 'default_geoid')

collection.delete_many({})

# Define the URL and parameters
url = "https://api.scrapingdog.com/linkedinjobs/"
params_1 = {
        "api_key": API_KEY,
        "field": field_value,
        "geoid": geoid_value,
        "page": 1
    }

# Send a GET request with the parameters
response = requests.get(url, params=params_1)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()
    job_ids = [job.get('job_id') for job in data]
else:
    print("Request failed with status code:", response.status_code)

job_descriptions = []

for i in range(len(job_ids)):
    params_2 = {
        "api_key": API_KEY,
        "job_id": job_ids[i]
    }

    response = requests.get(url, params=params_2)

    if response.status_code == 200:
        job_data = response.json()
        job_data[0].pop('people_also_viewed', None)
        job_descript = job_data[0].get('job_description', '')
        job_descriptions.append(job_descript)

        # Add job_id to the document before storing in MongoDB
        job_data[0]['job_id'] = job_ids[i]

        # Store job data in MongoDB
        collection.insert_one(job_data[0])

    else:
        print(f"Request failed with status code: {response.status_code}")

# Print stored job descriptions
print(job_descriptions)

# Close the MongoDB connection
client.close()
