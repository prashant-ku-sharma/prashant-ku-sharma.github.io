import React from "react";
import { ViewportSection } from "../Elements/elements";
import author from "./../Images/author.png";

export const Viewport = ({ currTheme }) => {
  return (
    <ViewportSection currTheme={currTheme}>
      <div>
        <div className="author-photo">
          <img
            src={author}
            // src="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/cesar-rincon-1024x1024.jpg"
            alt="AuthorPhoto"
          />
        </div>
        <div className="author-description">
          <h3>Full Stack Web Developer</h3>
          <h1>Prashant Sharma</h1>
          <p>
            An enthusiastic, result-oriented &amp; innovative Full Stack Web
            Developer. Highly skilled in Technical skills across MERN with a
            great hold on Data Structures &amp; Algorithms. Capable of writing
            clean, reusable &amp; optimized code. Adaptable to team environment,
            proficient in remote collaboration &amp; committed to achieving
            organizational goals.
          </p>
          <p className="resume">
            <a
              href="https://drive.google.com/u/0/uc?id=1rZhyXv_SYkCVrQ6MFbmgFisZ6YyNbdO4&amp;export=download"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </ViewportSection>
  );
};
