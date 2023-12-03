/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import NavBar from "./NavBar";
import NavElements from "./NavElements";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navBorder, setNavBorder] = useState("border-b-2")

  const ref = useRef();
  const handleNavBar = () => {
    if (showNavBar) {
      setTimeout(() => {
        setShowNavBar(!showNavBar);
        setNavBorder("border-b-2")
      },600)
    }
    else{
      setNavBorder("")
      setShowNavBar(!showNavBar);
    }
  };

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [setShowNavBar, showNavBar]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setShowNavBar(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`navBar ${navBorder} lg:border-b-2`}>
      <div className="flex justify-between items-center mx-4 my-4">
        <div className="z-50">
          <img src={logo} className="w-[9rem]" alt="logo" />
        </div>
        {windowWidth >= 1024 ? (
          <NavElements refs={ref} h={"full"} directions={"flex-row"} />
        ) : !showNavBar ? (
          <FaBars className="cursor-pointer" size={35} onClick={handleNavBar} />
        ) : (
          <FaXmark
            className="z-50 cursor-pointer"
            size={35}
            onClick={handleNavBar}
          />
        )}
      </div>
      {showNavBar ? (
        <NavBar />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
