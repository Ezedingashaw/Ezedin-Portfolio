import React from "react";
import "./footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <i
            class={`fa-solid fa-location-dot ${theme == "dark" && "darkTheme"}`}
          ></i>
          <a className={` ${theme == "dark" && "darkTheme"}`} href="">
            Ethiopia, Dessie
          </a>
        </li>
        <li>
          <i class={`fa-solid fa-phone ${theme == "dark" && "darkTheme"}`}></i>
          <a
            className={` ${theme == "dark" && "darkTheme"}`}
            href="tel:+251945089149"
          >
            +251945089149
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
