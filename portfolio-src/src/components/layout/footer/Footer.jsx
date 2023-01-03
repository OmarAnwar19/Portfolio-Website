//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import {
  Box,
  Divider,
  List,
  Typography,
  ListItem,
  Stack,
  Button,
  Paper,
} from "@mui/material";

//component imports
import ScrollTop from "../../atoms/ScrollTop";
import SocialButtons from "../../atoms/SocialButtons";

const Footer = () => {
  const navItems = { Portfolio: "/", Blog: "/blog", Resume: "/resume" };

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
            justifyContent: "space-between",
            py: 2,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Box>
            <Typography>Say Hello!</Typography>
            <Link href="mailto:omaranwar04@outlook.com">
              <Typography sx={{ fontStyle: "italic" }}>
                omaranwar04@outlook.com
              </Typography>
            </Link>
          </Box>

          <List component={Stack} direction="row" sx={{ gap: 2 }}>
            {Object.entries(navItems).map(([item, route]) => (
              <ListItem key={`li-${item}`} disablePadding>
                <Button color="inherit">
                  <Link href={route}>{item}</Link>
                </Button>
              </ListItem>
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
          <Box sx={{ py: 3 }}>
            <Typography>Copyright - Omar Anwar © 2023</Typography>
          </Box>
          <SocialButtons />
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
