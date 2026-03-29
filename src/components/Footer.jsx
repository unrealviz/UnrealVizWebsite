import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DesktopOnly from "@/components/DesktopOnly";
import {
  FooterContactForm,
  Navigation,
} from "./FooterContactFormAndNavigation";

export default function Footer({ navLinks }) {
  return (
    <footer
      id="footer"
      className="relative h-[70vh] md:h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[70vh] md:h-[80vh] w-full">
        <FooterContent navLinks={navLinks} />
      </div>
    </footer>
  );
}

function FooterContent({ navLinks }) {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-12 h-full w-full flex flex-col justify-end items-center">
      <Section1 navLinks={navLinks} />
      <Section2 />
    </div>
  );
}

const Section1 = ({ navLinks }) => {
  return (
    <div className="relative h-full w-full md:w-[90%] flex flex-row justify-between items-start gap-2 md:gap-6">
      <GetInTouch />
      <DesktopOnly>
        <Navigation navLinks={navLinks} />
      </DesktopOnly>
      <FooterContactForm />
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-start">
      <h3 className="text-gray-400 font-bold tracking-widest uppercase text-[clamp(1.125rem,1.5vw,2rem)]">
        Get in touch
      </h3>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:official@unrealviz.studio"
          className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-colors duration-300 group"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400/50 group-hover:text-gray-400 text-[clamp(0.875rem,1.2vw,1.25rem)]"
          />
          <p className="text-[clamp(0.875rem,1vw,1.125rem)]">
            official@unrealviz.studio
          </p>
        </a>

        <a
          href="tel:+880123456789"
          className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-colors duration-300 group"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="text-gray-400/50 group-hover:text-gray-400 text-[clamp(0.875rem,1.2vw,1.25rem)]"
          />
          <p className="text-[clamp(0.875rem,1vw,1.125rem)]">+91 91477 34212</p>
        </a>
      </div>

      <div className="flex flex-row gap-5 pt-2">
        <a
          href="https://in.linkedin.com/company/unrealviz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(1.5rem,2vw,2.5rem)] text-gray-500 hover:text-[#0077b5] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-row justify-center items-end md:items-end gap-6">
      <h1 className="footerh1 text-[clamp(3rem,9vw,10rem)] leading-[0.8] font-bold">
        Unreal Viz
      </h1>
      <p className="text-gray-400 text-[clamp(1rem,1vw,3rem)]">©2025</p>
    </div>
  );
};
