"use client";

import { useState } from "react";
import {
  Clock,
  Database,
  Zap,
  CreditCard,
  RotateCcw,
  Smartphone,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface FeatureTab {
  icon: LucideIcon;
  label: string;
  title: string;
  goldSubtitle: string;
  description: string;
  bullets: string[];
  widget: React.ReactNode;
}

function StatGridWidget() {
  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg text-center border border-primary-100">
          <p className="text-2xl font-bold text-primary-900">191K</p>
          <p className="text-xs text-primary-500">Tıklama</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center border border-primary-100">
          <p className="text-2xl font-bold text-success-600">235</p>
          <p className="text-xs text-primary-500">Sipariş</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center border border-primary-100">
          <p className="text-2xl font-bold text-accent-700">₺10,351</p>
          <p className="text-xs text-primary-500">Kazanç</p>
        </div>
      </div>
    </div>
  );
}

function ProgressBarWidget() {
  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary-600 font-medium">Takip Doğruluğu</span>
        <span className="text-2xl font-bold text-success-600">%95+</span>
      </div>
      <div className="w-full bg-primary-200 rounded-full h-4">
        <div
          className="bg-success-600 h-4 rounded-full"
          style={{ width: "95%" }}
        />
      </div>
    </div>
  );
}

function PlatformLogosWidget() {
  const platforms = [
    { abbr: "İK", name: "İkas", bg: "bg-indigo-100", text: "text-indigo-600" },
    { abbr: "SH", name: "Shopify", bg: "bg-green-100", text: "text-green-600" },
    {
      abbr: "TC",
      name: "Ticimax",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-center gap-8">
        {platforms.map((p) => (
          <div key={p.name} className="text-center">
            <div
              className={`w-16 h-16 ${p.bg} rounded-xl flex items-center justify-center mb-2 mx-auto`}
            >
              <span className={`font-bold ${p.text}`}>{p.abbr}</span>
            </div>
            <p className="text-sm text-primary-600">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommissionTableWidget() {
  const rows = [
    { category: "Moda", rate: "%8" },
    { category: "Elektronik", rate: "%5" },
    { category: "Kozmetik", rate: "%12" },
  ];

  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.category}
            className="flex justify-between items-center p-4 bg-white rounded-lg border border-primary-100"
          >
            <span className="text-primary-600">{row.category}</span>
            <span className="font-bold text-primary-900">{row.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RefundCardsWidget() {
  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-warning-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-warning-600">₺2,450</p>
          <p className="text-sm text-primary-500">Beklemede</p>
        </div>
        <div className="p-4 bg-success-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-success-600">₺8,120</p>
          <p className="text-sm text-primary-500">Kazanıldı</p>
        </div>
      </div>
    </div>
  );
}

function MobileSdkWidget() {
  const sdks = [
    { abbr: "AD", name: "Adjust", bg: "bg-orange-100", text: "text-orange-600" },
    {
      abbr: "AF",
      name: "Appsflyer",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
  ];

  return (
    <div className="bg-primary-50 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-center gap-8">
        {sdks.map((s) => (
          <div key={s.name} className="text-center">
            <div
              className={`w-16 h-16 ${s.bg} rounded-xl flex items-center justify-center mb-2 mx-auto`}
            >
              <span className={`font-bold ${s.text}`}>{s.abbr}</span>
            </div>
            <p className="text-sm text-primary-600">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const tabs: FeatureTab[] = [
  {
    icon: Clock,
    label: "Gerçek Zamanlı Takip",
    title: "Gerçek Zamanlı Takip",
    goldSubtitle: "Hızlı takip ile tüm satışlarınızı anlık görün",
    description:
      "Geleneksel affiliate platformlarının aksine, satışlarınız saniyeler içinde dashboard\u2019unuzda görünür.",
    bullets: [
      "Satışlar saniyeler içinde dashboard\u2019da",
      "Tarih, kampanya, kategori bazlı filtreleme",
      "Günlük/haftalık/aylık trend grafikleri",
    ],
    widget: <StatGridWidget />,
  },
  {
    icon: Database,
    label: "Backend Veri Toplama",
    title: "Backend Veri Toplama",
    goldSubtitle: "%30\u2019a varan takip kaybını önleyin",
    description:
      "Server-side veri toplama sayesinde satışlarınızı daha doğru takip edin.",
    bullets: ["SDK tabanlı tracking", "Server-side veri toplama"],
    widget: <ProgressBarWidget />,
  },
  {
    icon: Zap,
    label: "Anında Entegrasyon",
    title: "Anında Entegrasyon",
    goldSubtitle: "İkas, Shopify, Ticimax ile sıfır kod",
    description:
      "Hazır entegrasyonlarımız sayesinde developer\u2019a gerek kalmadan dakikalar içinde başlayın.",
    bullets: [
      "Hazır platform entegrasyonları",
      "Sadece mağaza erişimi yeterli",
      "Tüm teknik kurulum bizden",
    ],
    widget: <PlatformLogosWidget />,
  },
  {
    icon: CreditCard,
    label: "Otomatik Ödeme",
    title: "Otomatik Ödeme",
    goldSubtitle: "Komisyonlar otomatik hesaplanır",
    description:
      "Kategori bazlı komisyon oranları tanımlayın, sistem her satış için otomatik hesaplasın.",
    bullets: [
      "Kategori bazlı komisyon oranları",
      "Otomatik hesaplama",
      "Şeffaf kazanç dashboard\u2019u",
    ],
    widget: <CommissionTableWidget />,
  },
  {
    icon: RotateCcw,
    label: "İptal/İade Yönetimi",
    title: "İptal/İade Yönetimi",
    goldSubtitle: "Otomatik olarak komisyonlara yansır",
    description:
      "Sistem iptal edilen siparişleri otomatik algılar. İadeler takip edilir ve komisyonlardan düşülür.",
    bullets: [
      "Otomatik iptal algılama",
      "İade takibi ve düşümü",
      "Net durum görünümü",
    ],
    widget: <RefundCardsWidget />,
  },
  {
    icon: Smartphone,
    label: "Mobil Uygulama Takibi",
    title: "Mobil Uygulama Takibi",
    goldSubtitle: "iOS ve Android için affiliate kampanyaları",
    description:
      "Affiliate linklerinden uygulama yüklemelerini takip edin. Adjust & Appsflyer entegrasyonu.",
    bullets: [
      "Uygulama yüklemesi takibi",
      "Adjust & Appsflyer entegrasyonu",
      "Bounty sistemi",
    ],
    widget: <MobileSdkWidget />,
  },
];

export default function BrandsFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="brands-features"
      ref={ref}
      className={`py-16 bg-white transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-primary-400">Özellikler</span>
          <h2
            className="text-4xl font-bold mt-3 tracking-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            Neden MDZN Partners?
          </h2>
          <p className="text-primary-500 mt-4 max-w-2xl mx-auto">
            Affiliate kanalınızı profesyonelce yönetmek için ihtiyacınız olan
            her şey
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Vertical Tabs */}
          <div className="lg:col-span-4 space-y-3" role="tablist" aria-label="Özellikler">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`brands-tabpanel-${index}`}
                  id={`brands-tab-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-xl flex items-center gap-4 transition-all duration-200 border ${
                    isActive
                      ? "bg-primary-900 text-white border-primary-900 shadow-[0_8px_24px_rgba(15,23,42,0.2)]"
                      : "group bg-white border-primary-200 text-primary-900 hover:border-accent-600 hover:bg-accent-100 hover:text-accent-700 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-primary-100 text-primary-500 group-hover:bg-accent-100 group-hover:text-accent-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-primary-200 rounded-2xl p-8 shadow-lg min-h-[580px]">
              <div className="relative">
                {tabs.map((tab, index) => {
                  const isActive = activeTab === index;
                  const Icon = tab.icon;

                  return (
                    <div
                      key={tab.label}
                      role="tabpanel"
                      id={`brands-tabpanel-${index}`}
                      aria-labelledby={`brands-tab-${index}`}
                      className={`transition-all duration-200 ${
                        isActive
                          ? "relative opacity-100 visible"
                          : "absolute top-0 left-0 right-0 opacity-0 invisible"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-accent-100 rounded-xl">
                          <Icon className="w-6 h-6 text-accent-700" />
                        </div>
                        <h3 className="text-2xl font-bold">{tab.title}</h3>
                      </div>
                      <p className="text-accent-700 font-semibold mb-4">
                        {tab.goldSubtitle}
                      </p>
                      <p className="text-primary-600 mb-6 leading-relaxed">
                        {tab.description}
                      </p>

                      {tab.widget}

                      <ul className="space-y-3">
                        {tab.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-3 text-primary-600"
                          >
                            <Check className="w-5 h-5 text-success-600 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
