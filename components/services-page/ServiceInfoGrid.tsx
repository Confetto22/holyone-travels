"use client";

import React from "react";
import {
  Hotel,
  Utensils,
  TrainFront,
  Users,
  Languages,
  Dog,
  CalendarClock,
  Snowflake,
  Map,
} from "lucide-react";
import { ServiceSpecs } from "@/data/services";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

export const ServiceInfoGrid = ({ specs }: { specs?: ServiceSpecs }) => {
  if (!specs) return null;

  const items = [
    {
      label: "Accommodation",
      value: specs.accommodation || "5 Star Hotel",
      icon: Hotel,
    },
    {
      label: "Meals",
      value: specs.meals || "Breakfast & Dinner",
      icon: Utensils,
    },
    {
      label: "Transportation",
      value: specs.transportation || "Taxi, Car, Bus",
      icon: TrainFront,
    },
    {
      label: "Group Size",
      value: specs.groupSize || "10-20",
      icon: Users,
    },
    {
      label: "Language",
      value: specs.language || "English, Spanish",
      icon: Languages,
    },
    {
      label: "Animal",
      value: specs.animal || "Cat, Pet only",
      icon: Dog,
    },
    {
      label: "Age Range",
      value: specs.ageRange || "18-45 (Year)",
      icon: CalendarClock,
    },
    {
      label: "Season",
      value: specs.season || "Winter Season",
      icon: Snowflake,
    },
    {
      label: "Category",
      value: specs.category || "Adventure",
      icon: Map,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="bg-transparent rounded-3xl py-8 mb-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-400">
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium mb-1">
                {item.label}
              </p>
              <p className="text-gray-900 font-bold text-sm">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
