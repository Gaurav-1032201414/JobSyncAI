import { Container, Typography, Button, TextField, Box } from "@mui/material";
import FooterIcons from "../../components/FooterIcons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [currentForm, setCurrentForm] = useState("signup");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", my: 4 }}>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "100%" },
        }}
      >
        {/* Your branding or image here */}
        <Box
          sx={{
            height: 200,
            width: "100%",
            backgroundColor: "grey.300",
            mb: 4,
            // Add responsive styling here if needed
          }}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              // variant="h1"
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "1.4em",
                  sm: "2em",
                  md: "2.5em",
                  lg: "3em",
                  xl: "4em",
                },
                color: "#000000",
              }}
            >
              JOBSYNC
            </Typography>
          </NavLink>
          <Typography variant="subtitle1" gutterBottom>
            The new social experience for you and your friends. Sign up to learn
            more.
          </Typography>
          <TextField
            textAlign="center"
            sx={{
              backgroundColor: "#f2f2f2",
              padding: "1em",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          />
          <Button
            sx={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              fontWeight: "semibold",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <FooterIcons />
    </Container>
  );
};
export default Auth;
