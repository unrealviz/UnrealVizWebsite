"use client";
import { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import ThreeScene from "@/components/projects/ballbuds/ThreeScene";
// import GUI from "lil-gui";

// lights
const METAL_Lights = {
  lightName: "Metal Glove Lighting",
  ambient_Light: {
    colorHex: "#1a1a2e",
    intensity: 0.6,
  },
  key_Light: {
    colorHex: "#ffffff",
    intensity: 4.8,
    position: { x: 3.5, y: 8, z: 10 },
  },
  fill_Light: {
    colorHex: "#ff0000",
    intensity: 2,
    position: { x: -19, y: -8, z: -2 },
  },
  rim_Light: {
    colorHex: "#2e0000",
    intensity: 5.0,
    position: { x: 3, y: 5, z: -5 },
  },
};

const EDM_Glove_Lights = {
  lightName: "EDM Glove Lighting",
  ambient_Light: {
    colorHex: "#120820",
    intensity: 0.4,
    position: { x: 0, y: 0, z: 0 },
  },
  key_Light: {
    colorHex: "#e8d0ff",
    intensity: 1.8,
    position: { x: 4, y: 6, z: 5 },
  },
  fill_Light: {
    colorHex: "#ff00cc",
    intensity: 3.5,
    position: { x: -5, y: 3, z: 4 },
  },
  rim_Light: {
    colorHex: "#0044ff",
    intensity: 4.5,
    position: { x: 3, y: 5, z: -5 },
  },
};

// keyframes
const METAL_Glove_KEYFRAMES = (isDesktop) => {
  if (isDesktop) {
    return [
      {
        at: 0,
        position: { x: 5, y: 0, z: 0.5 },
        rotation: { x: 0, y: 0, z: 0 },
      },
      {
        at: 0.1,
        position: {
          x: 1,
          y: 0,
          z: 0.5,
        },
        rotation: { x: 0.1, y: Math.PI * 2, z: -0.15 },
      },
      {
        at: 0.25,
        position: {
          x: 1.6,
          y: 0,
          z: 0.8,
        },
        rotation: { x: -0.12, y: Math.PI * 2.8, z: 0.2 },
      },
      {
        at: 0.5,
        position: {
          x: 1.4,
          y: 0,
          z: 0.7,
        },
        rotation: { x: -0.1, y: Math.PI * 4.4, z: 0.18 },
      },
      {
        at: 0.75,
        position: {
          x: 1,
          y: 0,
          z: 0.4,
        },
        rotation: { x: 0.12, y: Math.PI * 5.2, z: -0.2 },
      },
      {
        at: 0.9,
        position: {
          x: 1.4,
          y: 0,
          z: 1.5,
        },
        rotation: { x: 0, y: Math.PI * 6, z: 0 },
      },
      {
        at: 1,
        position: {
          x: -5,
          y: 0,
          z: 0.5,
        },
        rotation: { x: 0, y: Math.PI * 10, z: 0 },
      },
    ];
  } else {
    return [
      {
        at: 0,
        position: { x: 2, y: 0, z: 3 - 0.5 },
        rotation: { x: 0, y: 0, z: 0 },
      },
      {
        at: 0.1,
        position: {
          x: -1.5 + 1,
          y: 0,
          z: 0.5 - 0.5,
        },
        rotation: { x: 0.1, y: Math.PI * 2, z: -0.15 },
      },
      {
        at: 0.25,
        position: {
          x: -1.5 + 1.6,
          y: 0,
          z: 0.8 - 0.5,
        },
        rotation: { x: -0.12, y: Math.PI * 2.8, z: 0.2 },
      },
      {
        at: 0.5,
        position: {
          x: -1.5 + 1.4,
          y: 0,
          z: 0.7 - 0.5,
        },
        rotation: { x: -0.1, y: Math.PI * 4.4, z: 0.18 },
      },
      {
        at: 0.75,
        position: {
          x: -1.5 + 1,
          y: 0,
          z: 0.4 - 0.5,
        },
        rotation: { x: 0.12, y: Math.PI * 5.2, z: -0.2 },
      },
      {
        at: 0.9,
        position: {
          x: -1.5 + 1.4,
          y: 0,
          z: 0.5 - 0.5,
        },
        rotation: { x: 0, y: Math.PI * 6, z: 0 },
      },
      {
        at: 1,
        position: {
          x: -1.5 - 2,
          y: 0,
          z: 0.5 - 0.5,
        },
        rotation: { x: 0, y: Math.PI * 10, z: 0 },
      },
    ];
  }
};

const EDM_Glove_KEYFRAMES = (isDesktop) => {
  if (isDesktop) {
    return [
      {
        at: 0,
        position: { x: 5, y: 0.5, z: 0 - 0.25 },
        rotation: { x: 0, y: 0, z: 0 },
      },
      {
        at: 0.1,
        position: { x: 1, y: 0.5, z: 0 - 0.25 },
        rotation: { x: 0.1, y: Math.PI * 2, z: -0.15 },
      },
      {
        at: 0.25,
        position: { x: 1.6, y: 0.5, z: 0.3 - 0.25 },
        rotation: { x: -0.12, y: Math.PI * 2.8, z: 0.2 },
      },
      {
        at: 0.5,
        position: { x: 1.4, y: 0.5, z: 0.2 - 0.25 },
        rotation: { x: -0.1, y: Math.PI * 4.4, z: 0.18 },
      },
      {
        at: 0.75,
        position: { x: 1, y: 0.5, z: -0.15 - 0.25 },
        rotation: { x: 0.12, y: Math.PI * 5.2, z: -0.2 },
      },
      {
        at: 0.9,
        position: { x: 1.4, y: 0.5, z: 0 - 0.25 },
        rotation: { x: 0, y: Math.PI * 6, z: 0 },
      },
      {
        at: 1,
        position: { x: -5, y: 0.5, z: 0 - 0.25 },
        rotation: { x: 0, y: Math.PI * 10, z: 0 },
      },
    ];
  } else {
    return [
      {
        at: 0,
        position: { x: -1.5 + 2, y: 0.5, z: 0 - 0.25 - 0.5 },
        rotation: { x: 0, y: 0, z: 0 },
      },
      {
        at: 0.1,
        position: { x: -1.5 + 1, y: 0.5, z: 0 - 0.25 - 0.5 },
        rotation: { x: 0.1, y: Math.PI * 2, z: -0.15 },
      },
      {
        at: 0.25,
        position: { x: -1.5 + 1.6, y: 0.5, z: 0.3 - 0.25 - 0.5 },
        rotation: { x: -0.12, y: Math.PI * 2.8, z: 0.2 },
      },
      {
        at: 0.5,
        position: { x: -1.5 + 1.4, y: 0.5, z: 0.2 - 0.25 - 0.5 },
        rotation: { x: -0.1, y: Math.PI * 4.4, z: 0.18 },
      },
      {
        at: 0.75,
        position: { x: -1.5 + 1, y: 0.5, z: -0.15 - 0.25 - 0.5 },
        rotation: { x: 0.12, y: Math.PI * 5.2, z: -0.2 },
      },
      {
        at: 0.9,
        position: { x: -1.5 + 1.4, y: 0.5, z: 0 - 0.25 - 0.5 },
        rotation: { x: 0, y: Math.PI * 6, z: 0 },
      },
      {
        at: 1,
        position: { x: -1.5 + -2, y: 0.5, z: 0 - 0.25 - 0.5 },
        rotation: { x: 0, y: Math.PI * 10, z: 0 },
      },
    ];
  }
};

const BB_Section4 = ({ isDesktop }) => {
  const sceneRef1 = useRef(null);
  const sceneRef2 = useRef(null);
  const subSection1Ref = useRef(null);
  const subSection2Ref = useRef(null);

  // force trigger resize after 1 second
  useEffect(() => {
    const refs = [subSection1Ref, subSection2Ref];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When a section becomes visible, nudge the window to fix the canvas
            window.dispatchEvent(new Event("resize"));

            // debug
            console.log("intersected");
          }
        });
      },
      { root: null, threshold: 0.1, rootMargin: "300% 0%" },
    ); // Triggers when 1% of the section is visible

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // debug
  // const lightGui = new GUI({
  //   title: "Light Controls",
  //   expanded: true,
  //   hideable: true,
  //   theme: "dark",
  //   closeButton: true,
  // });
  const lightGui = null;

  useLenis(({ scroll }) => {
    const calcProgress = (el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + scroll;
      const sectionHeight = el.offsetHeight - window.innerHeight;
      return Math.min(Math.max((scroll - sectionTop) / sectionHeight, 0), 1);
    };

    if (sceneRef1.current && subSection1Ref.current) {
      const progress = calcProgress(subSection1Ref.current);
      sceneRef1.current.setScrollProgress(progress);
    }
    if (sceneRef2.current && subSection2Ref.current) {
      const progress = calcProgress(subSection2Ref.current);
      sceneRef2.current.setScrollProgress(progress);
    }
  });

  return (
    <section
      id="gameeditions"
      className="relative h-full w-full text-white"
      style={{
        background: "black",
      }}
    >
      {/* Section 1 */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('/assets/backgrounds/flat-lay-metal-surface.webp')",
          backgroundSize: "auto, cover",
          backgroundAttachment: "fixed, fixed",

          textShadow: "5px 4px 8px rgb(135 0 0 / 80%)",
        }}
        className="relative h-[1000vh] w-full"
      >
        {/* fade out at the top */}
        <div className="absolute top-0 left-0 w-full h-50 bg-linear-to-t from-transparent to-[#ffffff] z-20 pointer-events-none" />
        {/* fade out at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-75 bg-linear-to-b from-transparent to-[#07000a] z-20 pointer-events-none" />

        {/* Contents */}
        <div ref={subSection1Ref} className="absolute top-0 w-full h-full z-10">
          {/* Title */}
          <div className="relative h-[500vh] w-[60vw] inset-0 m-auto">
            <div className="sticky top-0 h-screen w-full">
              <div className="relative flex flex-col justify-center items-start h-screen w-full text-white font-bold">
                <div className="border-l-4 border-red-500 pl-10">
                  <h1 className="w-full text-[clamp(2rem,3vw,4rem)]">
                    Game Edition
                  </h1>
                  <h1 className="w-full text-[clamp(4rem,8vw,8rem)]">METAL</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="relative h-[500vh] w-[60vw] inset-0 m-auto">
            <div className="sticky top-0 h-screen w-full">
              <div className="relative flex flex-col justify-center items-start h-screen w-full text-white font-bold">
                <div className="flex flex-col gap-2 md:gap-4 text-[clamp(1rem,1.25vw,3rem)] w-[70vw] md:w-[30vw]  border-l-4 border-red-500 pl-10">
                  {[
                    "Full METAL original soundtrack by our producer, Renzo Calma",
                    "Unlockable METAL edition power glove upgrade with an extra boost to capturing undead BallBuds",
                    "Unlockable METAL edition bike upgrade that reduces aggro-zone for undead BallBuds, but aggros regular BallBuds like crazy",
                    "1x UNDEAD BallBud Digital Booster Pack",
                  ].map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* METAL Gloves */}
        <div className="relative h-[1000vh] w-full">
          <div className="sticky top-0 left-0 h-screen w-full">
            <SectionCanvas
              sceneRef={sceneRef1}
              modelUrl={"/assets/projects/ballbuds/models/METAL_Glove.glb"}
              keyframes={METAL_Glove_KEYFRAMES(isDesktop)}
              lightGui={lightGui}
              lightColorIntensityPosition={METAL_Lights}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/backgrounds/neon-laser-lights-triangular-shape-with-black-background.webp')",
          backgroundSize: "auto, cover",
          backgroundAttachment: "fixed, fixed",

          textShadow: "5px 4px 12px rgb(150 0 100 / 80%)",
        }}
        className="relative h-[1000vh] w-full"
      >
        {/* fade out at the top */}
        <div className="absolute top-0 left-0 w-full h-50 bg-linear-to-t from-transparent to-[#07000a] z-20 pointer-events-none" />
        {/* fade out at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-75 bg-linear-to-b from-transparent to-[#ffffff] z-20 pointer-events-none" />

        {/* Content */}
        <div ref={subSection2Ref} className="absolute top-0 w-full h-full z-10">
          {/* Title */}
          <div className="relative h-[500vh] w-[60vw] inset-0 m-auto">
            <div className="sticky top-0 h-screen w-full">
              <div className="relative flex flex-col justify-center items-start h-screen w-full text-white font-bold">
                <div className="border-l-4 border-pink-500 pl-10">
                  <h1 className="w-full text-[clamp(2rem,3vw,4rem)]">
                    Game Edition
                  </h1>
                  <h1 className="w-full text-[clamp(4rem,8vw,8rem)]">EDM</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="relative h-[500vh] w-[60vw] inset-0 m-auto">
            <div className="sticky top-0 h-screen w-full">
              <div className="relative flex flex-col justify-center items-start h-screen w-full text-white font-bold">
                <div className="flex flex-col gap-2 md:gap-4 text-[clamp(1rem,1.25vw,3rem)] w-[70vw] md:w-[30vw] border-l-4 border-pink-500 pl-10">
                  {[
                    "Full EDM original soundtrack by our producer, GORE",
                    "Unlockable EDM edition power glove upgrade with an extra boost to capturing regular BallBuds",
                    "Unlockable EDM edition bike upgrade that reduces aggro-zone for regular BallBuds, but aggros undead BallBuds like crazy",
                    "1x REGULAR BallBud Digital Booster Pack",
                  ].map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EDM Gloves */}
        <div className="relative h-[1000vh] w-full">
          <div className="sticky top-0 left-0 h-screen w-full">
            <SectionCanvas
              sceneRef={sceneRef2}
              modelUrl={"/assets/projects/ballbuds/models/EDM_Glove.glb"}
              keyframes={EDM_Glove_KEYFRAMES(isDesktop)}
              lightGui={lightGui}
              lightColorIntensityPosition={EDM_Glove_Lights}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionCanvas = ({
  sceneRef,
  modelUrl,
  keyframes,
  lightGui,
  lightColorIntensityPosition,
}) => (
  <ThreeScene
    modelUrl={modelUrl}
    sceneRef={sceneRef}
    customCSS={"pointer-events-none z-100"}
    keyframes={keyframes}
    lightGui={lightGui}
    lightColorIntensityPosition={lightColorIntensityPosition}
  />
);

export default BB_Section4;
