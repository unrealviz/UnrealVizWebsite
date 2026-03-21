import { motion, useTransform } from "framer-motion";
import { getRandomFloatsForBubbles } from "@/lib/RandomNumberGenerator";

const COLORS = [
  "rgba(255, 250, 237, 0.35)", // lightest yellow
  "rgba(165, 101, 247, 0.35)", // light violet
  "rgba(75, 12, 99, 0.35)", // deep purple
  // "rgba(255, 0, 150, 0.35)", // pink
  // "rgba(0, 200, 255, 0.35)", // cyan
  // "rgba(135, 206, 235, 0.35)", // sky blue
  // "rgba(0, 255, 127, 0.35)", // neon green
];

// Inside your Bubble component
export default function Bubble({
  scrollYProgress,
  start,
  end,
  left,
  top,
  size,
  opacity,
  color,
}) {
  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["0vh", "100vh"], // Start below the viewport, end above it
  );

  return (
    <motion.div
      style={{
        y,
        left,
        top,
        width: size,
        height: size,
        opacity,
        backgroundColor: color,
      }}
      className="absolute rounded-full blur-[20px] mix-blend-screen"
    />
  );
}

export const SpawnBubbles = ({ scrollYProgress }) => {
  const randomFloats = getRandomFloatsForBubbles(20, 7); // [[7], [7], [7]...., []]
  const bubble = randomFloats.map((arrayOfLengthSeven) => {
    // [0.21, 0.83, 0.44, 0.09, 0.62, 0.31, 0.77] -> [7]
    let [r1, r2, r3, r4, r5, r6, r7] = arrayOfLengthSeven;
    return {
      start: r1 * 0.5,
      end: 1 + r2 * 0.3,
      left: r3 * 100,
      top: r4 * 300,
      size: 20 + r5 * 20,
      color: COLORS[Math.round(r6 * COLORS.length)],
      opacity: 0.15 + r7 * 0.35,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubble.map((bubble, i) => (
        <Bubble
          key={i}
          scrollYProgress={scrollYProgress}
          start={bubble.start}
          end={bubble.end}
          left={`${bubble.left}vw`}
          top={`${bubble.top}vh`}
          size={`${bubble.size}vw`}
          color={bubble.color}
          opacity={bubble.opacity}
        />
      ))}
    </div>
  );
};
