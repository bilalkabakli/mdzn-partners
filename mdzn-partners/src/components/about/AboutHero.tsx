import { Info } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-16 bg-gradient-to-b from-primary-50 to-white">
      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Info className="w-4 h-4" />
          <span>Bizi Tanıyın</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-1px] leading-[1.2] mb-4 lg:mb-6 text-primary-900">
          Hakkımızda
        </h1>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
          MDZN Partners, Türkiye&apos;nin en büyük dijital medya ağı Mediazone
          bünyesinde kurulan yeni nesil affiliate pazarlama platformudur.
        </p>
      </div>
    </section>
  );
}
