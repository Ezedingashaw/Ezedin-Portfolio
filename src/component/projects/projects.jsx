import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import AOS from "aos";
import pro from "../../services/projects.js";
import "./projects.css";
import axios from "axios";
import Loading from "../loading/loading";
import projects_ from "../../services/projects.js";
import ProjectTags from "../common/tags/projectTags.js";

const Projects = ({ navBarToggle, selectedProject, handleModel, theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImV6ZWRpbiIsInVzZXJuYW1lIjoiZXp1IiwiZW1haWwiOiJlemVkaW5nYXNoYXdAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzI3NjI5NTg3fQ.I_7ghpgpOSE1pAe_Mag4XNGHjE0zqF_3-vyxXUVlFBo";
    const headers = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };

    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/projects`,
          headers
        );
        setProjects(projects_);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();

    const data = pro;
    setProjects(data);
    console.log(project);
  }, []);

  const handlemodalIsOpen = () => {
    setModalIsOpen(true);
    navBarToggle(false);
  };

  const handlemodalClose = () => {
    setModalIsOpen(false);
    navBarToggle(true);
    setIndex(1);
  };

  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: 0,
      border: "none",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  const initializeProject = (project) => {
    const projectClone = [
      {
        id: "",
        title: "",
        github: "",
        demo: "",
        imageOne: "",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
        discription: "",
      },
    ];

    projectClone[0].id = project._id;
    projectClone[0].title = project.project_title;
    projectClone[0].github = project.github_link;
    projectClone[0].demo = project.demo_link;
    projectClone[0].discription = project.discription;
    projectClone[1] = project.image_one;
    projectClone[2] = project.image_two;
    projectClone[3] = project.image_three;
    projectClone[4] = project.image_four;

    setProject(projectClone);
    console.log("Project", projectClone);
  };
  console.log("ProjectsClone", project);

  const increaseIndex = () => {
    if (index === 4) return;
    const i = index + 1;
    setIndex(i);
  };
  const decreaseIndex = () => {
    if (index === 1) return;
    const i = index - 1;
    setIndex(i);
  };

  Modal.setAppElement("#root");

  return (
    <Fragment>
      <section className="projects">
        <div data-aos="fade-up" className="projectsText" id="projects">
          <p className={`${theme === "dark" && "darkTheme"}`}>
            Browse My Recent
          </p>
          <h2>Projects</h2>
        </div>
        {projects.length !== 0 ? (
          <div className="projectContainer">
            {projects.map((project) => {
              return (
                <div
                  data-aos="zoom-in"
                  className={`${theme === "dark" && "darkTheme"} project`}
                >
                  <div
                    onClick={() => {
                      handleModel(true);
                      selectedProject(project._id);
                      // handlemodalIsOpen();
                      // initializeProject(project);
                    }}
                    className="image"
                  >
                    <img src={project.image_one} alt="" />
                  </div>
                  <div className="links">
                    <a
                      href={`${project.github_link}`}
                      target="_blank"
                      className={`gitHub ${theme === "dark" && "darkTheme"}`}
                    >
                      GitHub
                    </a>
                    <a
                      href={`${project.demo_link}`}
                      target="_blank"
                      className={`liveDemo ${theme === "dark" && "darkTheme"}`}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </section>

      <Modal
        style={customStyle}
        isOpen={modalIsOpen}
        onRequestClose={handlemodalClose}
      >
        {project.length > 0 ? (
          <div className="modalDisplayContainer">
            <div onClick={decreaseIndex} className="left">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div onClick={handlemodalClose} className="cancle">
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="imageCont">
              <img src={project[index]} alt="" />
            </div>
            <div className="discription">
              <h2>{project[0].title}</h2>
              <p>{project[0].discription}</p>
            </div>
            <div onClick={increaseIndex} className="right">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="projectTagsContainer">
              {project[0]?.technologies?.map((technology) => (
                <>
                  <ProjectTags text={technology} />
                  <p>Text</p>
                </>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </Fragment>
  );
};

export default Projects;
