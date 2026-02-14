import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Ortalama %15 CTR artışı",
  "Ücretsiz başvuru, hızlı onay",
  "Zamanında ve güvenli ödeme",
  "Dedicated hesap yöneticisi desteği",
];

export default function InfluencersCTA() {
  return (
    <section className="py-16 bg-primary-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="overline text-accent-400 mb-4 inline-block">
              Başvuru
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-[-1px] mb-6 text-white">
              Hemen başvurun,
              <br />
              kazanmaya başlayın
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

            <button className="btn-accent h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 group">
              Hemen Başvur
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Stats Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-white mb-2">₺8,450</p>
              <p className="text-primary-400">Ortalama aylık kazanç</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-5 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">127</p>
                <p className="text-sm text-primary-400 mt-1">Sipariş/ay</p>
              </div>
              <div className="bg-white/10 p-5 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">%2.4</p>
                <p className="text-sm text-primary-400 mt-1">Dönüşüm oranı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
