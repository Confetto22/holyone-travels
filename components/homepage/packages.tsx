"use client";

import Image from "next/image";
import { MapPin, ArrowRight, ExternalLink, Info } from "lucide-react";

type Package = {
  id: string;
  destination: string;
  location: string;
  country: string;
  duration: string;
  image: string;
  badges: {
    type: "sale" | "solo" | "family";
    text: string;
  }[];
  originalPrice?: number;
  discountedPrice: number;
  currency: string;
};

const Packages = () => {
  const packages: Package[] = [
    {
      id: "rome-florence-venice",
      destination: "Rome, Florence & Venice",
      location: "Paris",
      country: "France",
      duration: "5 Days/6 Nights",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
      badges: [
        { type: "sale", text: "Sale on!" },
        { type: "solo", text: "Solo Tour" },
      ],
      originalPrice: 800.0,
      discountedPrice: 750.0,
      currency: "$",
    },
    {
      id: "old-town-discovery",
      destination: "Old Town Discovery Walk",
      location: "Qatar",
      country: "Qatar",
      duration: "02/Hours",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      badges: [{ type: "family", text: "Family Tour" }],
      discountedPrice: 69.0,
      currency: "$",
    },
    {
      id: "phuket-krabi",
      destination: "Phuket & Krabi Island",
      location: "Thailand",
      country: "Thailand",
      duration: "5 Days/6 Nights",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
      badges: [{ type: "family", text: "Family Tour" }],
      discountedPrice: 580.0,
      currency: "$",
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated list of the most popular travel packages based on different
            destinations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.destination}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  {pkg.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`${getBadgeColor(
                        badge.type
                      )} px-3 py-1 rounded-lg text-xs font-semibold shadow-md`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
                {/* Image Carousel Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Destination */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pkg.destination}
                </h3>

                {/* Location & Duration */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span>{pkg.location}, {pkg.country}</span>
                  <ArrowRight size={16} className="mx-1" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">per person</p>
                  <div className="flex items-baseline gap-2">
                    {pkg.originalPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        {pkg.currency}
                        {pkg.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-gray-900">
                      {pkg.currency}
                      {pkg.discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4">
                  Book Now
                  <ExternalLink size={18} />
                </button>

                {/* Additional Info */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Info size={16} className="text-primary" />
                    <span>Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info size={16} className="text-primary" />
                    <span>Inclusion</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

