import React from "react";
import { Check, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";

export const PriceCard = ({ service }: { service: ServiceItem }) => {
  const discount = service.oldPrice
    ? Math.round(((service.oldPrice - service.price) / service.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-[#F8F9FF] md:sticky top-5 rounded-3xl p-6 md:p-8 border border-blue-50/50 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
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
        <button className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-blue-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base">
          Check Availability
          <ArrowUpRight className="w-4 h-4" />
        </button>
        <button className="w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 text-sm md:text-base">
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

export const CustomizeCard = () => {
  return (
    <div className="bg-[#C5F2D0] rounded-3xl p-8 relative overflow-hidden mt-6 shadow-sm hover:shadow-md transition-shadow">
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
            className="rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
            width={40}
            height={40}
          />
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            className="rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
            width={40}
            height={40}
          />
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
            className="rounded-full border-2 border-[#C5F2D0]"
            alt="Guide"
             width={40}
            height={40}
          />
        </div>
        <div className="text-sm">
          <p className="font-bold text-gray-900">7+ Guide Await</p>
          <p className="text-gray-700">to Help You</p>
        </div>
      </div>

      <button className="w-full bg-[#111] hover:bg-black text-white font-bold py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
        Customize Package
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};
