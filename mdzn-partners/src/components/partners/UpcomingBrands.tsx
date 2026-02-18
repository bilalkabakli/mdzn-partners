import { upcomingBrands } from "@/data/partnersData";

export default function UpcomingBrands() {
  return (
    <section className="py-10 lg:py-16 bg-primary-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[28px] tracking-[-0.3px] font-bold mb-8">
          Yakında
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {upcomingBrands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center">
              <div className="bg-white rounded-xl w-full h-20 border border-primary-200 flex items-center justify-center mb-2 relative opacity-70">
                <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-warning-100 text-warning-600 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium">
                  Yakında
                </span>
                <div className={`w-12 h-12 ${brand.bgColor} rounded-lg flex items-center justify-center`}>
                  <span className={`font-bold ${brand.textColor} text-sm`}>
                    {brand.initials}
                  </span>
                </div>
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
