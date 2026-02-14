import {
  Users,
  BarChart3,
  CreditCard,
  RotateCcw,
  Smartphone,
  Check,
  Globe,
} from "lucide-react";

/* ─── Feature data ─── */
const features = [
  {
    icon: Users,
    title: "Merkezi Influencer Yönetimi",
    subtitle: "Tüm influencer\u2019larınız tek panelde",
    description:
      "Ajansınızdaki tüm influencer\u2019ları tek bir dashboard üzerinden yönetin. Performanslarını karşılaştırın, kazançlarını takip edin.",
    bullets: [
      "Tek panelde tüm influencer\u2019lar",
      "Performans karşılaştırma",
      "Hızlı influencer arama ve filtreleme",
    ],
    mockup: "influencer-list",
  },
  {
    icon: BarChart3,
    title: "Gelişmiş Raporlama",
    subtitle: "Müşterilerinize profesyonel raporlar sunun",
    description:
      "Tarih, influencer, kampanya ve kategori bazında detaylı raporlar oluşturun. Excel export ve otomatik rapor gönderimi.",
    bullets: [
      "Özelleştirilebilir filtreler",
      "Excel ve PDF export",
      "Otomatik haftalık/aylık rapor gönderimi",
    ],
    mockup: "reporting",
  },
  {
    icon: CreditCard,
    title: "Otomatik Hakediş ve Ödemeler",
    subtitle: "Manuel hesaplama yok, otomatik ödeme takibi",
    description:
      "Her influencer\u2019ın hakedişi otomatik hesaplanır. Ödeme dönemleri, kesintiler ve net tutarlar şeffaf şekilde görünür.",
    bullets: [
      "Otomatik hakediş hesaplama",
      "Şeffaf kesinti detayları",
      "Dönemsel ödeme takvimleri",
    ],
    mockup: "payment",
  },
  {
    icon: RotateCcw,
    title: "Otomatik İptal İade Süreçleri",
    subtitle: "İptal ve iadeler otomatik olarak hakedişlere yansır",
    description:
      "Sistem iptal edilen siparişleri otomatik algılar. İadeler takip edilir ve hakedişlerden düşülür. Hiçbir manuel müdahale gerekmez.",
    bullets: [
      "Otomatik iptal algılama",
      "İade takibi ve otomatik düşüm",
      "Net \u201cBeklemede\u201d vs \u201cOnaylandı\u201d durumu",
    ],
    mockup: "refund",
  },
  {
    icon: Smartphone,
    title: "Web ve Mobil Kampanyalar Aynı Yerde",
    subtitle: "E-ticaret ve mobil uygulama kampanyaları tek panelde",
    description:
      "Web satışları ve mobil uygulama yüklemeleri aynı dashboard\u2019da. Adjust & Appsflyer entegrasyonu ile mobil kampanyalarınızı da yönetin.",
    bullets: [
      "Web ve mobil tek dashboard\u2019da",
      "Adjust & Appsflyer entegrasyonu",
      "Bounty ve CPA kampanyaları",
    ],
    mockup: "mobile",
  },
];

/* ─── Mini Mockup components (server-safe) ─── */

