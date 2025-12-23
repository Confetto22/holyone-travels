"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Download,
  FileText,
  Globe,
  GraduationCap,
  ArrowRight,
  MousePointerClick,
  Check,
  Star,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Types ---
type ServiceCategory = "main" | "micro" | "digital";

interface BaseServiceItem {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
}

interface MainServiceItem extends BaseServiceItem {
  type: "main";
  icon: React.ReactNode;
  features: string[];
  ctaLabel: string;
}

interface MicroServiceItem extends BaseServiceItem {
  type: "micro";
  icon: React.ReactNode;
}

interface DigitalServiceItem extends BaseServiceItem {
  type: "digital";
  benefit: string;
  image: string;
}

type ServiceItem = MainServiceItem | MicroServiceItem | DigitalServiceItem;

// --- Data ---
const mainServices: MainServiceItem[] = [
  {
    type: "main",
    id: 1,
    title: "Study Abroad Assistance",
    description:
      "Comprehensive guidance for securing admission in top universities worldwide.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    features: ["University Selection", "SOP Editing", "App Submission"],
    ctaLabel: "Start Application",
    price: 750,
    oldPrice: 799,
  },
  {
    type: "main",
    id: 2,
    title: "Global Relocation",
    description:
      "Seamless relocation services for families moving to a new country.",
    icon: <Globe className="w-8 h-8 text-white" />,
    features: ["Orientation", "Housting", "Airport Pickup"],
    ctaLabel: "Get Relocated",
    price: 1200,
    oldPrice: 1500,
  },
];

const microServices: MicroServiceItem[] = [
  {
    type: "micro",
    id: 1,
    title: "Visa Eligibility Check",
    description: "Quickly verify your eligibility for various visa categories.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
    price: 29,
  },
  {
    type: "micro",
    id: 2,
    title: "Document Review",
    description: "Professional review of your travel or application documents.",
    icon: <FileText className="w-6 h-6 text-[#6CB43F]" />,
    price: 49,
    oldPrice: 69,
  },
  {
    type: "micro",
    id: 3,
    title: "Itinerary Planning",
    description: "Custom day-by-day travel itinerary planning.",
    icon: <Globe className="w-6 h-6 text-[#6CB43F]" />,
    price: 39,
  },
];

const digitalServices: DigitalServiceItem[] = [
  {
    type: "digital",
    id: 1,
    title: "The Ultimate Expat Guide",
    description: "A comprehensive PDF guide about living abroad.",
    benefit: "Save $1000s in your first month.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60",
    price: 19.99,
  },
  {
    type: "digital",
    id: 2,
    title: "Student Visa Checklist",
    description: "Essential checklist ensuring you never miss a document.",
    benefit: "Reduce application anxiety.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee13d643?w=600&auto=format&fit=crop&q=60",
    price: 9.99,
    oldPrice: 15.99,
  },
];

