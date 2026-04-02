"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Nunito } from "next/font/google";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";
import { style } from "motion/react-client";

const nunito = Nunito({ subsets: ["latin"] });

export default function ReactiveText() {
  const stageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Join with NO spaces for a dense "Matrix" wall effect
    const symbolsRaw = [
      "Ag9$xS4!kZ7%Bq*2m&L8@Pt3^yD5#cR0(jW6)F+v1=nH?uK-Q/bV9:T",
      "4r!H2$Za7%kP9&tL3*qN5@S0^Bg1#dY6(vU8)C+xF?mR-jW/T:eV",
      "Z4^pA7$Bc3!r0%YT8&uV6*HL5@m2#dJ9(QW1)sR+kF?xN-g/E:t",
      "c1#kH7(xU3)G+nJ?Wa-E/D:tS8f%R2!Yb6$qT0&Pm4*Zs9@L5^V",
    ].join("");

    const fontSize = 18;
    const lineHeight = 20;

    document.fonts.ready.then(() => {
      const fontConfig = `bold ${fontSize}px ${nunito.style.fontFamily}`;
      const prepared = prepareWithSegments(symbolsRaw, fontConfig);

      const createLineSpan = (content, x, width, y) => {
        const Span = document.createElement("span");
        Span.textContent = content;
        Span.style.cssText = `
          position:absolute;
          left:${x}px; 
          top:${y}px; 
          width:${width}px; 
          height:${lineHeight}px; 
          font-size:${fontSize}px; 
          font-weight:bold; 
          white-space:nowrap; 
          color:#ffffff;
          pointer-events: none;
          overflow: hidden;
          display: block;
          word-break: break-all;
        `;
        return Span;
      };

      const updateLayout = () => {
        if (!stageRef.current || !textContainerRef.current) return;

        const stageRect = stageRef.current.getBoundingClientRect();
        const obstacleElements = document.querySelectorAll(".text-obstacle");

        const obstacles = Array.from(obstacleElements)
          .map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              top: rect.top - stageRect.top,
              bottom: rect.bottom - stageRect.top,
              left: rect.left - stageRect.left,
              right: rect.right - stageRect.left,
            };
          })
          .filter((obs) => obs.bottom > 0 && obs.top < stageRect.height);

        const fragment = document.createDocumentFragment();
        let cursor = { segmentIndex: 0, graphemeIndex: 0 };
        let currentY = 0;
        let safety = 0;

        // FIXED: Robust seamless filling logic
        const fillWidthSeamlessly = (targetWidth) => {
          let combinedText = "";
          let remainingWidth = targetWidth;
          let localSafety = 0;

          while (remainingWidth > 2 && localSafety < 10) {
            localSafety++;

            // Bounds Check: If cursor is at or beyond the last segment, reset to start
            if (cursor.segmentIndex >= prepared.segments.length) {
              cursor = { segmentIndex: 0, graphemeIndex: 0 };
            }

            const line = layoutNextLine(prepared, cursor, remainingWidth);

            if (!line || line.text.length === 0) {
              cursor = { segmentIndex: 0, graphemeIndex: 0 };
              continue;
            }

            combinedText += line.text;
            cursor = line.end;
            remainingWidth -= line.width;

            // Check if this specific line call exhausted the pool
            if (cursor.segmentIndex >= prepared.segments.length) {
              cursor = { segmentIndex: 0, graphemeIndex: 0 };
            }
          }
          return combinedText;
        };

        while (safety < 1500 && currentY < stageRect.height) {
          safety++;

          const lineTop = currentY;
          const lineBottom = currentY + lineHeight;
          const lineCollisions = obstacles
            .filter((obs) => lineTop < obs.bottom && lineBottom > obs.top)
            .sort((a, b) => a.left - b.left);

          let currentX = 0;
          const margin = 12; // Gap between text and boxes

          if (lineCollisions.length > 0) {
            lineCollisions.forEach((collision) => {
              const gapWidth = collision.left - margin - currentX;
              if (gapWidth > 2) {
                const text = fillWidthSeamlessly(gapWidth);
                fragment.appendChild(
                  createLineSpan(text, currentX, gapWidth, currentY),
                );
              }
              currentX = collision.right + margin;
            });

            const finalWidth = stageRect.width - currentX;
            if (finalWidth > 2) {
              const text = fillWidthSeamlessly(finalWidth);
              fragment.appendChild(
                createLineSpan(text, currentX, finalWidth, currentY),
              );
            }
          } else {
            const text = fillWidthSeamlessly(stageRect.width);
            fragment.appendChild(
              createLineSpan(text, 0, stageRect.width, currentY),
            );
          }
          currentY += lineHeight;
        }

        textContainerRef.current.replaceChildren(fragment);
      };

      let ticking = false;
      const throttledUpdate = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateLayout();
            ticking = false;
          });
          ticking = true;
        }
      };

      updateLayout();
      window.addEventListener("scroll", throttledUpdate);
      window.addEventListener("resize", throttledUpdate);

      return () => {
        window.removeEventListener("scroll", throttledUpdate);
        window.removeEventListener("resize", throttledUpdate);
      };
    });
  }, []);

  // const { scrollYProgress } = useScroll({
  //   target: stageRef,
  //   offset: ["start end", "end end"],
  // });
  // // [element, container]
  // const Reactivetext_y = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["100vh", "0vh"],
  // );

  return (
    <motion.div
      // style={{
      //   y: Reactivetext_y,
      // }}
      ref={stageRef}
      className="absolute inset-0 w-full h-screen pointer-events-none overflow-hidden z-0"
    >
      <div
        ref={textContainerRef}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          contain: "paint layout",
        }}
        className="w-full h-full relative"
      />
    </motion.div>
  );
}
