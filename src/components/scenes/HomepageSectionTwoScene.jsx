"use client";
import { useEffect, useRef } from "react";
import { InterectiveLettersScene } from "@/lib/InterectiveLetters-scene";

export default function HomepageSectionTwoScene({ sceneRef, customCSS }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new InterectiveLettersScene(mountRef.current);
    if (sceneRef) sceneRef.current = scene;
    return () => {
      scene.dispose();
      if (sceneRef) sceneRef.current = null;
    };
  }, [sceneRef]);

  return <div ref={mountRef} className={`absolute inset-0 ${customCSS}`} />;
}
