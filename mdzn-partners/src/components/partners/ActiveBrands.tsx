"use client";

import Image from "next/image";
import { activeBrands } from "@/data/partnersData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ActiveBrands() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[28px] tracking-[-0.3px] font-bold mb-8">
          Aktif Markalar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {activeBrands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex flex-col items-center rounded-2xl border border-primary-200 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15),0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Aktif micro-badge — appears on hover */}
              <div className="absolute -top-2 -left-2 z-10 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                <span className="bg-success-100 text-success-600 text-[9px] font-bold px-2 py-0.5 rounded-full border border-success-600/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success-600 rounded-full inline-block" />
                  Aktif
                </span>
              </div>

              <div className="bg-white rounded-xl w-full h-20 flex items-center justify-center mb-2 p-2">
                {brand.logoUrl ? (
                  <Image
                    src={brand.logoUrl}
                    alt={brand.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary-400 text-sm">
                      {brand.initials}
                    </span>
                  </div>
                )}
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
