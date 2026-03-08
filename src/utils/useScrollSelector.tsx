// Hook which sets index and scrolls to button/trigger when activated

import { useState, useRef } from "react";

export function useScrollSelector<T>() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const linkRefs = useRef<(T | null)[]>([]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);

    const el = linkRefs.current[index] as HTMLElement | null;
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return {
    setSelectedIndex,
    selectedIndex,
    handleClick,
    linkRefs,
  };
}
