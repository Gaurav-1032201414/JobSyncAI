import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../theme";
import { NavLink } from "react-router-dom";

const Introduction = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <Box
        className={"intro"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={{ padding: { md: "7em", xs: "2em" } }}
      >
        <Box
          className={"intro-title"}
          display={"flex"}
          sx={{ width: { md: "65%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              color: colors.black[500],
              fontSize: {
                md: "3.2em",
                xs: "1.5em",
              },
            }}
          >
            Meet your AI Companion
          </Typography>
        </Box>

        <Box
          className={"intro-text"}
          marginTop={"2em"}
          sx={{ width: { md: "55%" } }}
        >
          <Typography
            variant="p1"
            sx={{
              color: colors.black[500],
              fontSize: {
                md: "1.3em",
              },
            }}
          >
            Diving into the countless job listings can be daunting. Jobsync, the
            groundbreaking AI bot, promises to elevate your job hunt experience.
            Built with precision and understanding of your skills and strengths,
            this AI bot navigates through the sea of opportunities to find your
            perfect match.{" "}
          </Typography>
        </Box>

        <Box
          className={"intro-data"}
          display={"flex"}
          marginTop={"2em"}
          sx={{
            width: { md: "55%" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            className={"data-item"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              width: { md: "15vw", xs: "70vw" },
              marginBottom: { xs: "2em" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "2em",
                  xs: "1.3em",
                },
              }}
            >
              759
            </Typography>
            <Typography
              variant="p1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "1em",
                },
              }}
            >
              Satisfied Users
            </Typography>
          </Box>
          <Box
            className={"data-item"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              width: { md: "15vw", xs: "70vw" },
              marginBottom: { xs: "2em" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "2em",
                  xs: "1.3em",
                },
              }}
            >
              321
            </Typography>
            <Typography
              variant="p1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "1em",
                },
              }}
            >
              Successful Placements
            </Typography>
          </Box>
          <Box
            className={"data-item"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              width: { md: "15vw", xs: "70vw" },
              marginBottom: { xs: "2em" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "2em",
                  xs: "1.3em",
                },
              }}
            >
              159
            </Typography>
            <Typography
              variant="p1"
              sx={{
                color: colors.black[500],
                fontSize: {
                  md: "1em",
                },
              }}
            >
              Companies Engaged
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className={"get-started"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={{ padding: { md: "7em", xs: "2em" } }}
      >
        <Box
          className={"get-started-title"}
          display={"flex"}
          sx={{ width: { md: "65%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              color: colors.black[500],
              fontSize: {
                md: "3.2em",
                xs: "1.5em",
              },
            }}
          >
            Ready to uplevel your job search? Get started with Jobsync's AI bot
            now!
          </Typography>
        </Box>

        <Box
          display={"flex"}
          sx={{ flexDirection: { xs: "column", md: "row" }, margin: "2" }}
        >
          <NavLink to={"/resume-analysis"}>
            <Button
              sx={{
                textTransform:"none",
                backgroundColor: "#64B6AC",
                color: "#000000",
                borderRadius: "0",
                marginTop: "2em",
                marginRight: "1em",
                "&:hover": {
                  backgroundColor: "#64B6AC",
                },
              }}
            >
              <Typography variant="p1">Start Your Journey</Typography>
            </Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button
              sx={{
                textTransform:"none",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "0",
                marginTop: "2em",
                "&:hover": {
                  backgroundColor: "#000000",
                },
              }}
            >
              <Typography variant="p1">Learn More</Typography>
            </Button>
          </NavLink>
        </Box>
      </Box>

      <Box
        className={"review-container"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2em"}
        sx={{
          padding: { md: "2em", xs: "2em" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          className="review-card"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "#F2F2F2",
            height: "60vh",
            width:{md:"30vw", xs:"auto"},
            marginX: "2em",
            borderRadius: "5%",
            padding:"1em"
          }}
        >
          <Box
            className={"illustration-container"}
            sx={{
              backgroundColor: "#ffffff",
              height: "25vh",
              width: "20vw",
              margin: "1.5em",
              borderRadius: "5%",
            }}
          ></Box>
          <Box
            className={"review-text"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box sx={{ width: "80%" }}>
              <Typography variant="p1">
                ‘Jobsync has revolutionized our hiring process, bringing in top
                talent that fits perfectly with our requirements.’
              </Typography>
            </Box>
          </Box>
          <Box marginTop={"1em"} >
            <Typography variant="p1">MICROSOFT</Typography>
          </Box>
        </Box>

        <Box
          className="review-card"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "#F2F2F2",
            height: "60vh",
            width:{md:"30vw", xs:"auto"},
            marginX: "2em",
            borderRadius: "5%",
            padding:"1em"
          }}
        >
          <Box
            className={"illustration-container"}
            sx={{
              backgroundColor: "#ffffff",
              height: "25vh",
              width: "20vw",
              margin: "1.5em",
              borderRadius: "5%",
            }}
          ></Box>
          <Box
            className={"review-text"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box sx={{ width: "80%" }}>
              <Typography variant="p1">
              ‘The introduction of Jobsync into our recruitment strategy has expedited the entire process.’ 
              </Typography>
            </Box>
          </Box>
          <Box marginTop={"1em"} >
            <Typography variant="p1">AMAZON</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
