import React from "react";

const newsItems = [
    { id: 1, image: "https://webstrot.com/html/jyotish/light_version/images/content/blog/b1.jpg", title: "Astrologer Member in the Life Solution.", date: "12 May 2018" },
    { id: 2, image: "https://webstrot.com/html/jyotish/light_version/images/content/blog/b1.jpg", title: "Astrologer Member in the Life Solution.", date: "12 May 2018" },
    { id: 3, image: "https://webstrot.com/html/jyotish/light_version/images/content/blog/b1.jpg", title: "Astrologer Member in the Life Solution.", date: "12 May 2018" },
    { id: 4, image: "https://webstrot.com/html/jyotish/light_version/images/content/blog/b1.jpg", title: "Astrologer Member in the Life Solution.", date: "12 May 2018" },
];

const RecentNews = () => {
    return (
        <section className="  py-10 ">
            <div className=" border-2 border-[var(--maincolor)]">
                <h2 className="p-3 text-white text-2xl font-bold bg-[var(--maincolor)]">Recent News</h2>
                <div className="divide-y-2   ">
                    {newsItems.map((news) => (
                        <div key={news.id} className=" gap-5 p-3 justify-center items-center border-[var(--maincolor)] flex   ">
                            <div className="">
                                <img
                                    src={news.image}
                                    className="w-full h-auto rounded-lg shadow-md"
                                    alt="news_img"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                    {news.title}
                                </h4>
                                <p className="text-[var(--maincolor)] text-sm">{news.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

        </section >
    );
};

export default RecentNews;
