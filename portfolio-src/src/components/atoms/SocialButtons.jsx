//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import { IconButton, List, ListItem, Stack } from "@mui/material";

//icon imports
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const SocialButtons = ({ color }) => {
  return (
    <List component={Stack} direction="row" sx={{ gap: 1 }}>
      <ListItem key="i-github">
        <Link href="https://github.com/OmarAnwar19">
          <IconButton color={color || "inherit"}>
            <GitHub />
          </IconButton>
        </Link>
      </ListItem>

      <ListItem key="i-linkedin">
        <Link href="https://www.linkedin.com/in/omar-anwar19/">
          <IconButton color={color || "inherit"}>
            <LinkedIn />
          </IconButton>
        </Link>
      </ListItem>

      <ListItem key="i-instagram">
        <Link href="https://www.instagram.com/oanwar19/">
          <IconButton color={color || "inherit"}>
            <Instagram />
          </IconButton>
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialButtons;
