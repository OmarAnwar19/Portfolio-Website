//react imports
import React from "react";

//mui imports
import { Paper, Button, Box, Typography } from "@mui/material";

//component imports
import Carousel from "react-material-ui-carousel";

//import carousel items
import crItems from "./items/crItems";

const CarouselCont = () => {
  return (
    <Carousel swipe interval={7500}>
      {crItems.map((item, i) => (
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
