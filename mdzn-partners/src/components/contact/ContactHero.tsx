import { Mail } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-b from-primary-50 to-white">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Mail className="w-4 h-4" />
          <span>Bize Ulaşın</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-900">
          İletişim
        </h1>
        <p className="text-xl text-primary-600 max-w-2xl mx-auto">
          Sorularınız için bize ulaşın, size en kısa sürede dönüş yapalım.
        </p>
      </div>
    </section>
  );
}
