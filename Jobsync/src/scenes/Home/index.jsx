import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Nav from "../../components/Nav";
import { Box } from "@mui/material";
import Introduction from "../../components/Introduction";
import Footer from "../../components/Footer";

const Home = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // You can adjust the scroll threshold based on your design
        const scrollThreshold = 200;
  
        // Toggle the showNavbar state based on the scroll position
        setShowNavbar(scrollPosition > scrollThreshold);
      };
  
      // Attach the scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <Box height={"100vh"}  >
      {/* {showNavbar ? <Nav /> : <Topbar />} */}
      <Topbar/>
      {/* Your other components go here */}
      <Introduction />
      <Footer/>
    </Box>
  );
};

export default Home;