function InfluencerListMockup() {
  const influencers = [
    {
      initial: "A",
      name: "Ayşe K.",
      handle: "@aysestyle \u2022 125K takipçi",
      earnings: "₺3,240",
      bg: "bg-info-600",
    },
    {
      initial: "M",
      name: "Mehmet Y.",
      handle: "@mehmetfit \u2022 89K takipçi",
      earnings: "₺2,890",
      bg: "bg-purple-500",
    },
    {
      initial: "Z",
      name: "Zeynep A.",
      handle: "@zeynepbeauty \u2022 210K takipçi",
      earnings: "₺4,120",
      bg: "bg-pink-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm">
      <div className="space-y-3">
        {influencers.map((inf) => (
          <div
            key={inf.initial}
            className="flex justify-between items-center p-3 bg-primary-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 ${inf.bg} rounded-full flex items-center justify-center text-white font-bold`}
              >
                {inf.initial}
              </div>
              <div>
                <p className="font-medium text-primary-900">{inf.name}</p>
                <p className="text-xs text-primary-500">{inf.handle}</p>
              </div>
            </div>
            <span className="text-success-600 font-bold">{inf.earnings}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportingMockup() {
  const barHeights = [40, 55, 45, 70, 85, 60, 90];

  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-primary-900">
          Portföy Performansı
        </span>
        <span className="text-xs bg-primary-100 px-2 py-1 rounded text-primary-600">
          Son 30 gün
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-success-100/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-success-600">₺10.2K</p>
          <p className="text-xs text-primary-500">Toplam Kazanç</p>
        </div>
        <div className="bg-info-100/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-info-600">342</p>
          <p className="text-xs text-primary-500">Sipariş</p>
        </div>
        <div className="bg-accent-100/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-accent-700">%2.8</p>
          <p className="text-xs text-primary-500">CVR</p>
        </div>
      </div>
      <div className="h-16 flex items-end gap-1">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i === barHeights.length - 1 ? "bg-accent-400" : "bg-accent-200"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function PaymentMockup() {
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm">
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 border-b border-primary-100">
          <span className="text-primary-600">Brüt Hakediş</span>
          <span className="font-bold text-primary-900">₺12,450</span>
        </div>
        <div className="flex justify-between items-center p-3 border-b border-primary-100">
          <span className="text-primary-600">Ajans Komisyonu (%15)</span>
          <span className="text-error-600">-₺1,867</span>
        </div>
        <div className="flex justify-between items-center p-3 border-b border-primary-100">
          <span className="text-primary-600">Stopaj (%10)</span>
          <span className="text-error-600">-₺1,058</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-success-100/50 rounded-lg">
          <span className="font-medium text-primary-900">Net Ödeme</span>
          <span className="font-bold text-success-600 text-lg">₺9,525</span>
        </div>
      </div>
    </div>
  );
}

function RefundMockup() {
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-warning-100/50 rounded-lg text-center">
          <p className="text-2xl font-bold text-warning-600">₺2,450</p>
          <p className="text-sm text-primary-500">Beklemede</p>
        </div>
        <div className="p-4 bg-success-100/50 rounded-lg text-center">
          <p className="text-2xl font-bold text-success-600">₺8,120</p>
          <p className="text-sm text-primary-500">Onaylandı</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-error-100/50 rounded text-sm">
          <span className="text-error-600">Sipariş #4521 - İade</span>
          <span className="text-error-600 font-medium">-₺180</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-error-100/50 rounded text-sm">
          <span className="text-error-600">Sipariş #4498 - İptal</span>
          <span className="text-error-600 font-medium">-₺95</span>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-primary-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-info-600" />
            <span className="font-medium text-primary-900">Web Satışları</span>
          </div>
          <p className="text-2xl font-bold text-info-600">₺8,450</p>
          <p className="text-xs text-primary-500">234 sipariş</p>
        </div>
        <div className="p-4 border border-primary-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-primary-900">Mobil</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">₺3,200</p>
          <p className="text-xs text-primary-500">156 yükleme</p>
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<string, () => React.JSX.Element> = {
  "influencer-list": InfluencerListMockup,
  reporting: ReportingMockup,
  payment: PaymentMockup,
  refund: RefundMockup,
  mobile: MobileMockup,
};

/* ─── Main Component ─── */

export default function AgenciesFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-accent-600 mb-4 inline-block">
            Avantajlar
          </span>
          <h2 className="text-3xl lg:text-[36px] font-bold tracking-[-0.5px]">
            Neden MDZN Partners?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Mockup = mockupComponents[feature.mockup];
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content Side */}
                <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent-100 rounded-xl">
                      <Icon className="w-6 h-6 text-accent-700" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold tracking-[-0.3px] text-primary-900">
                        {feature.title}
                      </h3>
                      <p className="text-accent-700 font-medium">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

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

                {/* Mockup Side */}
                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  {Mockup && <Mockup />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
