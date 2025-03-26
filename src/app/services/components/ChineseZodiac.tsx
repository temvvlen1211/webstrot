export default function ChineseZodiac() {
  const zodiac = [
    {
      sign: "Rat",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon1.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Ox",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon2.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Tiger",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon3.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Rabbit",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon4.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Dragon",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon5.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Snake",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon6.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Horse",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon7.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Goat",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon8.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Monkey",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon9.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Rooster",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon10.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Dog",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon11.png",
      years: "31 Mar - 12 Oct",
    },
    {
      sign: "Pig",
      img: "https://webstrot.com/html/jyotish/light_version/images/content/c_icon12.png",
      years: "31 Mar - 12 Oct",
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
            <div className="flex justify-center sm:justify-between gap-3    sm:gap-5     items-center  flex-wrap  ">
              {zodiac.map((sign, index) => (
                <div className="group  " key={index}>
                  <div className=" p-10  text-center flex flex-col  justify-center transition-all duration-300 ease-in items-center shadow-lg shadow-gray-300   group-hover:bg-[var(--maincolor)]  ">
                    <img
                      src={sign.img}
                      className="object-cover w-32 h-auto rounded-full"
                      alt={sign.sign}
                    />
                    <h5 className=" text-2xl font-bold tracking-tight group-hover:text-[var(--textcolor)] ">
                      {sign.sign}
                    </h5>
                    <p className=" font-normal group-hover:text-[var(--textcolor)] ">
                      {sign.years}
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
