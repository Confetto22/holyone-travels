"use client";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Smartphone,
  MapPin,
  ArrowUp,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const Footer = () => {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-8 h-8 text-secondary" />,
      title: "To More Inquiry",
      subtitle: "Don't hesitate Call to GoFly.",
    },
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-[#25D366] rounded-full p-1">
            <Smartphone className="w-5 h-5 text-white fill-current" />
          </div>
        </div>
      ), // WhatsApp proxy
      title: "WhatsApp",
      subtitle: "+91 345 533 865",
    },
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-secondary rounded-full p-1">
            <Mail className="w-5 h-5 text-white" />
          </div>
        </div>
      ),
      title: "Mail Us",
      subtitle: "info@example.com",
    },
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-secondary rounded-full p-1">
            <Phone className="w-5 h-5 text-white" />
          </div>
        </div>
      ),
      title: "Call Us",
      subtitle: "+91 456 453 345",
    },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }, // "X" icon often represented by Twitter in libraries or custom SVG
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#0b0b0b] text-white relative font-sans">
      {/* Top Contact Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <div className="shrink-0">
                  {/* Render the icon directly if it's a component or node */}
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8 relative">
        {/* Subtle World Map Background Overlay could go here -> absolute inset-0 bg-map-pattern opacity-10 */}

        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {/* Column 1: Brand & Contact */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3">
                {/* Logo Icon Proxy */}
                <div className="relative">
                  <div className="text-primary">
                    <Globe className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-4 h-4 border-2 border-[#0b0b0b]"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold leading-none tracking-tight">
                    GoFly
                  </h2>
                  <p className="text-xs text-gray-400 tracking-wider">
                    Travel.co
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2 text-sm">
                  GoFly Travel Agency
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Skyline Plaza, 5th Floor, 123 Main Street
                  <br />
                  Los Angeles, CA 90001, USA
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className="w-8 h-8 rounded-full bg-[#1f1f1f] flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Google Play Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-[#1f1f1f] px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer w-fit"
              >
                <div className="w-8 h-8 shrink-0">
                  {/* Google Play Icon Proxy */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3.11123C5 2.59744 5.25307 2.21326 5.56846 2.05261L18.8105 16.5927L12.332 18.046L5.32846 4.03261C5.11663 3.7663 5 3.4542 5 3.11123Z"
                      fill="#00E267"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M19.4208 17.5574L5.61865 2.50293L5.61523 2.50659C5.59021 2.53321 5.57868 2.55164 5.5686 2.54517L12.3323 18.5385L19.4208 17.5574Z"
                      fill="#3DDC84"
                    />
                    <path
                      d="M21.5593 15.6558L19.4209 17.5574L12.3323 18.5385L18.2393 21.0425C19.7423 21.68 20.966 20.4491 21.5593 15.6558Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5 20.8887C5 21.4024 5.25307 21.7866 5.56846 21.9472L12.332 18.5383L5.5686 4.05249C5.23432 4.23242 5 4.63647 5 5.11121V20.8887Z"
                      fill="#2196F3"
                    />
                    <path
                      d="M12.332 18.5383L21.5593 8.34399C20.966 3.55072 19.7423 2.31982 18.2393 2.95728L5.56846 8.54419L12.332 18.5383Z"
                      fill="#EA4335"
                    />
                  </svg>
                  {/* Simple geometric fallback if SVG is too complex for this context, but inline SVG is fine */}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-gray-400 font-bold leading-none">
                    Get in
                  </span>
                  <span className="text-sm font-bold text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2: Top Destination */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-bold text-lg mb-6">
                Top Destination
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "Maldives Tour",
                  "Bali, Indonesia Tour",
                  "Thailand Tour",
                  "Philippines Tour",
                  "Hawaii, USA Tour",
                  "Switzerland Tour",
                  "New Zealand Tour",
                  "Costa Rica Tour",
                  "Peru (Machu Picchu)",
                  "Paris, France Tour",
                  "Rome, Italy Tour",
                ].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="hover:text-white transition-all"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Popular Search */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-bold text-lg mb-6">
                Popular Search
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "Adventure",
                  "Hiking & Hiking",
                  "Holiday Packages",
                  "Flights And Hotels",
                  "Honeymoon Trip",
                  "Bali Vacation Package",
                  "Desert Safari",
                  "Last-Minute Deals",
                  "Summer Vacation",
                  "Wildlife Safari",
                  "Dubai Luxury Tours",
                ].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="hover:text-white transition-all"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Resources */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "About GoFly",
                  "Health & Safety Measure",
                  "Visa Processing",
                  "Customize Tour",
                  "Travel Inspirations",
                  "Traveler Reviews",
                  "Terms & Condition",
                  "Sitemap",
                ].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="hover:text-white transition-all"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Top Button (Fixed/Floating) */}
        <div className="absolute bottom-8 right-8">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg shadow-blue-900/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;