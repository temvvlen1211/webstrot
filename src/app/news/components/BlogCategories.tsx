export default function BlogCategories() {
    return <>
        <section className="relative flex justify-center items-center  ">
            <img className="relative object-cover bg-black/  w-full max-h-[500px]" src="https://webstrot.com/html/jyotish/light_version/images/content/advert_bg.jpg" alt="" />
            <div className="container  absolute   w-full h-full ">
                <div className="text-center absolute inset-x-0 top-1/2 ">
                    <h2 className="text-4xl font-bold text-white ">Blog Categories</h2>
                </div>
                <div className="mt-4 flex justify-center w-full   absolute bottom-0 bg-[var(--maincolor)] p-3 rounded-t-xl">
                    <ul className="flex space-x-4 text-white text-lg">
                        <li>
                            <a href="#" className="hover:underline">Home</a>
                            <span className="mx-2">&gt;</span>
                        </li>
                        <li className="text-[var(--bgcolor)]">Blog Categories</li>
                    </ul>
                </div>
            </div>
        </section>
    </>

};
