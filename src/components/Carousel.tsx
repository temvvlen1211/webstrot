"use client";

import { useEffect, useState } from "react";

export default function Carousel() {
  const slider = [
    "https://webstrot.com/html/jyotish/light_version/images/header/slide6.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/header/slide4.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/header/slide6.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/header/slide4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Go to the next slide
  const nextSlide = () => {
    if (isTransitioning) return; // Prevent transition while already transitioning
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return; // Prevent transition while already transitioning
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slider.length) % slider.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to only run once on mount

  // Trigger the transition after the state update
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Wait for 1 second (transition duration) before allowing next slide change

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <>
      <div className="relative w-full">
        {/* Image Slide with sliding transition */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className={`transition-all duration-1000 ease-in ${
              isTransitioning
                ? "transform translate-x-full opacity-0"
                : "transform translate-x-0 opacity-100"
            }`}
          >
            <img
              src={slider[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
