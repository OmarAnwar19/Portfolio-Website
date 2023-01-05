import React from "react";

//mui imports
import { Box, Fab } from "@mui/material";

//icon imports
import { KeyboardArrowDown } from "@mui/icons-material";

const ScrollBottom = ({ anchorId, bg }) => {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${anchorId}`
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ py: 2, display: { sm: "block", xs: "none" } }}
    >
      <Fab size="small" color={bg ? "#fff" : "secondary"}>
        <KeyboardArrowDown />
      </Fab>
    </Box>
  );
};

export default ScrollBottom;
