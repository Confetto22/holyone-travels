"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#63ab45] rounded-full flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white text-xl font-semibold">TripRex</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              HOME +
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/tours"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              TOURS +
            </Link>
            <Link
              href="/destination"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              DESTINATION +
            </Link>
            <Link
              href="/pages"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              PAGES +
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#63ab45] transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-[#63ab45] transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="text-white hover:text-[#63ab45] transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button className="bg-[#63ab45] text-white px-6 py-2 rounded-full hover:bg-[#5a9a3d] transition-colors font-medium">
              Book A Trip
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
