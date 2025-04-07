export default function Calculate() {
  return (
    <>
      <section className="w-full flex flex-col gap-10 py-10">
        <h1 className="text-2xl font-semibold">
          How-To: Calculate the Life Path Number
        </h1>
        <div className="w-full">
          <div className="  ">
            <h2 className="text-2xl text-[var(--maincolor)] font-bold mb-2">
              1. Begin with your full birth date.
            </h2>
            <p className="text-lg">
              <span className="font-semibold">Example:</span> December 19, 2017
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <h2 className="text-2xl text-[var(--maincolor)] font-bold mb-4">
              2. Reduce the month, day, and year down to a single digit by
              adding them.
            </h2>
            <h3 className="text-xl font-semibold mb-2">Day:</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>The day of birth is 19</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>Add 1 + 9 = 10.</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>
                  Keep adding to digit down to a one-digit number: 1 + 0 = 1
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <h3 className="text-xl font-semibold mb-2">Month:</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>December is the 12th month</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>Add 1 + 2 = 3</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <h3 className="text-xl font-semibold mb-2">Year:</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>The year of birth is 2017</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>Add all four numbers together: 2 + 0 + 1 + 7 = 10.</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>
                  Continue adding until you get a one-digit number: 1 + 0 = 1
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <h2 className="text-2xl text-[var(--maincolor)] font-bold mb-4">
              3. Now add the resulting single digits together to get the Life
              Path Number.
            </h2>
            <ul className="space-y-2 ">
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>Month = 3 + Day = 1 + Year = 2</div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div>3 + 1 + 2 = 6</div>
              </li>
            </ul>
            <h5 className="text-lg font-semibold mt-4">
              The Life Path Number is 6
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
