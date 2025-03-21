export default function ContactForm() {
    return <>
        <section className=" py-10 flex justify-center items-center">
            <div className="container">
                {/* Heading */}
                <div className="text-center ">
                    <h2 className="text-3xl font-bold ">
                        Feel Free To <span className="text-[var(--maincolor)]">Contact</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum<br />
                        auctor, nisi elit consequat hello Aenean world.
                    </p>
                </div>

                {/* Form */}
                <form className="py-10  ">
                    <div className="flex w-full gap-5 ">
                        {/* Name Input */}
                        <div className=" w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--maincolor)]"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="w-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--maincolor)]"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="my-5">
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Comments"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--maincolor)]"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[var(--maincolor)] text-white font-semibold rounded-full hover:bg-[var(--bgcolor)] hover:scale-95 ease-in cursor-pointer transition-all duration-500"
                        >
                            Send a Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>

};
