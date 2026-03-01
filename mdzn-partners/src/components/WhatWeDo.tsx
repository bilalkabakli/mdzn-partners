"use client";

import {
  Shield,
  Activity,
  Monitor,
  DollarSign,
  Search,
  CreditCard,
  Upload,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useModal } from "./ModalContext";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

interface PlatformLogo {
  name: string;
  abbr: string;
  color: string;
}

interface MerchantLogo {
  name: string;
  initial: string;
  color: string;
}

const brandFeatures: Feature[] = [
  { icon: Shield, title: "Kolay Entegrasyon", subtitle: "Tek tıkla e-ticaret bağlantısı" },
  { icon: Activity, title: "Mükemmel Takip", subtitle: "Gerçek zamanlı performans" },
  { icon: Monitor, title: "No-Code Kampanya", subtitle: "Sürükle-bırak yönetim" },
  { icon: DollarSign, title: "Hakediş Yönetimi", subtitle: "Otomatik gelir hesaplama" },
];

const publisherFeatures: Feature[] = [
  { icon: Search, title: "Kampanya Keşfet", subtitle: "Yüzlerce marka kampanyası" },
  { icon: CreditCard, title: "Güvenli Ödeme", subtitle: "Zamanında komisyon ödemeleri" },
  { icon: Upload, title: "Kolay Katılım", subtitle: "Tek tıkla kampanyaya katıl" },
  { icon: Activity, title: "Performans Paneli", subtitle: "Detaylı raporlama" },
];

const platformLogos: PlatformLogo[] = [
  { name: "İkas", abbr: "İK", color: "#6366F1" },
  { name: "Shopify", abbr: "S", color: "#7CB342" },
  { name: "Ticimax", abbr: "T", color: "#0D47A1" },
  { name: "Adjust", abbr: "A", color: "#E91E63" },
  { name: "Appsflyer", abbr: "AF", color: "#00BCD4" },
];

const merchantLogosRow1: MerchantLogo[] = [
  { name: "IAMNOTBASIC", initial: "I", color: "#0F172A" },
  { name: "Proteinocean", initial: "P", color: "#059669" },
  { name: "Fropie", initial: "F", color: "#D97706" },
  { name: "VOIDTR", initial: "V", color: "#7C3AED" },
  { name: "Rosece", initial: "R", color: "#E11D48" },
  { name: "Limonian", initial: "L", color: "#2563EB" },
];

const merchantLogosRow2: MerchantLogo[] = [
  { name: "Armonika", initial: "A", color: "#1565C0" },
  { name: "Green Black", initial: "G", color: "#4CAF50" },
  { name: "Petzzshop", initial: "P", color: "#FF9800" },
  { name: "Animal Joy", initial: "A", color: "#F44336" },
  { name: "BELLORE", initial: "B", color: "#9C27B0" },
  { name: "Paen", initial: "P", color: "#607D8B" },
];

function MerchantChip({ merchant }: { merchant: MerchantLogo }) {
  return (
    <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white border border-primary-100 rounded-[10px] text-[13px] font-bold text-primary-600 whitespace-nowrap">
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white"
        style={{ background: merchant.color }}
      >
        {merchant.initial}
      </div>
      {merchant.name}
    </div>
  );
}

