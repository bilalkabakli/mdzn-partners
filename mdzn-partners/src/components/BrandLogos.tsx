const row1 = [
  { name: "Proteinocean", color: "#059669" },
  { name: "Fropie", color: "#D97706" },
  { name: "IAMNOTBASIC", color: "#0F172A" },
  { name: "VOIDTR", color: "#7C3AED" },
  { name: "Rosece", color: "#E11D48" },
  { name: "Limonian", color: "#2563EB" },
];

const row2 = [
  { name: "Armonika", color: "#1565C0" },
  { name: "Green Black", color: "#4CAF50" },
  { name: "Petzzshop", color: "#FF9800" },
  { name: "Animal Joy", color: "#F44336" },
  { name: "BELLORE", color: "#9C27B0" },
  { name: "Paen", color: "#607D8B" },
];

function LogoChip({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3.5 bg-white border border-primary-200 rounded-xl pointer-events-none select-none">
      <div
        className="w-7 h-7 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-xs md:text-base font-extrabold text-white"
        style={{ backgroundColor: color }}
      >
        {name[0]}
      </div>
      <span className="text-xs md:text-sm font-semibold text-primary-900 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function SlidingRow({
  brands,
  direction,
}: {
  brands: typeof row1;
  direction: "left" | "right";
}) {
  const doubled = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden mb-3 md:mb-5">
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div
        className={`flex gap-3 md:gap-5 ${direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
      >
        {doubled.map((b, i) => (
          <LogoChip key={`${b.name}-${i}`} name={b.name} color={b.color} />
        ))}
      </div>
    </div>
  );
}

export default function BrandLogos() {
  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-xs font-semibold text-accent-500 uppercase tracking-[1.5px] mb-4">
            Marka Ağı
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-3">
            Her Gün Genişleyen Marka Ağı
          </h2>
          <p className="text-sm md:text-lg text-primary-500 font-medium">
            Güvenilir markalar ağımıza katılın
          </p>
        </div>
      </div>

      <SlidingRow brands={row1} direction="left" />
      <SlidingRow brands={row2} direction="right" />
    </section>
  );
}
