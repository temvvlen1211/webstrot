const TopCategories = () => {
    const categories = [
        "Yantra",
        "Gemstone",
        "Books",
        "Workshop DVD",
        "Pendal",
        "Puja Accessories",
        "Religion Spiritual Gems Stones",
        "Feng Shui Products",
        "Lucky Stones",
    ];

    return <>

        <section className="w-full py-10">




            <div className=" border-2 border-[var(--maincolor)]  ">


                {/* Heading */}
                <h2 className="text-2xl font-bold text-white p-3 bg-[var(--maincolor)]  ">Top Categories</h2>

                {/* Categories List */}
                <ul className="   divide-y-2 divide-[var(--maincolor)]">
                    {categories.map((category, index) => (
                        <li key={index} className="  p-3">
                            <a
                                href="#"
                                className="block text-lg text-gray-500 hover:text-[var(--maincolor)] transition"
                            >
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section></>



};

export default TopCategories;
