//react imports
import React from "react";

//mui imports
import { Box } from "@mui/material";

//component imports
import Hero from "../src/components/portfolio/Hero";
import AboutMe from "../src/components/portfolio/AboutMe";
import Experience from "../src/components/portfolio/experience/Experience";
import Projects from "../src/components/portfolio/projects/Projects";
import Contact from "../src/components/portfolio/contact/Contact";
import SideNav from "../src/components/portfolio/atoms/SideNav";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
      }}
    >
      <Hero />
      <SideNav />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
