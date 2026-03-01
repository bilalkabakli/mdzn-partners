import { Code, Globe, Monitor, Shield, Table, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ReadyIntegration {
  name: string;
  abbr: string;
  color: string;
}

interface CustomIntegration {
  name: string;
  mobileLabel?: string;
  icon: LucideIcon;
  color: string;
}

const readyIntegrations: ReadyIntegration[] = [
  { name: "İkas", abbr: "İK", color: "#6366F1" },
  { name: "Shopify", abbr: "S", color: "#7CB342" },
  { name: "Ticimax", abbr: "T", color: "#1565C0" },
  { name: "Adjust", abbr: "A", color: "#E91E63" },
  { name: "Appsflyer", abbr: "AF", color: "#00BCD4" },
];

const customIntegrations: CustomIntegration[] = [
  { name: "SDK", icon: Code, color: "#0F172A" },
  { name: "API", icon: Globe, color: "#7C3AED" },
  { name: "Excel", icon: Table, color: "#059669" },
  { name: "Google Tag Manager", mobileLabel: "GTM", icon: Monitor, color: "#1976D2" },
];

export default function Integrations() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2.5 lg:mb-4">
            <span
              className="hidden lg:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
            <span className="text-[11px] lg:text-[13px] font-semibold text-accent-600 uppercase tracking-[1.5px]">
              Entegrasyonlar
            </span>
            <span
              className="hidden lg:block w-6 h-px bg-accent-600"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-extrabold text-primary-900 tracking-[-1px] lg:tracking-[-1.5px] mb-2 lg:mb-3">
            Sıfır Kod, Anında Başlangıç
          </h2>
          <p className="text-sm lg:text-lg font-medium text-primary-500 max-w-[560px] mx-auto">
            <span className="lg:hidden">
              Popüler platformlarla dakikalar içinde entegre olun.
            </span>
            <span className="hidden lg:inline">
              Popüler platformlarla dakikalar içinde entegre olun. Teknik
              ekibinize iş yükü yok.
            </span>
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 2-col grid on desktop */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:snap-none lg:pb-0 mb-6 lg:mb-10">
          {/* Card 1: Hazır Entegrasyonlar */}
          <div className="integration-card shrink-0 w-[calc(100%-32px)] snap-start text-center lg:w-auto">
            <h3 className="text-xl lg:text-2xl font-extrabold text-primary-900 mb-1.5 lg:mb-2">
              Hazır Entegrasyonlar
            </h3>
            <p className="text-[13px] lg:text-[15px] text-primary-500 leading-relaxed mb-5 lg:mb-7">
              <span className="lg:hidden">
                Popüler e-ticaret ve mobil platformlar ile hazır entegrasyon
              </span>
              <span className="hidden lg:inline">
                Popüler e-ticaret platformları ve mobil platformlar ile hazır
                entegrasyon
              </span>
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mb-4 lg:mb-6">
              {readyIntegrations.map((item) => (
                <div
                  key={item.name}
                  className="integration-chip flex items-center gap-2 lg:gap-2.5 px-3 py-2 lg:px-5 lg:py-3 bg-primary-50 border border-primary-200 rounded-[10px] lg:rounded-xl"
                >
                  <div
                    className="w-7 h-7 lg:w-9 lg:h-9 rounded-md lg:rounded-lg flex items-center justify-center text-[11px] lg:text-sm font-extrabold text-white"
                    style={{ background: item.color }}
                  >
                    {item.abbr}
                  </div>
                  <span className="text-xs lg:text-sm font-semibold text-primary-900">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-md lg:rounded-lg text-[11px] lg:text-[13px] font-semibold text-success-600">
              <Zap className="hidden lg:block w-4 h-4" />
              <span className="lg:hidden">
                Tek tıkla büyümeye başlayın
              </span>
              <span className="hidden lg:inline">
                Teknik entegrasyon gerektirmeden, tek tıkla büyümeye başlayın
              </span>
            </div>
          </div>

          {/* Card 2: Özel Entegrasyonlar */}
          <div className="integration-card shrink-0 w-[calc(100%-32px)] snap-start text-center lg:w-auto">
            <h3 className="text-xl lg:text-2xl font-extrabold text-primary-900 mb-1.5 lg:mb-2">
              Özel Entegrasyonlar
            </h3>
            <p className="text-[13px] lg:text-[15px] text-primary-500 leading-relaxed mb-5 lg:mb-7">
              <span className="lg:hidden">
                SDK, API veya Excel ile tüm süreci otomatik yönetin
              </span>
              <span className="hidden lg:inline">
                Kendi altyapınız için SDK, API veya Excel ile tüm süreci
                otomatik olarak yönetin
              </span>
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mb-4 lg:mb-6">
              {customIntegrations.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="integration-chip flex items-center gap-2 lg:gap-2.5 px-3 py-2 lg:px-5 lg:py-3 bg-primary-50 border border-primary-200 rounded-[10px] lg:rounded-xl"
                  >
                    <div
                      className="w-7 h-7 lg:w-9 lg:h-9 rounded-md lg:rounded-lg flex items-center justify-center"
                      style={{ background: item.color }}
                    >
                      <Icon
                        className="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-primary-900">
                      {item.mobileLabel ? (
                        <>
                          <span className="lg:hidden">{item.mobileLabel}</span>
                          <span className="hidden lg:inline">{item.name}</span>
                        </>
                      ) : (
                        item.name
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-accent-100 border border-[#FDE68A] rounded-md lg:rounded-lg text-[11px] lg:text-[13px] font-semibold text-[#92400E]">
              <Users className="hidden lg:block w-4 h-4" />
              <span className="lg:hidden">Ekibimiz sizin için kuruyor</span>
              <span className="hidden lg:inline">
                Tüm entegrasyonları ekibimiz sizin için kuruyor
              </span>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="flex items-center justify-center gap-4 lg:gap-6 p-3.5 lg:py-5 lg:px-8 bg-primary-50 border border-primary-200 rounded-[10px] lg:rounded-xl">
          <div className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-semibold text-success-600">
            <span className="hidden lg:flex w-8 h-8 bg-success-100 rounded-lg items-center justify-center">
              <Shield className="w-[18px] h-[18px]" />
            </span>
            <Shield className="w-4 h-4 lg:hidden" />
            GDPR Uyumlu
          </div>
          <div
            className="w-px h-6 lg:h-8 bg-primary-200"
            aria-hidden="true"
          />
          <div className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-semibold text-success-600">
            <span className="hidden lg:flex w-8 h-8 bg-success-100 rounded-lg items-center justify-center">
              <Shield className="w-[18px] h-[18px]" />
            </span>
            <Shield className="w-4 h-4 lg:hidden" />
            KVKK Uyumlu
          </div>
        </div>
      </div>
    </section>
  );
}
