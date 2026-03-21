"use client";
import { useEffect } from "react";

import useDisplayStore from "@/store/useDisplayStore";

import Lenis from "lenis";

import Navbar from "@/components/Navbar";
import Section1 from "@/pages/Section1";
import Section2 from "@/pages/Section2";
import Section3 from "@/pages/Section3";
import Section4 from "@/pages/Section4";
import Section5 from "@/pages/Section5";
import Footer from "@/components/Footer";
import LenisKeyboardScroll from "@/components/LenisKeyboardScroll";
const Homepage = () => {
  // setup isDesktop from zustand
  const isDesktop = useDisplayStore((state) => state.isDesktop);
  useEffect(() => {
    useDisplayStore.getState().initialize();
  }, []);

  // Smooth Scroll useEffect (Lenis)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  });

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "About Us", id: "testimonials" },
  ];

  const foooterLinks = [
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Scroll to top", id: "home" },
  ];

  return (
    <>
      {/* Enable keybaord scroll */}
      {isDesktop && <LenisKeyboardScroll />}

      <main>
        <Navbar isDesktop={isDesktop} navLinks={navLinks} />

        <Section1 isDesktop={isDesktop} />

        <Section2 isDesktop={isDesktop} />

        <Section3 isDesktop={isDesktop} />

        <Section4 />

        {/* Sponsors */}
        {/* <Section5 /> */}

        <Footer isDesktop={isDesktop} navLinks={foooterLinks} />
      </main>
    </>
  );
};

export default Homepage;
