import React from "react";
import NavElements from "./NavElements";

const NavBar = () => {
  return (
    <div
      className={`h-[100vh] w-full top-20 fixed right-0 text-white z-20`}
    >
      <NavElements
        h={"100vh"}
        direction={"flex-col"}
      />
    </div>
  );
};

export default NavBar;
