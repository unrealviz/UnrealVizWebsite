import * as motion from "motion/react-client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section5 = () => {
  return (
    <section className="h-[80vh] flex items-center w-full py-16">
      {/* <SponsorsSection /> */}
      <FAQSection />
    </section>
  );
};

export default Section5;

// Sponsors
const SponsorsSection = () => {
  const items = ["/assets/js.ico", "/assets/js.ico", "/assets/js.ico"];

  return (
    <motion.div className="relative w-full flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Title */}
      <h1
        className="relative z-10 font-bold text-center text-gray-100/90
        text-[clamp(1.8rem,2.5vw,4rem)] max-w-225"
      >
        The partners who help power our journey.
      </h1>

      {/* ---------- MOBILE (flex wrap) ---------- */}
      <ul className="mt-[6vh] flex flex-wrap justify-center gap-6 md:hidden">
        {items.map((item, i) => (
          <li key={i}>
            <Image
              className="object-cover
              w-[clamp(3rem,10vw,5rem)]
              h-[clamp(3rem,10vw,5rem)]"
              src={item}
              height={200}
              width={200}
              alt="sponsors logo"
            />
          </li>
        ))}
      </ul>

      {/* ---------- DESKTOP (infinite scroll) ---------- */}
      <div className="overflow-hidden w-full hidden md:block">
        <motion.ul
          className="mt-[8vh] flex flex-nowrap gap-[clamp(2rem,6vw,5rem)]"
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <li key={i} className="shrink-0">
              <Image
                className="object-cover
                w-[clamp(3rem,6vw,7rem)]
                h-[clamp(3rem,6vw,7rem)]"
                src={item}
                height={200}
                width={200}
                alt="sponsors logo"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

// FAQ
const FAQSection = () => {
  const items = [
    {
      value: "item-1",
      trigger: "How do I reset my password?",
      content:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
    {
      value: "item-2",
      trigger: "Can I change my subscription plan?",
      content:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
      value: "item-3",
      trigger: "What payment methods do you accept?",
      content:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
  ];

  return (
    <motion.div
      className="
      relative w-full 
      flex flex-col lg:flex-row
      gap-[clamp(2rem,8vw,6rem)]
      justify-center items-center
      overflow-hidden
      px-6
    "
    >
      {/* FAQ Title */}
      <h1
        className="
        font-bold text-center text-gray-100/90 leading-none
        text-[clamp(4rem,14vw,11rem)]
      "
      >
        FAQ<span className="text-pink-600">.</span>
      </h1>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full lg:max-w-150"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-[clamp(0.9rem,1.2vw,1.2rem)]">
              {item.trigger}
            </AccordionTrigger>

            <AccordionContent className="text-[clamp(0.85rem,1vw,1.1rem)] text-gray-300">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};
