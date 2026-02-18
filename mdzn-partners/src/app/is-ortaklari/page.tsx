import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/partners/PartnersHero";
import ActiveBrands from "@/components/partners/ActiveBrands";
import UpcomingBrands from "@/components/partners/UpcomingBrands";
import PartnersCTA from "@/components/partners/PartnersCTA";

export const metadata: Metadata = {
  title: "İş Ortaklarımız - MDZN Partners",
  description:
    "Türkiye'nin önde gelen markaları ile çalışıyoruz. 35+ aktif marka ortağı ile affiliate pazarlama çözümleri.",
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PartnersHero />
        <ActiveBrands />
        <UpcomingBrands />
        <PartnersCTA />
      </main>
      <Footer />
    </>
  );
}
