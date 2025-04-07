export default function PickCard() {
  const cards = [
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card1.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p01.jpg",
    },
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card2.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p02.jpg",
    },
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card1.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p01.jpg",
    },
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card2.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p02.jpg",
    },
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card1.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p01.jpg",
    },
    {
      front:
        "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card2.jpg",
      back: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p02.jpg",
    },
  ];
  return (
    <>
      <section className="w-full py-10">
        <h1 className="text-2xl  font-semibold">Pick a card</h1>
        <div className="flex flex-col sm:flex-row items-center py-5  justify-center gap-5 sm:justify-between ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-30 h-40   rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={card.front}
                alt="card_front"
                className="absolute  inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={card.back}
                alt="card_back"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
