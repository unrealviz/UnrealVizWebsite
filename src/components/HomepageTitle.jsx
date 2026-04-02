"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const HomepageTitle = () => {
  const sectionTitleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionTitleRef,
    offset: ["start end", "end end"],
  });
  const sectionTitle_x = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  return (
    <motion.div
      ref={sectionTitleRef}
      style={
        {
          // x: sectionTitle_x,
        }
      }
      className="static h-dvh w-full z-50"
    >
      <div className="relative h-full w-full"></div>
      <motion.div className="text-box absolute left-0 bottom-0 md:bottom-[10vh] h-max md:left-10 md:rounded-2xl w-full md:w-[min(38vw,600px)] flex flex-col justify-end md:justify-center pb-[5vh] md:pb-0 items-start text-justify underline-offset-[0.4vh] z-20 backdrop-blur-xs md:backdrop-blur-md">
        <h1
          style={{ textShadow: "0 0 20px rgba(255, 255, 255, .5)" }}
          className="font-bold text-[clamp(4rem,8vw,7.5rem)] text-start p-5 overflow-hidden"
        >
          Unreal Viz<span className="text-pink-600 font-extrabold">.</span>
        </h1>
        <p className="text-[clamp(0.8rem,1.2vw,1.25rem)] w-full p-5 leading-relaxed font-semibold opacity-90">
          Unreal Viz is a creative powerhouse specializing in high-fidelity{" "}
          <span className="underline decoration-2 decoration-pink-600">
            3D modeling
          </span>
          , immersive{" "}
          <span className="underline decoration-2 decoration-pink-600">
            game development
          </span>
          , and{" "}
          <span className="underline decoration-2 decoration-pink-600">
            cinematic animation
          </span>
          . We bridge the gap between imagination and reality, leveraging
          cutting-edge technology to build interactive experiences that
          captivate and inspire.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HomepageTitle;
