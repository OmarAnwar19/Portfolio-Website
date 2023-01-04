//react importts
import React from "react";

//mui imports
import { Box } from "@mui/material";

const Section = ({ children, secId }) => {
  return (
    <Box
      id={secId}
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        flexDirection: "column",
        maxHeight: "100%",
        height: "100vh",
        pt: "10vh",
        width: "100%",
        maxWidth: 850,
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
