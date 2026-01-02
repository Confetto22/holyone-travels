"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "./swiper.css";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import Link from "next/link";
import { digitalServices } from "@/data/services";

const Trendy = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // const destinations = [
  //   {
  //     // name: "Canada",

  //     text: "Canada Visa Approval Toolkit ",
  //     description:
  //       "Comprehensive toolkit for navigating Canadian visa applications.",
  //     id: "201",
  //     image:
  //       "https://res.cloudinary.com/dv9aqxptd/image/upload/v1767373531/holyone-travels/toronto-street-view_icgb0r.webp",
  //     href: `/services/`,
  //     // tours: 2,
  //   },
  //   {
  //     // name: "India",
  //     text: "Study Visa SOP Template Pack",
  //     description:
  //       "Complete guide for Austria Red-White-Red Card visa application.",
  //     id: "202",
  //     image:
  //       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  //     href: "#",
  //     // tours: 1,
  //   },
  //   {
  //     // name: "Brazil",
  //     text: "Verified Canada Employer List",
  //     description: "Essential guide for Portugal D7 passive income visa.",
  //     id: "203",
  //     image:
  //       "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
  //     href: "#",
  //     // tours: 1,
  //   },
  //   {
  //     // name: "Australia",
  //     text: "Canada PR Roadmap Guide",
  //     description: "Complete guide to Germany's Opportunity Card visa program.",
  //     id: "204",
  //     image:
  //       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  //     href: "#",
  //     // tours: 1,
  //   },
  //   {
  //     // name: "Belarus",
  //     text: "Austria Red-White-Red Card Guide",
  //     description:
  //       "Comprehensive employment opportunities list for New Zealand.",
  //     id: "205",
  //     image:
  //       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  //     href: "#",
  //     // tours: 1,
  //   },
  // ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Logo/Brand */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="head flex flex-col items-center"
        >
          <motion.h3 variants={fadeInUp}>Journey Holyone</motion.h3>

          {/* Main Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
          >
            Digital Services
          </motion.h2>
        </motion.div>

        {/* Destination Cards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1400}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mb-12"
          >
            {digitalServices.slice(0, 5).map((destination) => (
              <SwiperSlide key={destination.title}>
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full cursor-pointer">
                  <Link href={`/services/${destination.id}`}>
                    {/* Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/20" />

                      {/* Tour Badge */}
                      <span className="absolute top-4 right-4   shadow-md bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        PDF Guide
                      </span>

                      {/* Destination Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white mb-1">{destination.title}</h3>
                        <p className="text-white/60 text-xs">
                          {" "}
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-col md:flex-row gap-3 items-center justify-between mt-8"
        >
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-[#bfd1ff] hover:text-secondary transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              PREV
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-[#bfd1ff] hover:text-secondary transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              NEXT
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* View All Button */}
          <Link
            href="/services"
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Trendy;
