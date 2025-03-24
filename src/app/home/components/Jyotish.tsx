export default function Jyotish() {
  return (
    <>
      <section className="flex justify-center items-center px-5 md:px-0 py-10">
        <div className="container w-full ">
          <div className="grid md:flex    justify-between w-full gap-5 md:gap-10 ">
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/content/about_img.jpg"
              className="  object-cover w-full  "
              alt=""
            />
            <div className="flex flex-col justify-between w-full h-full gap-5 ">
              <div className="flex flex-col gap-3 md:gap-10">
                <h1 className="text-5xl">About Jyotish</h1>
                <h1 className="text-6xl text-[var(--maincolor)]">
                  +1800-123-123
                </h1>
                <h1 className="text-2xl">Horoscope Revels The Will Of God</h1>
                <p className="text-gray-400 text-xl">
                  Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt auctor a ornare odio. Sed non mauris vitae erat
                  consequat auctor eu in elit.{" "}
                </p>
                <p className="text-gray-400 text-xl">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Mauris in erat justo. Nullam
                  ac urna eu felis dapibus condimentum sit amet a augue.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-15 text-xl py-5 text-center  "
                >
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
