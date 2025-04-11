"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

// Ensures it runs as a client component in Next.js

interface Item {
  _id: string;
  image: string;
  rating: number;
  name: string;
  price: number;
}

const ShopSection = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_CALLBACK_URL}/api/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setData]);
  return (
    <section className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-lg hidden sm:block">
          Pages: <span className="font-bold">1-12</span> of 390
        </p>

        {/* Sort Dropdown */}
        <select className="border rounded p-2 text-gray-700">
          <option>Sort by</option>
          <option>Popularity</option>
          <option>High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Products Flex/List */}
      <div className={`flex flex-wrap gap-5 py-10  `}>
        {data.map((item) => (
          <>
            <div className="group w-full md:w-[48%] lg:w-[32%]  ">
              <div
                key={item._id}
                className="  shadow-md  flex-col flex justify-center border-2 border-white  group-hover:border-2 group-hover:border-[var(--maincolor)] items-center transition-all duration-300 ease-in-out  "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" object-cover  w-full h-64 "
                />
                <div className="p-5 w-full  flex flex-col justify-center items-center">
                  <div className="  w-full border-[var(--bordercolor)] flex flex-col   justify-center items-center">
                    {/* Star Ratings */}
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-xl transition-all duration-300 ease-in-out group-hover:scale-110"
                          onClick={() => {
                            const updatedData = data.map((product) =>
                              product._id === item._id
                                ? { ...product, rating: star }
                                : product
                            );
                            setData(updatedData);
                          }}
                        >
                          {star <= item.rating ? (
                            <FaStar className="text-yellow-500 cursor-pointer" />
                          ) : (
                            <FaRegStar className="text-gray-400 cursor-pointer" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-lg font-bold transition-all duration-300 ease-in-out group-hover:text-[var(--bgcolor)]">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-600">
                    <span className="text-green-600 font-bold">
                      ${item.price}
                    </span>
                  </h3>
                  <button className="bg-[var(--maincolor)] cursor-pointer group-hover:bg-[var(--bgcolor)] text-white px-4 py-2 rounded  transition-all duration-300 ease-in-out ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
