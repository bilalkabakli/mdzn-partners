"use client";

import { Wallet, ShoppingBag, Megaphone } from "lucide-react";
import { useModal } from "../ModalContext";

const stats = [
  {
    icon: Wallet,
    value: "₺8,450",
    label: "Bu Ay Kazanç",
    iconBg: "bg-accent-600/20",
    iconColor: "text-accent-400",
  },
  {
    icon: ShoppingBag,
    value: "127",
    label: "Toplam Sipariş",
    iconBg: "bg-success-600/20",
    iconColor: "text-success-600",
  },
  {
    icon: Megaphone,
    value: "8",
    label: "Aktif Kampanya",
    iconBg: "bg-info-600/20",
    iconColor: "text-info-600",
  },
];

export default function InfluencersHero() {
  const { openModal } = useModal();

  return (
    <section className="bg-primary-900 text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-info-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Influencer&apos;lar İçin
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ letterSpacing: "-2px" }}
            >
              İçeriklerinizi
              <br />
              Gelire Dönüştürün
            </h1>

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-lg">
              Türkiye&apos;nin önde gelen markalarıyla çalışın. Şeffaf takip,
              adil komisyon, güvenli ödeme.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-accent-600 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-700 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)] transition-all duration-200 shadow-lg flex items-center gap-2 group"
                onClick={() => openModal("influencer")}
              >
                Hemen Başvur
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-accent-600 transition-all duration-200 flex items-center gap-2"
                onClick={() => {
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                </svg>
                Nasıl Çalışır?
              </button>
            </div>
          </div>

          {/* Right: 3 Vertical Stat Rows (per design) */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 p-5 rounded-xl flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                      </div>
                      <span className="text-white/80">{stat.label}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
