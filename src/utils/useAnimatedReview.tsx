// Function for changing and animating content, for example reviews

import { useState } from "react";

export const useAnimatedReview = (initialIndex = 0, duration = 200) => {
  const [current, setCurrent] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeReview = (newIndex: number) => {
    if (newIndex === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(newIndex);
      setIsAnimating(false);
    }, duration);
  };

  return {
    current,
    isAnimating,
    changeReview,
    setCurrentDirectly: setCurrent,
  };
};
