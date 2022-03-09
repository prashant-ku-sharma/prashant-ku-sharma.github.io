import styled from "styled-components";

export const theme = {
  light: {
    background: "#222",
    color: "#eee",
    profileBg: "#f8f5f1",
  },
  dark: {
    background: "#222",
    color: "#eee",
    profileBg: "#151515",
  },
};

export const SubHeading = styled.h2`
  font-size: 40px;
  letter-spacing: 4px;
  padding-bottom: 30px;
  color: ${theme.light.color};

  ::after {
    content: "";
    width: 80px;
    height: 2px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 5px;
    background-color: orange;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #1a1a1a;
  transition: all 2s ease-in-out;

  > div {
    width: 85%;
    margin: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: ${theme.dark.color};

      span {
        width: 35px;
        height: 35px;
        margin-right: 8px;
        display: inline-block;
        font-size: 28px;
        font-weight: 800;
        line-height: 38px;
        text-align: center;
        color: #fff;
        background-color: #007ced;
        border-radius: 100px;
      }
    }

    > ul {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          color: ${theme.dark.color};
        }
      }
    }
  }

  .toggle {
    .switch {
      position: relative;
      display: inline-block;
      width: 30px;
      height: 17px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #777;
        transition: 0.4s;
      }
      .slider::before {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        background-color: orange;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      input:checked + .slider {
        background-color: #2196f3;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      input:checked + .slider::before {
        transform: translateX(14px);
      }
      .slider.round {
        border-radius: 10px;
      }
      .slider.round::before {
        border-radius: 50%;
      }
    }
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 770px) {
    > div {
      position: relative;

      > ul {
        display: none;
        top: -1000px;
      }

      .hamburger {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: end;
        padding: 8px 7px;
        background: #444;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(141, 146, 155, 0.16);
        cursor: pointer;
        > span {
          display: block;
          height: 2px;
          background-color: #eee;
        }
        > span:nth-child(1) {
          width: 20px;
        }
        > span:nth-child(2) {
          width: 15px;
        }
        > span:nth-child(3) {
          width: 20px;
        }
      }

      .show-anime span:nth-child(1) {
        transform: rotate(45deg);
        transition: 0.3s;
        top: 38%;
        position: relative;
      }
      .show-anime span:nth-child(2) {
        transform: scale(0);
        transition: 0.3s;
      }
      .show-anime span:nth-child(3) {
        transform: rotate(-45deg);
        transition: 0.3s;
        top: -30%;
        position: relative;
      }
      .show-anime + ul {
        width: 100%;
        height: 50%;
        z-index: 90;
        position: fixed;
        top: 60px;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin: 0;
        padding-top: 30px;
        padding-left: 7.5%;
        background-color: #1a1a1a;
        scroll-behaviour: smooth;
        transition: all 0.8s ease-in-out;

        li {
          margin: 20px 0;
        }
      }
    }
  }
`;

export const ViewportSection = styled.section`
  width: 100%;
  height: 85%;
  padding: 50px 0;
  background-color: ${theme.dark.background};

  > div {
    width: 85%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .author-description {
      width: 50%;
      text-align: left;

      h1 {
        font-size: 35px;
        margin: 0 0 10px;
        letter-spacing: 2px;
        color: ${theme.dark.color};
      }
      h3 {
        font-size: 15px;
        margin: 0 0 30px;
        letter-spacing: 2px;
        color: #207398;
      }
      p {
        letter-spacing: 2px;
        line-height: 2em;
        color: ${theme.dark.color};
      }
      .resume {
        margin-top: 30px;

        a {
          font-size: 1em;
          line-height: 1.2;
          padding: 0.8em 2.1em;
          color: #fff;
          background-color: #333;
          border: 2px solid #007ced;
          border-radius: 30px;
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;

          :hover {
            background-color: #007ced;
          }
        }
      }
    }
    .author-photo {
      width: 40%;

      img {
        width: 100%;
        border-radius: 50%;
        border: 10px solid #03203c;
      }
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      .author-description {
        h1 {
          font-size: 30px;
        }
        h3 {
          font-size: 15px;
        }
        p {
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1.6em;
        }
      }
      .author-photo {
        margin: 20px 0 0;
      }
    }
  }
  @media screen and (max-width: 635px) {
    padding-top: 30px;
    > div {
      flex-direction: column;

      .author-description {
        width: 100%;

        h1 {
          font-size: 26px;
        }
        h3 {
          text-align: center;
        }
      }
      .author-photo {
        margin: 0;
      }
    }
  }
`;

