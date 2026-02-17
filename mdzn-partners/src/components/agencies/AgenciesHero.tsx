"use client";

import { useModal } from "../ModalContext";

const influencers = [
  {
    initial: "A",
    name: "Ayşe K.",
    revenue: "₺3,240",
    bgColor: "bg-info-600",
  },
  {
    initial: "M",
    name: "Mehmet Y.",
    revenue: "₺2,890",
    bgColor: "bg-purple-500",
  },
  {
    initial: "Z",
    name: "Zeynep A.",
    revenue: "₺4,120",
    bgColor: "bg-pink-500",
  },
];

export default function AgenciesHero() {
  const { openModal } = useModal();

  return (
    <section className="bg-primary-900 text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-56 h-56 bg-info-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Ajanslar İçin
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ letterSpacing: "-2px" }}
            >
              Influencer Portföyünüzü
              <br />
              Tek Panelden Yönetin
            </h1>

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-lg">
              Tüm influencer&apos;larınızın performansını merkezi
              dashboard&apos;da takip edin.
            </p>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              <button
                className="w-full lg:w-auto bg-accent-600 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-700 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
                onClick={() => openModal("brand")}
              >
                Aramıza Katıl
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Influencer Portfolio List (per design) */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="space-y-3">
                {influencers.map((inf) => (
                  <div
                    key={inf.name}
                    className="bg-white/10 p-4 rounded-xl flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${inf.bgColor} rounded-full flex items-center justify-center font-bold text-white`}
                      >
                        {inf.initial}
                      </div>
                      <span className="text-white">{inf.name}</span>
                    </div>
                    <span className="text-success-600 font-bold">
                      {inf.revenue}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
