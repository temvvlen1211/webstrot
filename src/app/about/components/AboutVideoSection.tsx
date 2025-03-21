import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutVideoSection = () => {


    return (
        <section className=" w-full  flex items-center justify-center bg-cover bg-center" >
            <img src="https://webstrot.com/html/jyotish/light_version/images/content/about/video_img.jpg" alt="" className="relative w-full max-h-[500px] object-cover  bg-black bg-opacity-50" />
            <div className="absolute text-center">
                <div className="flex justify-center items-center">
                    <a href="https://www.youtube.com/embed/xImpyYRVGOc" target="_blank" rel="noopener noreferrer" className="text-white text-4xl bg-[var(--maincolor)] p-5 text-center rounded-full  transition">
                        <FontAwesomeIcon icon={faPlay} width={60} height={60} />
                    </a>
                </div>
                <div className="flex  mt-5 justify-between items-center gap-5"> <h2 className="text-white text-2xl font-semibold ">
                    Play Astrologer Tips
                </h2><span className="block  text-2xl text-[var(--maincolor)] font-semibold">And Better Your Life</span></div>

            </div>
        </section>
    );
};

export default AboutVideoSection;