export const SkillSection = styled.section`
  width: 100%;
  padding: 50px 0;
  background-color: ${theme.dark.background};

  > h2:nth-of-type(2) {
    margin-top: 40px;
  }

  > div {
    width: 85%;
    margin: auto;
    text-align: center;

    > ul {
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 165px;
        margin: 20px 35px;
        padding: 10px 0;
        color: ${theme.dark.color};
        background-color: #333;
        border: 2px solid #444;
        border-radius: 15px;

        > img[alt="React Router"] {
          width: 100px;
          padding: 15px 0 25px;
        }
      }
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      > ul {
        li {
          width: 120px;
          margin: 10px 10px;
          padding: 10px 0;

          > img {
            width: 80px;
            padding: 0;
          }
          > img[alt="React Router"] {
            padding: 0 0 25px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    > div {
      > ul {
        li {
          width: 90px;
          font-size: 12px;
          letter-spacing: 1px;

          > img {
            width: 60px;
          }
          > img[alt="React Router"] {
            width: 60px;
            padding: 0 0 25px;
          }
        }
      }
    }
  }
`;

export const ProjectSection = styled.section`
  width: 100%;
  padding: 50px 0 0;
  background-color: ${theme.dark.background};

  > div {
    width: 85%;
    margin: auto;
    text-align: center;

    .project-card-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .project-card {
      width: 35%;
      margin: 20px 0;
      background-color: tranparent;
      text-align: left;
      // padding: 15px 25px;
      // background-color: #333;
      // border: 2px solid #444;
      // border-radius: 15px;

      > img {
        width: 100%;
        border-radius: 10px;
      }

      > img + div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          font-size: 1em;
          line-height: 1.2;
          padding: 0.5em 1em;
          border-radius: 15px;
          border: 2px solid #007ced;
          color: #fff;
          background-color: transparent;
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;
          cursor: pointer;

          :hover {
            background-color: rgb(0, 124, 237, 0.4);
          }
        }
      }

      .project-title {
        letter-spacing: 2px;
        margin: 10px 0;
        color: ${theme.dark.color};
      }

      .project-description {
        margin: 8px 0;
        color: ${theme.dark.color};
      }

      .btns {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          font-size: 1em;
          line-height: 1.2;
          padding: 0.8em 2.1em;
          border-radius: 30px;
          color: #fff;
          background-color: #333;
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;
        }

        .demo {
          border: 2px solid #007ced;
          :hover {
            background-color: #007ced;
          }
        }

        .code {
          border: 2px solid #d5d5d5;
          :hover {
            color: #222222;
            background-color: #d5d5d5;
          }
        }
      }
    }
  }

  .project-detail-section {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: rgb(0, 0, 0, 0.8);

    > div {
      width: 80%;
      height: 88%;
      margin: auto;
      padding: 20px 50px;
      position: relative;
      top: 10%;
      z-index: 1500;
      background-color: #03203c;

      .close-modal {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 30px;
        cursor: pointer;
        span {
          width: 2px;
          height: 34px;
          position: absolute;
          background-color: ${theme.dark.color};
        }
        span:nth-child(1) {
          transform: rotate(45deg);
        }
        span:nth-child(2) {
          transform: rotate(-45deg);
        }
      }

      > div:nth-of-type(2) {
        display: grid;
        grid-template-columns: 60% 38%;
        justify-content: space-between;
        text-align: left;

        .curr-title {
          font-size: 24px;
          color: ${theme.dark.color};
        }
        .curr-description {
          font-size: 18px;
          color: ${theme.dark.color};
        }
        .curr-image img {
          width: 100%;
          margin: 10px 0 10px;
        }
        .btns {
          width: 100%;
          margin: 30px 0 0;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            font-size: 1em;
            line-height: 1.2;
            margin: 0 20px;
            padding: 0.8em 2.1em;
            border-radius: 30px;
            color: #fff;
            background-color: #333;
            box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
            transition: all 0.3s ease-in-out;
          }

          .demo {
            border: 2px solid #007ced;
            :hover {
              background-color: #007ced;
            }
          }

          .code {
            border: 2px solid #d5d5d5;
            :hover {
              color: #222222;
              background-color: #d5d5d5;
            }
          }
        }
        .type {
          margin: 40px 0 10px;
          color: ${theme.dark.color};
        }
        .tech-stack {
          margin: 40px 0 10px;
          color: ${theme.dark.color};
          + ul {
            padding-left: 50px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            li {
              margin: 0 5px 0;
            }

            img {
              max-width: 80px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      .project-card {
        width: 100%;
        margin: 20px 0;

        > img {
          width: 100%;
          border-radius: 10px;
        }
        .project-title {
        }
        .project-description {
        }
        .btns {
          a {
            font-size: 0.8em;
          }
        }
      }
    }
  }
`;

export const ContactSection = styled.section`
  width: 100%;
  padding: 80px 0;
  text-align: center;
  background-color: ${theme.dark.background};

  > div {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin: 10px 0;

      a {
        color: ${theme.dark.color};
      }
      span:nth-of-type(2) {
        position: relative;
        top: -8px;
        font-size: 17px;
        margin-left: 8px;
      }
    }

    .contact-list {
      width: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
    .social-list {
      width: 300px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .email {
    }
    .telephone {
    }
    .linkedin {
    }
    .github {
    }
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  padding: 30px 0 50px;
  text-align: center;
  border-top: 2px solid #777;
  background-color: ${theme.dark.background};

  > div {
    width: 85%;
    margin: auto;
    color: ${theme.dark.color};
  }
`;