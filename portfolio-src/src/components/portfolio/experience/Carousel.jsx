//react imports
import React from "react";

//mui imports
import { Paper, Button, Box, Typography } from "@mui/material";

//component imports
import Carousel from "react-material-ui-carousel";

const CarouselCont = () => {
  const items = [
    {
      name: "2008 (4 years old)",
      img: "/assets/img/carousel/alex.jpg",
      description:
        "My first experience with computers, spending hours on my grandparents old computer, tinkering around with all sorts of things, whether that be websites, or games, or trying to make my own terminal games using batch.",
    },
    {
      name: "2012 (8 years old)",
      img: "/assets/img/carousel/winnipeg.jpg",
      description:
        "Delving deeper into software development, starting with Python, and spending every waking moment trying to make the 'coolest' software and apps which I could. Trying to use computers and harnessing coding in exciting ways!",
    },
    {
      name: "2016 (12 years old)",
      img: "/assets/img/carousel/vancouver.jpg",
      description:
        "A time of development, and growth, where individiuals discover their likes and dislikes; a time where I realized my love for development was not simply a phase, but rather someting which I truly love.",
    },
    {
      name: "2018 (16 years old)",
      img: "/assets/img/carousel/ottawa.jpg",
      description:
        "Exploring all of the different aspects of development, and falling in love with all that it can do. Beggining to explore web development, and backend technologies. Learning new languages and gaining new experiences.",
    },
    {
      name: "Present Day",
      img: "/assets/img/carousel/future.jpg",
      description:
        "In the present day, I am living life to the fullest, enjoying the journey of software development and life as a university student, with an eagerness and cautious optimism for what the future has in store, and opportunities it holds.",
    },
  ];

  return (
    <Carousel swipe interval={7500}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      sx={{
        px: 2,
        py: 1,
        border: 1,
        boxShadow: 5,
        borderColor: "secondary.main",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {props.item.name}
      </Typography>

      <Box
        component={"img"}
        sx={{ borderRadius: 2 }}
        src={props.item.img}
        alt="image"
      />

      <Typography>{props.item.description}</Typography>
    </Paper>
  );
}

export default CarouselCont;
