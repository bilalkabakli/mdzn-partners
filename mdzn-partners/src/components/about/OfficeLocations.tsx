"use client";

import { Building2, FlaskConical } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offices = [
  {
    icon: Building2,
    iconBg: "bg-accent-100",
    iconColor: "text-accent-600",
    title: "Merkez Ofis",
    lines: [
      "Merkez Mah. Abide-i Hürriyet Cad.",
      "Divan Saray No: 136-4",
      "Şişli/İstanbul",
    ],
  },
  {
    icon: FlaskConical,
    iconBg: "bg-info-100",
    iconColor: "text-info-600",
    title: "R&D Merkezi",
    lines: ["YTÜ İkitelli Teknopark", "Başakşehir/İstanbul"],
  },
];

export default function OfficeLocations() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] text-center text-primary-900 mb-12">
          Ofislerimiz
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map(({ icon: Icon, iconBg, iconColor, title, lines }) => (
            <div
              key={title}
              className="bg-white border border-primary-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div
                className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6`}
              >
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
