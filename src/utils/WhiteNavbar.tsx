"use client";

import Link from "next/link";
import { useState } from "react";

export default function WhiteNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <>
      <div className="flex justify-center bg-white items-center sticky top-0 left-0 z-40">
        <nav className="container md:px-0 px-5 w-full">
          <div className="flex items-center w-full justify-between ">
            {/* Logo */}
            <div className="flex flex-wrap items-center justify-between">
              <a href="/" className="flex items-center">
                <img
                  src="https://webstrot.com/html/jyotish/light_version/images/header/logo.png"
                  className="h-full object-cover w-full"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Navbar Links */}
            <div className="hidden md:block md:w-auto" id="navbar-default">
              <ul className="flex font-semibold gap-5 items-center md:flex-row">
                <li className="group relative py-5 ">
                  <Link
                    href="/home"
                    className="text-black hover:text-[var(--maincolor)]"
                  >
                    Home
                  </Link>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>
                <li className="group relative py-5 ">
                  <Link
                    href="/about"
                    className="text-black hover:text-[var(--maincolor)]"
                  >
                    About
                  </Link>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>
                <li className="group relative py-5 ">
                  <Link
                    href="/horoscope"
                    className="text-black hover:text-[var(--maincolor)]"
                  >
                    Horoscope
                  </Link>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>

                {/* Services with Dropdown */}
                <li className="group relative py-5 ">
                  <Link
                    href="/services"
                    className="text-black  cursor-pointer  hover:text-[var(--maincolor)]"
                  >
                    Services
                  </Link>
                  <ul className="w-40  absolute top-16 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
                    <li className="w-full">
                      <Link
                        href="/services/aries"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Aries
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/chinese"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Chinese
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/chineseSingle"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Chinese-Single
                      </Link>
                    </li>

                    <li className="w-full">
                      <Link
                        href="/services/crystal"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Crystal
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/kundiDosh"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Kundi-Dosh
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/numberology"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Numberlogy
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/palm"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Palm
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/tarot"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Tarot
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/tarotSingle"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Tarot-Single
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/vastuShastra"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Vastu-Shastra
                      </Link>
                    </li>
                  </ul>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>
                {/* shop with Dropdown */}
                <li className="group relative py-5 ">
                  <p className="text-black cursor-pointer   hover:text-[var(--maincolor)]">
                    Shop
                  </p>
                  <ul className="w-40 absolute top-16 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
                    <li className="w-full">
                      <Link
                        href="/shop"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/shop/shopSingle"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Shop-single
                      </Link>
                    </li>
                  </ul>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>
                {/* news with Dropdown */}
                <li className="group relative py-5 ">
                  <Link
                    href="/news"
                    className="text-black cursor-pointer   hover:text-[var(--maincolor)]"
                  >
                    News
                  </Link>
                  <ul className="w-40 absolute top-16 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
                    <li className="w-full">
                      <Link
                        href="/news/blogCategories"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Blog-Categories
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/news/blogSingle"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Blog-Single
                      </Link>
                    </li>
                  </ul>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>
                <li className="group relative py-5 ">
                  <Link
                    href="/contactus"
                    className="text-black hover:text-[var(--maincolor)]"
                  >
                    Contact Us
                  </Link>
                  <div className="w-full transition-all duration-200 ease-in absolute bottom-3 border-white group-hover:border-b group-hover:border-[var(--maincolor)]"></div>
                </li>

                {/* Appointments Button */}
                <button
                  type="button"
                  className="text-white bg-[var(--maincolor)] hover:bg-[var(--bgcolor)] font-bold rounded-full px-10 text-xl py-3 hover:scale-95 transition-all duration-500 ease-in"
                >
                  Appointments
                </button>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 active:bg-gray-100 focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                ></path>
              </svg>
            </button>

            {/* Sidebar */}
            <div
              className={`fixed sm:hidden top-0 left-0 w-64 h-full bg-[var(--maincolor)] z-50 transform ${
                isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <nav className="relative bg-[var(--maincolor)]  ">
                <div className="container mx-auto border-b border-white p-4 flex justify-between items-center">
                  {/* Logo */}
                  <Link href="/" className="text-2xl font-bold text-white">
                    Jyotish
                  </Link>
                  <button
                    className=" text-white"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    ✖
                  </button>

                  {/* Menu Items */}
                </div>
                <ul
                  className={`s md:space-x-6 text-white md:items-center divide-y w-full md:w-auto left-0  md:bg-transparent   transition-all duration-300 ease-in-out `}
                >
                  <li>
                    <Link
                      href="/home"
                      className="block p-3 hover:text-[var(--maincolor)]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block p-3 hover:text-[var(--maincolor)]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/horoscope"
                      className="block p-3 hover:text-[var(--maincolor)]"
                    >
                      Horoscope
                    </Link>
                  </li>

                  {/* Services Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => toggleDropdown("services")}
                      className="block p-3 focus:outline-none hover:text-[var(--maincolor)]"
                    >
                      Services
                    </button>
                    <ul
                      className={`absolute left-0 w-48 bg-white shadow-md rounded-md transition-opacity ${
                        activeDropdown === "services" ? "block" : "hidden"
                      }`}
                    >
                      {[
                        "Aries",
                        "Chinese",
                        "Crystal",
                        "Kundli-Dosh",
                        "Numerology",
                        "Palm",
                        "Tarot",
                        "Vastu-Shastra",
                      ].map((service) => (
                        <li key={service}>
                          <Link
                            href={`/services/${service.toLowerCase()}`}
                            className="block p-3 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Shop Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => toggleDropdown("shop")}
                      className="block p-3 focus:outline-none hover:text-[var(--maincolor)]"
                    >
                      Shop
                    </button>
                    <ul
                      className={`absolute left-0 w-48 bg-white shadow-md rounded-md transition-opacity ${
                        activeDropdown === "shop" ? "block" : "hidden"
                      }`}
                    >
                      <li>
                        <Link
                          href="/shop"
                          className="block p-3 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop_single"
                          className="block p-3 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Shop-Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* News Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => toggleDropdown("news")}
                      className="block p-3 focus:outline-none hover:text-[var(--maincolor)]"
                    >
                      News
                    </button>
                    <ul
                      className={`absolute left-0 w-48 bg-white shadow-md rounded-md transition-opacity ${
                        activeDropdown === "news" ? "block" : "hidden"
                      }`}
                    >
                      <li>
                        <Link
                          href="/blog_categories"
                          className="block p-3 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Blog Categories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog_single"
                          className="block p-3 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="block p-3 hover:text-[var(--maincolor)]"
                    >
                      Contact
                    </Link>
                  </li>

                  {/* Appointments Button */}
                  <li>
                    <Link
                      href="/contact"
                      className="block p-3 text-white bg-[var(--maincolor)]  hover:scale-95 transition"
                    >
                      Appointments
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
