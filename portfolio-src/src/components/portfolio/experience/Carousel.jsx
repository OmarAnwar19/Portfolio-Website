//react imports
import React from "react";

//mui imports
import { Paper, Button, Box, Typography } from "@mui/material";

//component imports
import Carousel from "react-material-ui-carousel";

const CarouselCont = () => {
  const items = [
    {
      name: "New York",
      img: "/assets/img/carousel/placeholder1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nesciunt aperiam reprehenderit quod. Est quia ad fuga quod debitis excepturi delectus sequi eum, libero corporis iure, velit quo eos. Ullam.",
    },
    {
      name: "Beijing",
      img: "/assets/img/carousel/placeholder2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nesciunt aperiam reprehenderit quod. Est quia ad fuga quod debitis excepturi delectus sequi eum, libero corporis iure, velit quo eos. Ullam.",
    },
    {
      name: "Ottawa",
      img: "/assets/img/carousel/placeholder3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nesciunt aperiam reprehenderit quod. Est quia ad fuga quod debitis excepturi delectus sequi eum, libero corporis iure, velit quo eos. Ullam.",
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible swipe>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper sx={{ px: 2, border: 1, boxShadow: 5 }}>
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
