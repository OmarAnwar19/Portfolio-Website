//react imports
import React from "react";

//mui imports
import { Box, Typography } from "@mui/material";

//component imports
import Section from "../../src/components/portfolio/atoms/Section";
import NowPlaying from "../../src/components/atoms/spotify/NowPlaying";

const index = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
      }}
    >
      <Section secId={"blog"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Welcome to my blog!</Typography>
          {/* <NowPlaying /> */}
        </Box>
      </Section>
    </Box>
  );
};

export default index;
