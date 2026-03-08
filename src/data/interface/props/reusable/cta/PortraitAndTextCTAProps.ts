export interface PortraitAndTextCTAProps {
  bilde: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  tekst?: string;
  lenketekst?: string;
  lenkedestinasjon?: string;
}
