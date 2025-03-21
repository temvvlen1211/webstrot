import Jyotish from "@/app/home/components/Jyotish";
import Us from "./components/Us";
import Number from "@/app/home/components/Number";
import HoroscopeProgress from "./components/HoroscopeProgress";
import AboutVideoSection from "./components/AboutVideoSection";

import OurServices from "@/app/home/components/OurServices";
import OurTeam from "@/app/home/components/OurTeam";

export default function AboutUs() {
    return <>
        <Us />
        <Jyotish />
        <Number />
        <HoroscopeProgress />
        <AboutVideoSection />
        <OurServices />
        <OurTeam />
    </>
}