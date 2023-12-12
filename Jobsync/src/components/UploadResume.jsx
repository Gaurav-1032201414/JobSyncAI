import React, { useState } from "react";
import { Box, Input, Button } from "@mui/material";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/webpack";

const UploadResume = ({ setResume, setAnswers, setShowQuestionForm }) => {
  const [file, setFile] = useState(null);
  const [fileText, setFileText] = useState("");
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const extractText = async (file) => {
    // Set the path to the worker source file
    GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.0.269/build/pdf.worker.min.js`;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const typedArray = new Uint8Array(e.target.result);
      try {
        const pdf = await getDocument({ data: typedArray }).promise;
        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const pageText = await page.getTextContent();
          text += pageText.items.map((item) => item.str).join(" ");
        }
        setFileText(text);
        setResume(text);
        setAnswers({ answer1: "", answer2: "" }); // Reset answers when resume is uploaded
        setShowQuestionForm(true);

      } catch (error) {
        console.error("Error extracting text from PDF:", error);
        setFileText(`Error extracting text from PDF: ${error.message}`);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // const handleUpload = () => {
  //   if (!file) {
  //     console.log("No file selected");
  //     return;
  //   }

  //   const fd = new FormData();
  //   fd.append("file", file);
  //   fd.append("fileText", fileText); // Send the extracted text

  //   setMsg("Uploading...");
  //   setProgress((prevState) => ({ ...prevState, started: true }));

  //   axios
  //     .post("http://httpbin.org/post", fd, {
  //       onUploadProgress: (progressEvent) => {
  //         setProgress((prevState) => ({
  //           ...prevState,
  //           pc: (progressEvent.loaded / progressEvent.total) * 100,
  //         }));
  //       },
  //       headers: {
  //         "Custom-Header": "value",
  //       },
  //     })
  //     .then(async (res) => {
  //       setMsg("Upload successful");
  //       console.log(res.data);

  //       const resumeData = res.data;
  //       setResume(res);
  //       setShowQuestionForm(true);
  //     })
  //     .catch((err) => {
  //       setMsg("Upload Unsuccessful");
  //       console.log(err);
  //     });
  // };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2em"}
    >
      <Input
        onChange={(e) => {
          setFile(e.target.files[0]);
          extractText(e.target.files[0]); // Extract text when file is selected
        }}
        type="file"
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
        // onClick={handleUpload}
      >
        Upload
      </Button>
      {progress.started && <progress max="100" value={progress.pc}></progress>}
      {msg && <span>{msg}</span>}
      <Box mt={2} p={2} border={1} borderColor="grey.300" width="100%">
        <p>{fileText}</p>
      </Box>
    </Box>
  );
};

export default UploadResume;
