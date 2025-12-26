"use client";

import React from "react";
import { Luggage, Tag, Headset, Medal } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const features = [
  {
    icon: <Luggage className="w-8 h-8 text-black" />,
    title: "Expertly Curated Tours.",
    bgColor: "bg-[#E9F8B5]", // Lime/Greenish
  },
  {
    icon: <Tag className="w-8 h-8 text-white" />,
    title: "Affordable & Flexible Packages.",
    bgColor: "bg-[#EEEEEE]", // Gray
  },
  {
    icon: <Headset className="w-8 h-8 text-black" />,
    title: "24/7 Customer Support.",
    bgColor: "bg-[#E0E0FF]", // Light Purple
  },
  {
    icon: <Medal className="w-8 h-8 text-black" />,
    title: "Certified & Experienced Guides.",
    bgColor: "bg-[#B8EBC8]", // Light Green
  },
];

const WhyTravelWithUs = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Travel with Us?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
            We specialize in crafting personalized journeys that suit every
            traveler’s dream.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`${feature.bgColor} rounded-[2rem] p-8 min-h-[250px] flex flex-col justify-center items-start transition-all duration-300 shadow-sm hover:shadow-xl`}
            >
              <div className="mb-6">
                {/* Icon wrapper/decoration could go here */}
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;
