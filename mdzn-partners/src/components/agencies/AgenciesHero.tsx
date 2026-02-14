import { ArrowRight } from "lucide-react";

export default function AgenciesHero() {
  return (
    <section className="relative bg-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-accent-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary-700/30 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-8">
              <span className="overline text-accent-400">Ajanslar İçin</span>
            </div>

            <h1 className="text-4xl lg:text-[48px] font-extrabold leading-[1.2] tracking-[-1px] mb-6 text-white">
              Influencer Portföyünüzü
              <br />
              <span className="text-primary-400">Tek Panelden Yönetin</span>
            </h1>

            <p className="text-lg text-primary-300 mb-10 max-w-lg leading-relaxed">
              Tüm influencer&apos;larınızın performansını merkezi
              dashboard&apos;da takip edin.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-accent h-14 px-8 rounded-lg text-base font-semibold flex items-center gap-2 group">
                Demo Talep Et
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Influencer Portfolio Mockup */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-info-600 rounded-full flex items-center justify-center font-bold text-white">
                      A
                    </div>
                    <span className="text-white">Ayşe K.</span>
                  </div>
                  <span className="text-success-600 font-bold">₺3,240</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white">
                      M
                    </div>
                    <span className="text-white">Mehmet Y.</span>
                  </div>
                  <span className="text-success-600 font-bold">₺2,890</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                      Z
                    </div>
                    <span className="text-white">Zeynep A.</span>
                  </div>
                  <span className="text-success-600 font-bold">₺4,120</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
