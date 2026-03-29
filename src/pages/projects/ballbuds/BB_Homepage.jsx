import BB_Section1 from "@/pages/projects/ballbuds/BB_Section1";
import BB_Section3 from "@/pages/projects/ballbuds/BB_Section3";
import BB_Section6 from "@/pages/projects/ballbuds/BB_Section6";
import Footer from "@/components/Footer";

// client component
import Navbar from "@/components/Navbar";
import BB_Section2 from "@/pages/projects/ballbuds/BB_Section2";
import BB_Section4 from "@/pages/projects/ballbuds/BB_Section4";
import BB_Section5 from "@/pages/projects/ballbuds/BB_Section5";
import DesktopOnly from "@/components/DesktopOnly";
import LenisAndKeyboardScroll from "@/components/LenisAndKeyboardScroll";

const Homepage = () => {
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
    <>
      {/* Enable keybaord scroll */}
      <DesktopOnly>
        <LenisAndKeyboardScroll />
      </DesktopOnly>

      <main className="min-h-screen relative text-white overflow-clip sm:overflow-visible">
        <Navbar navLinks={navLinks} />

        <BB_Section1 />

        <BB_Section2 />

        <BB_Section3 />

        <DesktopOnly>
          <BB_Section4 />
        </DesktopOnly>

        <BB_Section5 />

        <BB_Section6 />

        <Footer navLinks={foooterLinks} />
      </main>
    </>
  );
};

export default Homepage;
