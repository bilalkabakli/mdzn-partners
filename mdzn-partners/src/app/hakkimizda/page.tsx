import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MediazoneStats from "@/components/about/MediazoneStats";
import MediazoneFamily from "@/components/about/MediazoneFamily";
import OfficeLocations from "@/components/about/OfficeLocations";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Hakkımızda - MDZN Partners",
  description:
    "MDZN Partners, Türkiye'nin en büyük dijital medya ağı Mediazone bünyesinde kurulan yeni nesil affiliate pazarlama platformudur.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AboutHero />
        <MediazoneStats />
        <MediazoneFamily />
        <OfficeLocations />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
