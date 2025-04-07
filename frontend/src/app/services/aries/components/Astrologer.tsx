export default function Astrologer() {
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
  ];
  return (
    <>
      <section className="w-full py-10">
        <div>
          <h1 className="text-xl font-extrabold">Talk to live an astrologer</h1>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 transition-transform py-10 duration-700 ease-in-out justify-between  ">
            {card.map((res, index) => {
              return (
                <>
                  <div key={index} className="group  flex-shrink-0">
                    <div className="max-w-lg shadow-lg shadow-gray-500  transition-all  duration-500 ease-in     ">
                      <div className="relative overflow-hidden">
                        <img
                          src={res.image}
                          className="object-cover w-full h-auto"
                          alt={res.name}
                        />
                        <p className="absolute bottom-0 left-0 text-[var(--textcolor)] px-5 py-3  font-bold text-xl group-hover:bg-[var(--maincolor)] bg-[var(--greenbtn)] rounded-tr-lg ">
                          {res.text}
                        </p>
                      </div>

                      <div className="  p-5  ">
                        <h5 className=" text-2xl font-bold tracking-tight group-hover:text-[var(--maincolor)] ">
                          {res.name}
                        </h5>
                        <p className=" font-normal ">{res.job}</p>
                      </div>

                      <div className="border-t-2 border-[var(--bordercolor)] text-md p-5">
                        <a href="#" className="  flex items-center  gap-2 ">
                          Charges:
                          <span className="text-[var(--maincolor)]">
                            $5 / Min.
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="">
          <h1 className="text-xl  font-extrabold">
            Talk to live an astrologer
          </h1>

          <form className=" py-10 ">
            <div className="flex flex-col sm:flex-row  justify-between gap-5 w-full">
              <div className=" w-full">
                <input
                  type="Text"
                  id="text"
                  placeholder="Your Name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  required
                />
              </div>
              <div className=" w-full">
                <input
                  type="email"
                  id="email"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="Gmail"
                  required
                />
              </div>
            </div>
            <div className="my-5">
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className=" hover:text-purple-700 text-white  text-lg font-bold border hover:bg-white hover:border-purple-700 bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg  px-5 py-2.5 text-center  "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
