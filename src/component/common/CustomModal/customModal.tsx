import React, { useEffect, useState } from "react";
import "./customModal.css";
import projects_ from "../../../services/projects";
import ProjectTags from "../tags/projectTags";
import { number } from "joi";

interface Project {
  _id: number;
  project_title: String;
  github_link: String;
  demo_link: String;
  discription: String;
  image_one: String;
  image_two: String;
  image_three: String;
  image_four: String;
  technologies: String[];
}
const CustomModal = ({ handleModal, id, theme }) => {
  const [project, setProject] = useState<Project | any>([]);
  const [currentImageNo, setCurrentImageNo] = useState(1);

  useEffect(() => {
    if (id) setProject(projects_.filter((project) => project._id === id));
  }, [id]);

  const imageToBedisplayed = () => {
    switch (currentImageNo) {
      case 1:
        return project[0].image_one;
      case 2:
        return project[0].image_two;
      case 3:
        return project[0].image_three;
      case 4:
        return project[0].image_four;
      default:
        return null;
    }
  };

  useEffect(() => {
    imageToBedisplayed;
  }, [currentImageNo]);

  const handleImageChange = (desc: string) => {
    if (desc === "Increase") {
      if (currentImageNo === 4) return;
      return setCurrentImageNo(currentImageNo + 1);
    } else {
      if (currentImageNo === 1) return;
      return setCurrentImageNo(currentImageNo - 1);
    }
  };

  console.log(currentImageNo);

  console.log(project);
  return (
    <div style={{ width: "100%" }}>
      <div className="customModalContainer">
        <div className={`${theme === "dark" && "darkTheme"} contentContainer`}>
          <span className="close" onClick={() => handleModal(false)}>
            X
          </span>
          {project.length > 0 && (
            <>
              <div className="projectConatainer">
                <div
                  onClick={() => handleImageChange("Decrease")}
                  className="previousButton"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div
                  onClick={() => handleImageChange("Increase")}
                  className="nextButton"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <img
                  className="projectImage"
                  src={imageToBedisplayed()}
                  alt=""
                />
              </div>
              <div className="descriptionContainer">
                <h2 className={`${theme === "dark" && "darkTheme"}`}>
                  {project[0].project_title}
                </h2>
                <p className={`${theme === "dark" && "darkTheme"}`}>
                  {project[0].discription}
                </p>
              </div>
              <div className="tagsContainer">
                {project[0].technologies.map((project) => (
                  <ProjectTags theme={theme} text={project} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
