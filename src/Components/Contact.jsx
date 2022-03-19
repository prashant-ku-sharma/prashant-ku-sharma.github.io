import React from "react";
import { ContactSection, SubHeading } from "../Elements/elements";
import email from "../Images/icons/email.png";
import telephone from "../Images/icons/telephone.png";
import location from "../Images/icons/location.png";
import { contactArray } from "../data";

export const Contact = ({ currTheme }) => {
  return (
    <ContactSection id="contact" currTheme={currTheme}>
      <SubHeading>Get in Touch</SubHeading>
      <div>
        <ul className="contact-list">
          <li key="ps142500@gmail.com">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ps142500@gmail.com"
            >
              <span className="email">
                <img src={email} alt="email" width="30px" />
              </span>
              <span>ps142500@gmail.com</span>
            </a>
          </li>
          <li key="7987343655">
            <a target="_blank" rel="noreferrer" href="tel:7987343655">
              <span className="email">
                <img src={telephone} alt="telephone" width="30px" />
              </span>
              <span>7987343655</span>
            </a>
          </li>
          <li key="jabalpur">
            <a target="_blank" rel="noreferrer" href="map">
              <span className="location">
                <img src={location} alt="location" width="30px" />
              </span>
              <span>Jabalpur, India</span>
            </a>
          </li>
        </ul>
        <ul className="social-list">
          {contactArray.map((contact) => (
            <ContactListItem key={contact.title} contact={contact} />
          ))}
        </ul>
      </div>
    </ContactSection>
  );
};

const ContactListItem = ({ contact }) => {
  return (
    <li>
      <a
        title={contact.title}
        target="_blank"
        rel="noreferrer"
        href={contact.link}
      >
        <span className={contact.iconClass}>{contact.icon}</span>
      </a>
    </li>
  );
};
