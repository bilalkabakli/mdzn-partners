"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const brands = [
  { name: "Proteinocean", initial: "P", bg: "bg-indigo-100", text: "text-indigo-600" },
  { name: "Fropie", initial: "F", bg: "bg-emerald-100", text: "text-emerald-600" },
  { name: "IAMNOTBASIC", initial: "I", bg: "bg-accent-100", text: "text-accent-800" },
  { name: "VOIDTR", initial: "V", bg: "bg-rose-100", text: "text-rose-600" },
  { name: "Rosece", initial: "R", bg: "bg-pink-100", text: "text-pink-600" },
  { name: "Limonian", initial: "L", bg: "bg-amber-100", text: "text-amber-600" },
  { name: "Armonika", initial: "A", bg: "bg-violet-100", text: "text-violet-600" },
  { name: "Green Black", initial: "GB", bg: "bg-teal-100", text: "text-teal-600" },
  { name: "Petzzshop", initial: "P", bg: "bg-orange-100", text: "text-orange-600" },
  { name: "Animal Joy", initial: "AJ", bg: "bg-sky-100", text: "text-sky-600" },
  { name: "BELLORE", initial: "B", bg: "bg-primary-100", text: "text-primary-700" },
  { name: "Paen", initial: "P", bg: "bg-lime-100", text: "text-lime-700" },
];

export default function BrandLogos() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-4">
            Her Gün Genişleyen Marka Ağı
          </h2>
          <p className="text-primary-500 font-medium">
            Güvenilir markalar ağımıza katılın
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="brand-card bg-white rounded-xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-200 hover:-translate-y-0.5"
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div
                className={`w-14 h-14 rounded-full ${brand.bg} flex items-center justify-center`}
              >
                <span className={`text-lg font-extrabold ${brand.text}`}>
                  {brand.initial}
                </span>
              </div>
              <span className="text-xs font-semibold text-primary-700 text-center leading-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/is-ortaklari"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3 rounded-lg font-semibold"
          >
            Tüm markaları gör
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
