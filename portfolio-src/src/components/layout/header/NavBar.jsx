//react imports
import React, { useState } from "react";

//next imports
import Link from "next/link";

//mui imports
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

//icon imports
import MenuIcon from "@mui/icons-material/Menu";

//component imports
import ModeToggle from "../../atoms/ModeToggle";
import DrawerCont from "./DrawerCont";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { slug: "Porftolio", path: "/", disabled: false },
    { slug: "Blog", path: "/blog", disabled: true },
    { slug: "Resume", path: "/resume", disabled: false },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box id="navbar">
      <AppBar
        component="nav"
        position="fixed"
        sx={{ py: { lg: 1 }, height: "10vh" }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 850,
            mx: "auto",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >
            <Link href="/">Omar Anwar </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.slug}
                sx={{ color: "#fff" }}
                disabled={item.disabled}
              >
                <Link href={item.path}>{item.slug}</Link>
              </Button>
            ))}
            <ModeToggle />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <DrawerCont
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          navItems={navItems}
        />
      </Box>
    </Box>
  );
};

export default NavBar;
