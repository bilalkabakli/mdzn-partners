import { Smartphone } from "lucide-react";

export default function InfluencersMobileApp() {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Smartphone className="w-10 h-10 text-primary-600" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-[-1px] mb-4">
          Mobil Takip Kolaylığı
        </h2>
        <p className="text-primary-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Kazançlarınızı, siparişlerinizi ve performansınızı her an her yerde
          takip edin. Anlık bildirimlerle hiçbir satışı kaçırmayın.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary h-14 px-6 rounded-xl font-semibold flex items-center gap-3">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store - Yakında
          </button>
          <button className="btn-primary h-14 px-6 rounded-xl font-semibold flex items-center gap-3">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .62.1.87.28L21 12l-15.63 9.72c-.25.18-.56.28-.87.28-.83 0-1.5-.67-1.5-1.5z" />
            </svg>
            Google Play - Yakında
          </button>
        </div>
      </div>
    </section>
  );
}
