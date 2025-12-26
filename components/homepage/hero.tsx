"use client";
import SearchBar from "./search-bar";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInBounce,
  viewportOptions,
} from "@/lib/animation-variants";

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
          {/* Location Tag */}
          <motion.div variants={slideInBounce} className="mb-6">
            <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block transform -skew-x-12 shadow-lg">
              <span className="transform skew-x-12 inline-block">New York</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-white font-bold max-w-4xl text-5xl md:text-7xl text-center leading-tight"
          >
            Let&apos;s Explore Your <br />
            <span className="text-primary">Holiday Trip.</span>
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
              className="bg-primary rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-white">
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
              className="bg-primary rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white">
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
