import React from "react";

const LoveLife = () => {
    return (
        <div className="   py-10 text-center " >
            <div className="flex justify-center relative ">
                <img
                    src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/love_img.jpg"
                    alt="love_img"
                    className="w-full h-full rounded-md shadow-md "
                /><div className="absolute bg-[var(--maincolor)] flex flex-col gap-5 py-10 w-full rounded-t-4xl text-[var(--textcolor)]  -bottom-15 ">
                    <p className="text-lg ">How Will Be Your</p>
                    <h3 className="text-2xl font-bold  ">Love Life?</h3>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="inline-block bg-[var(--bgcolor)] text-white px-4 py-2 rounded-full border shadow-md border-[var(--bgcolor)] font-bold  hover:text-[var(--bgcolor)] transition duration-200  hover:bg-[var(--maincolor)]"
                            >
                                Find Now for Free
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


        </div>
    );
};

export default LoveLife;
