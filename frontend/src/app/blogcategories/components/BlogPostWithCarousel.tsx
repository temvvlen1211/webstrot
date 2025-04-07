"use client"; // Ensures it runs as a client component in Next.js

import React, { useState, useEffect } from "react";

const blogImages = [
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/bc3.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/bc1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/bc2.jpg",
];

const BlogPostWithCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? blogImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % blogImages.length);
    };

    return (
        <section className="w-full py-10">
            <div className=" shadow-lg rounded-lg w-full h-full  overflow-hidden relative">
                <div className="flex items-center w-full h-full justify-center relative">
                    {/* Carousel Images */}
                    <div
                        className="flex transition-all h-full duration-700 ease-in-out w-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {blogImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className="w-full h-full shrink-0 object-cover"
                            />
                        ))}
                    </div>

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        ❮
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        ❯
                    </button>
                </div>
                {/* description */}
                <div className="p-6">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
                        <a href="#" className="hover:text-blue-600">By - Admin</a>
                        <span>|</span>
                        <a href="#" className="hover:text-blue-600">256 Comments</a>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Rahu Enters Cancer and Ketu Enters Capricorn.
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                        sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>

                    <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                        Read More <i className="ml-2 fa fa-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogPostWithCarousel;
