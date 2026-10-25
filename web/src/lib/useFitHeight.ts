import { useEffect, useRef, useState } from "react";

/**
 * Height that makes an element reach exactly the bottom of the screen from
 * where it starts (re-measured on resize and when the header changes size),
 * so full-screen tools keep their bottom controls visible without scrolling.
 */
export function useFitHeight<T extends HTMLElement>(min = 420, gap = 6) {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    const fit = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setHeight(Math.max(min, window.innerHeight - top - gap));
    };
    fit();
    window.addEventListener("resize", fit);
    const header = document.querySelector("header");
    const ro = header && typeof ResizeObserver !== "undefined" ? new ResizeObserver(fit) : null;
    if (header && ro) ro.observe(header);
    return () => {
      window.removeEventListener("resize", fit);
      ro?.disconnect();
    };
  }, [min, gap]);
  return { ref, height };
}
