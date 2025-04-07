export default function AriesCelebrities() {
    const data = [{
        id: "1", img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg", name: "Jhon Doe", text: "Integer porttitor fringilla vestibulum.Phasellus curs our tinnt nulla, ut mattis augue finibus ac.Vivamus elementum enim ac enim ultrices rhoncus."
    }, {
        id: "2", img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg", name: "Jhon Doe", text: "Integer porttitor fringilla vestibulum.Phasellus curs our tinnt nulla, ut mattis augue finibus ac.Vivamus elementum enim ac enim ultrices rhoncus."
    }, {
        id: "3", img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/comm_img1.jpg", name: "Jhon Doe", text: "Integer porttitor fringilla vestibulum.Phasellus curs our tinnt nulla, ut mattis augue finibus ac.Vivamus elementum enim ac enim ultrices rhoncus."
    },]
    return <><section className="w-full py-10" >
        <h1 className="text-3xl font-extrabold  ">Aries Celebrities</h1>
        <div className="flex justify-between w-full h-full items-center flex-col gap-5 py-10 divide-y-2 divide-[var(--bordercolor)] ">

            {data.map((res) => {
                return <>
                    <div key={res.id} className="flex gap-5 justify-between items-center" >
                        <img src={res.img} alt="" className="object-cover rounded-full border-4 hover:border-[var(--maincolor)] " />

                        <div className="">
                            <h1 className="text-3xl">{res.name}</h1>
                            <p className="my-2 text-gray-400">{res.text}</p>
                            <a
                                href="#"
                                className="hover:text-[var(--bgcolor)] text-[var(--maincolor)] ease-in-out transition-all"
                            >
                                Readmore <span> →</span>
                            </a>
                        </div>

                    </div>


                </>
            })}
        </div>

    </section ></>

};
