import * as motion from "motion/react-client";

// client components
import DesktopOnly from "@/components/DesktopOnly";
import HomepageVideo from "@/components/HomepageVideo";
import FoldableController from "@/components/FoldableController";
import {
  MouseScrollLottie,
  ArrowKeyLottie,
} from "../components/ScrollHintLottie";
import HomepageTitle from "@/components/HomepageTitle";

const Section1 = () => {
  return (
    <section id="home" className="relative h-dvh w-full">
      <div className="h-screen w-full">
        {/* VIDEO BACKGROUND LAYER */}
        <div className="sticky top-0 h-dvh w-full z-20">
          <HomepageVideo
            videoUrl={"/assets/Yoga.mp4"}
            videoType={"video/mp4"}
          />
        </div>

        {/* Video Controller */}
        <FoldableController />
        {/* Title and Description */}
        <div className="overflow-hidden">
          <HomepageTitle />
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
      </div>
    </section>
  );
};

export default Section1;
