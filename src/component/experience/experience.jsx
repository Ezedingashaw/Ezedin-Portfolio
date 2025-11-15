import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import technologies from "../../services/technologies.js";
import "./experience.css";
import "aos/dist/aos.css";
import Loading from "../loading/loading";
import technologyByStack from "../../services/getTechnologyStack";
import dbImage from "../../assets/database.png"

const Experience = ({ theme }) => {
  const [experience, setExperience] = useState([]);
  const [frontTechnology, setFrontTechnology] = useState([]);
  const [backTechnology, setBackTechnology] = useState([]);
  const [dbTechnology, setdbTechnology] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetch = async () => {
      try {
        // const { data } = await axios.get(`${process.env.REACT_APP_API}/skills`);
        // setExperience(data);

        const data = technologies;
        setExperience(data);

        const frontTechnology = technologyByStack(data, "Front");
        const backTechnology = technologyByStack(data, "Back");
        const dbTechnology = technologyByStack(data, "db");
        setFrontTechnology(frontTechnology);
        setBackTechnology(backTechnology);
        setdbTechnology(dbTechnology)
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <section className="experience">
      <div data-aos="fade-up" className="experienceText" id="experience">
        <p className={`${theme === "dark" && "darkTheme"}`}>Explore My</p>
        <h2 className="expHeader">Experience</h2>
      </div>
      <div className="skills">
        <div
          data-aos="zoom-in"
          className={`frontEndCont ${theme === "dark" && " darkTheme"} shadow-sm hover:shadow-lg relative bottom-0 hover:bottom-1 transition-all duration-200`}
        >
          <h2>Front-End Development</h2>
          {frontTechnology.length !== 0 ? (
            <div className="cont">
              {frontTechnology.map((technology) => {
                return (
                  <div>
                    <img src={technology.image} alt="" />
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div
          data-aos="zoom-in"
          className={`frontEndCont ${theme === "dark" && " darkTheme"} shadow-sm hover:shadow-lg relative bottom-0 hover:bottom-1 transition-all duration-200`}
        >
          <h2>Back-End Development</h2>
          {backTechnology.length !== 0 ? (
            <div className="cont">
              {backTechnology.map((technology) => {
                return (
                  <div>
                    <img src={technology.image} alt="" />
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div
          data-aos="zoom-in"
          className={`backEndCont ${theme === "dark" && " darkTheme"} shadow-sm hover:shadow-lg relative bottom-0 hover:bottom-1 transition-all duration-200`}
        >
          
          <h2>Database</h2>
          {dbTechnology.length !== 0 ? (
            <div className="cont">
              {dbTechnology.map((technology) => {
                return (
                  <div>
                    <img src={technology.image} alt="" />
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
