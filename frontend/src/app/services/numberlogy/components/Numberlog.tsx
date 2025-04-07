export default function NumberLog() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <section className=" w-full flex flex-col gap-3 py-10">
        <h1 className="font-semibold text-2xl">Numerology</h1>
        <p className="text-gray-400">
          Select a Life Path Number below to get your Numeroscope:
        </p>
        <div className="flex flex-col sm:flex-row  gap-5 sm:gap-15   items-center   flex-wrap  w-full h-full   ">
          {numbers.map((num) => (
            <div className="group">
              <div
                key={num}
                className={` border p-10 rounded group-hover:bg-[var(--maincolor)] transition-all duration-200 ease-in   text-center shadow-md ${num}`}
              >
                <h2 className="text-6xl text-[var(--maincolor)] font-bold transition-all duration-200 ease-in   group-hover:text-white">
                  <a href="#">{num.toString().padStart(2, "0")}</a>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
