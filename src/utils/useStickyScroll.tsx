"use-client";

import { useEffect, useState } from "react";

export function useStickyScroll(enabled: boolean = true, elementRef?: React.RefObject<HTMLElement | null>) {
  const [isSticky, setIsSticky] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    if (!elementRef?.current) return;

    // Handle spacer when scrolling if sticky header is used

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeSticky = scrollY > 0;

      if (elementRef?.current) {
        const height = elementRef.current.getBoundingClientRect().height;
        setSpacerHeight(height);
      }

      setIsSticky(shouldBeSticky);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // ResizeObserver for changing height of spacer dynamically if header size changes
    const resizeObserver = new ResizeObserver(() => {
      if (isSticky && elementRef.current) {
        const height = elementRef.current.getBoundingClientRect().height;
        setSpacerHeight(height);
      }
    });

    resizeObserver.observe(elementRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [enabled, elementRef, isSticky]);

  return { isSticky, spacerHeight };
}
