import * as motion from "motion/react-client";

// client components
import DesktopOnly from "@/components/DesktopOnly";
import HomepageVideo from "@/components/HomepageVideo";
import FoldableController from "@/components/FoldableController";
import {
  MouseScrollLottie,
  ArrowKeyLottie,
} from "../components/ScrollHintLottie";

const Section1 = () => {
  return (
    <section id="home" className="relative h-dvh  overflow-x-hidden">
      {/* VIDEO BACKGROUND LAYER */}
      <div className="absolute top-0 h-dvh w-full overflow-hidden z-20">
        <HomepageVideo videoUrl={"/assets/Yoga.mp4"} videoType={"video/mp4"} />
      </div>

      {/* Video Controller */}
      <FoldableController />
      {/* Title and Description */}
      <div className="relative h-dvh w-full">
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
      </div>

      {/* scroll hint */}
      <DesktopOnly>
        <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 flex flex-row items-center gap-10 z-999">
          {/* Mouse Scroll Lottie */}
          <div className="w-8 md:w-12">
            <MouseScrollLottie />
          </div>

          {/* Arrow keys */}

          <div className="flex flex-col items-center gap-3">
            {/* Top arrow (Up) */}
            <div
              className="w-6 md:w-8 h-6 md:h-8"
              style={{ transform: "scale(3.5) rotate(90deg)" }}
            >
              <ArrowKeyLottie />
            </div>
            <div
              className="w-6 md:w-8 h-6 md:h-8"
              style={{ transform: "scale(3.5) rotate(-90deg)" }}
            >
              <ArrowKeyLottie />
            </div>
          </div>
        </div>
      </DesktopOnly>
    </section>
  );
};

export default Section1;
