//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import {
  Card,
  Typography,
  Container,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Chip,
} from "@mui/material";

//icon imports
import { OpenInNewOutlined } from "@mui/icons-material";

const ProjectCard = ({ title, desc, img, link }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          right: 0,
        }}
        media="picture"
        image={img}
      />

      <CardContent
        sx={{
          color: "#fff",
          height: "100%",
          backgroundColor: "rgba(0,0,0, 0.2)",
          position: "relative",
        }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.78)" }}
          component="p"
        >
          {desc}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          position: "relative",
          backgroundColor: "rgba(0,0,0, 0.2)",
        }}
      >
        <Link href={link}>
          <Button
            startIcon={<OpenInNewOutlined />}
            size="small"
            color="white"
            variant="outlined"
          >
            GitHub
          </Button>
        </Link>
        {}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
