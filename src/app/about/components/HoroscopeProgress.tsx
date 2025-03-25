const HoroscopeProgress = () => {
  const faqData = [
    {
      question: "Roboto Font use for this site",
      answer:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    },
    {
      question: "Cryptocurrency - Who Are Involved With It?",
      answer:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    },
    {
      question: "Risks & Rewards Of Investing In Bitcoin?",
      answer:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    },
    {
      question: "Risks & Rewards Of Investing In Bitcoin?",
      answer:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    },
  ];
  return (
    <section className=" py-20 px-5 sm:px-0">
      <div className="container mx-auto ">
        <div className="grid sm:flex gap-5 sm:gap-10">
          {/* Left Section */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Our Horoscope Progress
            </h2>
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/content/about/pgress_img.jpg"
              alt="Horoscope Progress"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          {/* Right Section */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-800  mb-5">
              Questions (FAQ’s)
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="border border-gray-300    ">
                  <summary className="cursor-pointer text-lg font-semibold p-4 text-gray-700  focus:text-white focus:bg-[var(--maincolor)]">
                    {faq.question}
                  </summary>
                  <p className=" text-gray-600 p-5">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeProgress;
