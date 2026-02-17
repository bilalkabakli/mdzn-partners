"use client";

import { Users, Puzzle, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Users,
    value: "45K+",
    label: "Influencer",
    description: "Türkiye\u2019nin en geniş influencer ağına erişim",
  },
  {
    icon: Puzzle,
    value: "15+",
    label: "Entegrasyon",
    description: "E-ticaret ve mobil platformlarla hazır entegrasyonlar",
  },
  {
    icon: Clock,
    value: "%85",
    label: "Zaman Tasarrufu",
    description: "Otomatik süreçlerle operasyonel yükü minimize edin",
  },
];

export default function AgenciesBenefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="bg-white border border-primary-200 rounded-2xl p-8 text-center transition-all duration-200 hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
            >
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-accent-700" />
              </div>
              <p className="text-4xl font-extrabold text-primary-900 mb-1">
                {value}
              </p>
              <p className="text-accent-700 font-semibold text-sm mb-2">
                {label}
              </p>
              <p className="text-primary-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
