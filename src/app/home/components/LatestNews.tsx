export default function LatestNews() {
  const services = [
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img1.jpg",
      name: "Proin gravida nibh vel velit auctor aliquet.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos praesentium facilis tempora aliquam fugit voluptas itaque, alias obcaecati minus natus reprehenderit doloribus facere. Libero quidem officia expedita doloribus laudantium!",
      date: "29 Jul, 2020",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img2.jpg",
      name: "Proin gravida nibh vel velit auctor aliquet.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos praesentium facilis tempora aliquam fugit voluptas itaque, alias obcaecati minus natus reprehenderit doloribus facere. Libero quidem officia expedita doloribus laudantium!",
      date: "29 Jul, 2020",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/title_img3.jpg",
      name: "Proin gravida nibh vel velit auctor aliquet.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos praesentium facilis tempora aliquam fugit voluptas itaque, alias obcaecati minus natus reprehenderit doloribus facere. Libero quidem officia expedita doloribus laudantium!",
      date: "29 Jul, 2020",
    },
  ];
  return (
    <>
      <section className="flex max-w-full justify-center py-40 sm:py-20  items-center text-[var(--comptext)]">
        <div className="container px-5  md:px-0">
          <div className="flex   flex-col justify-center items-center gap-5">
            <h1 className="text-5xl">Latest News</h1>
            <p className="text-gray-500 text-center max-w-lg">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat hello Aenean
              world.
            </p>
            <div className=" grid sm:flex justify-between  w-full  items-center gap-5 md:gap-0   transition-all duration-500 ease-in ">
              {services.map((card, index) => (
                <div className="group" key={index}>
                  <div className="max-w-md shadow-lg shadow-gray-500  transition-all duration-300 ease-in     ">
                    <div className="relative overflow-hidden">
                      <img
                        src={card.img}
                        className="object-cover  group-hover:scale-110 scale-100  group-hover:transition-all group-hover:duration-500 group-hover:ease-in w-full  h-full"
                        alt={card.name}
                      />
                      <p className="absolute bottom-0 left-0 text-[var(--textcolor)] px-5 py-3 bg-[var(--maincolor)] font-bold text-xl group-hover:bg-[var(--bgcolor)] ">
                        {card.date}
                      </p>
                    </div>

                    <div className="p-10 grid gap-5   ">
                      <div className="flex text-[#797979]  text-lg ">
                        <p className="pr-5 border-r-2">By - Admin</p>
                        <p className="pl-5"> 256 Comments</p>
                      </div>

                      <h1 className=" text-3xl font-bold tracking-tight group-hover:text-[var(--bgcolor)] ">
                        {card.name}
                      </h1>
                      <p className=" text-xl ">{card.text}</p>
                      <a
                        href="#"
                        className="text-[var(--maincolor)] group-hover:text-[var(--bgcolor)] text-2xl  font-bold flex items-center  gap-2 "
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
