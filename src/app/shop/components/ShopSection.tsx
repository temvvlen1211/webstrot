"use client"; // Ensures it runs as a client component in Next.js

import React, { useState } from "react";

const products = [
    { id: 1, name: "Gemstone", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 2, name: "Yantra", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 3, name: "Rudrasha Yantra", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 4, name: "Navha Yantra", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 5, name: "Vastu Tree", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 6, name: "Antique Coin", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 4, name: "Navha Yantra", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
    { id: 4, name: "Navha Yantra", image: "https://webstrot.com/html/jyotish/light_version/images/content/shop/sp1.jpg", oldPrice: "$149", newPrice: "$250", rating: 3 },
];

const ShopSection = () => {
    const [viewMode, setViewMode] = useState("flex");

    return (
        <section className="">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 text-lg">
                    Pages: <span className="font-bold">1-12</span> of 390
                </p>

                {/* Sort Dropdown */}
                <select className="border rounded p-2 text-gray-700">
                    <option>Sort by</option>
                    <option>Popularity</option>
                    <option>High to Low</option>
                    <option>Newest First</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex space-x-2">
                    <button
                        className={`p-2 rounded ${viewMode === "flex" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setViewMode("flex")}
                    >
                        🔲
                    </button>
                    <button
                        className={`p-2 rounded ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setViewMode("list")}
                    >
                        📋
                    </button>
                </div>
            </div>

            {/* Products Flex/List */}
            <div className={`flex flex-wrap gap-5 py-10 ${viewMode === "flex" ? "" : "flex-col "}  `}>
                {products.map((product) => <>
                    <div className="group w-full md:w-[48%] lg:w-[32%]  ">
                        <div key={product.id} className="  shadow-md  flex-col flex justify-center border-2 border-white  group-hover:border-2 group-hover:border-[var(--maincolor)] items-center transition-all duration-300 ease-in-out  ">
                            <img src={product.image} alt={product.name} className=" object-cover rounded-md w-full " />
                            <div className=" border-t-2 p-5 w-full border-[var(--bordercolor)] flex flex-col justify-center items-center">
                                {/* Star Ratings */}
                                <div className="text-yellow-400">
                                    {"★".repeat(product.rating)}
                                    {"☆".repeat(5 - product.rating)}
                                </div>
                                <h2 className="text-lg font-bold transition-all duration-300 ease-in-out group-hover:text-[var(--bgcolor)]">{product.name}</h2>
                                <h3 className="text-gray-600">
                                    <del>{product.oldPrice}</del> <span className="text-green-600 font-bold">{product.newPrice}</span>
                                </h3>
                                <button className="bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)] text-white px-4 py-2 rounded mt-3 transition-all duration-300 ease-in-out ">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                </>)}
            </div>
        </section>
    );
};

export default ShopSection;
