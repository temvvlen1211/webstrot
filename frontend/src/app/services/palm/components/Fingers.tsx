import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Fingers() {
  return (
    <>
      <section className="w-full py-10 ">
        <div className=" ">
          <h2 className="text-2xl font-bold text-gray-800">
            Learn Anything From the Spaces Between Your Fingers?
          </h2>
          <p className="text-gray-600 py-5">
            Yes. Just as with the palm, the fingers on your dominant hand
            typically showcase your work. They reveal insights into your
            personality, skills, and habits. The spacing and alignment of your
            fingers can offer clues about your natural tendencies and
            relationships.
          </p>
        </div>
        <section className=" w-full h-[500px]  flex items-center justify-center bg-cover bg-center">
          <div className="relative inset-0 w-full h-full">
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/pr_video_img.jpg"
              alt=""
              className=" w-full h-full  object-cover  "
            />
            <div className="bg-black/30  absolute top-0 w-full h-full "></div>
          </div>
          <div className="absolute text-center">
            <div className="flex justify-center items-center">
              <a
                href="https://www.youtube.com/embed/xImpyYRVGOc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl bg-[var(--maincolor)] p-5 text-center rounded-full  transition"
              >
                <FontAwesomeIcon icon={faPlay} width={40} height={40} />
              </a>
            </div>
            <div className="flex  mt-5 justify-between items-center gap-5">
              <h2 className="text-white text-sm font-semibold ">
                Play Astrologer Tips
              </h2>
              <span className="block  text-sm text-[var(--maincolor)] font-semibold">
                And Better Your Life
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
