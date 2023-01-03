//react imports
import React from "react";

//component imports
import SiteHead from "./Head";
import NavBar from "./header/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <SiteHead />
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
