import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/navBar/navBar";
import ListIcon from "./component/common/listIcon/listIcon";
import Hero from "./component/hero/hero";
import AboutMe from "./component/aboutMe/aboutMe";
import Experience from "./component/experience/experience";
import Projects from "./component/projects/projects";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import WelcomeLoader from "./component/welcomeLoader/welcomeLoader";
import NotFound from "./component/common/notFound";
import CustomModal from "./component/common/CustomModal/customModal";
import { setElement } from "react-modal/lib/helpers/ariaAppHider";

function App() {
  const [display, setDisplay] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    setTimeout(() => {
      setDisplay(1);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.classList.add("changeScrollBehaviour");
    else document.body.classList.remove("changeScrollBehaviour");
  }, [isOpen]);
  const navBarToggle = (value) => {
    setToggle(value);
  };

  useEffect(() => {
    selectedTheme === "light"
      ? (document.body.style.backgroundColor = "#f5f5f5")
      : (document.body.style.backgroundColor = "#333333");
  }, [selectedTheme]);

  const handleModel = (isOpen) => {
    setIsOpen(isOpen);
  };

  const selectedProject = (id) => {
    setSelectedProjectId(id);
  };

  const handleTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <Fragment>
      {display ? (
        <Routes>
          <Route
            path=""
            element={
              <div style={{ position: "relative" }}>
                {isOpen && (
                  <CustomModal
                    theme={selectedTheme}
                    id={selectedProjectId}
                    handleModal={handleModel}
                  />
                )}
                <NavBar
                  onThemeChange={handleTheme}
                  theme={selectedTheme}
                  navBarToggle={navBarToggle}
                />
                <Hero theme={selectedTheme} toggle={toggle} />
                <AboutMe theme={selectedTheme} />
                <Experience theme={selectedTheme} />
                <Projects
                  theme={selectedTheme}
                  selectedProject={selectedProject}
                  handleModel={handleModel}
                  navBarToggle={navBarToggle}
                />
                <Contact theme={selectedTheme} />
                <Footer theme={selectedTheme} />
              </div>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <WelcomeLoader />
      )}
    </Fragment>
  );
}

export default App;
