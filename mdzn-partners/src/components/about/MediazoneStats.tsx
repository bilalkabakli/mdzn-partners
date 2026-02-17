const stats = [
  { value: "60M", label: "Unique Visitors" },
  { value: "500+", label: "Direct Advertisers" },
  { value: "14M", label: "Social Media Followers" },
  { value: "6", label: "RTB Networks" },
];

export default function MediazoneStats() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-6 lg:p-10 relative overflow-hidden">
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
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-6 lg:mb-10">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-600/30">
                <span className="font-bold text-white text-sm lg:text-xl">MZ</span>
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
                  <p className="text-3xl lg:text-5xl font-bold text-accent-500 mb-2">
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
