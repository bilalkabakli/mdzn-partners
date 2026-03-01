import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntegrationStrip from "@/components/IntegrationStrip";
import FeatureTabs from "@/components/FeatureTabs";
import Integrations from "@/components/Integrations";
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
        <FeatureTabs />
        <Integrations />
        <HowItWorks />
        <BrandLogos />
        <Mediazone />
      </main>
      <Footer />
    </>
  );
}
