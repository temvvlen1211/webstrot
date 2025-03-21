import BlackMagic from "@/app/horoscope/components/BlackMagic";
import NewProduct from "../components/NewProduct";
import TopCategories from "../components/TopCategories";
import ShopSection from "../components/ShopSection";
import SearchInput from "../components/SearchInput";

export default function Layout() {
    return <>
        <section className="flex justify-center items-center w-full py-10">
            <div className="container w-full">
                <div className="flex w-full gap-5 py-10 ">

                    {/* aside */}
                    <div className="max-w-1/4 w-full">
                        <SearchInput />
                        <TopCategories />
                        <NewProduct />
                        <BlackMagic />
                    </div>
                    {/* body*/}
                    <div className="max-w-3/4 w-full  ">
                        <ShopSection />

                    </div>

                </div>

            </div>
        </section>


    </>
};
