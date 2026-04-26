"use client";

import Image from "next/image";
import { useImageLightbox } from "@/utils";

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
  const { activeIndex, lightboxOpen, direction, next, prev, openLightbox, closeLightbox, handleTouchStart, handleTouchEnd } = useImageLightbox(images.length);

  if (!images || images.length === 0) return null;

  const activeImage = images[activeIndex];

  return (
    <section className="pb-45 pb-lg-90">
      <div className="container-wide">
        <div className="image-slider">
          <div className="image-slider-track d-flex">
            {images.map((img, i) => (
              <button key={img._key} type="button" onClick={() => openLightbox(i)} className="image-slider-item pos-relative p-0">
                <Image src={img.imageUrl} alt={img.imageAlt} width={500} height={650} className="img-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="image-lightbox" onClick={closeLightbox} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <button
            className="image-lightbox-close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <span className="bar bar1" />
            <span className="bar bar2" />
          </button>

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

          <div className="image-lightbox-content text-center" onClick={(e) => e.stopPropagation()}>
            <Image key={activeImage.imageUrl} src={activeImage.imageUrl} alt={activeImage.imageAlt} width={1600} height={1000} className={`image-lightbox-image is-${direction}`} />

            {activeImage.caption && <p className="image-lightbox-caption">{activeImage.caption}</p>}
          </div>

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
