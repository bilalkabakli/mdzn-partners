import { ArrowRight } from "lucide-react";

const brands = [
  "Proteinocean",
  "Fropie",
  "IAMNOTBASIC",
  "VOIDTR",
  "Rosece",
  "Limonian",
  "Armonika",
  "Green Black",
  "Petzzshop",
  "Animal Joy",
  "BELLORE",
  "Paen",
];

export default function BrandLogos() {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-4">
            Her Gün Genişleyen Marka Ağı
          </h2>
          <p className="text-primary-500 font-medium">
            Güvenilir markalar ağımıza katılın
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-primary-50 border border-primary-200 rounded-xl h-20 flex items-center justify-center hover:border-primary-300 transition-colors"
            >
              <span className="text-sm font-medium text-primary-500">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3 rounded-lg font-semibold"
          >
            Tüm markaları gör
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
