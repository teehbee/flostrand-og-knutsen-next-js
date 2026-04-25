"use client";

import Image from "next/image";
import { useState } from "react";

export interface ImageSliderItem {
  _key: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ImageSliderProps {
  images: ImageSliderItem[];
}

export const ImageSlider: React.FC = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images?.length) return null;

  const activeImage = images[activeIndex];

  return <section>Galleri</section>;
};
