export default function Touch() {
    return <>

        <section className=" py-10 w-full bg-gray-100">
            <div className="container mx-auto  ">
                {/* Heading Section */}
                <div className=" flex flex-col gap-5  ">
                    <div className=" text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-5">
                            Get in <span className="text-[var(--maincolor)]">Touch</span>
                        </h2>
                        <p className="text-gray-600 ">
                            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum<br />
                            auctor, nisi elit consequat hello Aenean world.
                        </p>
                    </div>
                    {/* Contact Info Cards */}
                    <div className="flex w-full gap-5">
                        {/* Address */}
                        <div className="group w-full">
                            <div className="  p-10 transition-discrete duration-300 ease-in  bg-gray-100  shadow-md flex items-center group-hover:border-[var(--maincolor)] border-6 border-white">
                                <div className="">
                                    <h4 className="text-xl font-semibold group-hover:text-[var(--maincolor)] transition-discrete duration-300 ease-in  ">Address</h4>
                                    <p className="text-gray-600">
                                        512 - Omexcity, California <br /> California, Omexcity
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Phone */}
                        <div className="group w-full">
                            <div className="  p-10 transition-discrete duration-300 ease-in  bg-gray-100  shadow-md flex items-center group-hover:border-[var(--maincolor)] border-6 border-white">
                                <div className="">
                                    <h4 className="text-xl font-semibold group-hover:text-[var(--maincolor)] transition-discrete duration-300 ease-in  ">Phone</h4>
                                    <p className="text-gray-600">
                                        +1-804-548-5214 <br /> +1-804-548-5215
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Email */}
                        <div className="group w-full">
                            <div className="  p-10  transition-discrete duration-300 ease-in  bg-gray-100  shadow-md flex items-center group-hover:border-[var(--maincolor)] border-6 border-white">
                                <div className="">
                                    <h4 className="text-xl font-semibold group-hover:text-[var(--maincolor)] transition-discrete duration-300 ease-in  ">Email</h4>
                                    <p className="text-gray-600">
                                        hello@example.com <br /> support@example.com
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>


    </>

};
