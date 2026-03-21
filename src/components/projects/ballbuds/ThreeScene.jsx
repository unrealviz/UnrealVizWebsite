"use client";
import { useEffect, useRef } from "react";
import { BallbudsScene } from "@/lib/ballbuds-scene";

export default function ThreeScene({
  sceneRef,
  modelUrl,
  keyframes,
  lightGui,
  lightColorIntensityPosition,
  customCSS,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new BallbudsScene(
      mountRef.current,
      modelUrl,
      keyframes,
      lightGui,
      lightColorIntensityPosition,
    );
    if (sceneRef) sceneRef.current = scene;
    return () => {
      scene.dispose();
      if (sceneRef) sceneRef.current = null;
    };
  }, [sceneRef, modelUrl, keyframes, lightGui, lightColorIntensityPosition]);

  return <div ref={mountRef} className={`absolute inset-0 ${customCSS}`} />;
}
