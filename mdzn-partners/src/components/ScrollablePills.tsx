"use client";

import { type ReactNode, useRef, useState, useEffect } from "react";

interface Tab {
  icon: ReactNode;
  label: string;
}

interface ScrollablePillsProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export default function ScrollablePills({
  tabs,
  activeTab,
  onTabChange,
}: ScrollablePillsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScroll = () => {
      setShowFade(el.scrollWidth > el.clientWidth && el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [tabs]);

  return (
    <div className="relative lg:hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 scrollbar-hide px-4 py-2"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            onClick={() => onTabChange(index)}
            className={`flex-shrink-0 rounded-full px-4 py-2.5 min-h-[44px] flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === index
                ? "bg-primary-900 text-white"
                : "bg-white border border-primary-200 text-primary-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right edge fade gradient hint */}
      {showFade && (
        <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 w-12"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.9))",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
