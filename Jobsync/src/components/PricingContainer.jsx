import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PricingContainer = () => {
  return (
    <Box
      className="pricing-content-container"
      display={"flex"}
      sx={{
        flexDirection: { md: "row", xs: "column" },
        alignItems: { md: "center" },
        marginX: { md: "15em", xs: "1em" },
      }}
      justifyContent={"space-between"}
      gap={"2em"}
    >
      <Box
        className="pricing-content-g"
        borderRadius={"20px"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        height={"auto"}
        width={"320px"}
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        padding={"2em"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"1em"}
        //   sx={{ border }}
      >
        <Box className="pricing-heading">
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            {" "}
            Personal{" "}
          </Typography>
        </Box>
        <Box
          className={"pricing-amount"}
          display={"flex"}
          gap={"1em"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"} fontSize={50}>
            $5
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            p/month
          </Typography>
        </Box>

        <Box className={"pricing-features"}>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              1 projects{" "}
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Analytics
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Insights Panel
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              Share Features
            </Typography>
          </Box>
        </Box>
        <Box className={"pricing-button"}>
          <Button
            sx={{
              backgroundColor: "#F2F2F2",
              color: "#000000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        className="pricing-content-g"
        borderRadius={"20px"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        height={"auto"}
        width={"320px"}
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        padding={"2em"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"1em"}
        //   sx={{ border }}
      >
        <Box className="pricing-heading">
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            {" "}
            Professional{" "}
          </Typography>
        </Box>
        <Box
          className={"pricing-amount"}
          display={"flex"}
          gap={"1em"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"} fontSize={50}>
            $5
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            p/month
          </Typography>
        </Box>

        <Box className={"pricing-features"}>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              2 projects{" "}
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Analytics
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Insights Panel
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              Share Features
            </Typography>
          </Box>
        </Box>
        <Box className={"pricing-button"}>
          <Button
            sx={{
              backgroundColor: "#F2F2F2",
              color: "#000000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        className="pricing-content-g"
        borderRadius={"20px"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        height={"auto"}
        width={"320px"}
        display={"flex"}
        flexDirection={"column"}
        marginY={"3em"}
        marginX={"2em"}
        padding={"2em"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"1em"}
        //   sx={{ border }}
      >
        <Box className="pricing-heading">
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            {" "}
            Business{" "}
          </Typography>
        </Box>
        <Box
          className={"pricing-amount"}
          display={"flex"}
          gap={"1em"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"} fontSize={50}>
            $5
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            fontSize={15}
            sx={{ color: "#666666" }}
          >
            p/month
          </Typography>
        </Box>

        <Box className={"pricing-features"}>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Unlimited projects{" "}
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Analytics
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              {" "}
              Insights Panel
            </Typography>
          </Box>
          <Box className="feature" display={"flex"} gap={"1em"}>
            <Typography>
              {" "}
              <CheckCircleIcon />{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={15}
              sx={{ color: "#666666" }}
            >
              Share Features
            </Typography>
          </Box>
        </Box>
        <Box className={"pricing-button"}>
          <Button
            sx={{
              backgroundColor: "#F2F2F2",
              color: "#000000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingContainer;
