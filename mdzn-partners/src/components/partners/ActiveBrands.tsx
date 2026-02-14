import { activeBrands } from "@/data/partnersData";

export default function ActiveBrands() {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[28px] tracking-[-0.3px] font-bold mb-8">
          Aktif Markalar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {activeBrands.map((brand) => (
            <div key={brand.name} className="brand-card flex flex-col items-center">
              <div className="bg-white rounded-xl w-full h-20 border border-primary-200 flex items-center justify-center mb-2 p-2">
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary-400 text-sm">
                      {brand.initials}
                    </span>
                  </div>
                )}
              </div>
              <span className="text-xs text-primary-600 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
