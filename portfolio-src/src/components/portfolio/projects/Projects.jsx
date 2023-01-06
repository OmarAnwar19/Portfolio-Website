//react imports
import React from "react";

//mui imports
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//component imports
import Section from "../atoms/Section";
import ScrollBottom from "../../atoms/ScrollBottom";
import ProjectCard from "./ProjectCard";
import { Javascript, OpenInNewOutlined } from "@mui/icons-material";
import Link from "next/link";

const Projects = () => {
  const theme = useTheme();

  const projects = [
    [
      {
        main: true,
        title: "Chloe AI Virtual Assistant",
        desc: " Chloe is an AI Virtual Assistant, which harnesses the power of AI and Machine Learning in order to help you with anything you need! ",
        img: "/assets/img/cards/chloe.png",
        link: "https://github.com/OmarAnwar19/Chloe-AI-Virtual-Assistant",
      },
      {
        title: "Facebook Clone",
        desc: "A clone of the facebook web app UI.",
        img: "/assets/img/cards/facebook.png",
        link: "https://github.com/OmarAnwar19/Facebook-Clone",
      },
      {
        title: "NFT Generator",
        desc: "Generate random NFT's using Python!",
        img: "/assets/img/cards/nftgen.png",
        link: "https://github.com/OmarAnwar19/NFT-Generator",
      },
    ],
    [
      {
        title: "A* Visualizer",
        desc: "Visualizer for an A* Path Finding algorithim.",
        img: "/assets/img/cards/astar.png",
        link: "https://github.com/OmarAnwar19/A-Star-Path-Finding-Algorithim-Visualizer",
      },
      {
        title: "19tracks",
        desc: "My personal music blog, created using Ruby and Jekyll.",
        img: "/assets/img/cards/19tracks.png",
        link: "https://github.com/OmarAnwar19/19tracks",
      },
      {
        main: true,
        title: "Nine Worlds Chat",
        desc: "Socket.io based chat app, which connects users with auth, and allows them to join different chat rooms, for real time communication with others. ",
        img: "/assets/img/cards/nineworlds.png",
        link: "https://github.com/OmarAnwar19/Chat-App-With-User-Authentication",
      },
    ],
  ];

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: "primary.main", mt: 5 }}>
      <Section secId={"projects"}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            pb: 2,
            fontSize: { sm: 32, xs: 24 },
          }}
        >
          My Work
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {projects.map((group) => (
            <Grid container spacing={3}>
              {group.map((project) =>
                project.main ? (
                  <Grid item xs={isMobile ? 12 : 6}>
                    <ProjectCard
                      title={project.title}
                      desc={project.desc}
                      img={project.img}
                      link={project.link}
                    />
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={3}
                    sx={{ display: { sm: "block", xs: "none" } }}
                  >
                    <ProjectCard
                      title={project.title}
                      desc={project.desc}
                      img={project.img}
                      link={project.link}
                    />
                  </Grid>
                )
              )}
            </Grid>
          ))}
        </Box>

        <Button
          sx={{
            display: { sm: "none", xs: "block" },
            mt: 3,
            color: "black.main",
          }}
          startIcon={<OpenInNewOutlined />}
          size="small"
          color="white"
          variant="contained"
        >
          <Link href="https://github.com/OmarAnwar19">View All Projects</Link>
        </Button>

        <ScrollBottom anchorId={"contact"} bg />
      </Section>
    </Box>
  );
};

export default Projects;
