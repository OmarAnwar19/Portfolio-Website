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
            "Technical Product Manager",
            "Full-Stack Developer",
            "Tech Enthusiast",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>
  );
};

export default TypingText;
