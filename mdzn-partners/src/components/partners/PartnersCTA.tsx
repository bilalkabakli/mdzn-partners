"use client";

import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  "Türkiye\u2019nin en büyük influencer ağına erişim",
  "Gerçek zamanlı performans takibi",
  "Otomatik entegrasyon ve raporlama",
  "Dedicated hesap yöneticisi desteği",
];

export default function PartnersCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-primary-900">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="overline text-accent-400 mb-4 inline-block">
              Marka Ortağı Olun
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-[-1px] mb-6 text-white">
              Siz de MDZN Partners<br />ailesine katılın
            </h2>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 text-white/80">
                  <div className="w-6 h-6 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-400" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="btn-accent h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 group">
              Marka Başvurusu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Stats Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-white mb-2">35+</p>
              <p className="text-primary-400">Aktif marka ortağı</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-primary-400 mt-1">Influencer</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">₺2M+</p>
                <p className="text-xs text-primary-400 mt-1">Aylık GMV</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">%2.4</p>
                <p className="text-xs text-primary-400 mt-1">Ort. CVR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
