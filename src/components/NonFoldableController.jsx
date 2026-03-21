"use client";
import { motion } from "motion/react";
import BallbudsMusicController from "@/components/projects/ballbuds/BallbudsMusicController";

export default function NonFoldableController({ isDesktop }) {
  return (
    <div className="fixed z-999 h-[6.5vh] md:h-[8vh] bottom-5 md:bottom-[10vh] right-0 flex items-center">
      {/* CONTENT */}
      <motion.div className="overflow-hidden h-full flex bg-black/40 backdrop-blur-sm">
        <div className="p-[clamp(0.8rem,1vw,1.2rem)] flex flex-row justify-center gap-4 text-white">
          <BallbudsMusicController isDesktop={isDesktop} />
        </div>
      </motion.div>
    </div>
  );
}
