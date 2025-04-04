"use client";
import {
  FaHome,
  FaPhoneAlt,
  FaShoppingBag,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

import { useState } from "react";

export default function PurpleNavbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const cartItem = [
    {
      id: 1,
      name: "Gemstone",
      quantity: 2,
      price: 45,
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/cart_img.jpg",
    },
    {
      id: 2,
      name: "Gemstone",
      quantity: 2,
      price: 45,
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/cart_img.jpg",
    },
    {
      id: 3,
      name: "Gemstone",
      quantity: 2,
      price: 45,
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/cart_img.jpg",
    },
  ];

  return (
    <>
      <nav className="bg-[var(--maincolor)]  w-full flex justify-center items-center text-white ">
        <div className="container  md:px-0  px-5">
          <div
            className="items-center divide-x-2 h-full divide-white justify-center  w-full flex "
            id="navbar-user"
          >
            {/*location  */}
            <div className=" md:flex sm:w-3xl   w-full gap-2 py-3 items-center hidden ">
              <p>
                <FaHome />
              </p>
              <span className=" text-nowrap font-semibold ">
                601 , Ram Nagar Dewas
              </span>
            </div>
            {/* Number */}
            <div className="flex   items-center px-5   w-full py-3 gap-2 ">
              <p>
                <FaPhoneAlt />
              </p>
              <span className="  font-semibold">+1800-123-123</span>
            </div>
            {/* Search input */}
            <form className="w-full pl-5 h-full sm:flex items-center hidden justify-center relative  ">
              <input
                type="text"
                name="text"
                placeholder="Search..."
                className=" p-3  bg-gray-50 text-gray-900 text-sm rounded-full w-full h-full focus-visible:outline-none   "
              />
              <button
                type="submit"
                className="bg-[var(--maincolor)] right-0  py-2.5 px-4 absolute   rounded-xl "
              >
                Subscribe
              </button>
            </form>
            {/* shop */}
            <div className="md:w-50 relative  group flex justify-center items-center w-30 ">
              <button
                type="button"
                onClick={() => {
                  setCartOpen(!cartOpen);
                }}
                className="      cursor-pointer   py-3"
              >
                <FaShoppingBag />
              </button>
              {/* Cart Dropdown */}

              {cartOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white hover:inl   shadow-lg rounded-lg p-4 z-50">
                  <h2 className="text-lg font-semibold  text-center text-black">
                    Shopping Cart
                  </h2>
                  <ul>
                    {cartItem.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center text-black border-gray-500 justify-between p-2 border-b"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-md"
                        />
                        <div className="">
                          <h4 className="text-sm text-black font-medium">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            Quantity: {item.quantity} ✖ ${item.price}
                          </p>
                        </div>
                        <h5 className="text-sm font-semibold">
                          ${item.quantity * item.price}
                        </h5>
                        <button className="" onClick={() => {}}>
                          ✖
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-center">
                    <a
                      href="#"
                      className="block bg-[var(--maincolor)] text-white py-2 rounded-md hover:bg-[var(--bgcolor)]"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* User */}
            <div className="flex group  items-center relative md:justify-end justify-center sm:w-sm w-20 ">
              <button
                type="button"
                onClick={() => {
                  setProfileOpen(!profileOpen);
                }}
                className="flex cursor-pointer     gap-3 text-sm   py-3 "
                id="user-menu-button"
              >
                <img
                  className="w-6  rounded-full"
                  src="https://webstrot.com/html/jyotish/light_version/images/header/top_user.png"
                  alt="user photo"
                />
                <span className="hidden font-semibold  sm:block">
                  login/register
                </span>
              </button>
              <div className="group-hover:inline-block">
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-sm  cursor-auto    group-hover:transition-all group-hover:duration-150 group-hover:ease-in bg-white shadow-lg rounded-lg p-6 z-50">
                    <div className="flex flex-col  gap-3 ">
                      <h2 className="text-xl font-semibold text-gray-700 text-center">
                        Login
                      </h2>

                      <button
                        type="button"
                        className="w-full text-white cursor-pointer bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 "
                      >
                        <FaFacebook />
                        &nbsp; Sign in with Facebook
                      </button>
                      <button
                        type="button"
                        className="w-full text-white bg-[#4285F4] cursor-pointer hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "
                      >
                        <FaGoogle />
                        &nbsp; Sign in with Google
                      </button>

                      <div className="text-center  text-gray-500">or</div>
                    </div>
                    <form>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-600"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border text-black border-gray-300 rounded-md mt-1"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mt-3">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium text-gray-600"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="w-full text-black p-2 border border-gray-300 rounded-md mt-1"
                          placeholder="Enter your password"
                          required
                        />
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <label className="flex items-center text-sm text-gray-600">
                          <input type="checkbox" className="mr-2" />
                          Remember me
                        </label>
                        <a
                          href="#"
                          className="text-sm text-[var(--maincolor)] hover:underline"
                        >
                          Forgot Password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="text-white cursor-pointer hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full w-full h-full p-3 mt-3  text-sm  text-center  "
                      >
                        Login
                      </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                      Don’t have an account?
                      <a
                        href="#"
                        className="text-[var(--maincolor)] hover:underline"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
