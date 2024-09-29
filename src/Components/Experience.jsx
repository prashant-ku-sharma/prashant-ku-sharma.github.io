import React from "react";
import { ExperienceSection, SubHeading } from "../Elements/elements";
import { experienceArray } from "../data";

export const Experience = ({ currTheme }) => (
  <ExperienceSection id="experience" currTheme={currTheme}>
    <SubHeading>Experience</SubHeading>

    <div className="organization-card-wrapper">
      {experienceArray.map((experience, index) => (
        <div key={index} className="organization-card">
          <div className="organization-timeline">{experience.startYear}</div>
          {/* <a
          href="https://www.corporate.agrostar.in/"
          target="_blank"
          rel="noreferrer"
          className="organization-name"
        >
          AgroStar
        </a> */}
          <div className="organization-card-header">
            <h3 className="organization-name">{experience.organization}</h3>
            <h5>
              {`${experience.startMonth} ${experience.startYear} - ${experience.endMonth} ${experience.endYear}`}
            </h5>
          </div>
          <h4 className="my-role">{experience.role}</h4>
          <ul>
            {experience.responsibilities.map((responsibility) => (
              <li>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </ExperienceSection>
);
