import BlackMagic from "@/app/horoscope/components/BlackMagic";
import TopCategories from "../components/TopCategories";
import ShopSection from "../components/ShopSection";
import SearchInput from "../components/SearchInput";
import NewProduct from "../components/NewProduct";

export default function Layout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex  flex-col-reverse sm:flex sm:flex-row   w-full gap-5  ">
            {/* aside */}
            <div className="sm:max-w-1/4 pb-20 sm:pb-0 sm:px-0 px-5  w-full">
              <SearchInput />
              <TopCategories />
              <NewProduct />
              <BlackMagic />
            </div>
            {/* body*/}
            <div className="sm:max-w-3/4 sm:px-0 px-5 w-full  ">
              <ShopSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
