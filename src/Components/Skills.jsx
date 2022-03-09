import React from "react";
import { SkillSection, SubHeading } from "../Elements/elements";
import { skillArray } from "../data";

export const Skills = () => {
  return (
    <SkillSection id="skills">
      <SubHeading>Skills &amp; Interests</SubHeading>
      <div>
        <Technologies />
      </div>
      <SubHeading>Proficiencies</SubHeading>
      <div>
        <Proficiencies />
      </div>
    </SkillSection>
  );
};

const Technologies = () => {
  return (
    <ul className="skill-card-container">
      {skillArray.technologies.map((item) => (
        <li key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3 className="skill-title">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

const Proficiencies = () => {
  return (
    <ul className="skill-card-container">
      {skillArray.proficiencies.map((item) => (
        <li key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3 className="skill-title">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};
