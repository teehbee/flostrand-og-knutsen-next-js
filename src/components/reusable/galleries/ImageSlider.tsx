"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

export interface ImageSliderItem {
  _key: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
}

export interface ImageSliderProps {
  images: ImageSliderItem[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const openLightBox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  // Keyboard controls

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, next, prev]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", lightboxOpen);
  }, [lightboxOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  if (!images || images.length === 0) return null;

  const activeImage = images[activeIndex];

  return (
    <section className="pb-45 pb-lg-90">
      {/* Gallery slider */}

      <div className="container-wide">
        <div className="pb-15 pb-lg-30">
          <h1>Bildegalleri</h1>
        </div>

        <div className="image-slider">
          <div className="image-slider-track d-flex">
            {/* Array of thumbnails */}

            {images.map((img, i) => (
              <button key={img._key} type="button" onClick={() => openLightBox(i)} className="image-slider-item pos-relative p-0">
                <Image src={img.imageUrl} alt={img.imageAlt} width={500} height={650} className="img-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}

      {lightboxOpen && (
        <div className="image-lightbox" onClick={() => setLightboxOpen(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {/* Closebutton */}

          <button
            className="image-lightbox-close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            <span className="bar bar1" />
            <span className="bar bar2" />
          </button>

          {/* Prev button */}

          <button
            className="image-lightbox-nav image-lightbox-prev"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <span className="bar bar1" />
            <span className="bar bar2" />
          </button>

          {/* Image */}

          <div className="image-lightbox-content text-center" onClick={(e) => e.stopPropagation()}>
            <Image key={activeImage.imageUrl} src={activeImage.imageUrl} alt={activeImage.imageAlt} width={1600} height={1000} className="image-lightbox-image" />

            {/* Image caption if present */}

            {activeImage.caption && <p className="image-lightbox-caption">{activeImage.caption}</p>}
          </div>

          {/* Next button */}

          <button
            className="image-lightbox-nav image-lightbox-next"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <span className="bar bar1" />
            <span className="bar bar2" />
          </button>
        </div>
      )}
    </section>
  );
};
