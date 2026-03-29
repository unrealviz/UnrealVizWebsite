import * as motion from "motion/react-client";
import BallbudsMusicController from "@/components/projects/ballbuds/BallbudsMusicController";

export default function NonFoldableController() {
  return (
    <div className="fixed z-999 h-[6.5vh] md:h-[8vh] bottom-5 md:bottom-[10vh] right-0 flex items-center">
      <motion.div className="overflow-hidden h-full flex bg-black/40 backdrop-blur-sm">
        <div className="p-[clamp(0.8rem,1vw,1.2rem)] flex flex-row justify-center gap-4 text-white">
          <BallbudsMusicController />
        </div>
      </motion.div>
    </div>
  );
}
