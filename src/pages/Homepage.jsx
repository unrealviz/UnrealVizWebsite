import Footer from "@/components/Footer";
import Section1 from "@/pages/Section1";
import Section4 from "@/pages/Section4";
import Section5 from "@/pages/Section5";

// client components
import Navbar from "@/components/Navbar";
import Section2 from "@/pages/Section2";
import Section3 from "@/pages/Section3";
import LenisAndKeyboardScroll from "@/components/LenisAndKeyboardScroll";
import DesktopOnly from "@/components/DesktopOnly";

const Homepage = () => {
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
      <DesktopOnly>
        <LenisAndKeyboardScroll />
      </DesktopOnly>

      <main>
        <Navbar navLinks={navLinks} />

        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />

        {/* Sponsors and FAQ Section */}
        <Section5 />

        <Footer navLinks={foooterLinks} />
      </main>
    </>
  );
};

export default Homepage;
