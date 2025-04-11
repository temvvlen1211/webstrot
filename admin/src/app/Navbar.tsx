"use client";

import Link from "next/link";
import {
  FaAlignJustify,
  FaAngleRight,
  FaChartPie,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <section>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaAlignJustify />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link href="/home" className="flex items-center ps-2.5 mb-5">
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/header/logo.png"
              className="object-cover"
              alt="Logo"
            />
          </Link>
          <ul className="space-y-2 font-medium">
            {/* Home Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("home")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaHome />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  Home
                </span>
                <FaAngleRight
                  className={`transition-transform ${
                    openDropdown === "home" ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`py-2 space-y-2 ${
                  openDropdown === "home" ? "block" : "hidden"
                }`}
              >
                <ul>
                  {/* Carousel */}
                  <li>
                    <Link
                      href="/home/carousel"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Carousel
                    </Link>
                  </li>

                  {/* Our Most */}
                  <li>
                    <Link
                      href="/home/ourmost"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Our Most
                    </Link>
                  </li>

                  {/* fortunately  */}
                  <li>
                    <Link
                      href="/home/fortunately "
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Fortunately
                    </Link>
                  </li>

                  {/* Zodiac Sign */}
                  <li>
                    <Link
                      href="/home/zodiacsign"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Zodiac Sign
                    </Link>
                  </li>

                  {/* Jyotish */}
                  <li>
                    <Link
                      href="/home/jyotish"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Jyotish
                    </Link>
                  </li>

                  {/* Are Saying */}
                  <li>
                    <Link
                      href="/home/aresaying"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Are Saying
                    </Link>
                  </li>

                  {/* Our Services */}
                  <li>
                    <Link
                      href="/home/ourservices"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Our Services
                    </Link>
                  </li>

                  {/* Number */}
                  <li>
                    <Link
                      href="/home/number"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Number
                    </Link>
                  </li>

                  {/* Our Team */}
                  <li>
                    <Link
                      href="/home/ourteam"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Our Team
                    </Link>
                  </li>

                  {/* Latest News */}
                  <li>
                    <Link
                      href="/home/latestnews"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Latest News
                    </Link>
                  </li>
                </ul>
              </ul>
            </li>

            {/* About Us Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("about")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaShoppingCart />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  About Us
                </span>
                <FaAngleRight
                  className={`transition-transform ${
                    openDropdown === "about" ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`py-2 space-y-2 ${
                  openDropdown === "about" ? "block" : "hidden"
                }`}
              >
                <ul>
                  {/* Us */}
                  <li>
                    <Link
                      href="/about/us"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Us
                    </Link>
                  </li>

                  {/* Jyotish */}
                  <li>
                    <Link
                      href="/about/jyotish"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Jyotish
                    </Link>
                  </li>

                  {/* Number */}
                  <li>
                    <Link
                      href="/about/number"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Number
                    </Link>
                  </li>

                  {/* HoroscopeProgress */}
                  <li>
                    <Link
                      href="/about/horoscopeprogress"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      HoroscopeProgress
                    </Link>
                  </li>

                  {/* AboutVideoSection */}
                  <li>
                    <Link
                      href="/about/aboutvideosection"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      AboutVideoSection
                    </Link>
                  </li>

                  {/* OurServices */}
                  <li>
                    <Link
                      href="/about/ourservices"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      OurServices
                    </Link>
                  </li>

                  {/* OurTeam */}
                  <li>
                    <Link
                      href="/about/ourteam"
                      className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      OurTeam
                    </Link>
                  </li>
                </ul>
              </ul>
            </li>

            {/* Horoscope Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("horoscope")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaShoppingCart />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  Horoscope
                </span>
                <FaAngleRight
                  className={`transition-transform ${
                    openDropdown === "horoscope" ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`py-2 space-y-2 ${
                  openDropdown === "horoscope" ? "block" : "hidden"
                }`}
              >
                <ul>
                  <ul>
                    {/* Horoscope - Body хэсэг */}
                    <li>
                      <Link
                        href="/horoscope/zodiacsection"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Zodiac Section
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/tarotreading"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Tarot Reading
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/tarotcarousel"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Tarot Carousel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/ariescelebrities"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Aries Celebrities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/astrologer"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Astrologer
                      </Link>
                    </li>

                    {/* Horoscope - Aside хэсэг
                    <li>
                      <Link
                        href="/horoscope/zodiacsign"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Zodiac Sign
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/kundalipatrika"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Kundali Patrika
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/mangaladosha"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Mangala Dosha
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/lovelife"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Love Life
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/starguide"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Star Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/horoscope/blackmagic"
                        className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Black Magic
                      </Link>
                    </li> */}
                  </ul>
                </ul>
              </ul>
            </li>
            {/* Services Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaShoppingCart />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  Services
                </span>
                <FaAngleRight
                  className={`transition-transform ${
                    openDropdown === "services" ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`py-2 space-y-2 ${
                  openDropdown === "services" ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    href="/product"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/shop"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaChartPie />
                <span className="ms-3">Shop</span>
              </Link>
            </li>
            {/* blogcategory Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("blogcategory")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaShoppingCart />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  Blog Category
                </span>
                <FaAngleRight
                  className={`transition-transform ${
                    openDropdown === "blogcategory" ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`py-2 space-y-2 ${
                  openDropdown === "blogcategory" ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    href="/product"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/contactus"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaChartPie />
                <span className="ms-3">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
