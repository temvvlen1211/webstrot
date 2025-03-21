
"use client";

import { useEffect, useState } from "react";

export default function AreSaying() {


    const card = [
        {
            name: "John Doe",
            job: "CEO, XYZ Company",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img1.jpg",
            text: "This service changed my life! Highly recommended.",

        },
        {
            name: "Jane Smith",
            job: "CEO, XYZ Company",
            text: "This service changed my life! Highly recommended.",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img2.jpg",
        },
        {
            name: "John Doe",
            feedback: "This service changed my life! Highly recommended.",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img1.jpg",
        },
        {
            name: "Jane Smith",
            feedback: "Absolutely fantastic experience. Will come back!",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img2.jpg",
        }, {
            name: "John Doe",
            feedback: "This service changed my life! Highly recommended.",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img1.jpg",
        },
        {
            name: "Jane Smith",
            feedback: "Absolutely fantastic experience. Will come back!",
            image: "https://webstrot.com/html/jyotish/light_version/images/content/testi_client_img2.jpg",
        },

    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
    };


    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isHovered) return;
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [isHovered]);

    return <>
        <section className="flex  justify-center py-5 items-center " onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img className="w-full max-h-[700] relative object-cover " src="https://webstrot.com/html/jyotish/light_version/images/content/testi_bg.jpg" alt="" />

            <div className="flex  absolute   flex-col justify-center items-center ">
                <div className="container ">
                    <div className="flex flex-col  items-center justify-center">

                        <h1 className="text-5xl">What clients are saying</h1>
                        <p className="text-gray-500 text-center max-w-lg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                            auctor, nisi elit consequat hello Aenean world.</p>
                        <div className="flex justify-center  overflow-hidden w-full py-30 items-center gap-5">
                            <div
                                className="flex transition-transform duration-700 ease-in-out gap-10 flex-nowrap  w-full"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {card.map((res, index) => {
                                    return <>
                                        <div key={index} className=" max-w-2xl pt-10 flex-shrink-0 relative  mx-auto bg-white shadow-lg rounded-2xl p-6">

                                            <div className="flex flex-col items-center  ">
                                                <img
                                                    className="max-w-min  max-h-min rounded-full border-4 -top-15 border-[var(--maincolor)]  absolute"
                                                    src={res.image}
                                                    alt="Client"
                                                />
                                                <h4 className="text-lg font-semibold text-gray-900"></h4>
                                                <p className="text-sm text-gray-500">CEO, XYZ Company</p>
                                            </div>
                                            <p className="mt-4 text-gray-600 italic">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate iste nemo officiis iusto amet! Cum eius nihil molestias unde commodi consectetur iste nobis voluptatibus, obcaecati aliquam consequatur aliquid! Facilis!
                                            </p>

                                        </div>

                                    </>
                                })}
                            </div>


                        </div>
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {card.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-[var(--maincolor)] scale-125" : "bg-gray-500"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>



                    </div>

                </div>

            </div>

        </section></>
}