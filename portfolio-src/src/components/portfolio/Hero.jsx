//react imports
import React from "react";

//mui imports
import { Box, Typography, useTheme } from "@mui/material";

//component imports
import SocialButtons from "../atoms/SocialButtons";
import ScrollBottom from "../atoms/ScrollBottom";
import TypingText from "./atoms/TypingText";
import Section from "./atoms/Section";

const Hero = () => {
  const theme = useTheme();

  return (
    <Section secId={"hero"}>
      <Box sx={{ pt: "5vh" }}>
        <Typography
          color="secondary"
          sx={{ fontWeight: "bold", pb: 2, fontSize: { sm: 92, xs: 62 } }}
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
          <Typography
            sx={{
              fontStyle: "italic",
              maxWidth: 450,
              display: { sm: "block", xs: "none" },
            }}
          >
            Highly motivated, software engineer, developer and TPM adept in
            full-stack development using a varied tech stack. Computer Science
            and Business Managment @ Carleton University.
          </Typography>

          <Box maxWidth={250}>
            <SocialButtons />
          </Box>

          <ScrollBottom anchorId={"about-me"} color={"secondary"} />
        </Box>
      </Box>
    </Section>
  );
};

export default Hero;
