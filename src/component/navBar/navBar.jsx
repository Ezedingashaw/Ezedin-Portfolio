import React, { useState, useEffect } from "react";
import "./navBar.css";
import ListIcon from "../common/listIcon/listIcon";
import logo from "./Ezu-removebg-preview.png";

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
      <nav className="navBar">
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
        <span className="themeIconsCont">
          {theme === "light" ? (
            <i
              onClick={() => handleThemeChange("dark")}
              className="fa-solid fa-moon"
            ></i>
          ) : (
            <i
              onClick={() => handleThemeChange("light")}
              className="fa-solid fa-sun"
            ></i>
          )}
        </span>
        <ListIcon value={value} displayNavBar={displayNavBar} />
      </nav>
    </div>
  );
};

export default NavBar;
