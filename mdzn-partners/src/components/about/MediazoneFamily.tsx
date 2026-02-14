const familyBrands = [
  { name: "Mackolik", initials: "MK", bgColor: "bg-green-100", textColor: "text-green-600" },
  { name: "Onedio", initials: "ON", bgColor: "bg-orange-100", textColor: "text-orange-600" },
  { name: "Mynet", initials: "MY", bgColor: "bg-blue-100", textColor: "text-blue-600" },
  { name: "Yemek.com", initials: "YC", bgColor: "bg-red-100", textColor: "text-red-600" },
  { name: "Webtekno", initials: "WT", bgColor: "bg-purple-100", textColor: "text-purple-600" },
  { name: "Hisse.net", initials: "HN", bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
];

export default function MediazoneFamily() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] text-center text-primary-900 mb-12">
          Mediazone Ailesi
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {familyBrands.map(({ name, initials, bgColor, textColor }) => (
            <div
              key={name}
              className="family-card bg-white border border-primary-200 rounded-2xl p-6 flex flex-col items-center"
            >
              <div
                className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-3`}
              >
                <span className={`font-bold ${textColor} text-lg`}>
                  {initials}
                </span>
              </div>
              <span className="text-sm text-primary-600 font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
