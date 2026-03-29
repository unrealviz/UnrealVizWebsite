"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import useDisplayStore from "@/store/useDisplayStore";

const BB_Section5 = () => {
  // setup isDesktop from zustand
  const isDesktop = useDisplayStore((state) => state.isDesktop);
  useEffect(() => {
    useDisplayStore.getState().initialize();
  }, []);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <motion.section
      ref={containerRef}
      id="projects"
      className={`${
        isDesktop ? "h-[340vh]" : "py-20 flex flex-col justify-center"
      } first:flex first:flex-col first:items-center text-black`}
    >
      {/* Section Title */}
      <SectionTitle />

      {isDesktop ? (
        /* Desktop Horizontal Scroll */
        <motion.div className="h-screen sticky top-[5vh] overflow-hidden bg-white">
          <motion.div
            style={{ x: horizontalX }}
            className="flex flex-row gap-15 pl-[20vw] items-center h-full w-[160vw]"
          >
            <Roadmap
              qDate={"Q4 2025 - Q2 2026"}
              Title={"Pre Alpha Systems:"}
              featureList={[
                "Full Squad Combat",
                "BudBalls, Capturing/Summoning",
                "Base Destruction/Conquering",
                "BallBudpedia, Rarity, Battle Grades, Basic Leveling",
                "Gun- and Melee-based Capturing",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q4_pre_alpha.webm"
              }
            />
            <Roadmap
              qDate={"Q3 2026"}
              Title={"Closed Alpha:"}
              featureList={[
                'Keys provided to "BudCorp Intern" tier and above',
                "PvP modes:",
                "   - King of the Hill",
                "   - Domination",
                "Limited Open World PvE (Single Player & Co-op)",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q3_closed_beta.webm"
              }
            />
            <Roadmap
              qDate={"Q4 2026"}
              Title={"Closed Beta:"}
              featureList={[
                'Keys available as an add-on, as well as to "BudCorp Intern" tier and above',
                "Full Open World PvE:",
                "- Limited Storyline and NPCs",
                "- Limited Factions",
                "- Limited Quests",
                "- Base Conquering",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q4_closed_beta.webm"
              }
            />
            <Roadmap
              qDate={"Q1 2027"}
              Title={"FULL RELEASE:"}
              featureList={[
                '1 week Early Access to "Deluxe Edition" tier and above',
                "Full Open World PvE now includes:",
                "- Full Storyline and NPCs",
                "- All Factions",
                "- All Quests/Side Quests",
                "- All Unlockable and Upgradable Player Equipment and Base Upgrades",
                "Secure Player-to-Player BallBud Digital Trading Platform",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q1_full_release.webm"
              }
            />
          </motion.div>
        </motion.div>
      ) : (
        /* Mobile Normal Layout */
        <div className="relative flex flex-row gap-5 justify-center items-center w-full mt-10">
          <motion.div className="relative flex flex-col gap-2 p-2 items-center h-full w-[160vw]">
            <Roadmap
              qDate={"Q4 2025 - Q2 2026"}
              Title={"Pre Alpha Systems:"}
              featureList={[
                "Full Squad Combat",
                "BudBalls, Capturing/Summoning",
                "Base Destruction/Conquering",
                "BallBudpedia, Rarity, Battle Grades, Basic Leveling",
                "Gun- and Melee-based Capturing",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q4_pre_alpha.webm"
              }
            />
            <Roadmap
              qDate={"Q3 2026"}
              Title={"Closed Alpha:"}
              featureList={[
                'Keys provided to "BudCorp Intern" tier and above',
                "PvP modes:",
                "   - King of the Hill",
                "   - Domination",
                "Limited Open World PvE (Single Player & Co-op)",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q3_closed_beta.webm"
              }
            />
            <Roadmap
              qDate={"Q4 2026"}
              Title={"Closed Beta:"}
              featureList={[
                'Keys available as an add-on, as well as to "BudCorp Intern" tier and above',
                "Full Open World PvE:",
                "- Limited Storyline and NPCs",
                "- Limited Factions",
                "- Limited Quests",
                "- Base Conquering",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q4_closed_beta.webm"
              }
            />
            <Roadmap
              qDate={"Q1 2027"}
              Title={"FULL RELEASE:"}
              featureList={[
                '1 week Early Access to "Deluxe Edition" tier and above',
                "Full Open World PvE now includes:",
                "- Full Storyline and NPCs",
                "- All Factions",
                "- All Quests/Side Quests",
                "- All Unlockable and Upgradable Player Equipment and Base Upgrades",
                "Secure Player-to-Player BallBud Digital Trading Platform",
              ]}
              videoSource={
                "/assets/projects/ballbuds/product_roadmap/q1_full_release.webm"
              }
            />
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default BB_Section5;

const SectionTitle = () => {
  return (
    <div className="mt-[5vh] flex h-[5vh] md:h-[20vh] w-[90vw] z-10 inset-0 m-auto">
      <h1 className="text-[clamp(2rem,4vw,6rem)] m-auto inset-0 w-max">
        Product Roadmap
      </h1>
    </div>
  );
};

const Roadmap = ({ qDate, Title, featureList, videoSource }) => {
  return (
    <div className="sticky top-[10vh] md:relative md:top-0 flex flex-col justify-between bg-white h-[60vh] p-6 shadow-xl">
      <div>
        <h3 className="font-semibold text-[clamp(1rem,0.6vw,2rem)] text-gray-500">
          {qDate}
        </h3>
        <h3 className="font-medium text-[clamp(1rem,1.5vw,2.5rem)] mb-4">
          {Title}
        </h3>
      </div>

      <div className="text-[clamp(1rem,0.8vw,2rem)] pl-0 md:pl-6 pb-2 space-y-1">
        {featureList.map((feature, i) => (
          <p key={i} className="flex items-start">
            <span className="mr-2">•</span> {feature}
          </p>
        ))}
      </div>

      <div className="w-full md:min-w-[30vw] h-full md:h-[30vh] mt-4 overflow-hidden">
        {/* REPLACED Image with Video */}
        <video
          src={videoSource}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
