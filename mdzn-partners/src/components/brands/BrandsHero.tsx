"use client";

import {
  TrendingUp,
  Percent,
  Banknote,
  Megaphone,
  LayoutDashboard,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useModal } from "../ModalContext";

export default function BrandsHero() {
  const { openModal } = useModal();

  const scrollToFeatures = () => {
    const el = document.getElementById("brands-features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              E-Ticaret Büyümenizi
              <br />
              <span className="text-primary-300">Hızlandırın</span>
            </h1>

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-lg">
              Kendi müşteri verinize sahip olun. Affiliate kanalınızı dakikalar
              içinde kurun.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-accent-600 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-700 transition-all duration-200 shadow-lg flex items-center gap-2 group"
                onClick={() => openModal("brand")}
              >
                Aramıza Katıl
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-accent-600 transition-all duration-200"
                onClick={scrollToFeatures}
              >
                Nasıl Çalışır?
              </button>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="p-6 rounded-2xl border border-white/15"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-600/20 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-sm font-semibold text-white/90">
                  Performans Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Calendar className="w-3 h-3" />
                Son 30 gün
              </div>
            </div>

            {/* Revenue Chart Area */}
            <div className="relative bg-white/5 rounded-xl p-5 mb-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                  Gelir Trendi
                </span>
                <div className="flex items-center gap-1 text-success-600 text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  +24%
                </div>
              </div>
              {/* SVG Chart Line */}
              <svg
                viewBox="0 0 400 80"
                className="w-full h-16"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#D4AF37", stopOpacity: 0.3 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#D4AF37", stopOpacity: 0 }}
                    />
                  </linearGradient>
                </defs>
                {/* Fill area */}
                <path
                  d="M0 65 Q40 55, 80 48 Q120 35, 160 40 Q200 30, 240 22 Q280 18, 320 12 Q360 8, 400 5 L400 80 L0 80 Z"
                  fill="url(#chartGrad)"
                />
                {/* Line */}
                <path
                  d="M0 65 Q40 55, 80 48 Q120 35, 160 40 Q200 30, 240 22 Q280 18, 320 12 Q360 8, 400 5"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Dot at end */}
                <circle cx="400" cy="5" r="4" fill="#D4AF37" />
                <circle cx="400" cy="5" r="7" fill="#D4AF37" opacity="0.3" />
              </svg>
              <div className="flex justify-between mt-2 text-[10px] text-white/30">
                <span>1 Oca</span>
                <span>8 Oca</span>
                <span>15 Oca</span>
                <span>22 Oca</span>
                <span>30 Oca</span>
              </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-3 gap-3">
              {/* Conversion Rate */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-success-600/20 rounded-md flex items-center justify-center">
                    <Percent className="w-3 h-3 text-success-600" />
                  </div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">
                    Dönüşüm
                  </span>
                </div>
                <p className="text-xl font-bold text-white">%2.4</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success-600" />
                  <span className="text-[10px] text-success-600 font-medium">
                    +0.3%
                  </span>
                </div>
              </div>

              {/* Total Revenue */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-accent-600/20 rounded-md flex items-center justify-center">
                    <Banknote className="w-3 h-3 text-accent-400" />
                  </div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">
                    Gelir
                  </span>
                </div>
                <p className="text-xl font-bold text-white">₺128K</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success-600" />
                  <span className="text-[10px] text-success-600 font-medium">
                    +18%
                  </span>
                </div>
              </div>

              {/* Active Campaigns */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-info-600/20 rounded-md flex items-center justify-center">
                    <Megaphone className="w-3 h-3 text-info-600" />
                  </div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">
                    Kampanya
                  </span>
                </div>
                <p className="text-xl font-bold text-white">12</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-white/40">aktif</span>
                </div>
              </div>
            </div>

            {/* Bottom mini bar: Active Influencers */}
            <div className="mt-4 bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-accent-600/30 border-2 border-primary-900 flex items-center justify-center text-[9px] font-bold text-accent-300">
                    AS
                  </div>
                  <div className="w-7 h-7 rounded-full bg-info-600/30 border-2 border-primary-900 flex items-center justify-center text-[9px] font-bold text-info-600">
                    BK
                  </div>
                  <div className="w-7 h-7 rounded-full bg-success-600/30 border-2 border-primary-900 flex items-center justify-center text-[9px] font-bold text-success-600">
                    CD
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/10 border-2 border-primary-900 flex items-center justify-center text-[9px] font-bold text-white/60">
                    +44
                  </div>
                </div>
                <span className="text-xs text-white/60">
                  47 Aktif Influencer
                </span>
              </div>
              <span className="text-xs text-success-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success-600 rounded-full animate-pulse" />
                Canlı
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
