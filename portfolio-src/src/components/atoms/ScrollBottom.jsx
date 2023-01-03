import React from "react";

//mui imports
import { Box, Fab, useTheme } from "@mui/material";

//icon imports
import { KeyboardArrowDown } from "@mui/icons-material";

const ScrollBottom = ({ anchorId }) => {
  const theme = useTheme();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      anchorId
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Box onClick={handleClick} role="presentation">
      <Fab size="small" color={theme.palette.mode === "light" && "primary"}>
        <KeyboardArrowDown />
      </Fab>
    </Box>
  );
};

export default ScrollBottom;
