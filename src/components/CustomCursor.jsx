"use client";

import { useSpring } from "motion/react";
import { motion } from "motion/react";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { mouseX, mouseY } = useCursor();

  const springConfig = { damping: 200, stiffness: 2000, mass: 1 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-9999 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-white/70"
        style={{ left: ringX, top: ringY }}
      />
      <motion.div
        className="pointer-events-none fixed z-9999 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white"
        style={{ left: mouseX, top: mouseY }}
      />
    </>
  );
}
