"use client";

import { useEffect, useState } from "react";

export default function OurTeam() {
  const card = [
    {
      name: "John Doe",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img2.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img3.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img4.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img1.jpg",
    },
    {
      name: "John Doe",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img2.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img3.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img4.jpg",
    },
    {
      name: "Jane Smith",
      job: "CEO, XYZ Company",
      text: "Call Now",
      image:
        "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img1.jpg",
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
                <h1 className="text-5xl">Our Team</h1>
                <p className="text-gray-500 text-center max-w-lg">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  hello Aenean world.
                </p>
                <div className="flex relative   w-full h-full   overflow-hidden    items-center   ">
                  <div
                    className="flex items-center  gap-5 transition-transform duration-700 ease-in-out "
                    style={{ transform: `translateX(-${currentIndex * 13}%)` }}
                  >
                    {card.map((res, index) => {
                      return (
                        <>
                          <div className=" bg-white w-56  transition-all   duration-500 group ease-in     ">
                            {/* image */}
                            <div className=" relative w-full ">
                              <img
                                src={res.image}
                                className="object-cover  w-full "
                                alt={res.name}
                              />
                              <p className="absolute bottom-0 left-0 text-[var(--textcolor)] px-3 py-1  font-bold text-xl group-hover:bg-[var(--maincolor)] bg-[var(--bgcolor)] rounded-tr-lg ">
                                {res.text}
                              </p>
                            </div>
                            {/* text */}
                            <div className="  p-5  ">
                              <h5 className=" text-xl font-bold tracking-tight group-hover:text-[var(--maincolor)] ">
                                {res.name}
                              </h5>
                              <p className=" font-normal ">{res.job}</p>
                            </div>

                            <div className="border-t-2 border-[var(--bordercolor)] p-5">
                              <a
                                href="#"
                                className="text-[var(--maincolor)] group-hover:text-[var(--maincolor)] flex items-center  gap-2 "
                              >
                                Read more
                                <svg
                                  className=" w-3.5 h-3.5 "
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                  />
                                </svg>
                              </a>
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
