"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when parallax/scroll-linked motion should be suppressed:
 * on mobile viewports (< 768px) or when the user prefers reduced motion.
 */
export function useReducedParallax(): boolean {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mm = window.matchMedia(
      "(max-width: 767px), (prefers-reduced-motion: reduce)"
    );
    const update = () => setReduce(mm.matches);
    update();
    mm.addEventListener("change", update);
    return () => mm.removeEventListener("change", update);
  }, []);

  return reduce;
}
