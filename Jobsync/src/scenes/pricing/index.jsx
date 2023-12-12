import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FooterIcons from "../../components/FooterIcons"
import PricingContainer from "../../components/PricingContainer";

const Pricing = () => {
  return (
    <Box
      className="page-container"
      sx={{ height: "auto", width: "100%" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={""}
      marginTop={"5em"}
      gap={"5em"}
    >
      <PricingContainer/>
      <FooterIcons/>
    </Box>
  );
};
export default Pricing;
