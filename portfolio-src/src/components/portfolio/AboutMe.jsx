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
  useTheme,
} from "@mui/material";
import Section from "./Section";
import ScrollBottom from "../atoms/ScrollBottom";

const AboutMe = () => {
  const theme = useTheme();
  const skills = [
    ["Skill", "Skill", "Skill"],
    ["Skill", "Skill", "Skill"],
    ["Skill", "Skill", "Skill"],
  ];

  return (
    <Section secId={"about-me"}>
      <Card
        raised
        sx={{
          display: "flex",
          borderRadius: 2,
          height: "100%",
          mt: 5,
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
            color={theme.palette.mode === "light" && "primary"}
            sx={{ fontWeight: "bold", pb: 2, fontSize: { sm: 46, xs: 32 } }}
          >
            About Me
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            animi odio fugit asperiores in, nemo possimus officia commodi quia!
            At dolorum expedita accusamus? Vitae voluptatibus maiores delectus
            ea nobis!
          </Typography>

          <Box>
            <Typography
              color={theme.palette.mode === "light" && "primary"}
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
                      {`${skill} ${i + 1}`}
                    </ListItem>
                  ))}
                </List>
              ))}
            </Stack>
            <Typography sx={{ fontStyle: "italic" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      <ScrollBottom anchorId={"#"} />
    </Section>
  );
};

export default AboutMe;
