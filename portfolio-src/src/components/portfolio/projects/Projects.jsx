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
        title: "Project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in, eius vero nisi magnam quis quaerat?",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
      },
      {
        title: "Project",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
      },
      {
        title: "Project",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
      },
    ],
    [
      {
        title: "Project",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
      },
      {
        title: "Project",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
      },
      {
        main: true,
        title: "Project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in, eius vero nisi magnam quis quaerat?",
        img: "/assets/img/cards/techplace.jpg",
        link: "https://github.com/OmarAnwar19",
        techArr: [<Javascript />],
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
