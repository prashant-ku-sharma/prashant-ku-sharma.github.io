import React from "react";
import { ContactSection, SubHeading } from "../Elements/elements";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { contactArray } from "../data";

export const Contact = () => {
  return (
    <ContactSection id="contact">
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
                <MdEmail size="30px" />
              </span>
              <span>ps142500@gmail.com</span>
            </a>
          </li>
          <li key="7987343655">
            <a target="_blank" rel="noreferrer" href="tel:7987343655">
              <span className="email">
                <BsFillTelephoneFill size="30px" />
              </span>
              <span>7987343655</span>
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
