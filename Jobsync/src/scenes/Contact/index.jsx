import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import FooterIcons from "../../components/FooterIcons";
import "./index.css";
import Nav from "../../components/Nav";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65jfgpr",
        "template_prlavht",
        form.current,
        "36TUiYDtqdPXNrvsV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          sx={{ color: "#001122", fontSize: "60px" }}
        >
          Contact
        </Typography>
      </Box>
      <Box
        className="form-container"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: { md: "40vw", xs: "80vw" } }}
      >
        <div className="form">
          <form ref={form} onSubmit={sendEmail} className="form-inputs">
            <input
              className="name"
              type="text"
              name="user_name"
              placeholder="Username"
              required
            />
            <input
              className="email"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea
              className="message"
              name="message"
              cols="45"
              rows="6"
              placeholder="Message"
            />
            <input type="submit" value="Send" className="send" />
          </form>
        </div>
      </Box>
      <FooterIcons/>
    </Box>
    </>
  );
};
export default Contact;
