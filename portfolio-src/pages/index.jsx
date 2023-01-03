//react imports
import React from "react";

//mui imports
import { Box } from "@mui/material";

//component imports
import Hero from "../src/components/portfolio/Hero";
import Footer from "../src/components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 850,
          mx: "auto",
          height: "100vh",
          pt: "10vh",
        }}
      >
        <Hero />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
