import { Link } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="flex flex-row">
        <div>Omar Anwar</div>

        <div className="links">
          <ul>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
