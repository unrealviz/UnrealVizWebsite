"use client";
import React, { useRef } from "react";
import HomepageSectionTwoScene from "./scenes/HomepageSectionTwoScene";

export default function InterectiveLetters() {
  return (
    <HomepageSectionTwoScene
      sceneRef={sceneRef}
      customCSS={"pointer-events-none z-100"}
    />
  );
}
