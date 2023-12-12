import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      className="page-container"
      sx={{ height: "auto", width: "100%" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box className="404-text">
        <Typography
          variant="h6"
          fontWeight={"bold"}
          sx={{ color: "#001122", fontSize: "260px" }}
        >
          404
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          fontWeight={"medium"}
          sx={{ color: "#888888", fontSize: "24px" }}
        >
          The page you are looking for doesn't exist or has been moved. Please
          go back to the homepage.
        </Typography>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <NavLink to={"/"}>
            <Button
              sx={{
                textTransform:"none",
                backgroundColor: "#222222",
                color: "#ffffff",
                borderRadius: "8",
                marginTop: "2em",
                marginRight: "1em",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              <Typography variant="h6">Go Back Home</Typography>
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};
export default ErrorPage;
