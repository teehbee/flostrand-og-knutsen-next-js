import { NotFoundContent } from "./notFoundContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Siden finnes ikke",
  description: "Beklager, vi fant ikke siden du lette etter.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
