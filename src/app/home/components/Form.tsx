export default function JyotishForm() {
  return (
    <section className=" flex justify-center items-center">
      <div className="container relative  w-full">
        <div className=" flex justify-center absolute w-full -top-40 sm:-top-20  items-center ">
          <form className="bg-white p-6 rounded-lg shadow-lg  flex-wrap flex w-full justify-between items-center gap-2 sm:gap-5 ">
            <div>
              <input
                type="text"
                name="nameOne"
                placeholder="My Name is"
                className="w-sm p-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-[var(--maincolor)] focus:border-blue-500 block   "
              />
            </div>
            <div>
              <select
                name="gender"
                className=" p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-[var(--maincolor)] block   "
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="datepicker"
                className="w-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-blue-500 block   "
              />
            </div>
            <div>
              <select
                name="phone"
                className=" p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-[var(--maincolor)] block   "
              >
                <option value="india">+91 (India)</option>
                <option value="india">+91 (India)</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="phone_no"
                placeholder="Mobile Number"
                className="w-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-blue-500 block   "
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-blue-500 block   "
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className="w-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[var(--maincolor)] focus:border-blue-500 block   "
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded"
              />
              <label className="text-gray-700">Terms and Conditions</label>
            </div>
            <button
              type="button"
              className="text-white hover:scale-95 bg-[var(--maincolor)] transition-all duration-500 ease-in hover:bg-[var(--bgcolor)] font-bold  rounded-full  px-15 text-xl py-5 text-center  "
            >
              Get Free Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
