"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { IoChevronBackOutline } from "react-icons/io5"; // Arrow icon
import HomepageVideoController from "@/components/HomepageVideoController";

export default function FoldableController() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed z-999 h-[6.5vh] md:h-[8vh] bottom-5 md:bottom-[10vh] right-0 flex items-center">
      {/* THE TOGGLE ARROW */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/60 backdrop-blur-md p-1 h-full text-white hover:bg-pink-600 transition-colors"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoChevronBackOutline size="1.5rem" />
        </motion.div>
      </button>

      {/* THE FOLDABLE CONTENT */}
      <motion.div
        initial={true}
        animate={{
          width: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="overflow-hidden h-full flex bg-black/40 backdrop-blur-sm"
      >
        <div className="p-[clamp(0.8rem,1vw,1.2rem)] flex flex-row justify-center gap-4 text-white">
          <HomepageVideoController />
        </div>
      </motion.div>
    </div>
  );
}
