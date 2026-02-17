import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgenciesHero from "@/components/agencies/AgenciesHero";
import AgenciesFeatures from "@/components/agencies/AgenciesFeatures";
import AgenciesBenefits from "@/components/agencies/AgenciesBenefits";
import AgenciesCTA from "@/components/agencies/AgenciesCTA";

export const metadata: Metadata = {
  title: "Ajanslar İçin - MDZN Partners",
  description:
    "Influencer portföyünüzü tek panelden yönetin. Merkezi dashboard, gelişmiş raporlama, otomatik hakediş ve ödeme takibi.",
};

export default function AgenciesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AgenciesHero />
        <AgenciesFeatures />
        <AgenciesBenefits />
        <AgenciesCTA />
      </main>
      <Footer />
    </>
  );
}
