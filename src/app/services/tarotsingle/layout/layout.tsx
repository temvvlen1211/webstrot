import BlackMagic from "../components/BlackMagic";
import KundaliPatrika from "../components/KundaliPatrika";
import LoveLife from "../components/LoveLife";
import MangalaDosha from "../components/MangalaDosha";
import StarGuide from "../components/StarGuide";
import Universal from "../components/Universal";
import WhatsPopular from "../components/WhatsPopular";

export default function TarotSingleLayout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex flex-col sm:flex-row w-full gap-5  ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full px-5 sm:px-0 ">
              <Universal />
              <WhatsPopular />
            </div>
            {/* aside */}
            <div className="sm:max-w-1/4 w-full pb-20 sm:pb-0 px-5 sm:px-0">
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
