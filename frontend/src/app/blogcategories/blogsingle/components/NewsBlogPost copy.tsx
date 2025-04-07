
const NewsBlogPost = () => {
    return (
        <section className="w-full py-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                {/* Blog Image */}
                <div className="relative w-full">
                    <img src="https://webstrot.com/html/jyotish/light_version/images/content/blog/bc3.jpg" alt="blog_img" className="w-full  object-cover" />
                    <ul className="absolute bottom-0 left-0 bg-[var(--maincolor)] bg-opacity-50 text-white p-3 text-lg">
                        <li>29 Jul, 2020</li>
                    </ul>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
                        <a href="#" className="hover:text-blue-600">By - Admin</a>
                        <span>|</span>
                        <a href="#" className="hover:text-blue-600">256 Comments</a>
                    </div>

                    {/* Blog Heading */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Rahu Enters Cancer and Ketu Enters Capricorn.
                    </h2>

                    {/* Blog Description */}
                    <p className="text-gray-600 mb-4">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                        sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>

                    {/* Read More Link */}
                    <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                        Read More
                    </a>
                </div>
            </div >  </section>
    );
};

export default NewsBlogPost;
