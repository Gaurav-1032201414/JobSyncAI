import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { tokens, ColorModeContext } from "../theme";
import { Box, Button, IconButton, useTheme, Typography,List,ListItem } from "@mui/material";

const Topbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      width={"100vw"}
      p={4}
      bgcolor={colors.black[500]}
    >
      <Box className={"title"} marginTop={"2em"} >
        <Typography
          variant="h1"
          fontWeight={"bold"}
          sx={{
            color: colors.white[500],
            fontSize: {
              xs: "4em",
              sm: "6em",
              md: "8em",
              lg: "10em",
              xl: "13em",
            },
          }}
        >
          JOBSYNC
        </Typography>
      </Box>

      <Box
        className={menuIcon ? "navbar active" : "navbar"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{marginTop:{xs:'4em'}}}
      >
        <Box className="navbar-lists"sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{p:{xs:2, md:2}}} >
            <NavLink
              to={"/"}
              style={{ textDecoration: "none" }}
              className={"navbar-link"}
              onClick={() => setMenuIcon(false)}
            >
              <Typography
                variant="p1"
                sx={{ color: colors.white[500], fontSize: { xs: '1.2em', md: '1.2em' } }}
              >
                Home
              </Typography>
            </NavLink>
          </Box>
     
          {/* <Box sx={{p:{xs:2, md:2}}} >
            <NavLink
              to={"/auth"}
              style={{ textDecoration: "none" }}
              className={"navbar-link"}
              onClick={() => setMenuIcon(false)}
            >
              <Typography
                variant="p1"
                sx={{ color: colors.white[500], fontSize: { xs: '1.2em', md: '1.2em' } }}
              >
                Login
              </Typography>
            </NavLink>
          </Box> */}
          <Box sx={{p:{xs:2, md:2}}} >
            <NavLink
              to={"/contact"}
              style={{ textDecoration: "none" }}
              className={"navbar-link"}
              onClick={() => setMenuIcon(false)}
            >
              <Typography
                variant="p1"
                sx={{ color: colors.white[500], fontSize: { xs: '1.2em', md: '1.2em' } }}
              >
                Contact
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{p:{xs:2, md:2}}} >
            <NavLink
              to={"/resume-analysis"}
              style={{ textDecoration: "none" }}
              className={"navbar-link"}
              onClick={() => setMenuIcon(false)}
            >
              <Typography
                variant="p1"
                sx={{ color: colors.white[500], fontSize: { xs: '1.2em', md: '1.2em' } }}
              >
                Analyse
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
