"use client";

import { useEffect, useState } from "react";

export default function TarotReading() {
    const card = [
        { id: 1, img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg" },
        { id: 2, img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg" },
        { id: 3, img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg" },
        { id: 4, img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg" }
    ]



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


    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + horoscopeData.length) % horoscopeData.length
        );
    };

    useEffect(() => {
        if (isHovered) return;
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [isHovered]);
    return <>
        <section className="w-full py-10">
            <h1 className="text-3xl my-10">Your Daily Tarot Reading</h1>
            <div className="flex w-full justify-between items-center">
                {card.map((res) => {
                    return <>
                        <div key={res.id} className="flex flex-col justify-between items-center gap-5">
                            <img src={res.img} className="object-cover max-w-lg h-auto" alt="" />
                            <a href="" className="border-2 border-[var(--bordercolor)] hover:bg-[var(--maincolor)] font-extrabold hover:text-[var(--textcolor)] p-3" >Family</a>

                        </div></>
                })}

            </div>
            <div
                className=" relative w-full h-[500px] overflow-hidden py-10 "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >


                <div className="relative container mx-auto h-full flex items-center justify-center overflow-hidden  ">
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="https://webstrot.com/html/jyotish/light_version/images/content/title_img3.jpg"
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
                </div>

            </div>
        </section>

    </>

};
