"use client";
import { useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaEquals,
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaSwift,
} from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

export default function ShopSingleSection() {
  const [quantity, setQuantity] = useState(1);
  const colors = [
    "bg-blue-500",
    "bg-yellow-700",
    "bg-green-500",
    "bg-yellow-500",
  ];
  const [selected, setSelected] = useState<number | null>(null);

  const [current, setCurrent] = useState(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const images = [
    "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
  ];

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  };
  return (
    <>
      <section className="bg-gray-100 flex justify-center items-center w-full py-10 sm:px-0 px-5  ">
        <div className="container w-full">
          <div className=" flex   sm:flex sm:flex-row   w-full gap-5  ">
            <div className="w-full flex justify-center  gap-5 flex-col sm:flex-row ">
              <div className="w-full  ">
                {/* Main Image */}
                <div className="mb-4 flex justify-center items-center w-full">
                  <img
                    src={images[current]}
                    alt="Main"
                    className=" w-2xl  object-cover"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="flex w-full justify-between">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumb-${index}`}
                      onClick={() => setCurrent(index)}
                      className={`cursor-pointer w-20 sm:w-40  object-cover  transition-all ${
                        current === index
                          ? "border-yellow-500"
                          : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className=" w-full flex  flex-col sm:gap-5 gap-3 ">
                {/* Review Section */}
                <div className="flex items-center  gap-5">
                  <div className="flex space-x-1 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = star <= (hover || rating);

                      return (
                        <span
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          className="text-xl transition-colors"
                        >
                          {isFilled ? (
                            <FaStar className="text-yellow-500" />
                          ) : (
                            <FaRegStar className="hover:text-yellow-500 text-gray-400" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                  <ul className="flex gap-5  text-sm   ">
                    <li className="flex justify-center  hover:text-[var(--maincolor)] items-center">
                      <a href="#">03 Review</a>
                    </li>
                    <li className="hidden sm:flex justify-center hover:text-[var(--maincolor)] items-center">
                      <a href="#">Add Your Review</a>
                    </li>
                  </ul>
                </div>
                {/* Product Title */}
                <h2 className="text-2xl font-semibold ">
                  Gemstone (Blue, Brown, Green, Yellow)
                </h2>
                {/* Price Section */}
                <div className=" flex gap-5 ">
                  <h4 className="text-xl font-bold text-green-600">$166.00</h4>
                  <del className="text-gray-400">$398.00</del>
                  <ul className=" text-white ">
                    <li className="p-1 text-sm bg-[var(--bgcolor)]">35% off</li>
                  </ul>
                </div>

                {/* Stock Info */}
                <ul className="text-sm  flex gap-3">
                  <li className="flex items-center justify-center">
                    Available:
                    <span className="flex text-green-500 items-center justify-center">
                      <FaCheckCircle />
                      In Stock
                    </span>
                  </li>
                  <li>
                    Product ID:
                    <span className="text-gray-600">#201546</span>
                  </li>
                </ul>

                {/* Description and Color Options */}
                <h5 className="text-gray-700 ">
                  A gemstone (also called a gem, fine gem, jewel, precious
                  stone, or semi-precious stone) is a piece of mineral crystal
                  which is in cut and polished form, it is used to make jewelry.
                </h5>

                {/* Color Selection */}
                <span className="block text-sm font-semibold  ">Color</span>
                <ul className="flex space-x-2">
                  {colors.map((color, index) => (
                    <li key={index} className="group">
                      <button
                        type="button"
                        onClick={() => setSelected(index)}
                        title="Check"
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white transition-all duration-200 
              ${color} 
              ${selected === index ? "ring-2 ring-offset-2 ring-black" : ""}
            `}
                      >
                        <FaCheck
                          className={`text-xs transition-opacity duration-150 ${
                            selected === index
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Quantity & Buttons */}
                <span className="block text-sm font-semibold">Quantity</span>
                <div className="flex items-center space-x-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border rounded overflow-hidden">
                    <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={handleChange}
                      id="input-quantity"
                      className="w-10 text-center border-x border-gray-300"
                    />
                    <div className="flex flex-col">
                      <button
                        onClick={increment}
                        className="p-1 text-gray-600 hover:text-black"
                      >
                        <FaPlus />
                      </button>
                      <button
                        onClick={decrement}
                        className="p-1 text-gray-600 hover:text-black"
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}

                  <a
                    type="button"
                    className="text-white flex space-x-2 items-center bg-[var(--maincolor)] cursor-pointer hover:bg-[var(--bgcolor)] font-bold rounded-full px-10 text-xl py-3 hover:scale-95 transition-all duration-500 ease-in"
                  >
                    <FaBasketShopping />
                    <span>Add to Cart</span>
                  </a>

                  {/* Wishlist */}
                  <a
                    href="#"
                    className="text-red-500 py-3 px-4  hover:text-red-600  flex space-x-2 items-center bg-[var(--maincolor)] cursor-pointer hover:bg-[var(--bgcolor)] font-bold rounded-full  text-xl  hover:scale-95 transition-all duration-500 ease-in"
                    title="Add to Wishlist"
                  >
                    <FaHeart />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
