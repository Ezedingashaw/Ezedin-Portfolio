import React, { useState, useEffect } from "react";
import "./navBar.css";
import ListIcon from "../common/listIcon/listIcon";
import logo from "./Ezu-removebg-preview.png";
import {User} from "iconoir-react"
import {SunLight} from "iconoir-react"
import {HalfMoon} from "iconoir-react"

const NavBar = ({ navBarToggle, theme, onThemeChange }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [value, setValue] = useState(false);
  const [selectedBar, setSelectedBar] = useState(0);

  const displayNavBar = (value) => {
    setIsToggled(value);
    setValue(value);
    handleNavBarToggle();
  };

  const handleSelectedBar = (value) => {
    setSelectedBar(value);
    localStorage.setItem("page", value);
  };

  const handleNavBarToggle = () => {
    navBarToggle(isToggled);
  };

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
  };

  return (
    <div className="navBarContainer">
      <nav className="navBar shadow-sm">
        <span className="logo">
          <img src={logo} alt="" />
        </span>
        <ul className={isToggled ? "active" : ""}>
          <li
            onClick={() => {
              displayNavBar(false);
              handleSelectedBar(1);
            }}
          >
            <a className={selectedBar === 1 && "selected"} href="#about">
              About
            </a>
          </li>
          <li
            onClick={() => {
              displayNavBar(false);
              handleSelectedBar(2);
            }}
          >
            <a className={selectedBar === 2 && "selected"} href="#experience">
              Experience
            </a>
          </li>
          <li
            onClick={() => {
              displayNavBar(false);
              handleSelectedBar(3);
            }}
          >
            <a className={selectedBar === 3 && "selected"} href="#projects">
              Projects
            </a>
          </li>
          <li
            onClick={() => {
              displayNavBar(false);
              handleSelectedBar(4);
            }}
          >
            <a className={selectedBar === 4 && "selected"} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <a href="https://www.linkedin.com/in/ezedin-gashaw-b184922a6" target="_blank"  className="bg-white text-black border-b-7 hover:border-b-2 border rounded-b-2xl border-black text-2xl px-3 py-2 rounded hover:shadow-lg transition-all duration-300 ">
        {/* "bg-black text-white text-2xl px-3 py-2 rounded hover:shadow-lg transition-all duration-300 " */}
        Let's connect
        </a>
          {/* {theme === "light" ? (
            <span className="w-full h-full flex items-center justify-center" onClick={() => handleThemeChange("dark")}>
              <SunLight className="self-center" />
            </span>
            // <i
            //   onClick={() => handleThemeChange("dark")}
            //   className="fa-solid fa-moon"
            // ></i>
          ) : (
            <span className="w-full h-full flex items-center justify-center" onClick={() => handleThemeChange("light")}>
              <HalfMoon className="self-center" />
            </span>
          )} */}
         <ListIcon value={value} displayNavBar={displayNavBar} />
      </nav>
    </div>
  );
};

export default NavBar;
