import html from "./Images/svgs/html.svg";
import css from "./Images/svgs/css.svg";
import javascript from "./Images/svgs/javascript.svg";
import react from "./Images/svgs/react.svg";
import redux from "./Images/svgs/redux.svg";
import mongodb from "./Images/svgs/mongodb.svg";
import github from "./Images/svgs/github.svg";
import reactrouter from "./Images/svgs/reactrouter.png";

import clock from "./Images/pngs/clock.png";
import sudoku from "./Images/pngs/sudoku.png";
import unbounce from "./Images/pngs/unbounce.png";
import travel from "./Images/pngs/travel.png";
import policybazaar from "./Images/pngs/policybazaar.png";

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";

export const skillArray = [
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "Javascript", image: javascript },
  { title: "Github", image: github },
  { title: "React", image: react },
  { title: "Redux", image: redux },
  { title: "MongoDB", image: mongodb },
  { title: "React Router", image: reactrouter },
];

export const projectArray = [
  {
    image: unbounce,
    title: "Unbounce Clone",
    description: "An online landing page building website.",
    codeLink: "https://github.com/nehachatse/sulphur",
    demoLink: "https://prashant-sharma-tws.github.io/sulphur",
    techStack: ["HTML", "CSS", "JavaScript"],
    type: "A collaborative project built with 2 other developers",
    features: [
      "Signup and Login.",
      "A user can add a product to cart or to wishlist.",
      "A user can sort and filter.",
      "A user can order by filling in the required details",
      "Orders history can be viewer in profile page",
    ],
  },
  {
    image: travel,
    title: "Travel Clone",
    description: "An online travel package booking website.",
    demoLink: "https://prashant-sharma-tws.github.io/travel",
    codeLink: "https://github.com/ansari-saif/Travel",
    techStack: ["HTML", "CSS", "JavaScript"],
    type: "A collaborative project built with 3 other developers",
    features: [
      "Signup and Login.",
      "Users who are seeking help or who can provide help can post about the same",
      "Users can also read through the map and provide help or seek help depending upon location",
      "Allows users to have records of all the provided and seeked helps by giving them badges",
      "Lets users have discussion below a post",
      "Lets users contact each other without any middle man",
    ],
    responsibilities: [],
  },
  {
    image: clock,
    title: "Analog Clock",
    description: "A clock for getting info of time.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://prashant-sharma-tws.github.io/analog-clock",
    codeLink: "https://github.com/Prashant-Sharma-TWS/Analog-Clock",
    type: "A solo project.",
    features: [
      "Login and Signup",
      "A user can choose a location from where he wants to choose a bike",
      "User can choose the date and time for pickup and drop along with the choice of his/her bike",
      "A user can choose between monthly and daily rental plans",
      "A user can pay through card",
      "All the order history is recorded in user profile",
    ],
    responsibilities: [],
  },

  {
    image: sudoku,
    title: "Sudoku",
    description:
      "A sudoku challenge for users, where they can solve and get them solved.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://prashant-sharma-tws.github.io/sudoku/",
    codeLink: "https://github.com/Prashant-Sharma-TWS/sudoku",
    type: "A solo project.",
    features: [
      "User can solve a puzzle",
      "User can submit a puzzle and solve",
      "User can get solution for a puzzle using auto-solve",
    ],
  },
  {
    image: policybazaar,
    title: "Policybazaar Clone",
    description: "An online mutli insurance company provider.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "React Router DOM",
      "Styled Components",
      "Bootstrap",
    ],
    demoLink: "https://prashant-sharma-tws.github.io/policybazaar/",
    codeLink: "https://github.com/Prashant-Sharma-TWS/policybazaar",
    type: "A collaborative project built by a team of 4 under 4 days.",
    features: [
      "Research products and post products.",
      "Research jobs and post jobs.",
      "Raise a discussion and comment under it.",
      "Book an appointment with your favourite product mentor.",
    ],
    responsibilities: [],
  },
];

export const contactArray = [
  {
    title: "ps142500@gmail.com",
    link: "mailto:ps142500@gmail.com",
    icon: <MdEmail size="30px" />,
    iconClass: "email",
  },
  {
    title: "7987343655",
    link: "tel:7987343655",
    icon: <BsFillTelephoneFill size="30px" />,
    iconClass: "telephone",
  },
  {
    title: "linkedin.com/in/prashant-kumar-sharma-/",
    link: "https://www.linkedin.com/in/prashant-kumar-sharma-/",
    icon: <BsLinkedin size="30px" />,
    iconClass: "linkedin",
  },
  {
    title: "github.com/Prashant-Sharma-TWS/",
    link: "https://github.com/Prashant-Sharma-TWS/",
    icon: <BsGithub size="30px" />,
    iconClass: "github",
  },
];
