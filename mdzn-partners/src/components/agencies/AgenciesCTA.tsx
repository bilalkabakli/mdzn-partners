import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Tüm influencer\u2019ları tek panelde yönetin",
  "Müşterilerinize şeffaf raporlama sunun",
  "Toplu kampanya yönetimi ile zaman kazanın",
  "Özel ajans fiyatlandırması",
];

export default function AgenciesCTA() {
  return (
    <section className="py-10 lg:py-16 bg-primary-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="overline text-accent-400 mb-4 inline-block">
              Ajans Programı
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] mb-6 text-white">
              Ajansınız için
              <br />
              demo talep edin
            </h2>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-white/80"
                >
                  <div className="w-6 h-6 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-400" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="w-full lg:w-auto btn-accent h-14 px-8 rounded-lg text-base font-semibold flex items-center justify-center gap-2 group">
              Demo Talep Et
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Stats Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">₺45K+</p>
              <p className="text-primary-400">
                Aylık ortalama portföy kazancı
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-5 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-primary-400 mt-1">
                  Influencer/ajans
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">%85</p>
                <p className="text-sm text-primary-400 mt-1">
                  Zaman tasarrufu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
