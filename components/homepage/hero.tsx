"use client";
import SearchBar from "./search-bar";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInBounce,
  viewportOptions,
} from "@/lib/animation-variants";
import { Phone, Sparkle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[url('https://triprex.egenslab.com/wp-content/uploads/2024/02/home2-banner-img1.webp')] bg-cover bg-center min-h-screen">
      <div className="cover min-h-screen relative">
        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className=" mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-12 relative z-10"
        >
          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-white font-bold max-w-4xl text-5xl md:text-7xl text-center leading-tight"
          >
            Let&apos;s Explore Your <br />
            <span className="">Holiday Trip.</span>
          </motion.h1>

          {/* Info Boxes */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-6 items-center justify-center mt-8"
          >
            {/* Inquiry Box */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="text-primary" />
              </div>
              <div className="text-primary">
                <div className="text-xs font-medium opacity-90">
                  To More Inquiry
                </div>
                <div className="text-lg font-semibold">+990-737 621 432</div>
              </div>
            </motion.div>

            {/* Tripadvisor Box */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkle className="text-primary" />
              </div>
              <div className="text-primary">
                <div className="text-xs font-medium opacity-90 mb-1">
                  Tripadvisor
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold">5.0 / 5.0</span>
                  <div className="flex gap-0.5 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Search Bar at Bottom */}
          <motion.div variants={fadeInUp} className="w-full max-w-5xl">
            <SearchBar />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
