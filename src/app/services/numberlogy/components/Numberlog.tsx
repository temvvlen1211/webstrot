export default function Numberlog() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <section className=" w-full py-10">
        <div>
          <h1 className="font-semibold text-2xl">Numerology</h1>
          <p>Select a Life Path Number below to get your Numeroscope:</p>
        </div>
        <div className="flex flex-col sm:flex-row  flex-wrap w-full  gap-4 ">
          {numbers.map((num) => (
            <div
              key={num}
              className={`bg-gray-200 p-4  rounded-lg text-center shadow-md ${num}`}
            >
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-2xl text-[var(--maincolor)] font-bold">
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
