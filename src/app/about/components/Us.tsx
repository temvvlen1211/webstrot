export default function Us() {
  return (
    <>
      <section className="  flex justify-center items-center  w-full h-full ">
        <div className="  w-full h-full relative  flex justify-center items-center">
          <img
            className=" object-cover    w-full h-full min-h-[200px]"
            src="https://webstrot.com/html/jyotish/light_version/images/content/advert_bg.jpg"
            alt=""
          />
          <div className="flex justify-center items-center absolute w-full h-full">
            <div className="container flex flex-col justify-end   px-5 sm:px-0   w-full h-full ">
              <div className="flex flex-col justify-between items-center w-full h-30 sm:h-48 ">
                <div className="text-center   ">
                  <h2 className="text-2xl font-bold text-white ">About Us</h2>
                </div>
                <div className=" flex justify-center w-full    bg-[var(--maincolor)] p-2 rounded-t-xl">
                  <ul className="flex  text-white text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        Home
                      </a>
                      <span className="mx-2">&gt;</span>
                    </li>
                    <li className="text-[var(--bgcolor)]">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
