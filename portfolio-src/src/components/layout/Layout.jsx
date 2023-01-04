//react imports
import React from "react";

//mui imports
import { Box, Stepper } from "@mui/material";

//component imports
import SiteHead from "./Head";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import VStepper from "./VStepper";

const Layout = ({ children }) => {
  return (
    <div className="">
      <SiteHead />
      <NavBar />
      <main>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <Box sx={{ width: "10%", height: "100%" }}>
            <VStepper />
          </Box> */}
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Box>

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
