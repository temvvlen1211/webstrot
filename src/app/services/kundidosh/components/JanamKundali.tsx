export default function JanamKundali() {
  const services = [
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/j1.jpg",
      name: "Tarot Reading",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/j2.jpg",
      name: "Crystal ball reading",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/j3.jpg",
      name: "GePalm Readingini",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    },
  ];
  return (
    <>
      <section className=" w-full py-10">
        <div className="">
          <h1 className="font-semibold text-2xl">Important of Janam Kundali</h1>
          <p className="text-gray-400 py-5">
            It is important to make an accurate Janam Kundali with proper birth
            matching to get the best result. Parents go to the expert
            astrologers to make an accurate Janam Kundali for their child on his
            or her birth time. Lorem ipsum dolor sit et, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad mim veiam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenerit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="flex justify-between gap-5 py-5  w-full flex-col sm:flex-row items-center   transition-all duration-500 ease-in ">
          {services.map((card, index) => (
            <div className="group" key={index}>
              <div className=" shadow-lg shadow-gray-500  transition-all duration-300 ease-in     ">
                <div className="relative overflow-hidden">
                  <img
                    src={card.img}
                    className="object-cover     w-full  h-full"
                    alt={card.name}
                  />
                </div>

                <div className="p-10 flex flex-col  gap-3 ">
                  <h5 className=" text-2xl font-bold tracking-tight hover:text-[var(--bgcolor)] ">
                    {card.name}
                  </h5>
                  <p className="text-[var(--maincolor)]">By - Shilpa rao</p>
                  <p className=" font-normal ">{card.text}</p>
                  <a
                    href="#"
                    className="text-[var(--maincolor)] hover:text-[var(--bgcolor)] flex items-center  gap-2 "
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
