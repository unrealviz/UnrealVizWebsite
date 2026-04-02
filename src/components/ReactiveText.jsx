"use client";
import { useEffect, useRef } from "react";
import { Nunito } from "next/font/google";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

const nunito = Nunito({ subsets: ["latin"] });

export default function ReactiveText() {
  const stageRef = useRef(null);
  const textContainerRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    let rAF_Id;

    document.fonts.ready.then(() => {
      const symbols = [
        "A g 9 $ x S 4 ! k Z 7 % B q * 2 m & L 8 @ P t 3 ^ y D 5 # c R 0 ( j W 6 ) F + v 1 = n H ? u K - Q / b V 9 : T",
        "4 r ! H 2 $ Z a 7 % k P 9 & t L 3 * q N 5 @ S 0 ^ B g 1 # d Y 6 ( v U 8 ) C + x F ? m R - j W / T : e V",
        "Q 5 * z A 1 $ c L 9 ! v B 7 % t H 2 @ P r 8 ^ d K 3 & X u 4 # Y 6 ( g W 0 ) s Z + J m ? n F - T / V : E",
        "8 f % R 2 ! Y b 6 $ q T 0 & P m 4 * Z s 9 @ L 5 ^ V c 1 # k H 7 ( x U 3 ) G + n J ? W a - E / D : t S",
        "Z 4 ^ p A 7 $ B c 3 ! r 0 % Y T 8 & u V 6 * H L 5 @ m 2 # d J 9 ( Q W 1 ) s R + k F ? x N - g / E : t",
        "1 A % g T 7 ! m Z 4 $ R 9 & P 2 * s B 6 @ Y L 3 ^ d U 8 # W q 5 ( X v 0 ) H + c K ? j F - e / V : t",
        "K 7 $ r 4 ! T A 9 % u H 3 & Z q 8 * s L 5 @ d W 2 ^ Y P 1 # c B 0 ( J F 6 ) m V + g Q ? x E - n / t : S",
        "3 P ! b Z 6 $ L 8 % R Y 2 & k F 7 * v U 4 @ H c 5 ^ W A 1 # d J 9 ( t N 0 ) m V + q X ? g E - s / T : K",
        "S 9 $ t Q 5 ! W R 1 % n A 7 & k B 3 * Z H 8 @ Y 6 ^ u F 4 # L d 2 ( J g 0 ) V + P m ? X E - c / r : T",
        "V 0 ! B g 5 $ U 7 % Z r 9 & L 4 * d N 3 @ P H 6 ^ T 8 # A c 2 ( W m 1 ) Y + k Q ? x F - s / E : J",
        "7 g ! T Y 2 $ B 4 % Z r 1 & H q 5 * U c 3 @ V 9 ^ A m 0 # J W 8 ( F L 6 ) n + P X ? s E - k / d : R",
        "M 3 ! v Q 9 $ Z r 1 % F H 7 & k B 2 * s T 8 @ W d 6 ^ Y c 0 # A P 4 ( L n 5 ) U + X g ? E - J / t : R",
        "E 8 $ R Z 2 ! P a 6 % n H 4 & J g 9 * U t 1 @ B W 3 ^ d Y 7 # F q 5 ( K c 0 ) X + V m ? s T - r / L : A",
        "2 k ! U F 8 $ Z P 4 % A t 1 & V q 7 * R Y 3 @ H m 6 ^ W d 5 # g B 0 ( J L 9 ) n + X c ? T E - s / r : Q",
        "Y 1 $ n Z 5 ! T R 3 % B H 7 & U F 2 * q P 8 @ V L 6 ^ A g 4 # d W 9 ( c J 0 ) m + s X ? E - K / r : t",
        "G 6 ! T m 9 $ Q 2 % V r 7 & P W 4 * L Z 8 @ B s 5 ^ H A 3 # d Y 1 ( k F 0 ) X + n U ? E - c / J : t",
        "t 5 $ Y 9 ! F R 4 % Z H 8 & m A 3 * P g 6 @ L Q 7 ^ d V 2 # B W 1 ( n U 0 ) X + c J ? E - s / k : T",
        "D 0 ! P B 6 $ Z Y 2 % t H 4 & R n 7 * W A 8 @ m U 3 ^ L c 1 # q V 9 ( g F 5 ) X + K J ? E - s / r : T",
        "6 r ! Z T 2 $ A m 9 % H V 7 & B P 4 * s Q 1 @ W Y 5 ^ F d 3 # c U 8 ( L g 0 ) X + n J ? E - k / t : R",
        "X 3 $ F A 7 ! V g 9 % R Y 1 & B P 4 * U s 6 @ Z H 5 ^ T c 8 # W d 2 ( L m 0 ) Q + J n ? E - k / r : t",
      ];

      const text = symbols.join(" ");
      console.log(text);

      const fontSize = 32;
      const lineHeight = 40;
      const fontConfig = `bold ${fontSize}px ${nunito.style.fontFamily}`;
      const prepared = prepareWithSegments(text, fontConfig);

      const updateLayout = () => {
        if (!stageRef.current || !textContainerRef.current) return;

        const stageRect = stageRef.current.getBoundingClientRect();
        const mouseRadius = 40;
        const padding = 20;

        textContainerRef.current.textContent = "";
        const fragment = document.createDocumentFragment();

        let cursor = { segmentIndex: 0, graphemeIndex: 0 };
        let currentY = 0;
        let safety = 0;

        while (safety < 500) {
          safety++;
          const lineYStart = stageRect.top + currentY;
          const lineYEnd = lineYStart + lineHeight;

          const isOverlappingY =
            mousePos.current.y > lineYStart - 10 &&
            mousePos.current.y < lineYEnd + 10;

          const obsLeft = mousePos.current.x - mouseRadius - stageRect.left;
          const obsRight = mousePos.current.x + mouseRadius - stageRect.left;
          const stageWidth = stageRef.current.offsetWidth - padding;

          const createLineDiv = (content, x, width) => {
            const div = document.createElement("div");
            div.textContent = content;
            div.style.position = "absolute";
            div.style.left = `${x}px`;
            div.style.top = `${currentY}px`;
            div.style.width = `${width}px`;
            div.style.height = `${lineHeight}px`;
            div.style.fontSize = `${fontSize}px`;
            div.style.fontWeight = "bold";
            div.style.whiteSpace = "nowrap";
            div.style.color = "#e8e4dc";
            return div;
          };

          if (isOverlappingY && obsLeft > 50 && obsRight < stageWidth - 50) {
            // Split into LEFT and RIGHT chunks
            const leftWidth = obsLeft - 10;
            const leftLine = layoutNextLine(prepared, cursor, leftWidth);
            if (leftLine) {
              fragment.appendChild(createLineDiv(leftLine.text, 0, leftWidth));
              cursor = leftLine.end;
            }

            const rightWidth = stageWidth - obsRight;
            const rightLine = layoutNextLine(prepared, cursor, rightWidth);
            if (rightLine) {
              fragment.appendChild(
                createLineDiv(rightLine.text, obsRight, rightWidth),
              );
              cursor = rightLine.end;
            }
          } else if (isOverlappingY && obsLeft <= 50) {
            // Mouse is at the far left
            const availableWidth = stageWidth - obsRight;
            const line = layoutNextLine(prepared, cursor, availableWidth);
            if (line) {
              fragment.appendChild(
                createLineDiv(line.text, obsRight, availableWidth),
              );
              cursor = line.end;
            }
          } else {
            // No collision or mouse at far right
            const availableWidth = isOverlappingY ? obsLeft : stageWidth;
            const line = layoutNextLine(prepared, cursor, availableWidth);
            if (line) {
              fragment.appendChild(createLineDiv(line.text, 0, availableWidth));
              cursor = line.end;
            }
          }

          if (
            cursor.segmentIndex >= prepared.segments.length - 1 &&
            safety > 10
          ) {
            const probe = layoutNextLine(prepared, cursor, 1000);
            if (!probe) break;
          }

          currentY += lineHeight;
        }

        textContainerRef.current.appendChild(fragment);
      };

      const handleMouseMove = (e) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
      };

      const handleMouseLeave = () => {
        mousePos.current = { x: -1000, y: -1000 };
      };

      const animate = () => {
        updateLayout();
        rAF_Id = requestAnimationFrame(animate);
      };

      window.addEventListener("mousemove", handleMouseMove);
      stageRef.current.addEventListener("mouseleave", handleMouseLeave);
      rAF_Id = requestAnimationFrame(animate);
    });

    // return () => {
    //   if (rAF_Id) cancelAnimationFrame(rAF_Id);
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  return (
    <main className="flex items-center justify-center h-full w-full bg-[#0a0a0c]">
      <div
        id="stage"
        className={`${nunito.className} relative h-full w-full overflow-hidden cursor-none`}
        ref={stageRef}
      >
        <div ref={textContainerRef} className="relative z-10 w-full h-full" />
      </div>
    </main>
  );
}
