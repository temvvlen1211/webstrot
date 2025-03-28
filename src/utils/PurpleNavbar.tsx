"use client";

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
              <span className=" text-nowrap font-semibold ">
                601 , Ram Nagar Dewas
              </span>
            </div>
            {/* Number */}
            <div className="flex   items-center px-5   w-full py-3 gap-2 ">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                </svg>
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
                        <svg
                          className="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 8 19"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Sign in with Facebook
                      </button>
                      <button
                        type="button"
                        className="w-full text-white bg-[#4285F4] cursor-pointer hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "
                      >
                        <svg
                          className="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 19"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Sign in with Google
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
