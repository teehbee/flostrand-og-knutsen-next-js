export interface SectionSelectorProps {
  omMeg?: string;
  kontaktSkjema?: string;
  // Callback for sending id of chosen section to parent component
  onButtonClick: (buttonId: string) => void;
}
