import React from "react";
import { Luggage, Tag, Headset, Medal } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Travel with Us?
          </h2>
          <p className="text-gray-600 text-lg">
            We specialize in crafting personalized journeys that suit every
            traveler’s dream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-[2rem] p-8 min-h-[250px] flex flex-col justify-center items-start transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="mb-6">
                {/* Icon wrapper/decoration could go here */}
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;
