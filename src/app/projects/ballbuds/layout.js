import { ReactLenis } from "lenis/react";

export const metadata = {
  title: "Unreal Viz | BallBuds Game Project",
  description:
    "A featured project by Unreal Viz — BallBuds, a first-person open-world monster-tamer game built with Unreal Engine 5, featuring immersive environments, creature design, and cinematic gameplay experiences.",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <ReactLenis root>{children}</ReactLenis>
    </div>
  );
}
