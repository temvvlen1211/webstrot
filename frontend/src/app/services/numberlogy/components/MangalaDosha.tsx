import React from "react";

const MangalaDosha = () => {
  return <>
    <section className="w-full py-10">
      <div className="border-[var(--maincolor)] border-2  ">
        {/* Heading */}
        <h2 className="text-2xl font-bold p-3  bg-[var(--maincolor)] text-white ">Kundali Patrika</h2>

        {/* Image */}
        <div className="flex p-5 justify-center mb-4">
          <img
            src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/patrika2.jpg"
            alt="patrika"
            className=" rounded-md  object-cover"
          />
        </div>

        {/* Price Section */}
        <div className=" p-5  rounded-md">
          <ul className=" text-lg flex justify-between ">
            <li className="font-semibold text-[var(--maincolor)]  ">Kundli Patrika</li>
            <li className=" font-bold text-gray-500">$26</li>
          </ul>
        </div>
      </div>
    </section>
  </>
};

export default MangalaDosha;
