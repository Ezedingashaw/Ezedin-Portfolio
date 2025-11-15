import AOS from "aos";
import axios from "axios";
import { ArrowRightTag } from 'iconoir-react';
import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { default as pro, default as projects_ } from "../../services/projects.js";
import ProjectTags from "../common/tags/projectTags.js";
import Loading from "../loading/loading";
import "./projects.css";
import {Github} from "iconoir-react"

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

  const text = (text) => {
    const newText = text.length > 100 ? text.slice(0,100)+ '...' : text;
    return newText
  }

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
                  className={`${theme === "dark" ? "darkTheme" : ""} group project shadow-sm hover:shadow-lg transition-transform duration-200 relative hover:-translate-y-1`}

                >
                  <div
                    
                    className="image relative"
                  >
                    <div className="absolute w-full h-full bg-black opacity-0 transition-opacity duration-300 items-end justify-start px-10 py-15 group-hover:opacity-30 flex">
                      <h3 className="text-white text-3xl font-bold group-hover:">{project.title}</h3>
                    </div>
                    <img className="" src={project.image_one} alt="" />
                  </div>
                  <div className="px-10">
                    <h2 className="text-black text-3xl font-bold mb-2">{project.title} </h2>
                    <p className="text-gray-500 text-2xl/8">{ text(project.discription)}</p>
                    
                  </div>
                  <div className="px-10 flex justify-between items-center w-full py-5">
                    <p className="text-blue-400 text-xl flex gap-10 hover:bg-blue-100 transition-all duration-100 cursor-pointer py-1 px-[2px] rounded-xl" onClick={() => {
                      handleModel(true);
                      selectedProject(project._id);
                      // handlemodalIsOpen();
                      // initializeProject(project);
                    }}>
                      View Details <ArrowRightTag />
                    </p>
                    <Github className="hover:text-blue-500 transition-colors duration-200 cursor-pointer "/>
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
              <h2>Technologies used</h2>
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
