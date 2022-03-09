import React from "react";
import { FooterSection } from "../Elements/elements";

export const Footer = () => {
  const date = new Date();

  return (
    <FooterSection>
      <div>
        <span>&copy; {date.getFullYear()} All rights reserved.</span>
      </div>
    </FooterSection>
  );
};
