import React from "react";
import { ContactSection, SubHeading } from "../Elements/elements";
import { contactArray } from "../data";

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <SubHeading>Get in Touch</SubHeading>
      <div>
        <div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3771561.519836441!2d79.77821647937138!3d22.610292436839696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1646713055859!5m2!1sen!2sin"
            width="400"
            height="250"
            title="India"
            style={{ border: "none" }}
            allowFullScreen
            loading="lazy"
          ></iframe> */}
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </ContactSection>
  );
};

const ContactList = () => {
  return (
    <ul className="contact-list">
      {contactArray.map((contact) => (
        <li key={contact.title}>
          <a target="_blank" rel="noreferrer" href={contact.link}>
            <span className={contact.iconClass}>{contact.icon}</span>
            <span>{contact.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
