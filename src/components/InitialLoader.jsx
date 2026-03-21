"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import useVideoControlStore from "@/store/useVideoControlStore";

const InitialLoader = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [percent, setPercent] = useState(0);
  const { startExperience } = useVideoControlStore();
  const rafRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const DURATION = 1800;
    const start = performance.now();
    let lastValue = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const raw = eased * 100;
      const jitter = t < 0.98 ? (Math.random() - 0.5) * 2 : 0;
      const value = Math.min(
        100,
        Math.max(lastValue, Math.round(raw + jitter)),
      );

      lastValue = value;
      setPercent(value);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPercent(100);
        setIsComplete(true);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);

      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-1000 flex flex-col items-center justify-center bg-black px-6"
          >
            <div className="relative flex flex-col items-center justify-center w-full max-w-xs md:max-w-md h-40">
              <AnimatePresence mode="wait">
                {!isComplete ? (
                  <motion.div
                    key="progress"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full flex flex-col items-center"
                  >
                    <div className="relative w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        style={{ width: `${percent}%` }}
                        transition={{ ease: "easeOut", duration: 0.1 }}
                      />
                    </div>
                    <motion.span className="mt-8 text-white font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60">
                      Loading Assets {percent}%
                    </motion.span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed flex flex-col justify-center items-center tracking-[1rem]"
                  >
                    <motion.div
                      className="text-[clamp(32px,8vw,9rem)] text-center"
                      style={{
                        color: "#edd9ffcf",
                        textShadow: "0px 0px 3rem #8400ff",
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      U N R E A L V I Z
                    </motion.div>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "#fff",
                        color: "#000",
                        boxShadow: "0 0 40px rgba(255,255,255,0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsReady(true);
                        setTimeout(() => startExperience(), 100);
                      }}
                      className="fixed bottom-[20vh] py-4 pl-12 pr-12 border border-white/30 text-white rounded-full font-bold uppercase tracking-[0.4em] transition-all duration-500 flex items-center justify-center text-xs md:text-sm"
                    >
                      START EXPERIENCE
                    </motion.button>

                    <div className="fixed bottom-8 md:bottom-12 text-[8px] md:text-[10px] text-white tracking-[0.5em] uppercase text-center px-4">
                      © 2025 Studio Unreal Viz
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>{children}</div>
    </>
  );
};

export default InitialLoader;
