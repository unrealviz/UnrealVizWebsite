import { useRef } from "react";
import { motion } from "motion/react";
import { ConfettiFireworks } from "@/components/ConfettiFireworks";

const BB_Section3 = () => {
  const sectionRef = useRef(null);
  const confettiHadRun = useRef(false);

  return (
    <section
      ref={sectionRef}
      id="gamemodes"
      className="bb_section_3 relative flex flex-col items-center text-gray-700 overflow-hidden"
    >
      <SectionTitle />

      <div className="flex flex-col md:flex-row w-[96vw] h-max justify-between items-center gap-6 md:gap-12 p-8 pt-0">
        {/* Text Content */}
        <div className="flex flex-col max-w-lg h-[stretch]">
          <h3 className="text-[clamp(1.25rem,1.5vw,2.5rem)] font-bold leading-tight text-pink-500">
            KID MODE
          </h3>
          <motion.p
            // onViewportEnter={() => {
            //   if (!confettiHadRun.current) {
            //     ConfettiFireworks();
            //     confettiHadRun.current = true;
            //   }
            // }}
            className="text-[clamp(0.9rem,1.1vw,1.5rem)] leading-relaxed"
          >
            Are you too much of a candyass for gore and cussing? That’s ok, you
            can turn on KID MODE!! By enabling this mode, all gore will be
            turned into confetti, all blood spray will be turned into rainbow
            spray, and all cussing will be substituted with less yucky words.
            Parents can also enter a PIN to lock this mode. NOTE: the subjects
            and themes will not change from being directed towards a mature
            audience, and parental discretion is still advised
          </motion.p>
        </div>

        {/* Showcase Video */}
        <div className="w-full md:w-[50vw] flex justify-center">
          <video
            src="/assets/projects/ballbuds/gameplay_features/kidMode.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};

const SectionTitle = () => (
  <div className="relative w-[96vw] flex md:pl-8 pt-10 pb-10 md:pt-20 md:pb-20 z-10">
    <h2 className="text-[clamp(2rem,4vw,6rem)] font-black text-center uppercase tracking-tighter m-auto md:m-0">
      Game Modes
    </h2>
  </div>
);

export default BB_Section3;
