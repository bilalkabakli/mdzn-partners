import { ArrowRight, PlayCircle, TrendingUp, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-accent-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-gradient-to-br from-primary-100/50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-success-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-success-600">
                Türkiye&apos;nin #1 Affiliate Platformu
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-2px] mb-6">
              Affiliate Pazarlamanın
              <br />
              <span className="text-primary-400">Yeni Nesil Platformu</span>
            </h1>

            <p className="text-lg text-primary-500 mb-10 max-w-lg leading-relaxed font-medium">
              Markalar, influencer&apos;lar ve yayıncıları tek platformda
              buluşturun. Gerçek zamanlı raporlama, güvenli ödemeler, sıfır
              manuel iş.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 group">
                Demo Talep Et
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Platform Turu
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-success-600 to-success-600 border-2 border-white" />
                </div>
                <span className="text-sm text-primary-400">
                  Her gün büyüyen marka ağı
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            <div className="bg-white border border-primary-200 rounded-2xl shadow-illustration p-6">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#EF4444] rounded-full" />
                <div className="w-3 h-3 bg-[#FBBF24] rounded-full" />
                <div className="w-3 h-3 bg-[#22C55E] rounded-full" />
                <span className="ml-4 text-xs font-medium text-primary-400">
                  MDZN Dashboard
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-primary-50 border border-primary-100 p-4 rounded-xl">
                  <p className="text-xs text-primary-400 mb-1">E-Commerce</p>
                  <p className="text-xl font-extrabold text-primary-900">
                    ₺12,450
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success-600" />
                    <span className="text-xs font-medium text-success-600">
                      +12%
                    </span>
                  </div>
                </div>
                <div className="bg-accent-100/50 border border-accent-200/50 p-4 rounded-xl">
                  <p className="text-xs text-primary-400 mb-1">Bounty</p>
                  <p className="text-xl font-extrabold text-primary-900">
                    ₺3,280
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success-600" />
                    <span className="text-xs font-medium text-success-600">
                      +8%
                    </span>
                  </div>
                </div>
                <div className="bg-success-100/50 border border-success-100 p-4 rounded-xl">
                  <p className="text-xs text-primary-400 mb-1">Mobile</p>
                  <p className="text-xl font-extrabold text-primary-900">
                    ₺890
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success-600" />
                    <span className="text-xs font-medium text-success-600">
                      +24%
                    </span>
                  </div>
                </div>
              </div>

              {/* Revenue chart */}
              <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-primary-400 mb-1">
                      Affiliate Driven Revenue
                    </p>
                    <p className="text-2xl font-extrabold">₺128,450</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-success-100 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-success-600" />
                    <span className="text-sm font-semibold text-success-600">
                      +18.2%
                    </span>
                  </div>
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 55, 45, 70, 85, 60, 75, 90, 80, 100, 70, 85].map(
                    (height, i) => {
                      const colors = [
                        "bg-primary-200",
                        "bg-primary-200",
                        "bg-primary-200",
                        "bg-primary-300",
                        "bg-primary-300",
                        "bg-primary-300",
                        "bg-primary-400",
                        "bg-primary-400",
                        "bg-primary-500",
                        "bg-primary-900",
                        "bg-primary-400",
                        "bg-primary-300",
                      ];
                      return (
                        <div
                          key={i}
                          className={`flex-1 ${colors[i]} rounded-t`}
                          style={{ height: `${height}%` }}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -right-4 bottom-8 bg-white border border-primary-200 rounded-xl p-4 shadow-lg animate-float-badge">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Yeni Satış!</p>
                  <p className="text-xs text-primary-400">
                    ₺245 komisyon kazanıldı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
