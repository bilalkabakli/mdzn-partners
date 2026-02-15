"use client";

import { TrendingUp, Users, ShoppingBag, Percent } from "lucide-react";
import { useModal } from "../ModalContext";

const stats = [
  {
    icon: TrendingUp,
    value: "₺128K",
    label: "Affiliate Geliri",
  },
  {
    icon: Users,
    value: "47",
    label: "Aktif Influencer",
  },
  {
    icon: ShoppingBag,
    value: "1,240",
    label: "Aylık Sipariş",
  },
  {
    icon: Percent,
    value: "%2.4",
    label: "Dönüşüm Oranı",
  },
];

export default function BrandsHero() {
  const { openModal } = useModal();

  return (
    <section className="bg-primary-900 text-white py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Markalar İçin
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ letterSpacing: "-2px" }}
            >
              Pazaryeri
              <br />
              Bağımlılığından
              <br />
              Kurtulun
            </h1>

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-lg">
              Kendi müşteri verinize sahip olun. Affiliate kanalınızı dakikalar
              içinde kurun.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)] transition-all duration-200 shadow-lg"
                onClick={() => openModal("brand")}
              >
                Aramıza Katıl
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-accent-600 transition-all duration-200">
                Nasıl Çalışır?
              </button>
            </div>
          </div>

          {/* Right: Stats Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/15 p-6 rounded-xl">
                  <stat.icon className="w-8 h-8 mb-3 text-accent-400" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-primary-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
