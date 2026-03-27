"use client";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      id="testimonials"
      className="h-screen flex flex-col justify-center items-center w-full py-16"
      style={{
        background: "linear-gradient(355deg, rgb(44, 0, 87), rgb(12, 0, 22))",
      }}
    >
      {/* Header */}
      <motion.div className="relative w-full pb-10 flex flex-col justify-center items-center">
        <h3 className="text-[clamp(2.5rem,7vw,8rem)] text-gray-200/90 font-semibold tracking-widest mb-2">
          TESTIMONIALS
        </h3>
        <p className="relative z-10 font-bold uppercase pl-4 pr-4 text-[clamp(0.7rem,1.2vw,2rem)]  text-center text-gray-100/90">
          Real feedback from those who trusted our work.
        </p>
      </motion.div>
      {/* Carousel */}
      <motion.div className="relative flex flex-col justify-center items-center mt-10">
        <div className="w-[90vw] lg:w-[80vw] 2xl:w-[70vw]">
          <Carousel className="overflow-hidden">
            <CarouselContent className="-ml-1 flex gap-5">
              {[
                {
                  stars: 5,
                  comment:
                    "Unrealviz is an incredible resource for anybody setting up Github with their Unreal project for the first time. He has trained me and my team in best practices as well, helping us avoid many of the common pitfalls we wouldn't have known of along the way, setting us up for success. Highly recommend!",
                  name: "yosoyjonlau",
                  from: "United States",
                  img: "/reviews/profile-image/yosoyjonlau.png",
                },
                {
                  stars: 5,
                  comment:
                    "Working with the Unreal Viz team has been an outstanding experience. They bring both deep technical expertise and a strong sense of personality to the project, making collaboration seamless and enjoyable. More importantly, they've consistently gone above and beyond expectations—demonstrating not only the skills we need in a development partner, but also the drive and commitment to push this project toward success.",
                  name: 'Jon "The Chairman" Lau',
                  from: "BallBuds",
                  img: "/reviews/profile-image/Jon_'The_Chairman'_Lau.avif",
                },
                {
                  stars: 5,
                  comment:
                    "Unrealviz was polite enough to give me a discount on a very complex project as well as being collaborative. He did what I asked for and beyond. He was always ready to help! A Professional Freelancer indeed!",
                  name: "khallfasm98",
                  from: "United Arab Emirates",
                  img: "/reviews/profile-image/khallfasm98.png",
                },
                {
                  stars: 5,
                  comment:
                    "The seller helped me to work with Unreal in a more meaningful manner and was working hard to show me progress before completing the order. He had excellent communication all throughout the project. He cares about his work on here.",
                  name: "cataclysmicjedi",
                  from: "United States",
                  img: "/reviews/profile-image/cataclysmicjedi.png",
                },
                {
                  stars: 5,
                  comment:
                    "best unreal engine teacher on fiverr. if you need to learn: 1. how to make levels in unreal engine 2. how to make cut scenes in unreal engine this artist is an amazing help",
                  name: "tru_comics",
                  from: "United States",
                  img: "/reviews/profile-image/tru_comics.jpg",
                },
                {
                  stars: 5,
                  comment:
                    "I had a very good experience working with Unrealviz. He responded quickly, and showed careful attention to my requests. He was flexible and cooperative. I would definitely recommend him for anyone wanting work done on Unreal Engine.",
                  name: "gannon911",
                  from: "United States",
                  img: "/reviews/profile-image/default-avatar.avif",
                },
                {
                  stars: 5,
                  comment:
                    "Unrealviz truly sets the bar HIGH in game development! His work not only met but exceeded expectations with expert coding and impeccable attention to detail. Partnering with him was a breeze thanks to his perfect communication, fluency in language, and deep understanding of my needs—I've learned so much! 🙌 Looking forward to collaborating 100% again.",
                  name: "bloodytrack",
                  from: "Czech Republic",
                  img: "/reviews/profile-image/default-avatar.avif",
                },
                {
                  stars: 5,
                  comment:
                    "Really great experience! Will work with him again for sure!",
                  name: "vgrosso",
                  from: "United States",
                  img: "/reviews/profile-image/default-avatar.avif",
                },
              ].map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex overflow-visible"
                >
                  <div
                    className={`${testimonial.name == 'Jon "The Chairman" Lau' && "animated-Card bg-transparent! "} overflow-visible relative bg-white shadow-xl rounded-lg p-6 2xl:p-8 flex flex-col justify-between items-center text-center w-full max-w-xs 2xl:max-w-sm`}
                  >
                    {/* Profile Image */}
                    <div>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 2xl:w-24 2xl:h-24 rounded-full object-cover mb-2"
                      />

                      {/* Star Ratings */}
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className="text-orange-400 text-xl">
                            {i + 0.5 < testimonial.stars ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="italic text-gray-700 mb-4 text-[clamp(0.875rem,0.8vw,2rem)]">
                      {testimonial.comment}
                    </p>

                    {/* Name & from */}
                    <div>
                      <p className="text-gray-600 text-[clamp(0.875rem,0.8vw,1.5rem)]">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-[clamp(0.75rem,0.6vw,1rem)]">
                        {testimonial.from}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
      {/* buttons */}
      <div className="py-8">
        <p className="text-justify font-semibold text-gray-400 text-[clamp(0.8rem,1vw,1.5rem)] italic">
          Swipe Left or Right
        </p>
      </div>
    </section>
  );
};

export default Section4;
