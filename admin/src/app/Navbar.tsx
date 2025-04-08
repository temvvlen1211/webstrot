import Link from "next/link";
import {
  FaAlignJustify,
  FaAngleRight,
  FaChartPie,
  FaDoorOpen,
  FaEdit,
  FaInbox,
  FaMicrosoft,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
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
          className="  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Link href="/home" className="flex items-center ps-2.5 mb-5">
              <img
                src="https://webstrot.com/html/jyotish/light_version/images/header/logo.png"
                className=" object-cover"
                alt="Flowbite Logo"
              />
            </Link>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaChartPie />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/order"}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <FaShoppingCart />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Order
                  </span>
                  {/* <FaAngleRight /> */}
                </Link>
                {/* <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                    <Link
                      href="/product"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Billing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link
                  href="/kanban"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaMicrosoft />
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaInbox />
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUser />
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaShoppingBag />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaDoorOpen />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaEdit />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