export default function WhatWeDo() {
  const { openModal } = useModal();

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span
              className="hidden sm:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-[13px] font-bold text-accent-600 uppercase tracking-[1.5px]">
              Ne Yapıyoruz
            </span>
            <span
              className="hidden sm:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold sm:font-extrabold text-primary-900 tracking-[-0.3px] sm:tracking-[-1.5px] leading-[1.3] sm:leading-[1.2] mb-2 sm:mb-3">
            Growth profesyonelleri için yapıldı
          </h2>
          <p className="text-sm sm:text-lg font-medium text-primary-500 max-w-[600px] mx-auto leading-relaxed">
            <span className="sm:hidden">
              Gücünü sadeliğinden alan yeni nesil affiliate platformu.
            </span>
            <span className="hidden sm:inline">
              Gücünü sadeliğinden alan yeni nesil affiliate platformu. Markalar
              ve yayıncılar için tek çatı altında tüm araçlar.
            </span>
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 2-col grid on desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0">
          {/* Brand Card (Left) */}
          <div
            className="wwd-card shrink-0 w-[85%] sm:w-auto snap-start flex flex-col rounded-[16px] sm:rounded-[20px] p-6 sm:p-10 border border-primary-200 sm:min-h-[520px]"
            style={{
              background: "linear-gradient(135deg, #FFFAEB 0%, #FFFFFF 60%)",
            }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-semibold w-fit mb-5 sm:mb-6 bg-warning-100 text-[#92400E]">
              Markalar &amp; Satıcılar İçin
            </span>

            <h3 className="text-[22px] sm:text-[28px] font-bold sm:font-extrabold text-primary-900 tracking-normal sm:tracking-[-0.5px] leading-[1.35] sm:leading-[1.2] mb-3 sm:mb-4">
              İşinizi hemen büyütmeye başlayın
            </h3>

            <p className="text-sm sm:text-[15px] text-primary-500 leading-relaxed mb-6 sm:mb-8">
              <span className="sm:hidden">
                Teknik bilgi gerektirmeden kampanyalarınızı kurun,
                performansınızı takip edin.
              </span>
              <span className="hidden sm:inline">
                Teknik bilgi gerektirmeden kampanyalarınızı kurun,
                performansınızı takip edin, ödemelerinizi yönetin.
              </span>
            </p>

            {/* Features — 1-col mobile, 2-col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
              {brandFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center sm:items-start gap-3"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-[10px] bg-warning-100 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Icon
                        className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-warning-600"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <span className="text-sm sm:text-[13px] font-semibold text-primary-900 leading-snug">
                        {feature.title}
                      </span>
                      <span className="hidden sm:block text-xs text-primary-400 mt-0.5">
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Platform logos — hidden on mobile */}
            <div className="hidden sm:flex mt-auto pt-6 border-t border-primary-200 flex-wrap gap-2.5">
              {platformLogos.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center gap-2 px-3.5 py-2 bg-white border border-primary-100 rounded-[10px] text-[13px] font-bold text-primary-600"
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white"
                    style={{ background: platform.color }}
                  >
                    {platform.abbr}
                  </div>
                  {platform.name}
                </div>
              ))}
            </div>

            <button
              onClick={() => openModal("brand")}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm font-semibold text-warning-600 mt-4 sm:mt-6 transition-all duration-200 group/cta cursor-pointer"
            >
              Satıcı olarak başvur
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </button>
          </div>

          {/* Publisher Card (Right) */}
          <div
            className="wwd-card shrink-0 w-[85%] sm:w-auto snap-start flex flex-col rounded-[16px] sm:rounded-[20px] p-6 sm:p-10 border border-primary-200 sm:min-h-[520px]"
            style={{
              background: "linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 60%)",
            }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-semibold w-fit mb-5 sm:mb-6 bg-[#DBEAFE] text-[#1E40AF]">
              Yayıncılar &amp; Influencer&apos;lar İçin
            </span>

            <h3 className="text-[22px] sm:text-[28px] font-bold sm:font-extrabold text-primary-900 tracking-normal sm:tracking-[-0.5px] leading-[1.35] sm:leading-[1.2] mb-3 sm:mb-4">
              Hemen kazanmaya başlayın
            </h3>

            <p className="text-sm sm:text-[15px] text-primary-500 leading-relaxed mb-6 sm:mb-8">
              <span className="sm:hidden">
                Platformdaki markaları keşfedin, tek tıkla katılın.
              </span>
              <span className="hidden sm:inline">
                Platformdaki markaları ve kampanyaları keşfedin. Tek tıkla
                katılın, performansınızı izleyin, komisyonlarınızı kazanın.
              </span>
            </p>

            {/* Features — 1-col mobile, 2-col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
              {publisherFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center sm:items-start gap-3"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-[10px] bg-[#DBEAFE] flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Icon
                        className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#2563EB]"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <span className="text-sm sm:text-[13px] font-semibold text-primary-900 leading-snug">
                        {feature.title}
                      </span>
                      <span className="hidden sm:block text-xs text-primary-400 mt-0.5">
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sliding merchant logos — hidden on mobile */}
            <div className="wwd-logos-strip hidden sm:block mt-auto pt-6 border-t border-primary-200 overflow-hidden relative">
              {/* Fade edges */}
              <div
                className="absolute top-6 bottom-0 left-0 w-12 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, #F0F9FF, transparent)",
                }}
              />
              <div
                className="absolute top-6 bottom-0 right-0 w-12 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #F0F9FF, transparent)",
                }}
              />

              {/* Row 1 — slides left */}
              <div className="flex gap-4 items-center mb-2.5 wwd-slide-left">
                {[...merchantLogosRow1, ...merchantLogosRow1].map(
                  (merchant, i) => (
                    <MerchantChip key={`r1-${i}`} merchant={merchant} />
                  )
                )}
              </div>

              {/* Row 2 — slides right */}
              <div className="flex gap-4 items-center wwd-slide-right">
                {[...merchantLogosRow2, ...merchantLogosRow2].map(
                  (merchant, i) => (
                    <MerchantChip key={`r2-${i}`} merchant={merchant} />
                  )
                )}
              </div>
            </div>

            <button
              onClick={() => openModal("influencer")}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm font-semibold text-[#2563EB] mt-4 sm:mt-6 transition-all duration-200 group/cta cursor-pointer"
            >
              Yayıncı olarak başvur
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Scroll hint — mobile only */}
        <p className="sm:hidden text-center text-[11px] text-primary-400 mt-2">
          ← Kaydırarak diğer kartı görün →
        </p>
      </div>
    </section>
  );
}
