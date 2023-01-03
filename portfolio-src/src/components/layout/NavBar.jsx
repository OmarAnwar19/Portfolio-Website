//react imports
import React, { useState } from "react";

//next imports
import Link from "next/link";

//mui imports
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

//icon imports
import MenuIcon from "@mui/icons-material/Menu";

//component imports
import ModeToggle from "../atoms/ModeToggle";

const NavBar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = { Portfolio: "/", Blog: "/blog", Resume: "/resume" };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerCont = (
    <Box onClick={handleDrawerToggle} className="text-center">
      <List>
        {Object.entries(navItems).map(([item, route]) => (
          <ListItem key={`li-${item}`} disablePadding>
            <Link href={route}>
              <ListItemButton className="text-center">
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}

        <ListItem>
          <ModeToggle />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="flex">
      <AppBar component="nav" position="fixed">
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1250,
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
            {Object.entries(navItems).map(([item, route]) => (
              <Button key={`li-${item}`} sx={{ color: "#fff" }}>
                <Link href={route}>{item}</Link>
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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 180,
            },
          }}
        >
          {drawerCont}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
