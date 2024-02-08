import Footer from "@/components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import SectionExperince from "./SectionExperince";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="safe-layout sm:py-20 md:py-12 ">
        <SectionHero />
        <SectionTechnologyStack />
        <SectionMyLatestProject />
        <SectionLetsConnect />
        <SectionExperince />
        <SectionQuote />
        <Footer />
      </div>
    </div>
  )
}
