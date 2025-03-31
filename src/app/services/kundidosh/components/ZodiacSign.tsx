export default function ZodiacSign() {
  const zodiacSigns = [
    { name: "Aries", link: "aries.html" },
    { name: "Taurus", link: "#" },
    { name: "Gemini", link: "#" },
    { name: "Cancer", link: "#" },
    { name: "Leo", link: "#" },
    { name: "Virgo", link: "#" },
    { name: "Libra", link: "#" },
    { name: "Scorpio", link: "#" },
    { name: "Sagittarius", link: "#" },
    { name: "Capricorn", link: "#" },
    { name: "Aquarius", link: "#" },
    { name: "Pisces", link: "#" },
  ];
  return (
    <>
      <section className="w-full ">
        <div className="  border-2   border-[var(--maincolor)] ">
          <h2 className="text-xl text-[var(--textcolor)] p-3 font-bold bg-[var(--maincolor)]  ">
            Zodiac Sign
          </h2>
          <ul className=" divide-y-2 divide-[var(--maincolor)]">
            {zodiacSigns.map((sign, index) => (
              <li key={index} className="p-3">
                <a
                  href={sign.link}
                  className=" text-gray-500 hover:text-[var(--maincolor)] transition duration-300"
                >
                  {sign.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
