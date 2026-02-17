"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "60M", label: "Unique Visitors" },
  { value: "500+", label: "Direct Advertisers" },
  { value: "14M", label: "Social Media Followers" },
  { value: "6", label: "RTB Networks" },
];

export default function MediazoneStats() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-10 relative overflow-hidden transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
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
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-600/30">
                <span className="font-bold text-white text-xl">MZ</span>
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.5px] text-white">
                Rakamlarla Mediazone
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="stat-card text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                >
                  <p className="text-5xl font-bold text-accent-500 mb-2">
                    {value}
                  </p>
                  <p className="text-primary-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
