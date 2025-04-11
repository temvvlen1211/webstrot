import { FaBasketShopping, FaShop } from "react-icons/fa6";

export default function Breadcrumbs() {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className=" space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaBasketShopping /> &nbsp; Shop
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
}
