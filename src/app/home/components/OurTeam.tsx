
"use client";

import { useEffect, useState } from "react";

export default function OurTeam() {


    const card = [
        {
            name: "John Doe",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img2.jpg",


        },
        {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img3.jpg",
        },
        {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img4.jpg",
        }, {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img1.jpg",
        }, {
            name: "John Doe",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img2.jpg",


        },
        {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img3.jpg",
        },
        {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img4.jpg",
        }, {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "Call Now",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/about/astro_img1.jpg",
        }

    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
    };
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + card.length) % card.length
        );
    };



    useEffect(() => {
        if (isHovered) return;
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlide, isHovered]);

    return <>
        <section className="flex  justify-center  items-center " onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img className="w-full  max-h-[800px] relative object-cover " src="https://webstrot.com/html/jyotish/light_version/images/content/testi_bg.jpg" alt="" />

            <div className="flex  absolute   justify-center items-center ">
                <div className="container relative  w-full h-full ">
                    <div className="flex  flex-col gap-5  items-center justify-center ">

                        <h1 className="text-5xl">Our Team</h1>
                        <p className="text-gray-500 text-center max-w-lg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                            auctor, nisi elit consequat hello Aenean world.</p>
                        <div className="flex h-full  overflow-hidden w-full justify-center items-center  gap-5">
                            <div
                                className="flex transition-transform duration-700 ease-in-out gap-10  max-w-full"
                                style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                            >
                                {card.map((res, index) => {


                                    return <>
                                        <div key={index} className="group flex-shrink-0" >
                                            <div className="max-w-lg shadow-lg shadow-gray-500  group-hover:transition-all  group-hover:duration-500 group-hover:ease-in     ">
                                                <div className="relative overflow-hidden">
                                                    <img src={res.image} className="object-cover w-full h-auto" alt={res.name} />
                                                    <p className="absolute bottom-0 left-0 text-[var(--textcolor)] px-5 py-3  font-bold text-xl group-hover:bg-[var(--maincolor)] bg-[var(--bgcolor)] rounded-tr-lg ">{res.text}</p>
                                                </div>

                                                <div className="  p-5  ">
                                                    <h5 className=" text-2xl font-bold tracking-tight group-hover:text-[var(--maincolor)] ">{res.name}</h5>
                                                    <p className=" font-normal ">{res.job}</p>
                                                </div>

                                                <div className="border-t-2 border-[var(--bordercolor)] p-5">
                                                    <a href="#" className="text-[var(--maincolor)] group-hover:text-[var(--maincolor)] flex items-center  gap-2 ">
                                                        Read more
                                                        <svg className=" w-3.5 h-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>

                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </>
                                })}
                            </div>
                            {/* Navigation Buttons */}
                            <div className="absolute -left-10 -right-5 transition-all duration-500 ease-in flex justify-between transform -translate-y-1/2">
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

        </section></>
}