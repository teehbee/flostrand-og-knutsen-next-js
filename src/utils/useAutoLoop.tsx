import { useEffect } from "react";

// Sets interval for autolooping, here used on the reviews

// Should run is used for pausing autoloop on hover

export function useAutoLoop(callback: () => void, delay: number, shouldRun = true) {
  useEffect(() => {
    if (!shouldRun) return;
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay, shouldRun]);
}
