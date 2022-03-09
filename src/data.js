import html from "./Images/svgs/html.svg";
import css from "./Images/svgs/css.svg";
import javascript from "./Images/svgs/javascript.svg";
import react from "./Images/svgs/react.svg";
import redux from "./Images/svgs/redux.svg";
import mongodb from "./Images/svgs/mongodb.svg";
import github from "./Images/svgs/github.svg";
import reactrouter from "./Images/svgs/reactrouter.png";
import frontend from "./Images/svgs/frontend.svg";
import backend from "./Images/svgs/backend.svg";
import dsa from "./Images/svgs/dsa.svg";

import clock from "./Images/pngs/clock.png";
import sudoku from "./Images/pngs/sudoku.png";
import unbounce from "./Images/pngs/unbounce.png";
import travel from "./Images/pngs/travel.png";
import policybazaar from "./Images/pngs/policybazaar.png";

import { FaHackerrank } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const skillArray = {
  technologies: [
    { title: "HTML", image: html },
    { title: "CSS", image: css },
    { title: "Javascript", image: javascript },
    { title: "Github", image: github },
    { title: "React", image: react },
    { title: "Redux", image: redux },
    { title: "MongoDB", image: mongodb },
    { title: "React Router", image: reactrouter },
  ],
  proficiencies: [
    { title: "frontend", image: frontend },
    { title: "backend", image: backend },
    { title: "dsa", image: dsa },
  ],
};

export const projectArray = [
  {
    image: unbounce,
    title: "Unbounce Clone",
    description: "An online landing page building website.",
    codeLink: "https://github.com/nehachatse/sulphur",
    demoLink: "https://prashant-sharma-tws.github.io/sulphur",
    techStack: [
      { title: "HTML", image: html },
      { title: "CSS", image: css },
      { title: "Javascript", image: javascript },
    ],
    type: "A collaborative project built with 2 other developers",
    responsibilities: [],
  },
  {
    image: travel,
    title: "Travel Clone",
    description: "An online travel package booking website.",
    demoLink: "https://prashant-sharma-tws.github.io/travel",
    codeLink: "https://github.com/ansari-saif/Travel",
    techStack: [
      { title: "HTML", image: html },
      { title: "CSS", image: css },
      { title: "Javascript", image: javascript },
    ],
    type: "A collaborative project built with 3 other developers",
    responsibilities: [],
  },
  {
    image: clock,
    title: "Analog Clock",
    description: "A clock for getting info of time.",
    techStack: [
      { title: "HTML", image: html },
      { title: "CSS", image: css },
      { title: "Javascript", image: javascript },
    ],
    demoLink: "https://prashant-sharma-tws.github.io/analog-clock",
    codeLink: "https://github.com/Prashant-Sharma-TWS/Analog-Clock",
    type: "A solo project.",
    responsibilities: [],
  },

  {
    image: sudoku,
    title: "Sudoku",
    description:
      "A sudoku challenge for users, where they can solve and get them solved.",
    techStack: [
      { title: "HTML", image: html },
      { title: "CSS", image: css },
      { title: "Javascript", image: javascript },
      { title: "React", image: react },
    ],
    demoLink: "https://prashant-sharma-tws.github.io/sudoku/",
    codeLink: "https://github.com/Prashant-Sharma-TWS/sudoku",
    type: "A solo project.",
    responsibilities: [],
  },
  {
    image: policybazaar,
    title: "Policybazaar Clone",
    description: "An online mutli insurance company provider.",
    techStack: [
      { title: "HTML", image: html },
      { title: "CSS", image: css },
      { title: "Javascript", image: javascript },
      { title: "Github", image: github },
      { title: "React", image: react },
      { title: "Redux", image: redux },
    ],
    demoLink: "https://prashant-sharma-tws.github.io/policybazaar/",
    codeLink: "https://github.com/Prashant-Sharma-TWS/policybazaar",
    type: "A collaborative project built by a team of 4 under 4 days.",
    responsibilities: [],
  },
];

export const contactArray = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/prashant-kumar-sharma-/",
    icon: <BsLinkedin size="30px" />,
    iconClass: "linkedin",
  },
  {
    title: "Github",
    link: "https://github.com/Prashant-Sharma-TWS/",
    icon: <BsGithub size="30px" />,
    iconClass: "github",
  },
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/Prashant_Sharma_",
    icon: <FaHackerrank size="30px" />,
    iconClass: "hackerrank",
  },
];
