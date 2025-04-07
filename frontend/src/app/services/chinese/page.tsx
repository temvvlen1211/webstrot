import ChineseHoroscope from "./components/ChineseHoroscope";
import ChineseZodiac from "./components/ChineseZodiac";
import Layout from "./Layout/Layout";

export default function Chinese() {
  return (
    <>
      <ChineseHoroscope />
      <ChineseZodiac />
      <Layout />
    </>
  );
}
