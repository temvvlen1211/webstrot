"use client";

import { useEffect, useState } from "react";

export default function TarotReading() {
  const card = [
    {
      id: 1,
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg",
    },
    {
      id: 2,
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg",
    },
    {
      id: 3,
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg",
    },
    {
      id: 4,
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/ar_img1.jpg",
    },
  ];

  return (
    <>
      <section className="w-full py-10">
        <h1 className="text-3xl ">Your Daily Tarot Reading</h1>
        {/* card */}
        <div className=" flex flex-col  pt-5 sm:flex-row gap-5 w-full justify-between items-center">
          {card.map((res) => {
            return (
              <>
                <div
                  key={res.id}
                  className="flex flex-col w-sm justify-between items-center gap-5"
                >
                  <img
                    src={res.img}
                    className="object-cover w-full h-auto"
                    alt=""
                  />
                  <a
                    href=""
                    className="border-2 border-[var(--bordercolor)] hover:bg-[var(--maincolor)] font-extrabold hover:text-[var(--textcolor)] p-3"
                  >
                    Family
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
