//react imports
import React from "react";

//component imports
import SiteHead from "./Head";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <SiteHead />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
