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
import { OpenInNewOutlined } from "@mui/icons-material";
import Link from "next/link";

//import projects
import projectContent from "./projectContent";

const Projects = () => {
  const theme = useTheme();

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
          {projectContent.map((group, i) => (
            <Grid key={`group-${i}`} container spacing={3}>
              {group.map((project, i) =>
                project.main ? (
                  <Grid item key={`project-${i}`} xs={isMobile ? 6 : 3}>
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
                    key={`project-${i}`}
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

        <ScrollBottom anchorId={"contact"} color={"white"} />
      </Section>
    </Box>
  );
};

export default Projects;
