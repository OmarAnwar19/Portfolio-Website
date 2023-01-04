//react imports
import React from "react";

//mui imports
import { Box } from "@mui/material";

//component imports
import Hero from "../src/components/portfolio/Hero";
import AboutMe from "../src/components/portfolio/AboutMe";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 850,
        mx: "auto",
      }}
    >
      <Hero />
      <AboutMe />
    </Box>
  );
};

export default Home;
