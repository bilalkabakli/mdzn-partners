import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandsHero from "@/components/brands/BrandsHero";
import BrandsFeatures from "@/components/brands/BrandsFeatures";
import BrandsComparison from "@/components/brands/BrandsComparison";
import BrandsCTA from "@/components/brands/BrandsCTA";

export const metadata: Metadata = {
  title: "Markalar İçin - MDZN Partners",
  description:
    "Pazaryeri bağımlılığından kurtulun. Kendi müşteri verinize sahip olun, affiliate kanalınızı dakikalar içinde kurun.",
};

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <BrandsHero />
        <BrandsFeatures />
        <BrandsComparison />
        <BrandsCTA />
      </main>
      <Footer />
    </>
  );
}
