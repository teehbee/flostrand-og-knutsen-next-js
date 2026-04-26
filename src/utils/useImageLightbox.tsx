import { useCallback, useEffect, useRef, useState } from "react";

export const useImageLightbox = (imageCount: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const touchStartX = useRef(0);

  const next = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const prev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  }, [imageCount]);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, next, prev, closeLightbox]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", lightboxOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [lightboxOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return {
    activeIndex,
    lightboxOpen,
    direction,
    next,
    prev,
    openLightbox,
    closeLightbox,
    handleTouchStart,
    handleTouchEnd,
  };
};
