import React from "react";

const BlogPostWithVideo = () => {
    return (
        <section className="w-full py-10">
            <div className=" bg-white shadow-lg  rounded-lg overflow-hidden">
                {/* Video and Date Section */}
                <div className="relative h-full w-full">
                    <iframe
                        src="https://www.youtube.com/embed/tqYDVMTjAzY"
                        className="w-full h-[472px] shrink-0   relative  object-cover rounded-t-lg"
                        title="YouTube Video"
                    ></iframe>
                    <ul className="absolute bottom-0 left-0 bg-[var(--maincolor)] bg-opacity-50 text-white p-3 text-lg"><li>29 Jul, 2020</li></ul>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <div className=" mb-4">
                        <ul className="flex space-x-4 text-gray-500 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-600">By - Admin</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">256 Comments</a>
                            </li>
                        </ul>
                    </div>

                    {/* Blog Heading and Description */}
                    <div className="">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Rahu Enters Cancer and Ketu Enters Capricorn.
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                        </p>
                        <h5>
                            <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                                Read More <i className="ml-2 fa fa-long-arrow-right"></i>
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostWithVideo;
