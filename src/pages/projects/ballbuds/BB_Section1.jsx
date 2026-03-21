"use client";
import Image from "next/image";
import React from "react";
import BB_HomepageVideo from "@/components/projects/ballbuds/BB_HomepageVideo";
import NonFoldableController from "@/components/NonFoldableController";
import BallbudsMusic from "@/components/projects/ballbuds/BallbudsMusic";

const Section1 = ({ isDesktop }) => {
  return (
    <div className="bb_section_1 relative h-[400vh] w-full">
      <div className="absolute inset-0 bg-black/50 z-1 pointer-events-none" />
      {/* 1. STICKY BACKGROUND LAYER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
        <BB_HomepageVideo
          videoUrl={"/assets/projects/ballbuds/day_night.webm"}
          videoType={"video/webm"}
        />
      </div>
      {/* Music Controller */}
      <div className="fixed bottom-6 right-6 z-50">
        <NonFoldableController isDesktop={isDesktop} />
      </div>

      {/* 2. SCROLLING CONTENT LAYER */}
      <div
        style={{
          textShadow: "2px 2px 3px #000000",
        }}
        className="relative -mt-[100vh] left-0 w-full z-10 text-shadow-[2,2,black] text-shadow-zinc-950"
      >
        <BallbudsMusic
          musicUrl={
            "/assets/projects/ballbuds/audio/GORE_EDMTrack5_MENU_YAS.mp3"
          }
          musicType={"audio/mpeg"}
        />
        {/* Section 1: Title */}
        <section className=" h-screen flex flex-col justify-center items-center text-white p-6 pointer-events-none">
          <div>
            <Image
              priority
              className="w-[60vw] md:w-[30vw]"
              src={"/assets/projects/ballbuds/LogoTyped.webp"}
              height={600}
              width={600}
              alt="BallBuds Logo"
            />
          </div>
          <h3 className="w-[80vw] md:w-[20vw] text-[clamp(0.8rem,1.25vw,2rem)] text-center mt-4">
            The Monster Tamer for Grown Ass Adults
          </h3>
        </section>

        {/* Section 2: Story */}
        <section className=" h-screen flex flex-row p-8 md:p-12 justify-center md:justify-end items-center text-center md:text-end text-white">
          <p className="w-full md:w-[60vh] text-[clamp(1rem,1.5vw,2rem)]">
            In BallBuds, choice matters, and you will have plenty of it: through
            quests, you can choose good or evil, to help or to hurt. Through
            combat, you can use your BallBuds to blow through the gates in a
            frontal assault, or stealth your way in to slip a knife in their
            backs. You can even choose your own genre of Slay Music to go full
            murder-hobo to! Read on to see the features that make BallBuds: The
            Game a monster-tamer like no other.
          </p>
        </section>

        {/* Section 3: Backstory */}
        <section className=" h-screen flex flex-col md:flex-row p-8 md:p-12 justify-center md:justify-start items-center text-center md:text-start text-white">
          <p className="w-full md:w-[60vh] text-[clamp(1rem,1.25vw,2rem)]">
            On an alternate Earth where monsters once existed, rare childhood
            bonds between humans and these creatures created powerful leaders
            throughout history—until the practice was banned and monsters were
            nearly wiped out. In 1930, millionaire Mr. Lorde discovered a plant
            that allowed humans to control them, rebranding the creatures as
            “BallBuds” and building the megacorp BudCorp. Decades later, on
            BudCorp’s abandoned research islands, an amnesiac survivor arrives
            to find shipwrecked corporate retreat passengers split into rival
            factions—the Rawganic Order and the NecBromancers—fighting for
            control of the archipelago.
          </p>
        </section>

        {/* Section 4: Features */}
        <section className=" h-screen p-8 flex justify-center items-center text-white">
          <div className="flex flex-col gap-6 md:gap-12 text-[clamp(1rem,1.5vw,2rem)] max-w-[90vw]">
            {[
              "First-Person Combat alongside up to 3 simultaneous BallBuds.",
              "Choose your own Slay-Mode music.",
              "Massive Open World to explore.",
              "Trade and show off your collection with your friends.",
              "Survive the Night behind the safety of the Wall...",
            ].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section1;
