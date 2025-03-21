import React from "react";

const instagramImages = [
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta2.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta3.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta2.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta3.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta1.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta2.jpg",
    "https://webstrot.com/html/jyotish/light_version/images/content/blog/inta3.jpg",


];

const InstagramGallery = () => {
    return (
        <section className=" py-10 w-full">
            <div className="border-2 border-[var(--maincolor)]">
                <h2 className="p-3 text-white text-2xl font-bold bg-[var(--maincolor)]">Recent News</h2>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap gap-1 p-5 max-w-80    ">
                        {instagramImages.map((image, index) => (
                            <li key={index} className="   rounded-lg overflow-hidden">
                                <a href="#">
                                    <img
                                        src={`${image}`}
                                        alt="Instagram Image"
                                        className="w-full h-auto  shadow-md transition-all duration-300 hover:scale-105"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default InstagramGallery;
