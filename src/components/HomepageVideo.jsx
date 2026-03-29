"use client";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import useVideoControlStore from "@/store/useVideoControlStore";

const HomepageVideo = ({ videoUrl, videoType }) => {
  const videoRef = useRef(null);
  const { isPaused, isMuted, experienceStarted, setIsMuted, setVideoState } =
    useVideoControlStore();

  // initial  mount
  useEffect(() => {
    setVideoState(false, false);
  }, [setVideoState]);

  useEffect(() => {
    const video = videoRef.current;
    if ((!video, !experienceStarted)) return;
    // set volume
    video.volume = 0.2;

    // Play/Pause
    if (isPaused) {
      video.pause();
    } else {
      video.play().catch(() => {
        setVideoState(video.paused, video.muted);
      });
    }
    // Mute / Unmute
    if (!isMuted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }, [isPaused, isMuted, experienceStarted, setIsMuted, setVideoState]);

  return (
    <>
      {videoUrl && (
        <motion.video
          loop
          muted
          playsInline
          ref={videoRef}
          className="relative h-full w-full object-cover"
        >
          <source src={videoUrl} type={videoType} />
        </motion.video>
      )}
    </>
  );
};

export default HomepageVideo;
