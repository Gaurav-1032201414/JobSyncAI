import React from "react";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <Box
      className="footer-content-container"
      display={"flex"}
      sx={{
        flexDirection: { md: "row", xs: "column" },
        alignItems: { md: "center", xs: "flex-start" },
        marginX: { md: "15em", xs: "1em" },
      }}
      justifyContent={"space-between"}
    >
      <Box
        className="footer-content-g1"
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={"1em"}
      >
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Products</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Features</Typography>
        </NavLink>
        <NavLink to={"/pricing"} style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Pricing</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Updates</Typography>
        </NavLink>
      </Box>
      <Box
        className="footer-content-g2"
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"1em"}
      >
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Company</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">About</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Team</Typography>
        </NavLink>
        <NavLink to={"/contact"} style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Contact</Typography>
        </NavLink>
      </Box>
      <Box
        className="footer-content-g2"
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"1em"}
      >
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Help</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Support</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">FAQs</Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="p1">Privacy Policy</Typography>
        </NavLink>
      </Box>
    </Box>
  );
};

export default FooterLinks;
