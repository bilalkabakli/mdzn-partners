import { TrendingUp, Clock, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Performans Artışı",
    items: [
      "%30\u2019a varan takip doğruluğu artışı",
      "Gerçek zamanlı veri ile hızlı karar alma",
      "Backend tracking ile kayıp satış yok",
    ],
  },
  {
    icon: Clock,
    title: "Zaman Tasarrufu",
    items: [
      "Dakikalar içinde entegrasyon",
      "Otomatik ödeme hesaplama",
      "Manuel iş yükü sıfır",
    ],
  },
];

export default function BrandsCTA() {
  return (
    <section className="py-10 lg:py-16 bg-primary-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            Affiliate Kanalınızı Güçlendirin
          </h2>
          <p className="text-primary-300 text-lg">
            MDZN Partners ile performans pazarlamanızı bir üst seviyeye taşıyın
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 lg:mb-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10"
              >
                <h3 className="font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-accent-600 rounded-lg">
                    <Icon className="w-5 h-5 text-primary-900" />
                  </div>
                  {benefit.title}
                </h3>
                <ul className="space-y-3 text-primary-200 text-sm">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="w-full lg:w-auto bg-white text-primary-900 px-12 py-5 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)] transition-all duration-200 shadow-xl">
            Demo Talep Edin
          </button>
          <p className="text-primary-400 text-sm mt-4">
            15 dakikalık demo ile tüm özellikleri keşfedin
          </p>
        </div>
      </div>
    </section>
  );
}
