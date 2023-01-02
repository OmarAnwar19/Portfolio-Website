import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="flex flex-row">
        <div>Omar Anwar</div>

        <div className="links">
          <ul>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Resume</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
