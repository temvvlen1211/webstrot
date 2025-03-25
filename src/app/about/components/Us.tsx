export default function Us() {
  return (
    <>
      <section className="  flex justify-center items-center  max-w-full max-h-full ">
        <div className="  max-w-full max-h-full relative bg-black/10  opacity-70">
          <img
            className=" object-cover    max-w-full max-h-full "
            src="https://webstrot.com/html/jyotish/light_version/images/content/advert_bg.jpg"
            alt=""
          />
          <div className="flex justify-center items-center absolute left-0 top-0 ">
            <div className="container  relative   w-full h-full ">
              <div className="text-center absolute  ">
                <h2 className="text-2xl font-bold text-white ">About Us</h2>
              </div>
              {/* <div className="mt-4 flex justify-center w-full   absolute bottom-0 bg-[var(--maincolor)] p-3 rounded-t-xl">
              <ul className="flex space-x-4 text-white text-lg">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                  <span className="mx-2">&gt;</span>
                </li>
                <li className="text-[var(--bgcolor)]">About Us</li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
