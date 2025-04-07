"use client";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Description() {
  const [activeTab, setActiveTab] = useState(3); // Default active tab is Reviews
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <section className=" flex justify-center items-center w-full py-10 sm:px-0 px-5 pb-44 sm:pb-20">
        <div className="container w-full">
          <div className=" flex   sm:flex sm:flex-row   w-full gap-5  ">
            <div className="w-full">
              {/* Tab Navigation */}
              <ul className="flex space-x-4 border-b">
                <li className="cursor-pointer">
                  <button
                    onClick={() => handleTabClick(1)}
                    className={`py-2 px-4 ${
                      activeTab === 1
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                    }`}
                  >
                    Description
                  </button>
                </li>
                <li className="cursor-pointer">
                  <button
                    onClick={() => handleTabClick(2)}
                    className={`py-2 px-4 ${
                      activeTab === 2
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                    }`}
                  >
                    Product Information
                  </button>
                </li>
                <li className="cursor-pointer">
                  <button
                    onClick={() => handleTabClick(3)}
                    className={`py-2 px-4 ${
                      activeTab === 3
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                    }`}
                  >
                    Reviews (3)
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === 1 && (
                  <div id="product_tab_1">
                    <p>
                      A gemstone (also called a gem, fine gem, jewel, precious
                      stone, or semi-precious stone) is a piece of mineral
                      crystal that is cut and polished to be used in jewelry.
                    </p>
                    <ul className="list-disc list-inside ">
                      <li>Easily Comfortable</li>
                      <li>Category: Sports Wear</li>
                      <li>Tags: Sports Wear, Clothing, T-Shirts</li>
                    </ul>
                  </div>
                )}

                {activeTab === 2 && (
                  <div id="product_tab_2">
                    <table className="min-w-full table-auto border-collapse">
                      <tbody>
                        <tr>
                          <th className="border p-2">Gemstone</th>
                          <td className="border p-2">Emerald</td>
                        </tr>
                        <tr>
                          <th className="border p-2">Cut</th>
                          <td className="border p-2">Faceted</td>
                        </tr>
                        <tr>
                          <th className="border p-2">Colour</th>
                          <td className="border p-2">Green</td>
                        </tr>
                        <tr>
                          <th className="border p-2">Composition</th>
                          <td className="border p-2">Natural</td>
                        </tr>
                        <tr>
                          <th className="border p-2">Shape</th>
                          <td className="border p-2">Oval</td>
                        </tr>
                        <tr>
                          <th className="border p-2">Weight (carat)</th>
                          <td className="border p-2">2.66</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 3 && (
                  <div id="product_tab_3">
                    {/* Review 1 */}
                    <div className="flex space-x-4 group  mb-6">
                      <div className="w-30">
                        <img
                          src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg"
                          alt="author_img"
                          className=" object-cover w-full group-hover:border-[var(--maincolor)] rounded-full border"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">
                          <span className="text-gray-800">John Doe - </span>
                          <span className="text-gray-500">25 August, 2018</span>
                        </div>
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
                        <p className="mt-2 text-gray-600">
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="flex space-x-4 group mb-6">
                      <div className="w-30">
                        <img
                          src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg"
                          alt="author_img"
                          className=" object-cover w-full group-hover:border-[var(--maincolor)] rounded-full border"
                        />
                      </div>

                      <div>
                        <div className="font-semibold">
                          <span className="text-gray-800">John Doe - </span>
                          <span className="text-gray-500">25 August, 2018</span>
                        </div>
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
                        <p className="mt-2 text-gray-600">
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div className="flex space-x-4 group mb-6">
                      <div className="w-30">
                        <img
                          src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg"
                          alt="author_img"
                          className=" object-cover w-full group-hover:border-[var(--maincolor)] rounded-full border"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">
                          <span className="text-gray-800">John Doe - </span>
                          <span className="text-gray-500">25 August, 2018</span>
                        </div>
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
                        <p className="mt-2 text-gray-600">
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                      </div>
                    </div>

                    {/* Review Form */}
                    <form className="mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border rounded-md"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded-md"
                          />
                        </div>
                        <div className="col-span-2">
                          <textarea
                            rows={4}
                            placeholder="Comments"
                            className="w-full p-3 border rounded-md"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
