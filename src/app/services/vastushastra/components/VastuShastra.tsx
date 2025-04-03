import React from "react";

const VastuShastra = () => {
  return (
    <>
      <section className="w-full ">
        <div className=" border-[var(--maincolor)] border-2  ">
          {/* Heading */}
          <h2 className="text-2xl font-bold p-3  bg-[var(--maincolor)] text-white ">
            Kundali Patrika
          </h2>

          {/* Image */}
          <div className="flex p-5 justify-center mb-4">
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/content/vastu/v1.jpg"
              alt="patrika"
              className=" rounded-md w-full h-full  object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VastuShastra;
