"use client";

import { Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamMembers = [
  {
    initials: "HK",
    name: "H. Kaplan",
    role: "CEO & Founder",
    gradient: "from-accent-600 to-accent-500",
    shadow: "shadow-accent-600/20",
  },
  {
    initials: "AY",
    name: "A. Yılmaz",
    role: "CTO",
    gradient: "from-primary-800 to-primary-700",
    shadow: "shadow-primary-800/20",
  },
  {
    initials: "BS",
    name: "B. Soydan",
    role: "Head of Product",
    gradient: "from-blue-600 to-blue-500",
    shadow: "shadow-blue-600/20",
  },
  {
    initials: "MT",
    name: "M. Tuncer",
    role: "Head of Marketing",
    gradient: "from-emerald-600 to-emerald-500",
    shadow: "shadow-emerald-600/20",
  },
  {
    initials: "ED",
    name: "E. Demir",
    role: "Lead Developer",
    gradient: "from-purple-600 to-purple-500",
    shadow: "shadow-purple-600/20",
  },
  {
    initials: "SA",
    name: "S. Aksoy",
    role: "Design Lead",
    gradient: "from-rose-600 to-rose-500",
    shadow: "shadow-rose-600/20",
  },
];

export default function TeamSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={sectionRef}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          sectionVisible
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            <span>Ekibimiz</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.5px] text-primary-900 mb-3">
            Liderlik Ekibi
          </h2>
          <p className="text-primary-500 text-lg max-w-2xl mx-auto">
            Dijital medya ve teknoloji alanında deneyimli ekibimizle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.initials}
              className="team-card bg-white border border-primary-200 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)]"
              style={{
                animationDelay: sectionVisible
                  ? `${index * 100}ms`
                  : undefined,
              }}
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4 shadow-lg ${member.shadow}`}
              >
                <span className="text-xl font-bold text-white">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-sm font-bold text-primary-900 mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-accent-700 font-semibold">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
