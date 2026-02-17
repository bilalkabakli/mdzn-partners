"use client";

import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const brands = [
  { initials: "PO", featured: false },
  { initials: "TC", featured: false },
  { initials: "FR", featured: false },
  { initials: "PA", featured: false },
  { initials: "INB", featured: true },
  { initials: "BL", featured: false },
  { initials: "PS", featured: false },
  { initials: "VD", featured: false },
];

export default function InfluencersBrands() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="text-center mb-16">
          <span className="overline text-accent-600 mb-4 inline-block">
            Marka Ağı
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[-1px] mb-4">
            Çalışabileceğiniz Markalar
          </h2>
          <p className="text-primary-500 max-w-xl mx-auto">
            Türkiye&apos;nin en iyi e-ticaret markalarıyla işbirliği yapın
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {brands.map((brand) => (
            <div
              key={brand.initials}
              className="bg-white rounded-xl p-8 flex items-center justify-center border border-primary-200 hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)] transition-all duration-200"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                  brand.featured
                    ? "bg-primary-900"
                    : "bg-primary-100"
                }`}
              >
                <span
                  className={`font-bold text-sm ${
                    brand.featured ? "text-white" : "text-primary-400"
                  }`}
                >
                  {brand.initials}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/is-ortaklari"
            className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-accent-700 transition-colors duration-200"
          >
            Tüm markaları gör
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
