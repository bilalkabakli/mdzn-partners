"use client";

import { upcomingBrands } from "@/data/partnersData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function UpcomingBrands() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[28px] tracking-[-0.3px] font-bold mb-8">
          Yakında
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {upcomingBrands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center rounded-2xl border-2 border-dashed border-primary-300 opacity-70 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-90 hover:border-accent-600 hover:shadow-[0_0_20px_rgba(212,175,55,0.25),0_4px_16px_rgba(212,175,55,0.15)]"
            >
              <div className="bg-white/80 rounded-xl w-full h-20 flex items-center justify-center mb-2 relative p-2">
                <span className="absolute top-2 right-2 bg-warning-100 text-warning-600 text-xs px-2 py-0.5 rounded-full font-medium">
                  Yakında
                </span>
                <div
                  className={`w-12 h-12 ${brand.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <span className={`font-bold ${brand.textColor} text-sm`}>
                    {brand.initials}
                  </span>
                </div>
              </div>
              <span className="text-xs text-primary-600 text-center pb-3">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
