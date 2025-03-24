import Carousel from "@/app/home/components/Carousel";
import OurMost from "@/app/home/components/OurMost";
import ZodiacSign from "@/app/home/components/ZodiacSign";
import Horoscope from "@/app/home/components/Horoscope";
import Jyotish from "@/app/home/components/Jyotish";
import AreSaying from "@/app/home/components/AreSaying";
import OurServices from "@/app/home/components/OurServices";
import Number from "@/app/home/components/Number";
import OurTeam from "@/app/home/components/OurTeam";

import LatestNews from "@/app/home/components/LatestNews";
import Form from "@/app/home/components/Form";

export default function Home() {
  return (
    <>
      <Carousel />
      <Form />
      <OurMost />
      <Horoscope />
      <ZodiacSign />
      <Jyotish />
      <AreSaying />
      <OurServices />
      <Number />
      <OurTeam />
      <LatestNews />
    </>
  );
}
