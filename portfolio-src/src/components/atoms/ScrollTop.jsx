import React from "react";

//mui imports
import { useScrollTrigger, Box, Fab, Fade } from "@mui/material";

//icon imports
import { KeyboardArrowUp } from "@mui/icons-material";

function ScrollTop({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#navbar"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const BackToTop = () => {
  return (
    <Box sx={{ display: { sm: "block", xs: "none" } }}>
      <ScrollTop>
        <Fab size="small" color="secondary">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default BackToTop;
