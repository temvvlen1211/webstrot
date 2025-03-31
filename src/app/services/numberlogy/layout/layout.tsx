import BlackMagic from "../components/BlackMagic";
import KundaliPatrika from "../components/KundaliPatrika";
import LoveLife from "../components/LoveLife";
import MangalaDosha from "../components/MangalaDosha";
import StarGuide from "../components/StarGuide";
import ZodiacSign from "../components/ZodiacSign";
import Astrologer from "../components/Astrologer";
import JanamKundali from "../components/JanamKundali";
import Patrikla from "../components/Patrikla";
import LifePath from "../components/LifePath";
import DateOfBirth from "../../chinese/components/DateOfBirth";
import Numberlog from "../components/Numberlog";

export default function NumberlogyLayout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex flex-col sm:flex-row w-full gap-5  ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full px-5 sm:px-0 ">
              <LifePath />
              <DateOfBirth />
              <Numberlog />
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
