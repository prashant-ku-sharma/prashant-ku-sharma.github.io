import React, { useState } from "react";
import { ProjectSection, SubHeading } from "../Elements/elements";
import { projectArray } from "../data";

export const Projects = () => {
  return (
    <ProjectSection id="projects">
      <SubHeading>Projects</SubHeading>
      <div>
        <div className="project-card-container">
          {projectArray.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </ProjectSection>
  );
};

const ProjectCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [currInterest, setCurrInterest] = useState({});

  const handleRead = () => {
    setShow(!show);
    setCurrInterest({ ...item });
  };

  return (
    <>
      <div className="project-card">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="project-title">{item.title}</h3>
          <button onClick={handleRead}>Read More</button>
        </div>
        <p className="project-description">{item.description}</p>
        <div className="btns">
          <a className="demo" href={item.demoLink}>
            Demo
          </a>
          <a className="code" href={item.codeLink}>
            Code
          </a>
        </div>
      </div>
      {show && <ProjectDetail currInterest={currInterest} setShow={setShow} />}
    </>
  );
};

const ProjectDetail = ({ currInterest, setShow }) => {
  return (
    <div className="project-detail-section" onClick={() => setShow(false)}>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
