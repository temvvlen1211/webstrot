import AriesCelebrities from "../components/AriesCelebrities";
import Astrologer from "../components/Astrologer";
import BlackMagic from "../components/BlackMagic";
import KundaliPatrika from "../components/KundaliPatrika";
import LoveLife from "../components/LoveLife";
import MangalaDosha from "../components/MangalaDosha";
import StarGuide from "../components/StarGuide";
import TarotReading from "../components/TarotReading";
import ZodiacSection from "../components/ZodiacSection";
import ZodiacSign from "../components/ZodiacSign";


export default function HoroscopeLayout() {
    return <><section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
            <div className="flex w-full gap-5 py-10 ">
                {/* body*/}
                <div className="max-w-3/4 w-full  ">
                    <ZodiacSection />
                    <TarotReading />
                    <AriesCelebrities />
                    <Astrologer />
                </div>
                {/* aside */}
                <div className="max-w-1/4 w-full">
                    <ZodiacSign />
                    <KundaliPatrika />
                    <MangalaDosha />
                    <LoveLife />
                    <StarGuide />
                    <BlackMagic />

                </div>
            </div>

        </div>
    </section>

    </>

};
