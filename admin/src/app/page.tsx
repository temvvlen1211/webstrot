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

export default function Home() {
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
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <a href="" className="flex items-center ps-2.5 mb-5">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 me-3 sm:h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaChartPie />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <FaShoppingCart />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    E-commerce
                  </span>
                  <FaAngleRight />
                </button>
                <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaMicrosoft />
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                </a>
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
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUser />
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaShoppingBag />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaDoorOpen />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaEdit />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
