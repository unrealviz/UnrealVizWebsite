"use client";

import { createContext, useContext, useEffect } from "react";
import { useMotionValue } from "motion/react";

const CursorContext = createContext(null);

export function CursorProvider({ children }) {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <CursorContext.Provider value={{ mouseX, mouseY }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be inside CursorProvider");
  return ctx;
}
