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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slider.length) % slider.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <section className="relative w-full  overflow-hidden ">
      {/* Image Slide Container */}
      <div
        className="flex transition-transform  duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slider.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover opacity-100 max-h-[700px]  filter grayscale-50"
          />
        ))}
      </div>

      <div className="flex justify-center absolute  inset-0 items-center text-[var(--textcolor)] ">
        <div className="container text-center">
          <div className="flex  relative flex-col items-center  justify-center gap-3 ">
            <h1 className="text-5xl">Welcome To </h1>
            <h2 className="text-7xl font-extrabold">the Jyotish Astrology</h2>
            <p className="max-w-xl">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit. Duis sed odio.
            </p>
            <button
              type="button"
              className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-15 text-xl py-5 text-center  "
            >
              View all
            </button>

            <div className="flex justify-between w-full items-center">
              <div className="flex justify-center items-center gap-3 group">
                <button type="button" className="text-white border-8 border-gray-800/100 bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)]  font-medium rounded-full text-sm p-5 text-center  transition-all ease-in duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="white" viewBox="0 0 50 50"><path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path></svg>
                </button>
                <button
                  type="button"
                  className="text-white  bg-gray-800/60   group-hover:bg-[var(--bgcolor)] 
             transition-all ease-in duration-200 font-extrabold rounded-full text-sm px-7 py-5 text-center group-ho">
                  Love Tarot
                </button>


              </div>
              <div className="flex justify-center items-center gap-3 group">
                <button type="button" className="text-white border-8 border-gray-800/100 bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)]  font-extrabold rounded-full text-sm p-5 text-center  transition-all ease-in duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="white" viewBox="0 0 50 50"><path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path></svg>
                </button>
                <button
                  type="button"
                  className="text-white  bg-gray-800/60   group-hover:bg-[var(--bgcolor)] 
             transition-all ease-in duration-200 font-extrabold rounded-full text-sm px-7 py-5 text-center group-ho">
                  Love Tarot
                </button>


              </div>
            </div>
            <div className="flex justify-around w-full  items-center">
              <div className="flex justify-center items-center gap-3 group">
                <button type="button" className="text-white border-8 border-gray-800/100 bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)]  font-extrabold rounded-full text-sm p-5 text-center  transition-all ease-in duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="white" viewBox="0 0 50 50"><path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path></svg>
                </button>
                <button
                  type="button"
                  className="text-white  bg-gray-800/60   group-hover:bg-[var(--bgcolor)] 
             transition-all ease-in duration-200 font-extrabold rounded-full text-sm px-7 py-5 text-center group-ho">
                  Love Tarot
                </button>


              </div>
              <div className="flex justify-center items-center gap-3 group">
                <button type="button" className="text-white border-8 border-gray-800/100 bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)]  font-extrabold rounded-full text-sm p-5 text-center  transition-all ease-in duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="white" viewBox="0 0 50 50"><path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path></svg>
                </button>
                <button
                  type="button"
                  className="text-white  bg-gray-800/60   group-hover:bg-[var(--bgcolor)] 
             transition-all ease-in duration-200 font-extrabold rounded-full text-sm px-7 py-5 text-center group-ho">
                  Love Tarot
                </button>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
