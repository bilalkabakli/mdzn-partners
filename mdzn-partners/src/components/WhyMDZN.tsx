import {
  Clock,
  Database,
  Zap,
  CreditCard,
  RotateCcw,
  Smartphone,
  Check,
  TrendingUp,
  Shield,
  CircleCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardData {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  tagline: string;
  stat?: {
    icon: LucideIcon;
    text: string;
  };
  description: string;
  bullets: string[];
}

const features: FeatureCardData[] = [
  {
    icon: Clock,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    title: "Gerçek Zamanlı Takip",
    tagline: "Tüm satışlarınızı anlık görün",
    stat: { icon: TrendingUp, text: "191K tıklama / 235 sipariş" },
    description:
      "Satışlarınız saniyeler içinde dashboard'unuzda görünür. Anlık verilerle karar alın.",
    bullets: [
      "Anlık dashboard",
      "Kampanya bazlı filtreleme",
      "Trend grafikleri",
    ],
  },
  {
    icon: Database,
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    title: "Backend Veri Toplama",
    tagline: "%30'a varan takip kaybını önleyin",
    stat: { icon: Shield, text: "%95+ takip doğruluğu" },
    description:
      "SDK tabanlı tracking ile server-side veri toplama. Verileriniz güvende ve eksiksiz.",
    bullets: [
      "SDK tabanlı tracking",
      "Server-side bağlantı",
      "Audit & log desteği",
    ],
  },
  {
    icon: Zap,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    title: "Anında Entegrasyon",
    tagline: "Hazır ve özel entegrasyonlar",
    description:
      "Popüler e-ticaret platformlarıyla hazır entegrasyonlar. Özel altyapı? Tüm kurulumu biz yapıyoruz.",
    bullets: [
      "İkas, Shopify, Ticimax",
      "Özel altyapı desteği",
      "Teknik kurulum bizden",
    ],
  },
  {
    icon: CreditCard,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    title: "Otomatik Ödeme",
    tagline: "Komisyonlar otomatik hesaplanır",
    description:
      "Kategori bazlı komisyon oranları tanımlayın. Moda %8, Elektronik %5, Kozmetik %12. Şeffaf takip.",
    bullets: [
      "Kategori bazlı oranlar",
      "Otomatik hesaplama",
      "Şeffaf kazanç paneli",
    ],
  },
  {
    icon: RotateCcw,
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#E11D48]",
    title: "İptal/İade Yönetimi",
    tagline: "Otomatik komisyon düzeltme",
    stat: {
      icon: CircleCheck,
      text: "\u20BA8,120 kazanıldı / \u20BA2,450 beklemede",
    },
    description:
      "İptal edilen siparişler otomatik algılanır, komisyonlardan düşülür.",
    bullets: [
      "Otomatik iptal algılama",
      "İade takibi",
      "Beklemede vs Kazanıldı",
    ],
  },
  {
    icon: Smartphone,
    iconBg: "bg-[#CFFAFE]",
    iconColor: "text-[#0891B2]",
    title: "Mobil Uygulama Takibi",
    tagline: "iOS ve Android affiliate kampanyaları",
    description:
      "Affiliate linklerinden uygulama yüklemelerini takip edin. Adjust & Appsflyer entegrasyonu.",
    bullets: [
      "Uygulama yüklemesi takibi",
      "Adjust & Appsflyer",
      "Bounty sistemi",
    ],
  },
];

export default function WhyMDZN() {
  return (
    <section className="py-12 lg:py-20 bg-primary-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 lg:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3 lg:mb-4">
            <span
              className="hidden lg:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
            <span className="text-[11px] lg:text-[13px] font-bold lg:font-semibold text-accent-600 uppercase tracking-[1.5px]">
              Platform Özellikleri
            </span>
            <span
              className="hidden lg:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-extrabold text-primary-900 tracking-[-1px] lg:tracking-[-1.5px] leading-[1.2] mb-2 lg:mb-3">
            Neden MDZN Partners?
          </h2>
          <p className="text-sm lg:text-lg text-primary-500 font-medium lg:max-w-[560px] mx-auto">
            Affiliate pazarlamanın geleceğini bugünden deneyimleyin
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-3 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            const StatIcon = feature.stat?.icon;

            return (
              <article
                key={feature.title}
                className="flex-[0_0_80%] snap-start bg-white border border-primary-200 rounded-xl p-6 lg:p-8 lg:transition-all lg:duration-300 lg:hover:border-accent-600 lg:hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)] lg:hover:-translate-y-0.5"
              >
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4 lg:mb-5`}
                >
                  <Icon
                    className={`w-5 h-5 lg:w-6 lg:h-6 ${feature.iconColor}`}
                  />
                </div>

                <h3 className="text-base lg:text-lg font-bold text-primary-900 tracking-[-0.3px] mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs lg:text-[13px] font-semibold text-accent-600 mb-3">
                  {feature.tagline}
                </p>

                {feature.stat && StatIcon && (
                  <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-[13px] font-bold text-success-600 mb-4">
                    <StatIcon className="w-3.5 h-3.5" />
                    {feature.stat.text}
                  </div>
                )}

                <p className="text-[13px] lg:text-sm text-primary-500 leading-relaxed mb-4 lg:mb-5">
                  {feature.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-xs lg:text-[13px] text-primary-600"
                    >
                      <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-success-600 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
