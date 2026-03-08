import { PortableTextBlock } from "@portabletext/react";

interface Textbox {
  textBoxTitle: string;
  textBoxContent: PortableTextBlock[];
}

interface Instance {
  tittel: string;
  tekstinnhold: PortableTextBlock[];
  lenketekst: string;
  lenkedestinasjon?: string;
  textboxes: Textbox[];
}

export interface SelectorWithButtonsAndTextboxesProps {
  content: {
    instances: Instance[];
  };
}
