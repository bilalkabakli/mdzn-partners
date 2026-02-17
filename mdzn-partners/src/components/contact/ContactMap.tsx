"use client";

import { Building2, FlaskConical, Compass } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactMap() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">
          Konumlarımız
        </h2>

        <div
          className="bg-gradient-to-br from-primary-100 via-primary-50 to-accent-100/30 border border-primary-200 rounded-[20px] overflow-hidden shadow-sm relative"
          style={{ height: 360 }}
        >
          {/* Grid lines (map-like) */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Road-like horizontal lines */}
          <div className="absolute top-[40%] left-0 right-0 h-[3px] bg-primary-300/40" />
          <div className="absolute top-[65%] left-[20%] right-[10%] h-[2px] bg-primary-300/30" />

          {/* Road-like vertical lines */}
          <div className="absolute top-0 bottom-0 left-[35%] w-[3px] bg-primary-300/40" />
          <div className="absolute top-[20%] bottom-[15%] left-[70%] w-[2px] bg-primary-300/30" />

          {/* Bosphorus-like water area */}
          <div className="absolute top-0 bottom-0 left-[48%] w-[40px] bg-info-600/[0.08] blur-sm" />

          {/* Pin 1: Sisli (Merkez Ofis) */}
          <div className="absolute" style={{ top: "30%", left: "32%" }}>
            <div className="relative group cursor-pointer">
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-2 bg-black/10 rounded-full blur-sm" />
              <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10 group-hover:scale-110 transition-transform">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 z-0"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "8px solid #D4AF37",
                }}
              />
              <div className="absolute top-[-36px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap border border-primary-200">
                <p className="text-xs font-bold text-primary-900">Merkez Ofis</p>
                <p className="text-[10px] text-primary-500">Şişli/İstanbul</p>
              </div>
            </div>
          </div>

          {/* Pin 2: Basaksehir (R&D) */}
          <div className="absolute" style={{ top: "55%", left: "18%" }}>
            <div className="relative group cursor-pointer">
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-2 bg-black/10 rounded-full blur-sm" />
              <div className="w-10 h-10 bg-info-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 z-0"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "8px solid #0284C7",
                }}
              />
              <div className="absolute top-[-36px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap border border-primary-200">
                <p className="text-xs font-bold text-primary-900">R&D Merkezi</p>
                <p className="text-[10px] text-primary-500">Başakşehir/İstanbul</p>
              </div>
            </div>
          </div>

          {/* Area labels */}
          <div className="absolute top-[20%] right-[15%] text-primary-300/50 text-xs font-medium tracking-wider">
            ANADOLU YAKASI
          </div>
          <div className="absolute top-[75%] left-[25%] text-primary-300/50 text-xs font-medium tracking-wider">
            AVRUPA YAKASI
          </div>

          {/* Compass */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center border border-primary-200 shadow-sm">
            <Compass className="w-5 h-5 text-primary-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