// --- Sidebar Components ---
const PriceCard = ({ service }: { service: ServiceItem }) => {
  const discount = service.oldPrice
    ? Math.round(((service.oldPrice - service.price) / service.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-[#F8F9FF] md:sticky top-5 rounded-3xl p-6 md:p-8 border border-blue-50/50 shadow-sm relative overflow-hidden">
      {discount > 0 && (
        <div className="absolute top-6 right-6 bg-[#FF3B30] text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {discount}% Off
        </div>
      )}

      <p className="text-gray-500 font-bold mb-1">Starting From</p>
      <div className="flex items-baseline gap-2 mb-6">
        {service.oldPrice && (
          <span className="text-gray-400 font-bold text-xl md:text-2xl line-through decoration-gray-400/50">
            ${service.oldPrice}
          </span>
        )}
        <span className="text-gray-900 font-bold text-4xl md:text-5xl">
          ${service.price}
        </span>
        <span className="text-gray-500 font-medium">/per person</span>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
          </div>
          <span className="text-gray-900 font-bold text-sm">
            Money Back Guarantee.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
          </div>
          <span className="text-gray-900 font-bold text-sm">
            Your Safety is Our Top Priority.
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
          Check Availability
          <ArrowUpRight className="w-4 h-4" />
        </button>
        <button className="w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
          Submit an Enquiry
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-gray-500 text-xs font-medium justify-center">
        <ShieldCheck className="w-4 h-4" />
        Bonus Activity Included – Limited Time!
      </div>
    </div>
  );
};

const CustomizeCard = () => {
  return (
    <div className="bg-[#C5F2D0] rounded-3xl p-8 relative overflow-hidden mt-6">
      <h3 className="font-serif italic text-3xl text-gray-900 mb-2">
        Customize
      </h3>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Travel Package!</h3>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-[#1877F2]" strokeWidth={3} />
          </div>
          <span className="text-gray-900 font-bold text-sm">
            Make Your Favourite Package
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-[#1877F2]" strokeWidth={3} />
          </div>
          <span className="text-gray-900 font-bold text-sm">
            Enjoy Your Trip
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex -space-x-3">
          <Image
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
            className="w-10 h-10 rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
            width={10}
            height={10}
          />
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            className="w-10 h-10 rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
            width={10}
            height={10}
          />
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
            className="w-10 h-10 rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
            width={10}
            height={10}
          />
        </div>
        <div className="text-sm">
          <p className="font-bold text-gray-900">7+ Guide Await</p>
          <p className="text-gray-700">to Help You</p>
        </div>
      </div>

      <button className="w-full bg-[#111] hover:bg-black text-white font-bold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2">
        Customize Package
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// --- Main Cards Components ---
const MainServiceCard = ({
  item,
  isSelected,
  onSelect,
}: {
  item: MainServiceItem;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={`bg-white rounded-2xl p-8 border shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col h-full group ${
      isSelected ? "border-[#6CB43F] ring-1 ring-[#6CB43F]" : "border-gray-100"
    }`}
  >
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
        isSelected ? "bg-[#6CB43F]" : "bg-gray-100 group-hover:bg-[#6CB43F]/20"
      }`}
    >
      {React.cloneElement(
        item.icon as React.ReactElement<{ className?: string }>,
        {
          className: `w-8 h-8 transition-colors ${
            isSelected
              ? "text-white"
              : "text-gray-500 group-hover:text-[#6CB43F]"
          }`,
        }
      )}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
      {item.description}
    </p>
    <ul className="space-y-3 mb-8">
      {item.features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-center gap-3 text-sm text-gray-600 font-medium"
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              isSelected ? "bg-[#6CB43F]" : "bg-gray-400"
            }`}
          />
          {feature}
        </li>
      ))}
    </ul>
    <div
      className={`mt-auto font-bold flex items-center gap-2 transition-colors ${
        isSelected
          ? "text-[#6CB43F]"
          : "text-gray-400 group-hover:text-gray-900"
      }`}
    >
      Select Plan <ArrowRight className="w-4 h-4" />
    </div>
  </div>
);

const MicroServiceCard = ({
  item,
  isSelected,
  onSelect,
}: {
  item: MicroServiceItem;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={`bg-white rounded-xl p-6 border shadow-sm transition-all cursor-pointer group ${
      isSelected
        ? "border-[#6CB43F] ring-1 ring-[#6CB43F]"
        : "border-gray-100 hover:border-[#6CB43F]"
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <div
        className={`p-3 rounded-lg transition-colors ${
          isSelected ? "bg-[#6CB43F]" : "bg-green-50 group-hover:bg-[#6CB43F]"
        }`}
      >
        {React.cloneElement(
          item.icon as React.ReactElement<{ className?: string }>,
          {
            className: `w-6 h-6 transition-colors ${
              isSelected
                ? "text-white"
                : "text-[#6CB43F] group-hover:text-white"
            }`,
          }
        )}
      </div>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed mb-4">
      {item.description}
    </p>
  </div>
);

const DigitalServiceCard = ({
  item,
  isSelected,
  onSelect,
}: {
  item: DigitalServiceItem;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={`bg-white rounded-3xl overflow-hidden border flex flex-col md:flex-row group transition-all cursor-pointer ${
      isSelected
        ? "border-[#6CB43F] ring-1 ring-[#6CB43F]"
        : "border-gray-100 hover:shadow-lg"
    }`}
  >
    <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="md:w-2/3 p-6 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          PDF Guide
        </span>
      </div>
      <h3
        className={`text-xl font-bold mb-2 transition-colors ${
          isSelected ? "text-[#6CB43F]" : "text-gray-900"
        }`}
      >
        {item.title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

      <div className="bg-green-50 border border-green-100 rounded-lg p-3">
        <p className="text-xs text-[#6CB43F] font-bold flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          {item.benefit}
        </p>
      </div>
    </div>
  </div>
);

const ServicesContainer = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("main");

  const getDefaultService = (tab: ServiceCategory): ServiceItem => {
    if (tab === "main") return mainServices[0];
    if (tab === "micro") return microServices[0];
    return digitalServices[0];
  };

  const selectedService = getDefaultService(activeTab);

  const tabs = [
    { id: "main", label: "Main Services" },
    { id: "micro", label: "Micro Services" },
    { id: "digital", label: "Digital Services" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header & Tabs */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tailored Services For You
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
            Choose the level of assistance you need. Select a service to see
            pricing details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white p-1.5 md:rounded-full shadow-sm  border border-gray-200 relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ServiceCategory)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold cursor-pointer transition-colors z-10 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#6CB43F] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Services List */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "main" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainServices.map((item) => (
                      <MainServiceCard
                        key={item.id}
                        item={item}
                        isSelected={
                          selectedService.id === item.id &&
                          selectedService.type === "main"
                        }
                        onSelect={() => setActiveTab("main")}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "micro" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {microServices.map((item) => (
                      <MicroServiceCard
                        key={item.id}
                        item={item}
                        isSelected={
                          selectedService.id === item.id &&
                          selectedService.type === "micro"
                        }
                        onSelect={() => setActiveTab("micro")}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "digital" && (
                  <div className="grid grid-cols-1 gap-6">
                    {digitalServices.map((item) => (
                      <DigitalServiceCard
                        key={item.id}
                        item={item}
                        isSelected={
                          selectedService.id === item.id &&
                          selectedService.type === "digital"
                        }
                        onSelect={() => setActiveTab("digital")}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="w-full lg:w-1/3  top-0">
            <PriceCard service={selectedService} />
            <CustomizeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
