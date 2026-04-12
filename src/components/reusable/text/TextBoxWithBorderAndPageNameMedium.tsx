// Text boxes in array with Icon placed on left side

import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/react";

export interface TextBoxWithPageNameProps {
  title?: string;
  textContent?: PortableTextBlock[];
}

export const TextBoxWithBorderAndPageNameMedium: React.FC<TextBoxWithPageNameProps> = (content) => {
  const { title, textContent } = content;

  return (
    <section>
      <div className="container-wide border-top pt-15">
        <div>
          <span className="accent-color"> {"< >"} </span>
          {title ?? "Test"}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 pt-30 fs-1-5-rem-lg-2rem">
              <PortableText value={textContent ?? []} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
