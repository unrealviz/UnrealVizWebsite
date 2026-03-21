"use client";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      <motion.div className="relative w-full pb-10 flex flex-col justify-center items-center overflow-hidden">
        <h3 className="text-[clamp(2.5rem,7vw,8rem)] text-gray-200/90 font-semibold tracking-widest mb-2">
          TESTIMONIALS
        </h3>
        <p className="relative z-10 font-bold uppercase pl-4 pr-4 text-[clamp(0.7rem,1.2vw,2rem)]  text-center text-gray-100/90">
          Real feedback from those who trusted our work.
        </p>
      </motion.div>
      {/* Carousel */}
      <motion.div className="relative flex flex-col justify-center items-center mt-10">
        <div className="w-[90vw] lg:w-[80vw] 2xl:w-[70vw] max-w-450">
          <Carousel className="overflow-hidden">
            <CarouselContent className="-ml-1 flex gap-5 justify-center">
              {[
                {
                  stars: 5,
                  comment:
                    "Working with them was an absolute delight. They understood our vision perfectly and brought it to life with precision and style. Their commitment to excellence is evident in every detail.",
                  name: "Alice Johnson",
                  company: "Tech Solutions Inc.",
                  img: "/assets/default-avatar.avif",
                },
                {
                  stars: 4.5,
                  comment:
                    "Exceptional service from start to finish! They combine creativity, skill, and excellent communication to deliver results that truly stand out. I highly recommend them to anyone looking for quality and reliability.",
                  name: "Bob Smith",
                  company: "Creative Co.",
                  img: "/assets/default-avatar.avif",
                },
                {
                  stars: 5,
                  comment:
                    "The level of professionalism and expertise this team brings is unmatched. They listened carefully, executed flawlessly, and made the entire process enjoyable. I'm thoroughly impressed and will definitely work with them again.",
                  name: "Carla Reyes",
                  company: "InnovateX",
                  img: "/assets/default-avatar.avif",
                },
                {
                  stars: 4,
                  comment:
                    "From the first consultation to the final delivery, the experience was seamless. Their creativity, attention to detail, and dedication really set them apart. I highly recommend them to anyone seeking top-notch service.",
                  name: "Daniel Lee",
                  company: "BuildIt",
                  img: "/assets/default-avatar.avif",
                },
                {
                  stars: 5,
                  comment:
                    "I couldn't be happier with the results! The team was professional, responsive, and incredibly skilled. They took the time to understand exactly what we needed and delivered a solution that went beyond our expectations. Truly outstanding work.",
                  name: "Eva Martinez",
                  company: "DesignHub",
                  img: "/assets/default-avatar.avif",
                },
              ].map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex justify-center"
                >
                  <div className="bg-white shadow-xl rounded-lg p-6 2xl:p-8 flex flex-col justify-between items-center text-center w-full max-w-xs 2xl:max-w-sm">
                    {/* Profile Image */}
                    <div>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 2xl:w-24 2xl:h-24 rounded-full object-cover mb-4"
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

                    {/* Name & Company */}
                    <div>
                      <p className="text-gray-600 text-[clamp(0.875rem,0.8vw,1.5rem)]">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-[clamp(0.75rem,0.6vw,1rem)]">
                        {testimonial.company}
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
