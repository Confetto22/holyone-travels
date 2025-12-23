import React from "react";
import { Award, Percent, Wallet, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Award className="w-8 h-8 text-black" />,
    title: "Local Guidance",
    description:
      "Travel agencies have experienced professionals guidance.",
    bgColor: "bg-orange-400",
  },
  {
    icon: <Percent className="w-8 h-8 text-black" />,
    title: "Deals & Discounts",
    description:
      "Agencies have special discounts on flights, hotels, & packages.",
    bgColor: "bg-sky-400",
  },
  {
    icon: <Wallet className="w-8 h-8 text-black" />,
    title: "Saves Money",
    description:
      "Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options.",
    bgColor: "bg-orange-400",
  },
];

const BestService = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-[#F5F5FF] rounded-[3rem] p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            We’re Providing Best Service Ever!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left md:items-center md:text-left lg:flex-row lg:items-start lg:text-left gap-4"
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center p-3`}
                >
                    {/* Inner circle border if needed, but simple background works for now based on image */}
                    <div className="w-full h-full border-2 border-black rounded-full flex items-center justify-center">
                        {feature.icon}
                    </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

            <div className="flex justify-center">
                <Link
                    href="/offers"
                    className="inline-flex items-center gap-2 bg-[#1A85FF] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-200"
                >
                    Flat 30% Discounts All Packages
                    <span className="font-bold">Check Offer</span>
                    <ArrowUpRight className="w-5 h-5 ml-1" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BestService;
