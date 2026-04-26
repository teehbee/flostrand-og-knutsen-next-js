// Text boxes in array with Icon placed on left side

import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/react";

export interface TextBoxWithPageNameProps {
  title?: string;
  textContent?: PortableTextBlock[];
}

export const TextBoxWithBorderAndPageNameLarge: React.FC<TextBoxWithPageNameProps> = (content) => {
  const { title, textContent } = content;

  return (
    <section>
      <div className="container-wide">
        <div className="border-top pt-15">
          <span className="accent-color"> {"< >"} </span>
          {title ?? "Test"}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 pt-30 fs-1-5-rem-lg-2-25rem">
              <PortableText value={textContent ?? []} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
