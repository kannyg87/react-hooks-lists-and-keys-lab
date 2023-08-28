import React from "react";

function ProjectItem({ name, about, technologies }) {
  const getTec = technologies.map((tec,index) => <span key={index}>{tec}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {getTec}
      </div>
    </div>
  );
}

export default ProjectItem;
