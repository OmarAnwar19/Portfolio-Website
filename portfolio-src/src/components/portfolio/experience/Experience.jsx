//react imports
import React from "react";

//mui imports
import { Typography, Box, Card, Stack, useTheme } from "@mui/material";

//component imports
import Section from "../atoms/Section";
import ScrollBottom from "../../atoms/ScrollBottom";
import Timeline from "./Timeline";
import CarouselCont from "./Carousel";

const Experience = () => {
  const theme = useTheme();

  return (
    <Section secId={"experience"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "70%",
          pt: "5vh",
        }}
      >
        <Typography
          color="secondary"
          sx={{ fontWeight: "bold", pb: 2, fontSize: { sm: 32, xs: 24 } }}
        >
          My Journey
        </Typography>
        <Stack direction="row">
          <Box sx={{ width: { sm: "65%", xs: "100%" } }}>
            <Timeline />
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xs: "none" },
              flexDirection: "column",
              justifyContent: "center",
              width: "45%",
              height: "100%",
              my: 1,
            }}
          >
            <CarouselCont />
          </Box>
        </Stack>
        <ScrollBottom anchorId={"projects"} color={"secondary"} />
      </Box>
    </Section>
  );
};

export default Experience;
