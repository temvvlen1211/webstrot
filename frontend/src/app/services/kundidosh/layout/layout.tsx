import BlackMagic from "../components/BlackMagic";
import KundaliPatrika from "../components/KundaliPatrika";
import LoveLife from "../components/LoveLife";
import MangalaDosha from "../components/MangalaDosha";
import StarGuide from "../components/StarGuide";
import ZodiacSign from "../components/ZodiacSign";
import Astrologer from "../components/Astrologer";
import KundaliDosha from "../components/KundaliDosha";
import JanamKundali from "../components/JanamKundali";
import Patrikla from "../components/Patrikla";

export default function KundiDoshLayout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex flex-col sm:flex-row w-full gap-5  ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full px-5 sm:px-0 ">
              <KundaliDosha />
              <JanamKundali />
              <Patrikla />
              <Astrologer />
            </div>
            {/* aside */}
            <div className="sm:max-w-1/4 w-full pb-20 sm:pb-0 px-5 sm:px-0">
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
  );
}
