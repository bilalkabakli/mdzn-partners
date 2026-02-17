import { X, Minus, Check } from "lucide-react";

const oldWayItems = [
  "Ay sonunda Excel tabloları",
  "Manuel veri girişi",
  "%30\u2019a varan takip kaybı",
  "Haftalarca süren entegrasyon",
];

const mdznItems = [
  "Gerçek zamanlı dashboard",
  "Otomatik senkronizasyon",
  "Backend tracking ile tam koruma",
  "Dakikalar içinde başlangıç",
];

export default function BrandsComparison() {
  return (
    <section className="py-10 lg:py-16 bg-primary-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-primary-400">Karşılaştırma</span>
          <h2
            className="text-4xl font-bold mt-3 tracking-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            Farkı Görün
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Old Way */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-200">
            <h3 className="font-bold text-primary-400 mb-6 flex items-center gap-3 text-lg">
              <div className="p-2 bg-error-100 rounded-lg">
                <X className="w-5 h-5 text-error-600" />
              </div>
              Eski Yöntem
            </h3>
            <ul className="space-y-4 text-primary-600">
              {oldWayItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MDZN Way */}
          <div className="bg-primary-900 rounded-2xl p-8 text-white">
            <h3 className="font-bold mb-6 flex items-center gap-3 text-lg">
              <div className="p-2 bg-accent-600 rounded-lg">
                <Check className="w-5 h-5 text-primary-900" />
              </div>
              MDZN ile
            </h3>
            <ul className="space-y-4 text-primary-200">
              {mdznItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
