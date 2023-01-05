//react imports
import React from "react";

//next imports
import { Typography } from "@mui/material";

//component imports
import Typewriter from "typewriter-effect";

const TypingText = () => {
  return (
    <Typography variant="h4">
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full-Stack Developer",
            "Technical Product Manager",
            "Tech Enthusiast",
            "Music Nerd",
            "Nature Lover",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>
  );
};

export default TypingText;
