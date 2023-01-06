//react imports
import React, { useState, useRef } from "react";

//node imports
import emailjs from "@emailjs/browser";

//mui imports
import { Box, Button, TextField, useTheme } from "@mui/material";

//component imports
import Toast from "./Toast";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (res) => {
          e.target.user_name.value = "";
          e.target.user_email.value = "";
          e.target.message.value = "";
          setOpen(true);
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  return (
    <Box
      ref={form}
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
          name="user_name"
          placeholder="Name"
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
          name="user_email"
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
        sx={{
          background: "white",
          color: "black.main",
          width: "100%",
          m: 1,
        }}
      >
        Send
      </Button>

      <Toast open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ContactForm;
