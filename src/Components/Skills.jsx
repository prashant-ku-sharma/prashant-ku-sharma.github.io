import React from "react";
import { SkillSection, SubHeading } from "../Elements/elements";
import { skillArray } from "../data";

export const Skills = () => {
  return (
    <SkillSection id="skills">
      <SubHeading>Skills &amp; Interests</SubHeading>
      <div>
        <SkillsCardContainer />
      </div>
    </SkillSection>
  );
};

const SkillsCardContainer = () => {
  return (
    <ul className="skill-card-container">
      {skillArray.map((item) => (
        <li key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3 className="skill-title">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};
