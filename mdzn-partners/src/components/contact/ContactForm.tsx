"use client";

import { useState, type FocusEvent, type ChangeEvent } from "react";
import { Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const subjectOptions = [
  { value: "", label: "Seçiniz" },
  { value: "genel", label: "Genel Soru" },
  { value: "teknik", label: "Teknik Destek" },
  { value: "isbirligi", label: "İş Birliği" },
  { value: "diger", label: "Diğer" },
];

interface FloatingFieldState {
  focused: boolean;
  filled: boolean;
}

function useFloatingLabel(initial = "") {
  const [value, setValue] = useState(initial);
  const [state, setState] = useState<FloatingFieldState>({
    focused: false,
    filled: initial !== "",
  });

  const onFocus = () => setState((s) => ({ ...s, focused: true }));
  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setState({ focused: false, filled: e.target.value.trim() !== "" });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValue(e.target.value);
    setState((s) => ({ ...s, filled: e.target.value.trim() !== "" }));
  };

  const wrapperCls = [
    "relative",
    state.focused ? "focused" : "",
    state.filled ? "filled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { value, onFocus, onBlur, onChange, wrapperCls };
}

export default function ContactForm() {
  const { ref, isVisible } = useScrollReveal();
  const name = useFloatingLabel();
  const email = useFloatingLabel();
  const subject = useFloatingLabel();
  const message = useFloatingLabel();

  // TODO: Integrate with backend API — submit form data via POST request, handle loading/success/error states
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-primary-50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Bize Mesaj Gönderin
          </h2>
          <p className="text-primary-600 text-lg">
            Formu doldurun, ekibimiz en kısa sürede size dönüş yapsın.
          </p>
        </div>

        <div className="bg-white rounded-[20px] border border-primary-200 shadow-md p-8 lg:p-10">
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: Ad Soyad + E-posta */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Ad Soyad */}
              <div className={`input-wrapper ${name.wrapperCls}`}>
                <label className="floating-label" htmlFor="cf-name">
                  Ad Soyad<span className="required-star">*</span>
                </label>
                <input
                  className="fl-input"
                  type="text"
                  id="cf-name"
                  name="adSoyad"
                  autoComplete="name"
                  required
                  value={name.value}
                  onFocus={name.onFocus}
                  onBlur={name.onBlur}
                  onChange={name.onChange}
                />
              </div>

              {/* E-posta */}
              <div className={`input-wrapper ${email.wrapperCls}`}>
                <label className="floating-label" htmlFor="cf-email">
                  E-posta<span className="required-star">*</span>
                </label>
                <input
                  className="fl-input"
                  type="email"
                  id="cf-email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email.value}
                  onFocus={email.onFocus}
                  onBlur={email.onBlur}
                  onChange={email.onChange}
                />
              </div>
            </div>

            {/* Row 2: Konu (select) */}
            <div className={`input-wrapper select-wrapper mb-4 ${subject.wrapperCls}`}>
              <label className="floating-label" htmlFor="cf-subject">
                Konu<span className="required-star">*</span>
              </label>
              <select
                className="fl-select"
                id="cf-subject"
                name="konu"
                required
                value={subject.value}
                onFocus={subject.onFocus}
                onBlur={subject.onBlur}
                onChange={subject.onChange}
              >
                {subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 3: Mesaj (textarea) */}
            <div className={`input-wrapper textarea-wrapper mb-6 ${message.wrapperCls}`}>
              <label className="floating-label" htmlFor="cf-message">
                Mesajınız<span className="required-star">*</span>
              </label>
              <textarea
                className="fl-input fl-textarea"
                id="cf-message"
                name="mesaj"
                placeholder="Detayları buraya yazabilirsiniz..."
                required
                value={message.value}
                onFocus={message.onFocus}
                onBlur={message.onBlur}
                onChange={message.onChange}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-accent w-full h-14 rounded-lg text-base font-semibold flex items-center justify-center gap-2 group"
            >
              Mesaj Gönder
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
