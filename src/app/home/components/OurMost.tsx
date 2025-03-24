export default function OurMost() {
  const services = [
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img1.jpg",
      name: "Tarot Reading",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
      price: "15",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img2.jpg",
      name: "Crystal ball reading",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
      price: "15",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img3.jpg",
      name: "GePalm Readingini",
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
      price: "15",
    },
  ];
  return (
    <>
      <section className="flex max-w-full justify-center  py-20 pt-96 sm:py-20 sm:pt-50  items-center text-[var(--comptext)]">
        <div className="container md:px-0 px-5">
          <div className="flex   flex-col justify-center items-center gap-5">
            <h1 className=" text-center text-5xl">Our Most Services</h1>
            <p className="text-gray-500 text-center max-w-lg">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat hello Aenean
              world.
            </p>
            <div className="flex justify-between gap-5  w-full  items-center flex-wrap  transition-all duration-500 ease-in ">
              {services.map((card, index) => (
                <div className="group" key={index}>
                  <div className="max-w-md shadow-lg shadow-gray-500  transition-all duration-300 ease-in     ">
                    <div className="relative overflow-hidden">
                      <img
                        src={card.img}
                        className="object-cover  group-hover:scale-110 scale-100  group-hover:transition-all group-hover:duration-500 group-hover:ease-in    w-full  h-full"
                        alt={card.name}
                      />
                      <p className="absolute bottom-0 left-0 text-[var(--textcolor)] px-10 py-3 bg-[var(--maincolor)] font-bold text-xl group-hover:bg-[var(--bgcolor)] ">
                        ${card.price}
                      </p>
                    </div>

                    <div className="p-10   ">
                      <h5 className=" text-2xl font-bold tracking-tight group-hover:text-[var(--bgcolor)] ">
                        {card.name}
                      </h5>
                      <p className=" font-normal ">{card.text}</p>
                      <a
                        href="#"
                        className="text-[var(--maincolor)] group-hover:text-[var(--bgcolor)] flex items-center  gap-2 "
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-15 text-xl py-5 text-center  "
            >
              View all
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
