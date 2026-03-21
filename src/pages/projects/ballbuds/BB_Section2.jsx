import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const Section2 = ({ isDesktop }) => {
  const GameplayFeaturesSectionRef = useRef(null);
  return (
    <section
      ref={GameplayFeaturesSectionRef}
      id="features"
      className="bb_section_2 relative h-max justify-center text-gray-700 bg-white"
    >
      <SectionTitle />
      {/* Feature 1 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Over 300 Collectible"
        titleAccent="BallBuds"
        accentColorClass="text-red-500"
        description="In BallBuds, you don’t just collect monsters—you weaponize them. Capture over 150 different BallBuds, each with elemental affinities, unique abilities, combat classes, and associated digital cards for trading. Each of these can be captured as either a regular daytime version, or an undead nighttime version. That makes over 300 BallBuds that you can fill your BallBudpedia with! Show off your collection to your friends!"
        videoSource="/assets/projects/ballbuds/gameplay_features/CollectibleBallBuds.webm"
        reversed="false"
      />
      {/* Feature 2 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Squad Based"
        titleAccent="Combat"
        accentColorClass="text-green-500"
        description="We're taking FPS squad based combat to the next level. By allowing the player to summon up to 3 BallBuds simultaneously for action, combat scenarios will feel incredibly fast and furious"
        videoSource="/assets/projects/ballbuds/gameplay_features/SquadBasedCombat.webm"
        reversed="true"
      />
      {/* Feature 3 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Conquer"
        titleAccent="Bases"
        accentColorClass="text-purple-500"
        description="Conquer enemy bases to expand your territory, until you’ve dominated the entire map. And YES–you really CAN use Behemoth class BallBuds to do the dirty work for you!"
        videoSource="/assets/projects/ballbuds/gameplay_features/ConquerBases.webm"
        reversed="false"
      />
      {/* Feature 4 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Dual Soundtracks"
        titleAccent="Choose your Slay Music"
        accentColorClass="text-green-500"
        description="This game features Dual Original Soundtracks: choose METAL, EDM or switch back and forth to set the right Ambiance for your entire play experience. Plus choose from an even greater selection of Slay-Mode only tracks: Metal, EDM, and Hip-Hop at the time of full release, with more tracks and genres to come"
        videoSource="/assets/projects/ballbuds/gameplay_features/DualSoundtracks.webm"
        reversed="true"
      />
      {/* Feature 5 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Survival Horror"
        titleAccent="Night Cycle"
        accentColorClass="text-purple-500"
        description="Nighttime boosts undead BallBuds. But be warned... if you're outside the wall after sunset, you’re on the menu"
        videoSource="/assets/projects/ballbuds/gameplay_features/SurvivalHorrorNightCycle.webm"
        reversed="false"
      />
      {/* Feature 6 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="Factions and"
        titleAccent="Quests"
        accentColorClass="text-green-500"
        description="Choose your faction! Get involved in the story, complete quests, and make impactful choices, as you uncover the true motivations of the various survivors, and the secrets of the archipelago"
        videoSource="/assets/projects/ballbuds/gameplay_features/FactionsAndQuests.webm"
        reversed="true"
      />
      {/* Feature 7 */}
      <GameplayFeatureCard
        isDesktop={isDesktop}
        title="RIDE A MOTHERF*CKING"
        titleAccent="BIKE"
        accentColorClass="text-purple-500"
        description="Put your METAL to the pedals with the most OG method of classic monster tamer transportation"
        videoSource="/assets/projects/ballbuds/gameplay_features/RideABike.webm"
        reversed="false"
      />
    </section>
  );
};

export default Section2;

const SectionTitle = ({ isDesktop }) => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "center start"],
  });
  // [element, container]
  const SectionRef_y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const getY = (transformValue) => (isDesktop ? transformValue : 0);

  return (
    <motion.div
      ref={SectionRef}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{ y: getY(SectionRef_y) }}
      className="relative flex h-[20vh] md:h-[30vh] w-[90vw] z-10 inset-0 m-auto"
    >
      <h1 className="text-[clamp(2rem,4vw,6rem)] m-auto inset-0 w-max">
        Gameplay Features
      </h1>
    </motion.div>
  );
};

const GameplayFeatureCard = ({ isDesktop, ...props }) => {
  const CardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: CardRef,
    offset: ["start end", "end end"],
  });
  // [element, container]
  const CardRef_y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const getY = (transformValue) => (isDesktop ? transformValue : 0);

  return (
    <motion.div
      ref={CardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{ y: getY(CardRef_y) }}
      className="w-full flex justify-center"
    >
      <FeatureCard isDesktop={isDesktop} {...props} />
    </motion.div>
  );
};

const FeatureCard = ({
  isDesktop,
  title,
  titleAccent,
  accentColorClass,
  description,
  videoSource,
  reversed = "false",
}) => {
  return (
    <div
      className={`relative w-[96vw] rounded-2xl flex ${
        isDesktop && reversed === "false" ? "flex-row" : "flex-row-reverse"
      } ${!isDesktop ? "flex-col!" : ""} items-center overflow-hidden`}
    >
      <div className="relative md:min-w-[48vw] w-full h-full rounded-2xl flex flex-col items-start overflow-hidden bg-white/10 backdrop-blur-lg p-8">
        <h1 className="font-bold text-[clamp(1.25rem,1.5vw,2.5rem)] text-left mb-4 leading-tight">
          {title} <span className={`${accentColorClass}`}>{titleAccent}</span>
        </h1>
        <p className="mb-8 ps-1 text-[clamp(1rem,1.1vw,1.75rem)]">
          {description}
        </p>
      </div>

      <div className="w-full md:min-w-[48vw] p-6 flex justify-center">
        {/* Simple Video Tag - No Poster */}
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
