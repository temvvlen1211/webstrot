import BlackMagic from "@/app/horoscope/components/BlackMagic";
import NewProduct from "../components/NewProduct";
import TopCategories from "../components/TopCategories";
import VastuShastra from "../components/VastuShastra";
import VastunShastra from "../components/VastunShastra";

export default function Layout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex  flex-col-reverse sm:flex sm:flex-row   w-full gap-5  ">
            {/* aside */}
            <div className="sm:max-w-1/4 pb-20 sm:pb-0 sm:px-0 px-5  w-full">
              <VastuShastra />
              <TopCategories />
              <NewProduct />
              <BlackMagic />
            </div>
            {/* body*/}
            <div className="sm:max-w-3/4 sm:px-0 px-5 w-full  ">
              <VastunShastra />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
