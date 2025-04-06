import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.css";
import myImage from "../../assets/ezedin.jpg";

const Hero = ({ toggle, theme }) => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="hero" id="hero">
      {isScrolled > 100 && toggle && (
        <div className="goUpIcon">
          <a href="#hero">
            <i class="fa-solid fa-angles-up"></i>
          </a>
        </div>
      )}
      <div data-aos="slide-right" className="myImage">
        <img src={myImage} alt="" />
      </div>
      <div data-aos="slide-left" className="discription">
        <p className={`${theme === "dark" && "darkTheme"}`}>Hello,I'm</p>
        <h1>Ezedin Gashaw</h1>
        <h2>Full-Stack Developer</h2>
        <div className="cvInfoCont">
          <a
            href="/my_resume.pdf"
            download="MY_CV.pdf"
            className={`${theme === "dark" && "darkTheme"} downloadCV`}
          >
            Download CV
          </a>
          <a
            href="/#contact"
            className={`${theme === "dark" && "darkTheme"} contactInfo`}
          >
            Contact info
          </a>
        </div>
        <div className="socialMedia">
          <a href="https://">
            <i
              class={`fa-brands fa-linkedin ${theme === "dark" && "darkTheme"}`}
            ></i>
          </a>
          <a href="https://github.com/Ezedingashaw">
            <i
              class={`fa-brands fa-github ${theme === "dark" && "darkTheme"}`}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
