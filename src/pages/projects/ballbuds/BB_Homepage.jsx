"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import LenisKeyboardScroll from "@/components/LenisKeyboardScroll";
import Navbar from "@/components/Navbar";
import BB_Section1 from "@/pages/projects/ballbuds/BB_Section1";
import BB_Section2 from "@/pages/projects/ballbuds/BB_Section2";
import BB_Section3 from "@/pages/projects/ballbuds/BB_Section3";
import BB_Section4 from "@/pages/projects/ballbuds/BB_Section4";
import BB_Section5 from "@/pages/projects/ballbuds/BB_Section5";
import BB_Section6 from "@/pages/projects/ballbuds/BB_Section6";
import useDisplayStore from "@/store/useDisplayStore";
import Footer from "@/components/Footer";

const Homepage = () => {
  // setup isDesktop from zustand
  const isDesktop = useDisplayStore((state) => state.isDesktop);
  useEffect(() => {
    useDisplayStore.getState().initialize();
  }, []);

  // Smooth Scroll useEffect (Lenis)
  useEffect(() => {
    if (!isDesktop) {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, [isDesktop]);

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Modes", id: "gamemodes" },
    { name: "Editions", id: "gameeditions" },
  ];

  const foooterLinks = [
    { name: "Features", id: "features" },
    { name: "Modes", id: "gamemodes" },
    { name: "Editions", id: "gameeditions" },
  ];

  return (
    <main className="min-h-screen relative text-white overflow-clip sm:overflow-visible">
      {/* Enable keybaord scroll */}
      {isDesktop && <LenisKeyboardScroll />}

      <Navbar navLinks={navLinks} />

      <BB_Section1 isDesktop={isDesktop} />

      <BB_Section2 isDesktop={isDesktop} />

      <BB_Section3 />

      <BB_Section4 isDesktop={isDesktop} />

      <BB_Section5 isDesktop={isDesktop} />

      <BB_Section6 />

      <Footer isDesktop={isDesktop} navLinks={foooterLinks} />
    </main>
  );
};

export default Homepage;
