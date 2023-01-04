//react imports
import React from "react";

//mui imports
import { Box } from "@mui/material";

//component imports
import Hero from "../src/components/portfolio/Hero";
import AboutMe from "../src/components/portfolio/AboutMe";
import Experience from "../src/components/portfolio/experience/Experience";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
      }}
    >
      <Hero />
      <AboutMe />
      <Experience />
    </Box>
  );
};

export default Home;
