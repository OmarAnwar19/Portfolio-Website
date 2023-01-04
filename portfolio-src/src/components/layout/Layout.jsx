//react imports
import React from "react";

//component imports
import SiteHead from "./Head";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <SiteHead />
      <NavBar />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
