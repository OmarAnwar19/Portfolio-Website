//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";

//component imports
import ModeToggle from "../../atoms/ModeToggle";

const DrawerCont = ({ window, mobileOpen, navItems, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
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
      <Box onClick={handleDrawerToggle} className="text-center">
        <List>
          {navItems.map((item) => (
            <ListItem key={item.slug} disablePadding>
              <Link href={item.path}>
                <ListItemButton
                  className="text-center"
                  disabled={item.disabled}
                >
                  <ListItemText primary={item.slug} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

          <ListItem>
            <ModeToggle />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerCont;
