import { BarChart3, Building2, CreditCard, Link2, Check, Copy } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Anlık Performans Takibi",
    subtitle: "Tıklama, satış ve kazançlarınızı gerçek zamanlı görün",
    description:
      "Dashboard\u2019unuzda tüm performans metriklerinizi anlık takip edin. Hangi içeriğin daha çok satış getirdiğini hemen görün.",
    mockup: "stats" as const,
    bullets: [
      "Anlık satış bildirimleri",
      "İçerik bazlı performans analizi",
      "Haftalık/aylık trend raporları",
    ],
  },
  {
    icon: Building2,
    title: "Güvenilir Markalar",
    subtitle: "Türkiye\u2019nin önde gelen e-ticaret markaları",
    description:
      "Sadece güvenilir ve onaylanmış markalarla çalışın. Takipçilerinize güvenle önerebileceğiniz ürünler.",
    mockup: "brands" as const,
    bullets: [
      "Onaylı marka havuzu",
      "Güvenilir ödeme garantisi",
      "Kaliteli ürün seçenekleri",
    ],
  },
  {
    icon: CreditCard,
    title: "Şeffaf Komisyon",
    subtitle: "Her satıştan ne kazandığınızı net görün",
    description:
      "Komisyon oranları önceden bellidir. Beklemede ve onaylanan kazançlarınızı ayrı ayrı takip edin.",
    mockup: "commission" as const,
    bullets: [
      "Önceden belli komisyon oranları",
      "Zamanında ödeme garantisi",
      "Detaylı kazanç raporları",
    ],
  },
  {
    icon: Link2,
    title: "Kolay Link Oluşturma",
    subtitle: "Saniyeler içinde affiliate linkinizi oluşturun",
    description:
      "Herhangi bir ürün için tek tıkla kendi affiliate linkinizi oluşturun. Kısa ve özel linkler.",
    mockup: "link" as const,
    bullets: [
      "Tek tıkla link oluşturma",
      "Kısa ve akılda kalıcı linkler",
      "QR kod desteği",
    ],
  },
];

function StatsMockup() {
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm mb-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-accent-100/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-accent-700">12.4K</p>
          <p className="text-xs text-primary-500 mt-1">Tıklama</p>
        </div>
        <div className="bg-success-100/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-success-600">127</p>
          <p className="text-xs text-primary-500 mt-1">Sipariş</p>
        </div>
        <div className="bg-primary-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-primary-900">₺8,450</p>
          <p className="text-xs text-primary-500 mt-1">Kazanç</p>
        </div>
      </div>
    </div>
  );
}

function BrandsMockup() {
  const brands = ["PO", "TC", "FR", "PA"];
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm mb-6">
      <div className="grid grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-primary-50 h-14 rounded-lg flex items-center justify-center"
          >
            <span className="font-bold text-primary-400 text-sm">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommissionMockup() {
  const rates = [
    { category: "Moda & Güzellik", rate: "%8-12" },
    { category: "Elektronik", rate: "%3-5" },
    { category: "Spor & Fitness", rate: "%6-10" },
  ];
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm mb-6">
      <div className="space-y-3">
        {rates.map((item) => (
          <div
            key={item.category}
            className="flex justify-between items-center p-4 bg-primary-50 rounded-lg"
          >
            <span className="text-primary-600 font-medium">
              {item.category}
            </span>
            <span className="font-bold text-accent-700">{item.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkMockup() {
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm mb-6">
      <div className="bg-primary-100 p-4 rounded-lg font-mono text-sm text-primary-600 flex items-center justify-between">
        <span>mdzn.link/ayse-guzellik-seti</span>
        <span className="text-primary-400">
          <Copy className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}

const mockupComponents = {
  stats: StatsMockup,
  brands: BrandsMockup,
  commission: CommissionMockup,
  link: LinkMockup,
};

export default function InfluencersFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="overline text-accent-600 mb-4 inline-block">
            Avantajlar
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[-1px]">
            Neden MDZN Partners?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const MockupComponent = mockupComponents[feature.mockup];
            return (
              <div
                key={feature.title}
                className="bg-primary-50 rounded-2xl p-8 lg:p-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-100 rounded-xl">
                    <feature.icon className="w-6 h-6 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">
                      {feature.title}
                    </h3>
                    <p className="text-accent-700 font-medium text-sm">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-primary-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <MockupComponent />

                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-primary-700"
                    >
                      <div className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success-600" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
