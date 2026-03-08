// Text boxes in array with Icon placed on left side

import { PortableText } from "@portabletext/react";
import { CheckedIconWithBorder } from "@/assets/icon";
import { TextBoxArrayProps } from "@/data/interface";

export const TextBoxesWithIcon: React.FC<TextBoxArrayProps> = ({ content }) => {
  return (
    <section className="m-15 m-lg-30">
      <div className="container">
        <div className="row">
          <div className="col-9 col-sm-7 col-lg-4 mb-30 mb-lg-75">
            <h2 className="fs-2-rem-lg-3rem ">{content.seksjonsTittel}</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          {content.bokser.map((boks, index) => (
            <div key={index} className="col-12 col-lg-4 p-15 d-flex">
              <div className="text-box-with-icon-wrapper alt-bg-color pos-relative">
                <h3>{boks.tittel}</h3>
                <div>
                  <PortableText value={boks.tekstinnhold} />
                </div>
                <div className="text-box-with-icon-wrapper-icon-wrapper alt-bg-color pos-absolute border-radius-full d-inline-block">
                  <CheckedIconWithBorder />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
