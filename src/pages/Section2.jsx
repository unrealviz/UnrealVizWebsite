"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Image from "next/image";
import { SpawnBubbles } from "@/components/Bubble";

export default function Section2({ isDesktop }) {
  const servicesSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesSection,
    offset: ["start end", "center start"],
  });

  return (
    <motion.section
      ref={servicesSection}
      id="services"
      className={` h-max md:pb-[10vh] flex flex-col items-center relative overflow-hidden`}
    >
      {isDesktop && <SpawnBubbles scrollYProgress={scrollYProgress} />}

      {/* Section Heading */}
      <SectionTitle isDesktop={isDesktop} />

      {/* Game Development */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="Game"
        titleAccent="Development"
        accentColor="pink"
        description="Full-cycle game development using Unreal Engine, from concept to production."
        includeItems={[
          "Gameplay systems development (Blueprint & C++)",
          "Multiplayer systems",
          "AI behavior and character systems",
          "Mechanics prototyping",
          "Performance optimization",
          "Cross-platform deployment",
        ]}
        side="left"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={["Unreal Engine 5", "V-Ray", "Chaos Corona", "Lumion"]}
        accentColor="pink"
        side="left"
      />

      {/* 3D Asset Creation */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="3D Asset"
        titleAccent="Creation"
        accentColor="purple"
        description="Production-ready assets for games, films, and virtual worlds."
        includeItems={[
          "Environment assets",
          "Props and modular kits",
          "Game-ready optimization",
          "PBR material creation",
          "LOD setup for real-time performance",
        ]}
        side="right"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={["Blender", "Maya", "ZBrush", "Substance Painter"]}
        accentColor="purple"
        side="right"
      />

      {/* Website Development */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="Website"
        titleAccent="Development"
        accentColor="purple"
        description="Engineering pixel-perfect digital products with cutting-edge stacks."
        includeItems={[
          "High-Performance Next.js Architectures",
          "Responsive, UI/UX Systems",
          "Interactive 3D WebGL (Three.js) Experiences",
          "Cloud-Native Deployment & CI/CD",
        ]}
        side="left"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={[
          "React.js",
          "Next.js 15",
          "TypeScript",
          "Three.js",
          "TailwindCSS",
          "Framer Motion",
          "Express.js",
          "Node.js",
          "MongoDB",
          "Redis",
          "Docker",
          "Git/GitHub",
          "GraphQL",
        ]}
        accentColor="purple"
        side="left"
      />

      {/* Unreal Engine Prototyping */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="Unreal Engine"
        titleAccent="Prototyping"
        accentColor="pink"
        description="Rapid prototype development to validate game ideas quickly."
        includeItems={[
          "Gameplay prototypes",
          "Vertical slices for pitching",
          "Investor demo builds",
          "Experimental mechanics",
        ]}
        side="right"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={["Unreal Engine 5", "V-Ray", "Chaos Corona", "Lumion"]}
        accentColor="pink"
        side="right"
      />

      {/* Cinematic Production */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="Cinematic"
        titleAccent="Production"
        accentColor="purple"
        description="Real-time cinematics using Unreal Engine."
        includeItems={[
          "Trailer cinematics",
          "In-game cutscenes",
          "Pre-visualization",
          "Motion capture integration",
          "Sequencer-based storytelling",
        ]}
        side="left"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={["Unreal Engine 5", "Sequencer", "MotionBuilder", "Nuke"]}
        accentColor="purple"
        side="left"
      />

      {/* Technical Consultation */}
      <AnimatedServiceCard
        isDesktop={isDesktop}
        title="Technical"
        titleAccent="Consultation"
        accentColor="pink"
        description="Helping studios solve Unreal Engine problems and optimize their projects."
        includeItems={[
          "Gameplay system architecture",
          "Unreal Engine debugging",
          "Performance optimization",
          "Pipeline consultation",
        ]}
        side="right"
      />
      <AnimatedTechMarquee
        isDesktop={isDesktop}
        items={["C++", "Blueprint", "Perforce", "Git", "Profiler"]}
        accentColor="pink"
        side="right"
      />
    </motion.section>
  );
}

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
        background:
          "linear-gradient(205deg, #21003169, #2e004536, #0000005e, #0000005e)",
      }}
      className={`relative w-[96vw] ${isDesktop ? "h-[45vh]" : "h-auto py-12"} rounded-2xl flex justify-center items-center overflow-hidden shadow-lg mt-8`}
    >
      <div className="absolute inset-0 backdrop-blur-lg" />
      <div
        className={`flex flex-col ${isDesktop ? "gap-8" : "gap-2"} items-center text-gray-100/90`}
      >
        <h1 className="relative z-10 font-bold text-[clamp(2.5rem,7vw,8rem)] text-center">
          Our Services
        </h1>
        <p className="text-[clamp(0.7rem,1.2vw,2rem)] font-semibold z-10">
          Transforming ideas into immersive digital solutions.
        </p>
      </div>
    </motion.div>
  );
};

// --- Shared sub-components ---

