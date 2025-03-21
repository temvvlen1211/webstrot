"use client";

export default function ZodiacSign() {
  const zodiac = [
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon1.png",
      name: "Aries",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon2.png",
      name: "Taurus",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon3.png",
      name: "Gemini",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon4.png",
      name: "Cancer",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon5.png",
      name: "Leo",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon6.png",
      name: "Virgo",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon7.png",
      name: "Libra",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon8.png",
      name: "Scorpio",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon9.png",
      name: "Sagittarius",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon10.png",
      name: "Capricorn",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon11.png",
      name: "Aquarius",
      day: "31 Mar - 12 Oct",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/icon12.png",
      name: "Pisces",
      day: "31 Mar - 12 Oct",
    },
  ];

  return (
    <>
      <section className="flex max-w-full justify-center py-10 items-center text-[var(--comptext)] px-5   md:px-0">
        <div className="container text-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-5xl">Choose Your Zodiac Sign</h1>
            <p className="text-gray-500 max-w-lg">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat hello Aenean
              world.
            </p>
            <div className="flex justify-between md:gap-10    items-center w-full flex-wrap  ">
              {zodiac.map((sign, index) => (
                <div className="group max-w-sm " key={index}>
                  <div className=" p-10 w-full text-center flex flex-col  justify-center transition-all duration-300 ease-in items-center shadow-lg shadow-gray-300   group-hover:bg-[var(--maincolor)]  ">
                    <img
                      src={sign.img}
                      className="object-cover w-full h-full rounded-full"
                      alt={sign.name}
                    />
                    <h5 className=" text-2xl font-bold tracking-tight group-hover:text-[var(--textcolor)] ">
                      {sign.name}
                    </h5>
                    <p className=" font-normal group-hover:text-[var(--textcolor)] ">
                      {sign.day}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
