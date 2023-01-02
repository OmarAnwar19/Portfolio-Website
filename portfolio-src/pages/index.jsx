//react imports
import React, { useContext } from "react";

//context imports
import { ColorModeContext } from "../src/utils/MUIProvider";

//mui imports
import { IconButton, Paper, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Home = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <IconButton
        className="ml-2"
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <div>
        <h1>Omar Anwar</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Home;
