//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import { Box, Divider, List, Typography, Stack, Button } from "@mui/material";

//icon imports
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";

//component imports
import ScrollTop from "../../atoms/ScrollTop";
import SocialButtons from "../../atoms/SocialButtons";

const Footer = () => {
  const navItems = [
    { slug: "Portfolio", path: "/", disabled: false },
    { slug: "Blog", path: "/blog", disabled: true },
    { slug: "Resume", path: "/resume", disabled: false },
  ];

  return (
    <Box
      bgcolor="primary.main"
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <ScrollTop />
      <Box sx={{ maxWidth: 850, width: "100%", px: 2, mx: "auto" }}>
        <Stack
          direction="row"
          sx={{
            display: { sm: "flex", xs: "none" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ py: 3 }}>
            <Link href="mailto:omaranwar04@outlook.com">
              <Typography
                sx={{
                  fontStyle: "italic",
                  px: 2,
                  "&:hover": { textDecoration: "underline" },
                }}
                color="white.main"
              >
                <MailIcon /> omaranwar04@outlook.com
              </Typography>
            </Link>
          </Box>

          <List component={Stack} direction="row" sx={{ gap: 2, px: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.slug}
                sx={{ color: "#fff" }}
                disabled={item.disabled}
              >
                <Link href={item.path}>{item.slug}</Link>
              </Button>
            ))}
          </List>
        </Stack>

        <Divider
          sx={{
            borderBottomWidth: 5,
            bgcolor: "#fff",
            display: { xs: "none", sm: "flex" },
          }}
          variant="middle"
        />

        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ py: 3, display: "flex", flexDirection: "row" }}>
            <Typography color="white.main" sx={{ px: 2 }}>
              © Omar Anwar 2023
            </Typography>
            <Link href="https://github.com/OmarAnwar19/Portfolio-Website">
              <CodeIcon color="white" />
            </Link>
          </Box>
          <SocialButtons color={"white"} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
