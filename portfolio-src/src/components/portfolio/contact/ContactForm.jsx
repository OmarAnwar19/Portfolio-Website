//react imports
import React, { useState } from "react";

//mui imports
import { Box, Button, TextField } from "@mui/material";

//component imports
import Toast from "./Toast";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let subject = e.target.subject.value;
    let message = e.target.message.value;

    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";

    setSubmit(true);
    setOpen(true);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          sx={{
            borderRadius: 2,
            background: "white",
            input: {
              color: "black.main",
            },
          }}
          name="email"
          type="email"
          placeholder="Email"
          fullWidth
          required
        />
        <TextField
          sx={{
            borderRadius: 2,
            background: "white",
            input: {
              color: "black.main",
            },
          }}
          name="subject"
          placeholder="Subject"
          fullWidth
        />
        <TextField
          sx={{
            borderRadius: 2,
            background: "white",
            input: {
              color: "black.main",
            },
          }}
          name="message"
          placeholder="Message"
          multiline
          rows={4}
          fullWidth
          required
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={{ width: "100%", m: 1, bgcolor: "white.main", color: "black.main" }}
      >
        Submit
      </Button>

      {submit && <Toast open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default ContactForm;
