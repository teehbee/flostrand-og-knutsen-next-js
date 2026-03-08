import { PortableTextBlock } from "@portabletext/react";

interface Instances {
  title: string;
  textContent: PortableTextBlock[];
}

export interface AccordionWithTitleProps {
  content: {
    sectionTitle: string;
    accordions: Instances[];
  };
}
