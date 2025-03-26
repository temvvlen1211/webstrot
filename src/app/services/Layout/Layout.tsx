import AriesCelebrities from "@/app/horoscope/components/AriesCelebrities";
import AnimalSign from "../components/AnimalSign";
import DateOfBirth from "../components/DateOfBirth";
import LoveCompatibility from "../components/LoveCompatibility";
import TarotCarousel from "@/app/horoscope/components/TarotCarousel";
import KundaliPatrika from "@/app/horoscope/components/KundaliPatrika";
import MangalaDosha from "@/app/horoscope/components/MangalaDosha";
import BlackMagic from "@/app/horoscope/components/BlackMagic";
import LoveLife from "@/app/horoscope/components/LoveLife";

export default function Layout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex flex-col sm:flex-row w-full pb-10 gap-5  ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full px-5 sm:px-0 ">
              <DateOfBirth />
              <AnimalSign />
              <LoveCompatibility />
              <TarotCarousel />
            </div>
            {/* aside */}
            <div className="sm:max-w-1/4 w-full pb-20 sm:pb-0 px-5 sm:px-0">
              <KundaliPatrika />
              <MangalaDosha />
              <BlackMagic />
              <LoveLife />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
