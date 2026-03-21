"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisKeyboardScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleKeyDown = (e) => {
      const scrollAmount = 150;

      switch (e.key) {
        case "ArrowUp":
          lenis.scrollTo(lenis.scroll - scrollAmount, { immediate: false });
          break;
        case "ArrowDown":
          lenis.scrollTo(lenis.scroll + scrollAmount, { immediate: false });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      lenis.destroy();
    };
  }, []);

  return null;
}
