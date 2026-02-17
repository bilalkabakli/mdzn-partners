"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const familyBrands = [
  {
    name: "Mackolik",
    initials: "MK",
    gradient: "from-green-500 to-green-600",
    shadow: "shadow-green-600/20",
    description: "Spor",
  },
  {
    name: "Onedio",
    initials: "ON",
    gradient: "from-orange-500 to-orange-600",
    shadow: "shadow-orange-600/20",
    description: "Dijital Medya",
  },
  {
    name: "Mynet",
    initials: "MY",
    gradient: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-600/20",
    description: "Haber",
  },
  {
    name: "Yemek.com",
    initials: "YC",
    gradient: "from-red-500 to-red-600",
    shadow: "shadow-red-600/20",
    description: "Yemek & Yaşam",
  },
  {
    name: "Webtekno",
    initials: "WT",
    gradient: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-600/20",
    description: "Teknoloji",
  },
  {
    name: "Hisse.net",
    initials: "HN",
    gradient: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-600/20",
    description: "Finans",
  },
];

export default function MediazoneFamily() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] text-center text-primary-900 mb-12">
          Mediazone Ailesi
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {familyBrands.map(({ name, initials, gradient, shadow, description }) => (
            <div
              key={name}
              className="family-card bg-white border border-primary-200 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md ${shadow}`}
              >
                <span className="font-bold text-white text-xl">
                  {initials}
                </span>
              </div>
              <span className="text-sm text-primary-900 font-semibold mb-1">
                {name}
              </span>
              <span className="text-[11px] text-primary-400 font-medium">
                {description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
