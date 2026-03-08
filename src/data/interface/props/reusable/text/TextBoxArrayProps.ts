import { PortableTextBlock } from "@portabletext/react";

interface Boxes {
  tittel: string;
  tekstinnhold: PortableTextBlock[];
}

export interface TextBoxArrayProps {
  content: {
    seksjonsTittel: string;
    bokser: Boxes[];
  };
}
