export default function WhatsPopular() {
  const img = [
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/trt1.jpg",
      name: "Ostara Tarot",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/trt2.jpg",
      name: "Vice-Versa Tarot",
    },
    {
      img: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/trt3.jpg",
      name: "Healing Light Tarot",
    },
  ];
  return (
    <>
      <section className="w-full flex flex-col gap-5 py-10">
        <h1 className=" text-2xl font-semibold">
          What's Popular in Tarot Cards Now
        </h1>
        <p>
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
          nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
          erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
          litora torqent per conubia nostra, per inceptos himenaeos. Mauris in
          erat justo.
        </p>
        <div className="flex w-full flex-col sm:flex-row gap-5 justify-between items-center">
          {img.map((data, index) => {
            return (
              <>
                <div
                  key={index}
                  className=" flex flex-col gap-5 justify-between items-center"
                >
                  <img src={data.img} alt="" className="object-cover " />
                  <p className="font-bold">
                    <a href="">{data.name}</a>
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
