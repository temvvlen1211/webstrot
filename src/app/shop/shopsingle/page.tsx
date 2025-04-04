import Description from "./components/Description";
import PopularProduct from "./components/PopularProduct";
import ShopSingleHead from "./components/ShopSingleHead";
import ShopSingleSection from "./components/ShopSingleSection";

export default function ShopSingle() {
  return (
    <>
      <ShopSingleHead />
      <ShopSingleSection />
      <Description />
      <PopularProduct />
    </>
  );
}
