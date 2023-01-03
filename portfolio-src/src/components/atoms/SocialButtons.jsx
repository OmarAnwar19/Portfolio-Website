//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import { IconButton, List, ListItem, Stack } from "@mui/material";

//icon imports
import { GitHub, LinkedIn, Article } from "@mui/icons-material";

const SocialButtons = () => {
  return (
    <List component={Stack} direction="row" sx={{ gap: 2 }}>
      <ListItem key="i-github">
        <Link href="https://github.com/OmarAnwar19">
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </Link>
      </ListItem>

      <ListItem key="i-linkedin">
        <Link href="https://www.linkedin.com/in/omar-anwar19/">
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Link>
      </ListItem>

      <ListItem key="i-resume">
        <Link href="https://docs.google.com/document/d/1C2XvpPxBAAoftkQD_oZ6eowBRhJKrlRUX4psGpl_Kos/edit?usp=sharing">
          <IconButton color="inherit">
            <Article />
          </IconButton>
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialButtons;
