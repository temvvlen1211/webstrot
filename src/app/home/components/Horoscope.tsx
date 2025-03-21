"use client";

import { useEffect, useState } from "react";

export default function TodayHoroscope() {
  const horoscopeData = [
    {
      name: "Today Horoscope",
      title: "Believe in things that can fortunately change your life",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio.",
    },
    {
      name: "Tomorrow Horoscope",
      title: "Believe in things that can fortunately change your life",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio.",
    },
    {
      name: "Weekly Horoscope",
      title: "Believe in things that can fortunately change your life",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % horoscopeData.length);
  };


  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section
      className=" relative w-full h-[600px] overflow-hidden bg-[var(--maincolor)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      <div className="relative container mx-auto h-full flex items-center justify-center overflow-hidden  ">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://webstrot.com/html/jyotish/light_version/images/content/news_slider_bg3.jpg"
            alt="Horoscope Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>
        </div>
        <div
          className="flex transition-transform duration-700 ease-in-out flex-nowrap w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {horoscopeData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center text-center text-white px-4"
            >
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              <h2 className="text-5xl font-extrabold mb-6">{item.title}</h2>
              <p className="max-w-2xl text-lg mb-8">{item.text}</p>
              <button
                type="button"
                className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-15 text-xl py-5 text-center  "
              >
                View all
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {horoscopeData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
