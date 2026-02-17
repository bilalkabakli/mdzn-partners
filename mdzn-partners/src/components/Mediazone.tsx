"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const partners = [
  "Mackolik",
  "Onedio",
  "Mynet",
  "Yemek.com",
  "Webtekno",
  "Hisse.net",
];

export default function Mediazone() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-12 border-t border-primary-200 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-primary-400 mb-8 font-medium">
          Türkiye&apos;nin en büyük dijital medya ağı Mediazone güvencesiyle
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 bg-primary-50 border border-primary-200 rounded-lg hover:border-primary-300 transition-colors"
            >
              <span className="text-sm font-medium text-primary-600">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