const ServiceCard = ({
  title,
  titleAccent,
  accentColor,
  description,
  includeItems,
  side = "left",
}) => {
  const dotColor = accentColor === "pink" ? "bg-pink-500" : "bg-purple-500";
  const underlineColor =
    accentColor === "pink"
      ? "decoration-pink-500/50"
      : "decoration-purple-500/50";

  return (
    <div
      className={`relative w-[96vw] mt-5 rounded-2xl flex ${side === "right" ? "justify-end" : "justify-start"} items-center overflow-hidden`}
    >
      <div className="relative md:w-[48vw] w-full min-h-[22vh] h-full rounded-2xl flex flex-col items-start overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 shadow-xl p-8">
        <h1 className="font-bold text-[clamp(2rem,3vw,5rem)] text-left text-white/90 mb-4 leading-tight">
          {titleAccent ? (
            <>
              {title}{" "}
              <span
                className={
                  accentColor === "pink" ? "text-pink-400" : "text-purple-400"
                }
              >
                {titleAccent}
              </span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="mb-8 ps-1 text-gray-300 text-[clamp(1rem,1.1vw,1.75rem)]">
          {description}
        </p>
        <h2 className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-100/90 mb-4">
          Includes:
        </h2>
        <ul className="space-y-3">
          {includeItems.map((item) => (
            <li className="flex items-center text-gray-200" key={item}>
              <p
                className={`h-1.5 w-1.5 rounded-full ${dotColor} mr-3 shrink-0`}
              />
              <p
                className={`underline decoration-3 ${underlineColor} underline-offset-4 text-[clamp(1rem,1.2vw,3rem)]`}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TechMarquee = ({ items, accentColor, side = "left" }) => {
  const pillClass =
    accentColor === "pink"
      ? "px-4 py-2 rounded-lg font-mono tracking-wider text-pink-200 bg-pink-900/40 border border-pink-500/30 whitespace-nowrap shadow-inner"
      : "px-4 py-2 rounded-lg font-mono tracking-wider text-purple-200 bg-purple-900/40 border border-purple-500/30 whitespace-nowrap shadow-inner";

  return (
    <div
      className={`relative w-[96vw] mt-5 rounded-2xl flex ${side === "right" ? "justify-end" : "justify-start"} items-center overflow-hidden`}
    >
      <div className="relative md:w-[48vw] w-full h-full rounded-2xl flex flex-row items-center overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 shadow-xl pl-8 pr-8 gap-8">
        <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-black/10 to-transparent z-20" />
        <h2 className="z-10 font-bold text-[clamp(1rem,1.5vw,3.5rem)] text-white/90 whitespace-nowrap">
          Technology
        </h2>

        <div className="overflow-hidden w-full relative">
          <motion.ul
            className="p-8 flex flex-row flex-nowrap gap-4 text-[clamp(1rem,1vw,2rem)]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...items, ...items].map((item, i) => (
              <li key={i} className={pillClass}>
                <p>{item}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

const SMTechMarquee = ({ items, accentColor }) => {
  const pillClass =
    accentColor === "pink"
      ? "px-4 py-2 rounded-lg font-mono text-sm tracking-wider text-pink-200 bg-pink-900/40 border border-pink-500/30 whitespace-nowrap shadow-inner"
      : "px-4 py-2 rounded-lg font-mono text-sm tracking-wider text-purple-200 bg-purple-900/40 border border-purple-500/30 whitespace-nowrap shadow-inner";

  return (
    <div className="relative w-[96vw] mt-5 rounded-2xl flex items-center">
      <div className="relative md:w-[48vw] w-full h-full rounded-2xl block bg-white/10 backdrop-blur-lg border-2 border-white/30 shadow-xl p-8 gap-8">
        <h2 className="font-bold text-[1.2rem] text-gray-100/90 mb-4">
          Technology:
        </h2>
        <ul className="flex flex-wrap gap-5">
          {items.map((item) => (
            <li className="flex items-center text-gray-200" key={item}>
              <span className={`${pillClass}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- Wrapped with motion.div for scroll-driven y ---

const AnimatedServiceCard = ({ isDesktop, y, ...props }) => {
  const serviceCardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: serviceCardRef,
    offset: ["start end", "end end"],
  });
  // [element, container]
  const serviceCardRef_y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const getY = (transformValue) => (isDesktop ? transformValue : 0);

  return (
    <motion.div
      ref={serviceCardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      viewport={{ once: true }}
      style={{ y: getY(serviceCardRef_y) }}
      className="w-full flex justify-center"
    >
      <ServiceCard {...props} />
    </motion.div>
  );
};

const AnimatedTechMarquee = ({ isDesktop, y, ...props }) => {
  const techMarqueeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: techMarqueeRef,
    offset: ["start end", "end end"],
  });
  // [element, container]
  const serviceCardRef_y = useTransform(
    scrollYProgress,
    [0.3, 1],
    ["100%", "0%"],
  );
  const getY = (transformValue) => (isDesktop ? transformValue : 0);

  return (
    <motion.div
      ref={techMarqueeRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      viewport={{ once: true }}
      style={{ y: getY(serviceCardRef_y) }}
      className="w-full flex justify-center"
    >
      {isDesktop ? <TechMarquee {...props} /> : <SMTechMarquee {...props} />}
    </motion.div>
  );
};
