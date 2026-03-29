"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { TiInfoLarge } from "react-icons/ti";
import useDisplayStore from "@/store/useDisplayStore";

const Section3 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // setup isDesktop from zustand
  const isDesktop = useDisplayStore((state) => state.isDesktop);
  useEffect(() => {
    useDisplayStore.getState().initialize();
  }, []);

  const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <motion.section
      ref={containerRef}
      id="projects"
      className={`${
        isDesktop ? "h-[200vh]" : "py-20 flex flex-col justify-center"
      } first:flex first:flex-col first:items-center`}
    >
      {/* Section Title */}
      <SectionTitle isDesktop={isDesktop} />

      {isDesktop ? (
        /* Desktop Horizontal Scroll */
        <motion.div
          className="h-screen sticky top-0 overflow-hidden"
          style={{
            background:
              "linear-gradient(185deg, rgb(44, 0, 87), rgb(12, 0, 22))",
          }}
        >
          <motion.div
            style={{ x: horizontalX }}
            className="flex flex-row gap-5 p-[25vw] pl-[35vw] items-center h-full w-[125vw]"
          >
            <BallbudsSlide isDesktop={isDesktop} />
          </motion.div>
        </motion.div>
      ) : (
        /* Mobile Normal Layout */
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center w-full">
          <BallbudsSlide isDesktop={isDesktop} />
        </div>
      )}
    </motion.section>
  );
};

export default Section3;

const SectionTitle = ({ isDesktop }) => {
  return (
    <motion.div
      style={{
        background:
          "linear-gradient(205deg, #21003169, #2e004536, #0000005e, #0000005e)",
      }}
      className={`relative w-full ${isDesktop ? "h-[45vh]" : "h-auto py-12"} flex justify-center items-center overflow-hidden shadow-lg`}
    >
      <div className="absolute inset-0 backdrop-blur-lg" />
      <div
        className={`flex flex-col ${isDesktop ? "gap-8" : "gap-2"} items-center text-gray-100/90`}
      >
        <h1 className="relative z-10 font-bold text-[clamp(2.5rem,7vw,8rem)] text-center">
          Our Works
        </h1>
        <p className="text-[clamp(0.7rem,1.2vw,2rem)] font-semibold z-10">
          Where ideas become visual experiences.
        </p>
      </div>
    </motion.div>
  );
};

const BallbudsSlide = ({ isDesktop }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showOverlayIfMobile, setshowOverlayIfMobile] = useState(false);

  const handleSetOverlayIfMobile = useCallback(
    async (state) => {
      setshowOverlayIfMobile(state);
    },
    [setshowOverlayIfMobile],
  );

  useEffect(() => {
    if (!isDesktop) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleSetOverlayIfMobile(true);
    } else {
      handleSetOverlayIfMobile(false);
    }
  }, [isDesktop, handleSetOverlayIfMobile]);

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${isDesktop ? "w-[60vw]" : "w-[95%]"} shrink-0`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => window.open("/projects/ballbuds", "_blank")}
    >
      {/* Overlay */}
      <motion.div className="absolute inset-0 flex justify-center items-center z-10">
        {/* Info Button */}
        <motion.div>
          <button
            className={`absolute ${isDesktop ? "right-10 top-10" : "right-2 top-2"} p-2 font-semibold backdrop-brightness-35 rounded-sm flex flex-row justify-center items-center cursor-pointer z-20 shadow-2xl`}
            onClick={() => window.open("/projects/ballbuds", "_blank")}
          >
            <TiInfoLarge className="w-8 h-8" />
            <span>Open Project</span>
          </button>
        </motion.div>
        {/* Bg color */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          style={{
            background:
              "linear-gradient(180deg, rgb(255 255 255 / 0%), rgb(47 47 47 / 100%))",
          }}
          animate={{ opacity: isHovered || showOverlayIfMobile ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
        {/* title */}
        <motion.h1
          className="text-[clamp(4rem,8vw,8rem)] text-white font-bold absolute"
          initial={{ y: "100%" }}
          animate={{
            y: isHovered || showOverlayIfMobile ? "0%" : "30%",
            opacity: isHovered || showOverlayIfMobile ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            className="w-[60vw] md:w-[30vw]"
            src={"/assets/projects/ballbuds/LogoTyped.webp"}
            height={600}
            width={600}
            alt="BallBuds Logo"
          />
        </motion.h1>
        {/* paragraph */}
        <motion.p
          className="text-[clamp(1.25rem,1vw,2rem)] p-5 pb-2 text-white absolute font-semibold text-center"
          initial={{ bottom: "0%" }}
          animate={{
            bottom: isHovered || showOverlayIfMobile ? "10%" : "0%",
            opacity: isHovered || showOverlayIfMobile ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          A monster tamer RPG game with humor, depth, and choice, plus FPS
          action that slaps harder than Will Smith
        </motion.p>
      </motion.div>

      {/* Image */}
      <Image
        loading="lazy"
        className="h-[70vh] object-cover rounded-2xl  hover-3d"
        height={1080}
        width={1920}
        src={"/assets/blauballs_RENDER.webp"}
        alt="BallBuds"
      />
    </motion.div>
  );
};
