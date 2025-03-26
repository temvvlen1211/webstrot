export default function DateOfBirth() {
  return (
    <>
      <section className="w-full ">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Enter your date of birth:</h1>
          <p className="text-gray-500">
            Enter your birth information below to calculate your Chinese Sign:s
          </p>

          <form className=" flex flex-col sm:flex-row gap-5  ">
            <input
              type="date"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="26/03/2025"
            />
            <button
              type="submit"
              className=" uppercase py-3 px-30 text-white hover:text-[var(--maincolor)] border  hover:bg-white   font-medium rounded-2xl text-md bg-[var(--maincolor)] "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
