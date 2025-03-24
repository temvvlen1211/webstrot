export default function OurServices() {
  const card = [
    {
      icon: "",
      name: "John Doe",

      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "Jane Smith",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "John Doe",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "Jane Smith",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "John Doe",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "Jane Smith",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "John Doe",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
    {
      icon: "",
      name: "Jane Smith",
      text: "        Proin gravida nibh vel velit auctor aliquet. Aenean .",
    },
  ];
  return (
    <>
      <section className="flex px-5  justify-center py-10 items-center  ">
        <div className="flex     flex-col justify-center items-center ">
          <div className="container ">
            <div className="flex flex-col  items-center justify-center gap-5">
              <h1 className="text-5xl ">Our services</h1>
              <p className="text-gray-500 text-center max-w-lg">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                hello Aenean world.
              </p>
              <div className="flex    w-full justify-center md:justify-between  items-center flex-wrap  ">
                {card.map((res, index) => {
                  return (
                    <>
                      <div key={index} className="group max-w-80 pt-15">
                        <div className=" transition-all duration-300 ease-in gap-3  flex flex-col items-center   p-9   relative group-hover:bg-[var(--maincolor)]    shadow-lg rounded-2xl ">
                          <div className="flex flex-col items-center  ">
                            <p className="border group-hover:bg-[var(--bgcolor)]   border-[var(--bordercolor)] rounded-full p-8 absolute -top-10 transition-all duration-300 ease-in ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                fill="purple"
                                viewBox="0 0 50 50"
                              >
                                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                              </svg>
                            </p>
                          </div>
                          <h4 className="text-2xl group-hover:text-[var(--textcolor)] font-extrabold  transition-all duration-300 ease-in">
                            {res.name}
                          </h4>

                          <p className=" group-hover:text-[var(--textcolor)] transition-all duration-300 ease-in text-gray-600 italic">
                            {res.text}
                          </p>
                          <a
                            href="#"
                            className="text-[var(--maincolor)] group-hover:text-[var(--textcolor)] flex items-center transition-all duration-300 ease-in  gap-2 "
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
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
