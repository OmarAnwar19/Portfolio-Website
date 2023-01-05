//react imports
import React from "react";

//mui imports
import { Snackbar, Alert } from "@mui/material";

const Toast = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Thank you for reaching out! I'll get back to you soon!
      </Alert>
    </Snackbar>
  );
};

export default Toast;
