//react imports
import React from "react";

//component imports
import ModeToggle from "../src/components/atoms/ModeToggle";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ModeToggle />

      <div>
        <h1>Omar Anwar</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Home;
