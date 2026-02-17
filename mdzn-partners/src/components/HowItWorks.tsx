"use client";

import { useState } from "react";
import {
  Check,
  Clock,
  Zap,
  Sliders,
  TrendingUp,
  UserPlus,
  ShieldCheck,
  Search,
  Wallet,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const brandsSteps = [
  {
    num: 1,
    title: "Hesap Oluşturun",
    desc: "Ücretsiz hesabınızı dakikalar içinde açın. Kredi kartı gerekmez, hemen başlayın.",
    tags: [
      { icon: Check, label: "Ücretsiz başlangıç", color: "text-success-600" },
      { icon: Clock, label: "2 dakika", color: "text-primary-400" },
    ],
  },
  {
    num: 2,
    title: "Mağazanızı Bağlayın",
    desc: "İkas, Shopify veya Ticimax kullanıyorsanız tek tıkla otomatik entegrasyon. Farklı altyapı? Biz hallederiz.",
    tags: [
      { icon: Zap, label: "Otomatik kurulum", color: "text-accent-700" },
      { icon: Clock, label: "5 dakika", color: "text-primary-400" },
    ],
  },
  {
    num: 3,
    title: "Kampanya Oluşturun",
    desc: "Komisyon oranlarınızı belirleyin, ürün kategorilerini seçin. İster genel ister özel kampanyalar oluşturun.",
    tags: [
      { icon: Sliders, label: "Esnek komisyonlar", color: "text-purple-600" },
    ],
  },
  {
    num: 4,
    title: "Büyümeye Başlayın",
    desc: "Influencer'lar ve yayıncılar kampanyalarınızı keşfeder. Gerçek zamanlı olarak satışları takip edin.",
    tags: [
      { icon: TrendingUp, label: "Anlık raporlama", color: "text-success-600" },
    ],
  },
];

const influencerSteps = [
  {
    num: 1,
    title: "Başvurun",
    desc: "Online başvuru formunu doldurun. Sosyal medya hesaplarınızı ve içerik alanlarınızı belirtin.",
    tags: [
      { icon: UserPlus, label: "Herkese açık", color: "text-accent-700" },
      { icon: Clock, label: "3 dakika", color: "text-primary-400" },
    ],
  },
  {
    num: 2,
    title: "Onay Alın",
    desc: "Başvurunuz incelenir ve 24 saat içinde size dönüş yapılır. Profiliniz hazırlandığında bilgilendirilirsiniz.",
    tags: [
      { icon: ShieldCheck, label: "Hızlı onay", color: "text-success-600" },
    ],
  },
  {
    num: 3,
    title: "Markaları Keşfedin",
    desc: "Sizin için uygun kampanyaları bulun. Kategori, komisyon oranı veya marka türüne göre filtreleyin.",
    tags: [
      { icon: Search, label: "Gelişmiş filtreleme", color: "text-accent-700" },
    ],
  },
  {
    num: 4,
    title: "Kazanmaya Başlayın",
    desc: "Özel linklerinizi paylaşın, satış yapın, komisyon kazanın. Kazançlarınızı anlık takip edin.",
    tags: [
      { icon: Wallet, label: "Güvenli ödeme", color: "text-success-600" },
    ],
  },
];

type Step = (typeof brandsSteps)[number];

function StepCard({
  step,
  variant,
}: {
  step: Step;
  variant: "brands" | "influencers";
}) {
  const numBg =
    variant === "brands"
      ? "bg-primary-900 text-white"
      : "bg-accent-600 text-primary-900";

  return (
    <div className="step-card">
      <div className="flex gap-5">
        <div className="flex-shrink-0">
          <div
            className={`w-12 h-12 ${numBg} rounded-xl flex items-center justify-center text-lg font-extrabold`}
          >
            {step.num}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
          <p className="text-primary-500 leading-relaxed mb-4">{step.desc}</p>
          <div className="flex items-center gap-4 text-sm">
            {step.tags.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className={`flex items-center gap-2 ${color} font-medium`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"brands" | "influencers">(
    "brands"
  );
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-16 bg-primary-50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-primary-500 text-lg font-medium max-w-2xl mx-auto">
            Kayıt olun, mağazanızı bağlayın, kampanyanızı oluşturun ve büyümeye
            başlayın. Teknik bilgi gerektirmez, her şey dakikalar içinde hazır.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div
            className="inline-flex bg-white border border-primary-200 rounded-xl p-1.5 shadow-sm"
            role="tablist"
            aria-label="Nasıl çalışır"
          >
            <button
              onClick={() => setActiveTab("brands")}
              className={`hiw-tab px-10 py-3 rounded-lg text-sm font-semibold ${
                activeTab === "brands" ? "active" : "text-primary-500"
              }`}
              role="tab"
              aria-selected={activeTab === "brands"}
              aria-controls="hiw-panel-brands"
            >
              Markalar İçin
            </button>
            <button
              onClick={() => setActiveTab("influencers")}
              className={`hiw-tab px-10 py-3 rounded-lg text-sm font-semibold ${
                activeTab === "influencers" ? "active" : "text-primary-500"
              }`}
              role="tab"
              aria-selected={activeTab === "influencers"}
              aria-controls="hiw-panel-influencers"
            >
              Influencer&apos;lar İçin
            </button>
          </div>
        </div>

        {/* Brands Journey */}
        <div
          id="hiw-panel-brands"
          role="tabpanel"
          className={activeTab === "brands" ? "block" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {brandsSteps.map((step) => (
              <StepCard key={step.num} step={step} variant="brands" />
            ))}
          </div>
        </div>

        {/* Influencers Journey */}
        <div
          id="hiw-panel-influencers"
          role="tabpanel"
          className={activeTab === "influencers" ? "block" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {influencerSteps.map((step) => (
              <StepCard key={step.num} step={step} variant="influencers" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
