import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "İletişim - MDZN Partners",
  description:
    "Sorularınız için bize ulaşın. E-posta, merkez ofis ve R&D merkezi iletişim bilgileri.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <ContactMap />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
