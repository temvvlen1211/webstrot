export default function Newsletter() {
  return (
    <section className="flex justify-center items-center ">
      <div className="container relative w-full">
        <div className="  flex justify-center w-full items-center absolute -bottom-15 text-[var(--textcolor)]">
          <div className="bg-[var(--maincolor)] p-10 rounded-lg shadow-lg w-full  flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold ">
                Subscribe Our
                <span className="font-extrabold text-3xl">Newsletter</span>
              </h2>
            </div>
            <div className="w-full md:w-auto flex items-center relative ">
              <input
                type="email"
                name="email"
                placeholder="Email Address..."
                className="w-sm p-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  ring-[var(--maincolor)] relative  block"
              />
              <button className="bg-[var(--bgcolor)]  p-3 absolute end-0 rounded-full ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
