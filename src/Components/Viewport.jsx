import React, { useEffect } from "react";
import { typing } from "../Effects/window.effects";
import { ViewportSection } from "../Elements/elements";
import author from "./../Images/author3.jpeg";

export const Viewport = ({ currTheme }) => {
  useEffect(typing, []);

  return (
    <ViewportSection id="viewport" currTheme={currTheme}>
      <div>
        <div className="author-photo">
          <img src={author} alt="AuthorPhoto" />
        </div>
        <div className="author-description">
          <div className="intro">
            <h5>I'm a</h5>
            <h5 className="typing">Full Stack Developer</h5>
          </div>
          <h1>Prashant Sharma</h1>
          <p>
            Results-driven Software Engineer with 4+ years of experience specializing in React and modern JavaScript ecosystems, delivering high-impact, scalable applications. Led key frontend initiatives at AgroStar, driving 30%+ engagement growth and significant performance improvements. Adept at architecting clean, efficient systems and collaborating across teams to ship reliable, user-focused products.
          </p>
          <p className="resume">
            <a
              href="https://drive.google.com/file/d/1Rhn-o_aGHIYPwTE5Eu7AKwMNl_UrX1Ks/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </p>
        </div>
      </div>
    </ViewportSection>
  );
};
