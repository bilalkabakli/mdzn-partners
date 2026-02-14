import { Wallet, ShoppingBag, Megaphone, ArrowRight, PlayCircle } from "lucide-react";

const heroStats = [
  {
    icon: Wallet,
    iconBg: "bg-accent-600/20",
    iconColor: "text-accent-400",
    label: "Bu Ay Kazanç",
    value: "₺8,450",
  },
  {
    icon: ShoppingBag,
    iconBg: "bg-success-600/20",
    iconColor: "text-success-600",
    label: "Toplam Sipariş",
    value: "127",
  },
  {
    icon: Megaphone,
    iconBg: "bg-info-600/20",
    iconColor: "text-info-600",
    label: "Aktif Kampanya",
    value: "8",
  },
];

export default function InfluencersHero() {
  return (
    <section className="relative bg-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-accent-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary-700/30 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-8">
              <span className="overline text-accent-400">
                Influencer&apos;lar İçin
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] mb-6 text-white">
              İçeriklerinizi
              <br />
              <span className="text-primary-400">Gelire Dönüştürün</span>
            </h1>

            <p className="text-lg text-primary-300 mb-10 max-w-lg leading-relaxed">
              Türkiye&apos;nin önde gelen markalarıyla çalışın. Şeffaf takip,
              adil komisyon, güvenli ödeme.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-accent h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 group">
                Hemen Başvur
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">
                <PlayCircle className="w-5 h-5" />
                Nasıl Çalışır?
              </button>
            </div>
          </div>

          {/* Right: Stats Dashboard */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                {heroStats.map((stat) => (
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
