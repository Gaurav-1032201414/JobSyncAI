// QuestionForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";

const QuestionForm = ({ setAnswers, setShowJobMatches,resume }) => {
  const [answers, setAnswersLocal] = useState({
    answer1: "",
    answer2: "",
  });
  const [msg, setMsg] = useState(null);

  const handleInputChange = (e, questionNumber) => {
    const { value } = e.target;
    setAnswersLocal((prevAnswers) => ({
      ...prevAnswers,
      [`answer${questionNumber}`]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Data to be uploaded to the API:", { resume, ...answers });
    axios
      .post("http://127.0.0.1:5000/scrape_jobs", { resume, ...answers }) // Include resume in the POST request
      .then((res) => {
        setMsg("Answers submitted successfully");
        console.log(res.data);

        // Pass the submitted answers to the parent component
        setAnswers(answers);

        // Show the JobMatches component in the parent
        setShowJobMatches(true);
      })
      .catch((err) => {
        setMsg("Failed to submit answers");
        console.error(err.message);
      });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2em"}
    >
      <TextField
        label="Job Field"
        variant="outlined"
        value={answers.answer1}
        onChange={(e) => handleInputChange(e, 1)}
      />
      <TextField
        label="Location"
        variant="outlined"
        value={answers.answer2}
        onChange={(e) => handleInputChange(e, 2)}
      />
      <Button
        sx={{
          width: "40%",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontWeight: "semibold",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#FFFFFF",
          },
        }}
        onClick={handleSubmit}
      >
        Show Job Matches
        {/* <p>{answers.answer1}</p> */}
      </Button>
      {msg && <Typography variant="body1">{msg}</Typography>}
    </Box>
  );
};

export default QuestionForm;
