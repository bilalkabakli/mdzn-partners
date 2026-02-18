import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfluencersHero from "@/components/influencers/InfluencersHero";
import InfluencersFeatures from "@/components/influencers/InfluencersFeatures";
import InfluencersBrands from "@/components/influencers/InfluencersBrands";
import InfluencersMobileApp from "@/components/influencers/InfluencersMobileApp";
import InfluencersCTA from "@/components/influencers/InfluencersCTA";

export const metadata: Metadata = {
  title: "Influencer'lar İçin - MDZN Partners",
  description:
    "İçeriklerinizi gelire dönüştürün. Türkiye'nin önde gelen markalarıyla çalışın. Şeffaf takip, adil komisyon, güvenli ödeme.",
};

export default function InfluencersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InfluencersHero />
        <InfluencersFeatures />
        <InfluencersBrands />
        <InfluencersMobileApp />
        <InfluencersCTA />
      </main>
      <Footer />
    </>
  );
}
