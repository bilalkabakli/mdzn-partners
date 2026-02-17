"use client";

import { Building2 } from "lucide-react";

export default function PartnersHero() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-accent-100/50 to-primary-50 overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative spinning circle */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 border-2 border-accent-300/30 rounded-full"
        aria-hidden="true"
        style={{ animation: "spin 30s linear infinite" }}
      />
      {/* Decorative static circle */}
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 border border-primary-300/20 rounded-full"
        aria-hidden="true"
      />
      {/* Scattered gold dots */}
      <div className="absolute top-12 left-[15%] w-3 h-3 bg-accent-400/40 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-16 right-[20%] w-2 h-2 bg-accent-500/30 rounded-full" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Left: Text content */}
          <div className="text-center lg:text-left flex-1">
            <span className="overline text-accent-600 mb-4 inline-block">
              İş Ortaklarımız
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-1px] mb-4">
              İş Ortaklarımız
            </h1>
            <p className="text-lg text-primary-500 font-medium max-w-lg mx-auto lg:mx-0">
              Türkiye&apos;nin önde gelen markaları ile çalışıyoruz
            </p>
          </div>

          {/* Right: Floating glass stats badge */}
          <div className="glass-card rounded-2xl px-8 py-6 animate-float-badge">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-accent-700" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary-900 leading-none">
                  35+
                </p>
                <p className="text-sm text-primary-500 font-medium mt-1">
                  Aktif Marka Ortağı
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary-200/60">
              <div className="w-2 h-2 bg-success-600 rounded-full" />
              <span className="text-xs text-success-600 font-semibold">
                Şubat 2026 itibarıyla
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
