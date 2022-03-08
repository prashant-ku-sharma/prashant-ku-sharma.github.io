import React from "react";
import { FooterSection } from "../Elements/elements";

export const Footer = () => {
  const date = new Date();

  return (
    <FooterSection>
      <div>
        <span>&copy; {date.getFullYear()} All rights reserved.</span>
        {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/therealdrtroll/akshay-kadam-portfolio-two"
          >
            <button>Source Code</button>
          </a> */}
      </div>
    </FooterSection>
  );
};
