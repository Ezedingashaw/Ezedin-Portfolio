import React from "react";
import "./projectTags.css";

const ProjectTags = ({ text, theme }) => {
  return (
    <span className={`${theme === "dark" && "darkTheme"} projectTags`}>
      {text}
    </span>
  );
};

export default ProjectTags;
