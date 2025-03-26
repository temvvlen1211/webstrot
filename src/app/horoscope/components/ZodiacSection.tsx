import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ZodiacSection() {
  return (
    <>
      <section className="flex flex-col text-xl gap-5 sm:gap-10">
        <div className="group">
          <div className="flex gap-5 items-center w-full transition-all  duration-500 ease-in">
            <div className=" bg-[var(--maincolor)] group-hover:bg-[var(--bgcolor)] rounded-full border-8 border-[var(--bordercolor)] p-3 ">
              <FontAwesomeIcon
                icon={faPlay}
                width={50}
                className="text-white"
                height={50}
              />
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-3xl font-extrabold group-hover:text-[var(--bgcolor)]"
                >
                  Aries
                </a>
              </li>
              <li className="text-gray-400">31 March - 12 October</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/aries_img.jpg"
            className="object-cover max-w-lg h-auto"
            alt=""
          />
          <div className=" flex flex-col gap-5  text-gray-400">
            <p>
              The Ox occupies the second position in the Chinese Zodiac. The
              zodiac mls are, in order: Rat, Ox, Tiger, Rabbit, Dragon, Snake,
              Horse, Goat, Monkey, oser, Dog, and Pig. Each year is related to a
              Chinese zodiac animal according to the 12-year-cycle.
            </p>
            <p>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat sum, nec sagittis sem nibh id elit. Duis sed odio sit.
              The Ox occupies the cond position in the Chinese Zodiac. The 12
              zodiac animals are, in order: Rat, Tiger, Rabbit, Dragon, Snake,
              Horse, Goat, Monkey, Rooster, Dog, and Pig. Each year is related
              to a Chinesezodiac animal.
            </p>
          </div>
        </div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint aecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
          unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
        </p>

        <ul className=" space-y-3  list-disc  list-inside font-bold ">
          <li>
            Lucky Colors{" "}
            <span className="text-gray-500">: white, yellow, green</span>
          </li>
          <li>
            Lucky Numbers
            <span className="text-gray-500">: white, yellow, green</span>
          </li>
          <li>
            Lucky Flowers{" "}
            <span className="text-gray-500">: white, yellow, green</span>
          </li>
          <li>
            Year of Birth{" "}
            <span className="text-gray-500">: white, yellow, green</span>
          </li>
        </ul>
      </section>
    </>
  );
}
