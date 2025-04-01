import React from "react";

interface CardItem {
  card: string;
  profile: string;
}

const cardData: CardItem[] = [
  {
    card: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card1.jpg",
    profile:
      "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p01.jpg",
  },
  {
    card: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card2.jpg",
    profile:
      "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p02.jpg",
  },
  {
    card: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card1.jpg",
    profile:
      "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p03.jpg",
  },
  {
    card: "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/card2.jpg",
    profile:
      "https://webstrot.com/html/jyotish/light_version/images/content/kundali/card/p04.jpg",
  },
];

const HoverCard: React.FC<CardItem> = ({ card, profile }) => {
  return (
    <li className="group w-48 h-64 rounded-lg shadow-lg relative">
      <div className="card-container">
        {/* Front Side */}
        <img src={card} alt="card_img" className="card-front" />
        {/* Back Side */}
        <img src={profile} alt="profile_img" className="card-back" />
      </div>
    </li>
  );
};

const HoverCardSlideRotate: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-4">
      <ul className="flex flex-wrap justify-center gap-6">
        {cardData.map((item, index) => (
          <HoverCard key={index} card={item.card} profile={item.profile} />
        ))}
      </ul>
    </div>
  );
};

export default HoverCardSlideRotate;
