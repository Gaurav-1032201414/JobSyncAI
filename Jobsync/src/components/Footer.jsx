import { Box, Divider } from "@mui/material";
import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <Box
      className="footer-container"
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Divider
        variant="middle"
        sx={{ borderColor: "##F2F2F2", margin: "5em" }}
      ></Divider>
      <FooterLinks/> */}
      <Divider
        variant="middle"
        sx={{ borderColor: "##F2F2F2", margin: "3em" }}
      ></Divider>

      <Box
        className="footer-social-container"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1.5em"}
      >
        <Box
          className={"illustration-container"}
          sx={{
            backgroundColor: "#F2F2F2",
            height: "25vh",
            width: "20vw",
            margin: "1.5em",
            borderRadius: "5%",
          }}
        ></Box>

       <FooterIcons/>
      </Box>
      <Box className="marginBottom" sx={{height:"10vh"}} >

      </Box>
    </Box>
  );
};

export default Footer;
