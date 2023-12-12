// Jobsync.jsx
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "../../components/Nav";
import UploadResume from "../../components/UploadResume";
import QuestionForm from "../../components/QuestionForm";
import JobMatches from "../../components/JobMatches";

const Jobsync = () => {
  const [resume, setResume] = useState("");
  const [answers, setAnswers] = useState({
    field: "",
    geoid: "",
  });
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showJobMatches, setShowJobMatches] = useState(false);
  const handleResumeUpload = (resumeData) => {
    // Handle resume upload logic if needed
    setResume(resumeData);
    setShowQuestionForm(true);
  };

  const handleAnswersSubmit = (submittedAnswers) => {
    // Handle answers submit logic if needed
    setAnswers(submittedAnswers);
    setShowJobMatches(true);
  };

  return (
    <>
      <Nav />

      <Box
        className="page-container"
        sx={{ height: "auto", width: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box className="title" marginTop={"7em"}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ color: "#001122", fontSize: "50px", marginBottom:"20px" }}
          >
            Analyze Resume
          </Typography>

          {!resume && (
            <UploadResume
              setResume={setResume}
              setAnswers={setAnswers}
              setShowQuestionForm={setShowQuestionForm}
            />
          )}

          {resume && showQuestionForm && (
            <QuestionForm
              setAnswers={setAnswers}
              setShowJobMatches={setShowJobMatches}
              resume={resume} 
              answers={answers}
            />
          )}

          {showJobMatches && <JobMatches resume={resume} answers={answers} />}
        </Box>
      </Box>
    </>
  );
};

export default Jobsync;