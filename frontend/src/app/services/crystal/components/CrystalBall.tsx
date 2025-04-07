export default function CrystalBall() {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 py-10">
        <div className="w-full flex justify-center items-center bg-gray-100 border border-gray-200">
          <img
            src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/ball/b1.png"
            className=" w-sm "
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-between h-full gap-5 ">
          <h1 className="font-bold text-2xl">Ask the Crystal Ball</h1>
          <p className="text-gray-400">
            If you need an answer and you need it fast, ask our Crystal Ball for
            a simple yes-or-no solution.
          </p>

          <form className="w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3  text-lg text-gray-900  border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your question here"
              required
            />
            <button
              type="submit"
              className=" uppercase py-3 px-10 rounded-full my-5 text-white hover:text-[var(--maincolor)] border  hover:bg-white transition-all duration-150 ease-in  font-medium  text-md bg-[var(--maincolor)] "
            >
              Ask the Crystal Ball
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
