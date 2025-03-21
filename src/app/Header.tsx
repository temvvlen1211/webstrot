// import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* purple navbar */}
      <nav className="bg-[var(--maincolor)]  w-full flex justify-center items-center text-white ">
        <div
          className="container  px-5 "
        >
          <div
            className="items-center divide-x-2 divide-white justify-center  w-full flex " id="navbar-user"
          >
            <div className=" md:flex justify-center w-full gap-2 py-3 items-center hidden ">
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
            <div className="flex justify-center items-center w-full py-3 gap-2 ">
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

            <div className="w-full  md:flex items-center hidden justify-center relative  ">
              <input
                type="email"
                name="email"
                placeholder="Email Address..."
                className=" p-3  bg-gray-50 text-gray-900 text-sm rounded-full ring-[var(--maincolor)]  "
              />
              <button className="bg-[var(--maincolor)] right-19  p-3 absolute  end-0 rounded-full ">
                Subscribe
              </button>
            </div>
            <div className=" w-20   flex justify-center items-center py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                fill="white"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center md:w-full max-w-15 gap-3 py-2 text-sm rounded-full  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
            >
              <img
                className="max-w-8 h-8 rounded-full"
                src="https://webstrot.com/html/jyotish/light_version/images/header/top_user.png"
                alt="user photo"
              />
              <span className="hidden md:block">login/register</span>
            </div>
          </div>
        </div>
      </nav>
      {/* whiteNavbar
      <div className="flex justify-center items-center sticky top-0 left-0 z-50 bg-[var(--navcolor)]                                                                                                                        ">
        <nav className="container ">
          <div className="flex flex-wrap items-center justify-between py-4">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://webstrot.com/html/jyotish/light_version/images/header/logo.png"
                className="h-10"
                alt=""
              />
            </a>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className=" flex flex-col font-semibold  items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/home" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">About</Link>

                </li>
                <li>

                  <Link href="/horoscope" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">Horoscope</Link>

                </li>
                <li>
                  <Link href="/services" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">Services</Link>
                </li>

                <li>
                  <Link href="/shop" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">Shop</Link>
                </li>

                <li><Link href="/news" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">News</Link>

                </li>
                <li>
                  <Link href="/contactus" className="block  text-black hover:text-(--maincolor)  md:hover:bg-transparent">Contact Us</Link>

                </li>

                <button type="button" className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-10 text-xl py-3 text-center  ">
                  Appointments

                </button>


              </ul>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
}
