import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { tokens, ColorModeContext } from "../theme";
import { Box, Button, IconButton, useTheme, Typography } from "@mui/material";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      position={"fixed"}
      alignItems={"center"}
      boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
      justifyContent={"space-between"}
      width={"100vw"}
      height={"10vh"}
      p={2}
      // bgcolor={colors.black[500]}
      zIndex={"1000"}
      sx={{backgroundColor:"#ffffff"}}
    >
      <Box className={"title"}>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            sx={{
              fontSize: {
                xs: "1.4em",
                sm: "2em",
                md: "2.5em",
                lg: "3em",
                xl: "4em",
              },
              color:"#000000"
            }}
          >
            JOBSYNC
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Nav;
