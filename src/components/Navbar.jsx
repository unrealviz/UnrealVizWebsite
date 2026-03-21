"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Navbar = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback((id) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      style={{
        background: "rgb(10 10 10 / 40%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      className="fixed top-1 left-[0.25%] w-[99.5%] rounded-xl overflow-hidden z-150"
    >
      <div className="backdrop-blur-xl flex flex-row justify-between text-center items-center p-[clamp(01rem,0.6vw,1.5rem)]">
        {/* Logo */}
        <Link href={"/#"}>
          <span className="flex items-center gap-2 text-[clamp(0.9rem,1.3vw,1.8rem)]">
            <Image src="/logo.webp" height={60} width={40} alt="brand logo" />
            <span className="logo font-semibold text-[clamp(1.2rem,1.3vw,1.8rem)]">
              UnrealViz
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[clamp(0.85rem,0.9vw,1.2rem)]">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="uppercase text-[#e5e5e5] hover:text-[#c9c9c9] transition cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleScroll("footer")}
            className="font-bold bg-[#e5e5e5] hover:bg-[#c9c9c9] text-gray-800 px-4 py-2 rounded-xl cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 relative w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 top-3" : "top-1"
            }`}
          ></span>

          <span
            className={`absolute w-6 h-0.5 bg-white transition-none ${
              menuOpen ? "opacity-0" : "top-3"
            }`}
          ></span>

          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0 }}
          className="md:hidden px-6"
        >
          <ul className="flex flex-col gap-4 text-sm pt-8 pb-pt-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="uppercase text-[#e5e5e5]"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleScroll("footer")}
            className="mt-8 mb-8 w-full bg-[#e5e5e5] text-gray-800 py-2 rounded-xl font-semibold"
          >
            Get in touch
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
