"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <>
      {/* Purple Navbar */}
      <nav className="bg-[var(--maincolor)]  w-full flex justify-center items-center text-white ">
        <div className="container  md:px-0  px-5">
          <div
            className="items-center divide-x-2 divide-white justify-center  w-full flex "
            id="navbar-user"
          >
            {/*location  */}
            <div className=" md:flex   w-full gap-2 py-3 items-center hidden ">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                </svg>
              </p>
              <span className="self-center  font-semibold whitespace-nowrap dark:text-white">
                601 , Ram Nagar Dewas
              </span>
            </div>
            {/* Number */}
            <div className="flex md:justify-center  items-center   w-full py-3 gap-2 ">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                </svg>
              </p>
              <span className="self-center  font-semibold whitespace-nowrap dark:text-white">
                +1800-123-123
              </span>
            </div>
            {/* Search input */}
            <div className="w-full  md:flex items-center hidden justify-center relative  ">
              <input
                type="email"
                name="email"
                placeholder="Email Address..."
                className=" p-3  bg-gray-50 text-gray-900 text-sm rounded-full w-full ring-[var(--maincolor)]  "
              />
              <button className="bg-[var(--maincolor)] right-0  p-3 absolute   rounded-full ">
                Subscribe
              </button>
            </div>
            {/* shop */}
            <div className="    md:w-50 w-30  flex justify-center items-center py-3">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
              </svg>
            </div>
            {/* User */}
            <div
              className="flex items-center md:justify-end justify-center md:w-full w-20  gap-3 text-sm rounded-full  "
              id="user-menu-button"
            >
              <img
                className="w-8 h- rounded-full"
                src="https://webstrot.com/html/jyotish/light_version/images/header/top_user.png"
                alt="user photo"
              />
              <span className="hidden md:block">login/register</span>
            </div>
          </div>
        </div>
      </nav>

      {/* White Navbar */}
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
                  <p className="text-black  cursor-pointer  hover:text-[var(--maincolor)]">
                    Services
                  </p>
                  <ul className="w-40  absolute -bottom-30 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
                    <li className="w-full">
                      <Link
                        href="/services/astrology"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Astrology
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/tarot"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Tarot Reading
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        href="/services/numerology"
                        className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                      >
                        Numerology
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
                  <ul className="w-40 absolute -bottom-20 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
                    <li className="w-full">
                      <Link
                        href="/shop/shop"
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
                  <p className="text-black cursor-pointer   hover:text-[var(--maincolor)]">
                    News
                  </p>
                  <ul className="w-40 absolute -bottom-20 left-0 z-50  bg-white shadow-2xl  hidden group-hover:inline-block group-hover:transition-all group-hover:duration-150 group-hover:ease-in">
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
                  className="text-white bg-[var(--maincolor)] font-bold rounded-full px-10 text-xl py-3 hover:scale-95 transition-all duration-500 ease-in"
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
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                  {/* Logo */}
                  <Link href="/" className="text-2xl font-bold text-white">
                    Jyotish
                  </Link>
                  <button
                    className="absolute top-4 right-4 text-white"
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
                      className="block px-4 py-2 hover:text-[var(--maincolor)]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block px-4 py-2 hover:text-[var(--maincolor)]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/horoscope"
                      className="block px-4 py-2 hover:text-[var(--maincolor)]"
                    >
                      Horoscope
                    </Link>
                  </li>

                  {/* Services Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => toggleDropdown("services")}
                      className="block px-4 py-2 focus:outline-none hover:text-[var(--maincolor)]"
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
                            className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
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
                      className="block px-4 py-2 focus:outline-none hover:text-[var(--maincolor)]"
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
                          className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop_single"
                          className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
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
                      className="block px-4 py-2 focus:outline-none hover:text-[var(--maincolor)]"
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
                          className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Blog Categories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog_single"
                          className="block px-4 py-2 text-gray-700 hover:bg-[var(--maincolor)] hover:text-white"
                        >
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 hover:text-[var(--maincolor)]"
                    >
                      Contact
                    </Link>
                  </li>

                  {/* Appointments Button */}
                  <li>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-white bg-[var(--maincolor)]  hover:scale-95 transition"
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
