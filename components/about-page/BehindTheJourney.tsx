"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Milestone = {
  year: number;
  title: string;
  description: string;
  image: string;
};

const milestones: Milestone[] = [
  {
    year: 1986,
    title: "The Birth of Travel Agencies",
    description:
      "The first-ever travel agency was founded by Thomas Cook in England. He organized group trips, starting with a railway excursion for 500 people. Thomas Cook expanded his services internationally, arranging trips to Paris and beyond. He introduced the first-ever travel brochure, guiding travelers on destinations & routes. Luxury cruises and organized tours gained popularity, especially among the elite.",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: 1996,
    title: "Global Connectivity",
    description:
      "The expansion of airline networks and the internet began to revolutionize how people booked travel. Travel agents became the gatekeepers to exclusive deals and personalized itineraries.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: 2006,
    title: "Digital Revolution",
    description:
      "Online travel agencies emerged, giving power to the consumers. However, the need for personalized expertise remained, leading to a new era of specialized travel consultancy.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: 2016,
    title: "Experience Over Destination",
    description:
      "Travelers started valuing unique, local experiences over standard sightseeing. Sustainable and eco-friendly travel became a major focus for agencies.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: 2022,
    title: "Post-Pandemic Revival",
    description:
      "The world reopened with a vengeance. 'Revenge travel' saw people exploring off-the-beaten-path destinations, valuing safety and flexibility more than ever.",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: 2023,
    title: "AI & Personalization",
    description:
      "We integrated advanced AI to curate hyper-personalized journeys, ensuring every trip is as unique as the traveler themselves, while maintaining the human touch.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10738b8?auto=format&fit=crop&q=80&w=600",
  },
];

const BehindTheJourney = () => {
  const [activeYear, setActiveYear] = useState(1986);

  const activeMilestone = milestones.find((m) => m.year === activeYear);

  return (
    <section className="py-20 md:py-32 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Behind The Journey
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            With years of experience in the travel industry, we specialize in
            crafting personalized journeys.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-20 md:mb-32">
          {/* Connecting Line Base */}
          <div className="absolute top-[85px] left-0 w-full h-[2px] bg-gray-300 z-0 hidden md:block" />

          <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-y-12 relative z-10 max-w-6xl mx-auto">
            {milestones.map((item) => {
              const isActive = activeYear === item.year;

              return (
                <div
                  key={item.year}
                  className="flex flex-col items-center cursor-pointer group w-1/3 md:w-auto"
                  onClick={() => setActiveYear(item.year)}
                >
                  {/* Image Circle */}
                  <div
                    className={`relative rounded-full overflow-hidden transition-all duration-500 ease-out border-4 ${
                      isActive
                        ? "w-24 h-24 md:w-40 md:h-40 border-blue-500 shadow-2xl scale-110"
                        : "w-16 h-16 md:w-32 md:h-32 border-transparent grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Year Label */}
                  <div className="mt-6 text-center relative">
                    <span
                      className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {item.year}
                    </span>
                    {/* Dot on line */}
                    <div
                      className={`absolute -top-[52px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 hidden md:block ${
                        isActive ? "bg-blue-600 w-5 h-5" : "bg-blue-400"
                      }`}
                      style={{ marginTop: isActive ? "-10px" : "0" }} // Adjust for larger circle
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto text-center min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeMilestone && (
              <motion.div
                key={activeMilestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {activeMilestone.year} – {activeMilestone.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {activeMilestone.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BehindTheJourney;
