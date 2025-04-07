export default function LoveCompatibility() {
  return (
    <>
      <section className="w-full py-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">
            Chinese Zodiac Love Compatibility. for You?{" "}
          </h1>
          <p className="text-gray-500">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit.
          </p>

          <div className="  ">
            <h2 className="text-2xl text-[var(--maincolor)] font-bold ">
              Chinese Zodiac Love Compatibility Test
            </h2>
            <form className=" ">
              <div className="flex flex-col gap-5 pt-5">
                <div className=" flex flex-col sm:flex-row gap-5  ">
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  p-2.5 "
                    placeholder="Boy's name"
                  />
                  <input
                    type="date"
                    id="email"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 "
                    placeholder="26/03/2025"
                  />
                </div>
                <div className=" flex flex-col sm:flex-row gap-5  ">
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  p-2.5 "
                    placeholder="Girl's name"
                  />
                  <input
                    type="date"
                    id="email"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 "
                    placeholder="26/03/2025"
                  />
                </div>
                <button
                  type="submit"
                  className=" uppercase  sm:w-sm py-3 px-30 text-white hover:text-[var(--maincolor)] border transition-all duration-150 ease-in  hover:bg-white   font-medium rounded-2xl text-md bg-[var(--maincolor)] "
                >
                  match
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
