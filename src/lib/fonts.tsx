// Import of google fonts > import into layout.tsx

import { Playfair_Display, Jost } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export function getFontClasses() {
  return `${playfairDisplay.variable} ${jost.variable}`;
}
