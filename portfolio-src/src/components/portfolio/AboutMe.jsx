//react imports
import React from "react";

//mui imports
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  Paper,
} from "@mui/material";

import Section from "./atoms/Section";
import ScrollBottom from "../atoms/ScrollBottom";

const AboutMe = () => {
  const skills = [
    ["HTML/CSS", "ReactJs", "NodeJs"],
    ["GraphQL", "MongoDB", "SQL"],
    ["Java", "Python", "C++"],
  ];

  return (
    <Paper
      sx={{ height: "100%", width: "100%", bgcolor: "primary.main", pb: 2 }}
    >
      <Section secId={"about-me"}>
        <Card
          raised
          sx={{
            display: "flex",
            borderRadius: 2,
            height: "85%",
            mx: "auto",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: { sm: "50%", xs: "100%" },
            }}
          >
            <Typography
              color="secondary"
              sx={{ fontWeight: "bold", pb: 2, fontSize: { sm: 46, xs: 32 } }}
            >
              About Me
            </Typography>
            <Typography>
              Welcome to my site! I'm a Computer Science student and software
              developer; with experience in full-stack development, aswell as
              Java, Python, and many varied technologies. I also love to learn,
              and am always open to discovering something new. In my personal
              life I am a huge music nerd, and love to spend time in nature with
              family and friends.
            </Typography>

            <Box>
              <Typography
                color="secondary"
                sx={{ fontWeight: "bold", pt: 2, fontSize: { sm: 24, xs: 18 } }}
              >
                Skills
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                direction="row"
              >
                {skills.map((group) => (
                  <List sx={{ listStyleType: "disc", pl: 4 }}>
                    {group.map((skill, i) => (
                      <ListItem key={skill} sx={{ display: "list-item" }}>
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                ))}
              </Stack>
              <Typography sx={{ fontStyle: "italic" }}>
                +many more... Thank you for spending some time with me today!
              </Typography>
            </Box>
          </CardContent>

          <CardMedia
            component="img"
            sx={{
              width: "50%",
              display: { sm: "block", xs: "none" },
            }}
            image="/assets/img/macbook.png"
            alt="Live from space album cover"
          />
        </Card>
        <ScrollBottom anchorId={"experience"} bg />
      </Section>
    </Paper>
  );
};

export default AboutMe;
