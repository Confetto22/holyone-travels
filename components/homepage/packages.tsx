"use client";

import Image from "next/image";
import { MapPin, ArrowRight, ExternalLink, Info } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
  hoverLift,
} from "@/lib/animation-variants";

type Package = {
  id: string;
  title: string;
  pricing: string;
  includes: string[];
  image: string;
  popular: boolean;
};

const Packages = () => {
  const packages: Package[] = [
    {
      id: "1",
      title: "Starter Guidance Package",
      pricing: "$100 - $150",
      popular: false,
      includes: [
        "Visa eligibility assessment",
        "School or pathway recommendation",
        "Document review",
        "Email support",
      ],
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    },
    {
      id: "2",
      title: "Starter Guidance Package",
      pricing: "$100 - $150",
      popular: true,
      includes: [
        "Visa eligibility assessment",
        "School or pathway recommendation",
        "Document review",
        "Email support",
      ],
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    },
    {
      id: "3",
      title: "Starter Guidance Package",
      pricing: "$100 - $150",
      popular: false,
      includes: [
        "Visa eligibility assessment",
        "School or pathway recommendation",
        "Document review",
        "Email support",
      ],
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    },
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "sale":
        return "bg-secondary text-white";
      case "solo":
      case "family":
        return "bg-primary text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Visa Support Packages
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Popular Visa Packages
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInUp}
              className={`relative bg-white rounded-xl  border ${
                pkg.popular ? " border-primary/40" : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="bg-red-600 absolute -top-4 left-0 right-0 mx-auto max-w-[40%] text-xs font-semibold text-white text-center rounded-4xl py-2">
                  most popular!
                </div>
              )}

              <div className="h-full  gap-5 p-6 grid g">
                {/* Content Section */}

                {/* Destination */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 ">
                  {pkg.title}
                </h3>

                {/* Location & Duration */}
                <div className="flex items-center gap-1 text-black/70  text-2xl font-bold ">
                  <span>{pkg.pricing}</span>{" "}
                </div>

                <menu>
                  <p className="font-semibold  text-primary mb-4">includes:</p>
                  <ul className="flex flex-col gap-2 pl-4">
                    {pkg.includes.map((include) => (
                      <li
                        className="text-xs text-black/60 lowercase list-disc "
                        key={include}
                      >
                        {include}
                      </li>
                    ))}
                  </ul>
                </menu>

                {/* Action Button */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4 cursor-pointer mt-5">
                  Learn More
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
