import React from 'react';

const JobDetails = ({ jobData }) => {
  const {
    job_position,
    job_location,
    company_name,
    job_posting_time,
    job_description,
    Seniority_level,
    Employment_type,
    Job_function,
    Industries,
    job_apply_link,
    recruiter_details,
  } = jobData;

  return (
    <div>
      <h2>{job_position}</h2>
      <p>Location: {job_location}</p>
      <p>Company: {company_name}</p>
      <p>Posted: {job_posting_time}</p>

      <h3>Job Description:</h3>
      <p>{job_description}</p>

      <h3>Job Details:</h3>
      <p>Seniority Level: {Seniority_level}</p>
      <p>Employment Type: {Employment_type}</p>
      <p>Job Function: {Job_function}</p>
      <p>Industries: {Industries}</p>

      <h3>Apply Now:</h3>
      <a href={job_apply_link} target="_blank" rel="noopener noreferrer">
        Apply Here
      </a>

      <h3>Recruiter Details:</h3>
      {recruiter_details.map((recruiter, index) => (
        <div key={index}>
          <p>Name: {recruiter.recruiter_name}</p>
          <p>Title: {recruiter.recruiter_title}</p>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
