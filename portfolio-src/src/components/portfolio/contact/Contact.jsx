//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import { Box, Paper, Stack, Typography } from "@mui/material";

//component imports
import Section from "../atoms/Section";
import ContactForm from "./ContactForm";

//icon imports
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <Section secId={"contact"}>
      <Paper
        sx={{
          color: "white.main",
          bgcolor: "primary.main",
          p: 5,
          height: { xs: "75%", sm: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "start",
              maxWidth: { sm: "50%", xs: "100%" },
            }}
          >
            <Box sx={{ py: 3 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { sm: 18, xs: 12 },
                }}
              >
                Get in Touch with Me
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { sm: 32, xs: 24 },
                }}
              >
                Got a problem to solve?
              </Typography>
            </Box>

            <Box>
              <Typography>
                Looking to work with me, or discuss an idea or concept? Looking
                for some help with your project? Or just looking to talk? I'd
                love to get in touch whatever it is!
              </Typography>

              <Link href="mailto:omaranwar04@outlook.com">
                <Typography
                  sx={{
                    my: 2,
                    fontStyle: "italic",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  color="white.main"
                >
                  <MailIcon /> omaranwar04@outlook.com
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <ContactForm />
          </Box>
        </Stack>
      </Paper>
    </Section>
  );
};

export default Contact;
