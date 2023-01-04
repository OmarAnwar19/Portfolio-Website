//react imports
import React from "react";

//mui imports
import { Box } from "@mui/material";

const Resume = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 850,
        mx: "auto",
        height: "100vh",
        pt: "10vh",
      }}
    >
      <Box
        sx={{
          py: 5,
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <iframe
          width="100%"
          src="https://docs.google.com/document/d/e/2PACX-1vSKsabRnzPoWngoL73k_Ca01pDCZ7rtM8P9Y-0kh_l_WzD4F8jMnj41sBxmfAx9mq8jZ28UljcgQ17J/pub?embedded=true"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Resume;
