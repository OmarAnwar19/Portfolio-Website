//react imports
import React from "react";

//mui imports
import { Box, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

const SideNav = () => {
  const navItems = [
    { name: "About Me", anchorId: "about-me" },
    { name: "Experience", anchorId: "experience" },
    { name: "Projects", anchorId: "projects" },
    { name: "Contact", anchorId: "contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        left: 0,
        display: { sm: "block", xs: "none" },
      }}
    >
      <ButtonGroup color="inherit" orientation="vertical" variant="text">
        {navItems.map((item) => (
          <Button>
            <Link href={`#${item.anchorId}`} scroll={true}>
              {item.name}
            </Link>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default SideNav;
