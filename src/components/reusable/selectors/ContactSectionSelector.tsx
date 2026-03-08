// Button section for displaying sections on a page, for example switching between about me and contact form. Not array.

import { useState, useRef } from "react";
import { SectionSelectorProps } from "@/data/interface";

export const ContactSectionSelector: React.FC<SectionSelectorProps> = (content) => {
  const { omMeg, kontaktSkjema, onButtonClick } = content;

  // State for storing active section
  const [activeSection, setActiveSection] = useState<string>("ContactSelectorContactForm");

  const sectionRef = useRef<HTMLElement | null>(null);

  // Function for setting active section

  const handleClick = (buttonId: string) => {
    setActiveSection(buttonId);
    onButtonClick(buttonId);

    // Scroll to active section, reset offset due to sticky header

    if (sectionRef.current) {
      const offset = 0;
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="m-15 m-lg-30" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <a
              id="ContactSelectorContactForm"
              className={`btn btn-selector mr-15 ${activeSection === "ContactSelectorContactForm" ? "btn-selector-active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick("ContactSelectorContactForm");
              }}
            >
              {kontaktSkjema ?? "Kontaktskjema"}
            </a>
            <a
              id="ContactSelectorAboutMe"
              className={`btn btn-selector ${activeSection === "ContactSelectorAboutMe" ? "btn-selector-active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick("ContactSelectorAboutMe");
              }}
            >
              {omMeg ?? "Om meg"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
