"use client";

import { Settings } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const integrations = [
  { name: "İkas", letter: "İ", bgColor: "bg-indigo-100", textColor: "text-indigo-600", desc: "E-ticaret altyapınızı bağlayın, satışları anında takip edin.", ready: true },
  { name: "Shopify", letter: "S", bgColor: "bg-green-100", textColor: "text-green-600", desc: "Global e-ticaret devi ile tek tıkla entegrasyon.", ready: true },
  { name: "Ticimax", letter: "T", bgColor: "bg-purple-100", textColor: "text-purple-600", desc: "Türkiye'nin önde gelen e-ticaret altyapısı.", ready: true },
  { name: "Adjust", letter: "A", bgColor: "bg-orange-100", textColor: "text-orange-600", desc: "Mobil uygulama attribution ve analytics.", ready: true },
  { name: "Appsflyer", letter: "A", bgColor: "bg-blue-100", textColor: "text-blue-600", desc: "Uygulama pazarlama ve derin bağlantı çözümleri.", ready: true },
];

export default function IntegrationCards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-4">
            Sıfır Kod,
            <br />
            Anında Başlangıç
          </h2>
          <p className="text-primary-500 text-lg font-medium max-w-xl mx-auto">
            Popüler platformlarla dakikalar içinde entegre olun. Teknik
            ekibinize iş yükü yok.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div key={item.name} className="integration-card group">
              <div className="mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-5`}
                >
                  <span className={`text-xl font-extrabold ${item.textColor}`}>
                    {item.letter}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-primary-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-success-100 text-success-600 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-success-600 rounded-full animate-pulse" />
                  Hazır Entegrasyon
                </span>
              </div>
            </div>
          ))}

          {/* Custom Integration */}
          <div className="integration-card group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                <Settings className="w-6 h-6 text-accent-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Özel Entegrasyon</h3>
              <p className="text-primary-500 leading-relaxed">
                Kendi altyapınız için SDK, API veya Excel ile bağlanın.
              </p>
            </div>
            <div className="pt-5">
              <div className="flex items-center gap-2">
                {["SDK", "API", "Excel"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-400 text-sm">
            Tüm entegrasyonları ekibimiz sizin için kuruyor. Teknik bilgi
            gerektirmez.
          </p>
        </div>
      </div>
    </section>
  );
}
