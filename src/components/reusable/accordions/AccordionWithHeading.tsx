"use client";

import { PortableText } from "@portabletext/react";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AccordionWithTitleProps } from "@/data/interface";

export const AccordionWithHeading: React.FC<AccordionWithTitleProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Refs for each content box in accordion
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Toggle function
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Helper function for setting ref with index
  const setRef = (el: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = el;
  };

  return (
    <section className="m-15 m-lg-30 p-0">
      <div className="container">
        <div className="row">
          <div className="col-5 col-lg-3">
            <h2 className="mb-30 mb-lg-50 fs-2-rem-lg-3rem">{content.sectionTitle}</h2>
          </div>
          <div className="col-12 col-lg-8 accordion-with-title-accordion-wrapper">
            {content.accordions.map((accordion, index) => {
              const isOpen = openIndex === index;
              const contentEl = contentRefs.current[index];
              return (
                <div key={index} className={`accordion-with-title-accordion-instance mb-15 mb-lg-30 ${isOpen ? "accordion-with-title-chevron-open" : ""}`}>
                  <div onClick={() => toggleAccordion(index)} className="d-flex justify-content-between border-bottom mb-15 accordion-with-title-header cursor-pointer">
                    <h3 className="dark-font fs-1-rem-lg-1-5rem accordion-with-title-accordion-heading">{accordion.title}</h3>
                    <div className="accordion-with-title-chevron">
                      <FaChevronDown className={`accordion-with-title-chevron-icon ${isOpen ? "accordion-with-title-chevron-open" : ""}`} />
                    </div>
                  </div>

                  <div
                    ref={(el) => setRef(el, index)}
                    className="accordion-with-title-accordion-text-content"
                    // Setting dynamic max height of content box
                    style={{
                      maxHeight: isOpen ? `${contentEl?.scrollHeight}px` : "0px",
                    }}
                  >
                    <div className="accordion-inner">
                      <PortableText value={accordion.textContent} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
