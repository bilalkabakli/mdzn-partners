"use client";

import { Code, Plug, Table, Shield, Globe } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function IntegrationStrip() {
  const { ref, isVisible } = useScrollReveal();

  const readyIntegrations = ["İkas", "Shopify", "Ticimax", "Adjust", "Appsflyer"];

  const customIntegrations = [
    { icon: Code, label: "Hızlı SDK" },
    { icon: Plug, label: "API" },
    { icon: Table, label: "Excel" },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-[1400px] mx-auto px-6 lg:px-12 pb-8 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="space-y-8">
        {/* Ready integrations */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <span className="overline text-primary-400">
            Hazır Entegrasyonlar
          </span>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {readyIntegrations.map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 bg-primary-50 border border-primary-200 rounded-lg hover:border-primary-300 transition-colors"
              >
                <span className="text-sm font-medium text-primary-600">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom integrations */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <span className="overline text-primary-400">
            Özel Entegrasyonlar
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {customIntegrations.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="px-4 py-2 bg-white border border-primary-200 rounded-lg flex items-center gap-2"
              >
                <Icon className="w-4 h-4 text-accent-600" />
                <span className="text-sm text-primary-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex justify-center gap-4">
          <span className="bg-success-100 text-success-600 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
            <Shield className="w-3 h-3" /> KVKK Uyumlu
          </span>
          <span className="bg-info-100 text-info-600 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
            <Globe className="w-3 h-3" /> GDPR Compliant
          </span>
        </div>
      </div>
    </div>
  );
}
