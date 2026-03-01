import type { CSSProperties, ComponentType } from "react";

export interface TimelineStep {
  num: number;
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  tags: { label: string; colorClass: string }[];
}

export interface HowItWorksTimelineProps {
  variant: "brands" | "publishers";
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: TimelineStep[];
  className?: string;
}

const TAG_STYLES: Record<string, string> = {
  "tag-green": "bg-success-100 text-success-600",
  "tag-gray": "bg-primary-100 text-primary-500",
  "tag-gold": "bg-warning-100 text-warning-600",
  "tag-purple": "bg-[#EDE9FE] text-[#7C3AED]",
};

export default function HowItWorksTimeline({
  variant,
  sectionLabel,
  title,
  subtitle,
  steps,
  className,
}: HowItWorksTimelineProps) {
  const isBrands = variant === "brands";

  return (
    <section className={`bg-primary-50 py-12 md:py-20 ${className ?? ""}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-7 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2.5 md:mb-4">
            <span
              className={`hidden md:block w-6 h-px ${isBrands ? "bg-accent-600" : ""}`}
              style={!isBrands ? { backgroundColor: "#2563EB" } : undefined}
              aria-hidden="true"
            />
            <span
              className={`text-[11px] md:text-[13px] font-semibold uppercase tracking-[1.5px] ${
                isBrands ? "text-accent-600" : ""
              }`}
              style={!isBrands ? { color: "#2563EB" } : undefined}
            >
              {sectionLabel}
            </span>
            <span
              className={`hidden md:block w-6 h-px ${isBrands ? "bg-accent-600" : ""}`}
              style={!isBrands ? { backgroundColor: "#2563EB" } : undefined}
              aria-hidden="true"
            />
          </div>

          <h2 className="text-2xl md:text-[40px] font-extrabold tracking-[-0.5px] md:tracking-[-1.5px] mb-2 md:mb-3">
            {title}
          </h2>
          <p className="text-[13px] md:text-lg text-primary-500 font-medium max-w-[560px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop: 4-column timeline grid */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div
            className="absolute top-[28px] left-[28px] right-[28px] h-0.5 bg-primary-200"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-[1] flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-[22px] font-extrabold mb-5 transition-transform duration-300 hover:scale-[1.08] ${
                    isBrands ? "bg-primary-900 text-white" : ""
                  }`}
                  style={
                    !isBrands
                      ? { backgroundColor: "#2563EB", color: "#FFFFFF" }
                      : undefined
                  }
                >
                  {step.num}
                </div>

                <div className="step-card flex-1 flex flex-col text-left">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                      isBrands ? "bg-warning-100" : ""
                    }`}
                    style={
                      !isBrands
                        ? { backgroundColor: "#DBEAFE" }
                        : undefined
                    }
                  >
                    <Icon
                      className={`w-[18px] h-[18px] ${
                        isBrands ? "text-warning-600" : ""
                      }`}
                      style={
                        !isBrands ? { color: "#2563EB" } : undefined
                      }
                    />
                  </div>

                  <h3 className="text-base font-bold mb-2">{step.title}</h3>
                  <p className="text-[13px] text-primary-500 leading-relaxed mb-4 flex-1">
                    {step.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                          TAG_STYLES[tag.colorClass] ?? ""
                        }`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar mx-[-16px] px-4 pb-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {steps.map((step) => (
              <div
                key={step.num}
                className="step-card flex-none w-[75%] snap-start"
                style={{ borderRadius: 14, padding: 20 }}
              >
                <div
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-lg font-extrabold mb-3.5 ${
                    isBrands ? "bg-primary-900 text-white" : ""
                  }`}
                  style={
                    !isBrands
                      ? { backgroundColor: "#2563EB", color: "#FFFFFF" }
                      : undefined
                  }
                >
                  {step.num}
                </div>

                <h3 className="text-[15px] font-bold mb-1.5">{step.title}</h3>
                <p className="text-xs text-primary-500 leading-relaxed mb-3">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-1">
                  {step.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold ${
                        TAG_STYLES[tag.colorClass] ?? ""
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Static dot indicators — first dot always active */}
          <div className="flex justify-center gap-1 mt-3">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={
                  i === 0
                    ? `w-4 h-1.5 rounded-[3px] ${isBrands ? "bg-accent-600" : ""}`
                    : "w-1.5 h-1.5 rounded-full bg-primary-300"
                }
                style={
                  i === 0 && !isBrands
                    ? { backgroundColor: "#2563EB" }
                    : undefined
                }
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
