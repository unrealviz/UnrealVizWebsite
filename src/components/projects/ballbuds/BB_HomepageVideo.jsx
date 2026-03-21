"use client";
import { motion } from "motion/react";

const BB_HomepageVideo = ({ videoUrl, videoType, isDesktop }) => {
  return (
    <>
      {videoUrl && (
        <motion.video
          loop
          muted
          autoPlay
          playsInline
          className="relative h-full w-full object-cover"
        >
          <source src={videoUrl} type={videoType} />
        </motion.video>
      )}
    </>
  );
};

export default BB_HomepageVideo;
