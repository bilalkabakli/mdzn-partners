"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useModal } from "../ModalContext";

export default function AboutCTA() {
  const { openModal } = useModal();

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-accent-600/10 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] text-white mb-4">
              Birlikte Büyüyelim
            </h2>
            <p className="text-primary-300 text-lg mb-8 max-w-2xl mx-auto">
              Türkiye&apos;nin en kapsamlı affiliate pazarlama platformuna
              katılın ve dijital dönüşümünüze başlayın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-accent-600 hover:bg-accent-700 text-primary-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-accent-600/30 flex items-center justify-center gap-2"
                onClick={() => openModal()}
              >
                Aramıza Katıl
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
