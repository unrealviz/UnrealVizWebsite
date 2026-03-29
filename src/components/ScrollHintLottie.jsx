"use client";

import Lottie from "lottie-react";
import MouseScrollGif from "@/assets/LottieGifs/mouse-scroll.json";
import TwoArrowGif from "@/assets/LottieGifs/2Arrow.json";

export function MouseScrollLottie() {
  return <Lottie loop={true} animationData={MouseScrollGif} />;
}
export function ArrowKeyLottie() {
  return <Lottie loop={true} animationData={TwoArrowGif} />;
}
