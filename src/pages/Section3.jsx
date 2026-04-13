"use client";
import {
  frame,
  useSpring,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";
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

  // section width
  const horizontalX = useTransform(scrollYProgress, [0, 1], ["20%", "-130%"]);

  return (
    <motion.section
      ref={containerRef}
      id="projects"
      className={`${
        isDesktop ? "h-[300vh]" : "py-20 flex flex-col justify-center"
      } first:flex first:flex-col first:items-center`}
    >
      {/* Section Title */}
      <SectionTitle isDesktop={isDesktop} />

      {isDesktop ? (
        /* Desktop Horizontal Scroll */
        <motion.div className="h-screen sticky top-0 overflow-hidden">
          <motion.div
            style={{ x: horizontalX }}
            className="flex flex-row gap-5 p-[25vw] pl-[35vw] items-center h-full w-[125vw]"
          >
            {/* Project 1 */}
            <ProjectContainer>
              <BallbudsSlide isDesktop={isDesktop} />
              <ProjectPills
                accentColor="green"
                pills={["Archviz", "Unreal Engine"]}
              />
            </ProjectContainer>

            {/* Project 2 */}
            <ProjectContainer>
              <ProjectSlide contentSrc={"plane_optimized.webm"} />
              <ProjectPills
                accentColor="blue"
                pills={["Archviz", "Unreal Engine", "Archviz", "Unreal Engine"]}
              />
            </ProjectContainer>

            {/* Project 3 */}
            <ProjectContainer>
              <ProjectSlide contentSrc={"Ominus_optimized.webm"} />
              <ProjectPills
                accentColor="pink"
                pills={["Archviz", "Unreal Engine", "Archviz", "Unreal Engine"]}
              />
            </ProjectContainer>
            {/* Project 4 */}
            <ProjectContainer>
              <ProjectSlide contentSrc={"d3_optimized.webm"} />
              <ProjectPills
                accentColor="green"
                pills={["Archviz", "Unreal Engine", "Archviz", "Unreal Engine"]}
              />
            </ProjectContainer>
          </motion.div>
        </motion.div>
      ) : (
        /* Mobile Normal Layout */
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center w-full">
          <ProjectContainer>
            <BallbudsSlide isDesktop={isDesktop} />
          </ProjectContainer>
        </div>
      )}
    </motion.section>
  );
};

export default Section3;

// --- Section Title ---
const SectionTitle = ({ isDesktop }) => {
  const sectionTitleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionTitleRef,
    offset: ["start end", "end end"],
  });
  // [element, container]
  const sectionTitle_y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const getY = (transformValue) => (isDesktop ? transformValue : 0);

  return (
    <motion.div
      ref={sectionTitleRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      viewport={{ once: true }}
      style={{
        y: getY(sectionTitle_y),
        textShadow: "0 0 20px rgba(255, 255, 255, .4)",
      }}
      className={`text-obstacle m-auto inset-0 relative w-[96vw] ${isDesktop ? "h-[45vh]" : "h-auto py-12"} rounded-xl flex justify-center items-center overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 shadow-lg mt-8`}
    >
      <div
        className={`flex flex-col ${isDesktop ? "gap-8" : "gap-2"} items-center text-gray-100/90`}
      >
        <h1 className="relative z-10 font-bold text-[clamp(2.5rem,7vw,8rem)] text-center flex flex-row">
          <span className="">OUR WORKS</span>
        </h1>
        <p className="text-[clamp(0.7rem,1.2vw,2rem)] font-semibold z-10">
          Where ideas become visual experiences.
        </p>
      </div>
    </motion.div>
  );
};

const ProjectContainer = ({ children }) => {
  return (
    <div className="h-screen w-[50vw] flex flex-col justify-center shrink-0">
      {children}
    </div>
  );
};

const ProjectPills = ({ accentColor, pills }) => {
  const colorMap = {
    pink: "text-pink-200 bg-pink-900/40 border-pink-500/30",
    green: "text-green-200 bg-green-900/40 border-green-500/30",
    purple: "text-purple-200 bg-purple-900/40 border-purple-500/30",
    blue: "text-blue-200 bg-blue-900/40 border-blue-500/30",
  };
  const pillClass = `px-4 py-2 rounded-lg font-mono tracking-wider whitespace-nowrap shadow-inner border ${colorMap[accentColor]}`;

  return (
    <div className="relative h-max w-full pl-0 mt-5 flex flex-row flex-wrap items-center">
      {pills &&
        pills.map((pill, i) => (
          <div key={i} className={`p-2 basis-auto`}>
            <div className={`${pillClass} h-full`}>
              <p>{pill}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const BallbudsSlide = () => {
  return (
    <div
      className={`relative cursor-pointer w-full h-[55vh] border-2 border-white/30 rounded-2xl overflow-hidden`}
      onClick={() => window.open("/projects/ballbuds", "_blank")}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        {/* Info Button */}
        <div>
          <button
            className={`absolute md:right-2 md:top-2 right-2 top-2 p-2 font-semibold text-sm backdrop-brightness-35 rounded-md flex flex-row justify-center items-center cursor-pointer z-20 shadow-2xl`}
            onClick={() => window.open("/projects/ballbuds", "_blank")}
          >
            <TiInfoLarge className="w-6 h-6" />
            <span>Open Project</span>
          </button>
        </div>
        {/* Bg color */}
        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{
            background:
              "linear-gradient(180deg, rgb(255 255 255 / 0%), rgb(47 47 47 / 100%))",
          }}
        ></div>
        {/* title */}
        <h1 className="text-[clamp(4rem,8vw,8rem)] bottom-[30%] text-white font-bold absolute">
          <Image
            className="w-[60vw] md:w-[30vw]"
            src={"/assets/projects/ballbuds/LogoTyped.webp"}
            height={600}
            width={600}
            alt="BallBuds Logo"
          />
        </h1>
        {/* paragraph */}
        <p className="text-[clamp(1.25rem,1vw,2rem)] p-5 pb-2 bottom-[10%] text-white absolute font-semibold text-center">
          A monster tamer RPG game with humor, depth, and choice, plus FPS
          action that slaps harder than Will Smith
        </p>
      </div>

      {/* Image */}
      <Image
        loading="lazy"
        className="h-full object-cover rounded-2xl"
        height={1080}
        width={1920}
        src={"/assets/project_assets/ballbuds.webp"}
        alt="BallBuds"
      />
    </div>
  );
};

const ProjectSlide = ({ contentSrc }) => {
  return (
    <div
      className={`relative cursor-pointer w-full h-[55vh] border-2 border-white/30 rounded-2xl overflow-hidden`}
    >
      <video
        src={`/assets/project_assets/${contentSrc}`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="metadata"
      />
    </div>
  );
};
