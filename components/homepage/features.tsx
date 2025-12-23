"use client";

import {
  Globe,
  Zap,
  Calendar,
  UserCheck,
  Headphones,
  CalendarX,
} from "lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: any;
  iconColor: "green" | "gold";
};

const Features = () => {
  const features: Feature[] = [
    {
      id: "worldwide-coverage",
      title: "Worldwide Coverage",
      description: "Curabitur convallis enim atnora ullamcorper sagittis.",
      icon: Globe,
      iconColor: "green",
    },
    {
      id: "competitive-pricing",
      title: "Competitive Pricing",
      description:
        "Burabitur convallis enim atnora. Morbi nug scelerisque for thana.",
      icon: Zap,
      iconColor: "gold",
    },
    {
      id: "fast-booking",
      title: "Fast Booking",
      description:
        "Fermentum eitorx quis maximum Etiam urnan posuere convallis.",
      icon: Calendar,
      iconColor: "green",
    },
    {
      id: "guided-tours",
      title: "Guided Tours",
      description:
        "Pellentesque venenatis egestasoi diam Proin velgorat elit porttitor metus convallis.",
      icon: UserCheck,
      iconColor: "gold",
    },
    {
      id: "best-support",
      title: "Best Support 24/7",
      description:
        "Sed venenatis mauris nec nulla euismod, accounv varius lectus viverra oncen.",
      icon: Headphones,
      iconColor: "green",
    },
    {
      id: "ultimate-flexibility",
      title: "Ultimate Flexibility",
      description:
        "Duis leo sapien, lacinia utorrent efficitur utom suscipit quis nulla Sed auctor eu der cer",
      icon: CalendarX,
      iconColor: "gold",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Who We Are Tag */}
          <div className="mb-6">
            <div className="relative inline-block">
              <svg
                width="160"
                height="50"
                viewBox="0 0 160 50"
                className="absolute inset-0 -translate-x-2 -translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 25 Q30 8, 60 25 T120 25 Q130 25 150 25"
                  stroke="#a8d5ba"
                  strokeWidth="3"
                  fill="#a8d5ba"
                  fillOpacity="0.2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 25 Q30 42, 60 25 T120 25 Q130 25 150 25"
                  stroke="#a8d5ba"
                  strokeWidth="3"
                  fill="#a8d5ba"
                  fillOpacity="0.2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative px-6 py-2">
                <span className="text-[#63ab45] text-lg font-handwriting italic font-semibold">
                  Who We Are
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why TripRex Is Best
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            const iconColorClass =
              feature.iconColor === "green" ? "text-[#63ab45]" : "text-yellow-500";
            const hoverBgClass =
              feature.iconColor === "green"
                ? "hover:bg-[#e8f5e9]"
                : "hover:bg-yellow-50";

            return (
              <div
                key={feature.id}
                className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 ${hoverBgClass} cursor-pointer group`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`${iconColorClass} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

