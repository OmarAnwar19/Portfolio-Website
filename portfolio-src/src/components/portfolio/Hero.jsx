//react imports
import React from "react";

//mui imports
import { Box, Typography, useTheme } from "@mui/material";

//component imports
import SocialButtons from "../atoms/SocialButtons";
import ScrollBottom from "../atoms/ScrollBottom";
import TypingText from "./TypingText";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        py: 5,
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.mode === "light" && "primary"}
        sx={{ fontWeight: "bold", pb: 2 }}
      >
        Hi, I'm Omar Anwar 👋
      </Typography>

      <TypingText />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography fontStyle={"italic"} maxWidth={450}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          explicabo veniam laboriosam repudiandae tempore et quasi!
        </Typography>

        <Box maxWidth={250}>
          <SocialButtons />
        </Box>

        <ScrollBottom anchorId={"hero"} />
      </Box>
    </Box>
  );
};

export default Hero;
