"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animation-variants";

const Header = () => {
  const navLinks = [
    {
      ref: "Home",
      refLink: "/",
    },
    {
      ref: "About",
      refLink: "/about",
    },
    {
      ref: "Services",
      refLink: "/services",
    },
    {
      ref: "Contact",
      refLink: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <motion.header
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      className={`absolute header top-0 left-0 right-0 z-50  ${
        pathname.includes("/checkout") ? "bg-primary/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h3 className="text-white text-xl font-semibold"> BrandLogo</h3>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((navLink) => (
              <motion.div
                key={navLink.ref}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={navLink.refLink}
                  className={`hover:text-secondary transition-colors capitalize ${
                    pathname === navLink.refLink
                      ? "text-secondary"
                      : "text-white"
                  }`}
                >
                  {navLink.ref}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors font-medium"
            >
              Book A Trip
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
