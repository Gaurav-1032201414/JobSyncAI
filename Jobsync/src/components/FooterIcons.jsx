import { Typography, Box, } from "@mui/material";
import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterIcons = () => {
  return (
    <Box bottom={"0"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"1em"} margin={"5vh"}>
      <Box
          className="social-icons"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"3em"}
        >
          <TwitterIcon  sx={{ fontSize: '2rem' }} ></TwitterIcon>
          <InstagramIcon  sx={{ fontSize: '2rem' }} ></InstagramIcon>
          <FacebookIcon  sx={{ fontSize: '2rem' }} ></FacebookIcon>
          <YouTubeIcon  sx={{ fontSize: '2rem' }} ></YouTubeIcon>
        </Box>

        <Typography variant="p1" fontSize={"larger"} > © 2023 Jobsync </Typography>
    </Box>
  )
}

export default FooterIcons
