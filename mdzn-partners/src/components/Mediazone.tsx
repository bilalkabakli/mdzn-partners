const partners = [
  "Mackolik",
  "Onedio",
  "Mynet",
  "Yemek.com",
  "Webtekno",
  "Hisse.net",
];

export default function Mediazone() {
  return (
    <section className="py-10 lg:py-16 border-t border-primary-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-primary-400 mb-8 font-medium">
          Türkiye&apos;nin en büyük dijital medya ağı Mediazone güvencesiyle
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 bg-primary-50 border border-primary-200 rounded-lg hover:border-primary-300 transition-colors"
            >
              <span className="text-sm font-medium text-primary-600">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
