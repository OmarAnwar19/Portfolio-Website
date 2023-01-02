import React, { useContext, useEffect } from "react";

//context imports
import { ColorModeContext } from "../../utils/MUIProvider";

//mui imports
import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ModeToggle = () => {
  const { colorMode, setMode } = useContext(ColorModeContext);
  const theme = useTheme();

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      setMode(localStorage.getItem("mode"));
    }
  }, []);

  return (
    <IconButton
      className="ml-2"
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ModeToggle;
