import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntegrationStrip from "@/components/IntegrationStrip";
import WhatWeDo from "@/components/WhatWeDo";
import WhyMDZN from "@/components/WhyMDZN";
import IntegrationCards from "@/components/IntegrationCards";
import HowItWorks from "@/components/HowItWorks";
import BrandLogos from "@/components/BrandLogos";
import Mediazone from "@/components/Mediazone";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <IntegrationStrip />
        <WhatWeDo />
        <WhyMDZN />
        <IntegrationCards />
        <HowItWorks />
        <BrandLogos />
        <Mediazone />
      </main>
      <Footer />
    </>
  );
}
