"use client";

import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function PopularProduct() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const card = [
    {
      name: "John Doe",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp3.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp2.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg",
    },
    {
      name: "John Doe",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + card.length) % card.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlide, isHovered]);

  return (
    <>
      <section
        className="flex  justify-center items-center "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-[800px]  flex justify-center items-center">
          <img
            className="w-full h-full object-cover "
            src="https://webstrot.com/html/jyotish/light_version/images/content/testi_bg.jpg"
            alt=""
          />
          <div className="flex justify-center items-center w-full h-full  absolute top-0 left-0">
            <div className="container relative  ">
              <div className=" flex flex-col justify-center items-center pb-50 sm:pb-0 gap-5 px-5 sm:px-0 w-full h-full">
                <h1 className="text-5xl">Popular Product</h1>
                <p className="text-gray-500 text-center max-w-lg">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  hello Aenean world.
                </p>
                <div className="flex relative   w-full h-full   overflow-hidden    items-center   ">
                  <div
                    className="flex items-center  gap-5 transition-transform duration-700 ease-in-out "
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                  >
                    {card.map((res, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className=" w-sm rounded-lg border border-gray-300 shadow-lg overflow-hidden"
                          >
                            {/* Product Image */}
                            <div className="w-full h-56 bg-gray-200">
                              <img
                                src={res.image}
                                alt="shop_product"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Product Content */}
                            <div className="p-4 flex flex-col justify-center items-center">
                              {/* Rating */}
                              <div className="flex">
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

                              {/* Product Title */}
                              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                                <a href="#">Panchdhatu Shankh</a>
                              </h2>

                              {/* Price */}
                              <h3 className="text-lg font-semibold text-gray-600 mt-2">
                                <del className="text-red-500">$149</del> &nbsp;
                                <span className="text-[var(--maincolor)]">
                                  $250
                                </span>
                              </h3>

                              {/* Add to Cart Button */}
                              <div className="mt-4">
                                <a
                                  href="#"
                                  className="w-full py-3 px-5 bg-[var(--maincolor)] text-white text-center rounded-md  transition duration-300"
                                >
                                  Add to Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {/* Navigation Buttons */}
                  <div className="absolute left-0 right-0 transition-all duration-500 ease-in flex justify-between transform -translate-y-1/2">
                    <button
                      onClick={prevSlide}
                      className="bg-[var(--maincolor)]   text-white p-2 rounded-full shadow-lg hover:bg-[var(--bgcolor)] text-2xl "
                    >
                      ❮
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-[var(--maincolor)]  text-white p-2 rounded-full shadow-lg  hover:bg-[var(--bgcolor)] text-2xl"
                    >
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
