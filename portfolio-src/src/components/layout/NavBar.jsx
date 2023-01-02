//react imports
import React from "react";

//component imports
import ModeToggle from "../atoms/ModeToggle";

//mui imports
import { Link } from "@mui/material";

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

        <ModeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
