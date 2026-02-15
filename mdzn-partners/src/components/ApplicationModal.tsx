"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type FormEvent,
} from "react";

/* ===== TYPES ===== */
export type TabType = "influencer" | "brand";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: TabType;
}

/* ===== VALIDATION HELPERS ===== */
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 && digits.startsWith("05");
}

function validateUrl(url: string): boolean {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/* ===== FLOATING LABEL INPUT ===== */
function FloatingInput({
  id,
  label,
  type = "text",
  name,
  autoComplete,
  placeholder,
  required,
  error,
  prefixIcon,
  onClearError,
}: {
  id: string;
  label: string;
  type?: string;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  prefixIcon?: React.ReactNode;
  onClearError?: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasPrefix = !!prefixIcon;

  const wrapperClasses = [
    "relative",
    focused ? "group/focused" : "",
    filled ? "group/filled" : "",
    error ? "group/error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative">
      <div className={wrapperClasses}>
        {prefixIcon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-primary-500 z-[1] pointer-events-none"
            aria-hidden="true"
          >
            {prefixIcon}
          </span>
        )}
        <label
          htmlFor={id}
          className={[
            "absolute pointer-events-none z-[1] leading-none transition-all duration-200 ease-in-out origin-top-left",
            hasPrefix ? "left-10" : "left-4",
            // Floated state
            focused || filled
              ? "top-2 text-[11px] font-medium"
              : "top-1/2 -translate-y-1/2 text-[15px] font-normal",
            // Color
            error
              ? "text-error-600"
              : focused
                ? "text-accent-600"
                : focused || filled
                  ? "text-primary-500"
                  : "text-primary-400",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
          {required && (
            <span className="text-error-600 ml-0.5 font-medium">*</span>
          )}
        </label>
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={focused ? placeholder : undefined}
          required={required}
          className={[
            "w-full pt-6 pb-2 text-[15px] font-medium text-primary-900 bg-white border-[1.5px] rounded-lg transition-all duration-200 appearance-none",
            hasPrefix ? "pl-10 pr-4" : "px-4",
            error
              ? "border-error-600 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]"
              : focused
                ? "border-accent-600 shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                : "border-primary-200 hover:border-primary-300",
            "placeholder:text-transparent",
            focused ? "placeholder:text-primary-400" : "",
            "focus:outline-none focus:border-accent-600 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]",
          ]
            .filter(Boolean)
            .join(" ")}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setFilled(!!inputRef.current?.value.trim());
          }}
          onInput={() => {
            setFilled(!!inputRef.current?.value.trim());
            if (error && onClearError) onClearError();
          }}
        />
      </div>
      {error && (
        <p className="text-[12px] font-medium text-error-600 mt-2 pl-1">
          {error}
        </p>
      )}
    </div>
  );
}

/* ===== FLOATING LABEL SELECT ===== */
function FloatingSelect({
  id,
  label,
  name,
  required,
  error,
  options,
  onClearError,
}: {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  options: { value: string; label: string }[];
  onClearError?: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <div className="relative">
      <div className="relative">
        <label
          htmlFor={id}
          className={[
            "absolute left-4 top-2 text-[11px] font-medium pointer-events-none z-[1] leading-none transition-all duration-200",
            error
              ? "text-error-600"
              : focused
                ? "text-accent-600"
                : "text-primary-500",
          ].join(" ")}
        >
          {label}
          {required && (
            <span className="text-error-600 ml-0.5 font-medium">*</span>
          )}
        </label>
        <select
          ref={selectRef}
          id={id}
          name={name}
          required={required}
          className={[
            "w-full pt-6 pb-2 pl-4 pr-10 text-[15px] font-medium text-primary-900 bg-white border-[1.5px] rounded-lg cursor-pointer transition-all duration-200 appearance-none",
            "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_14px_center]",
            error
              ? "border-error-600 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]"
              : focused
                ? "border-accent-600 shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                : "border-primary-200 hover:border-primary-300",
            "focus:outline-none focus:border-accent-600 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]",
            focused
              ? "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")]"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setFilled(!!selectRef.current?.value);
          }}
          onChange={() => {
            setFilled(!!selectRef.current?.value);
            if (error && onClearError) onClearError();
          }}
        >
          <option value="">Seçiniz</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-[12px] font-medium text-error-600 mt-2 pl-1">
          {error}
        </p>
      )}
    </div>
  );
}

/* ===== FLOATING LABEL TEXTAREA ===== */
function FloatingTextarea({
  id,
  label,
  name,
  placeholder,
  optional,
  error,
  onClearError,
}: {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  optional?: boolean;
  error?: string;
  onClearError?: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative">
      <div className="relative">
        <label
          htmlFor={id}
          className={[
            "absolute left-4 pointer-events-none z-[1] leading-none transition-all duration-200 origin-top-left",
            focused || filled
              ? "top-2 text-[11px] font-medium"
              : "top-4 text-[15px] font-normal",
            error
              ? "text-error-600"
              : focused
                ? "text-accent-600"
                : focused || filled
                  ? "text-primary-500"
                  : "text-primary-400",
          ].join(" ")}
        >
          {label}
          {optional && (
            <span className="text-primary-400 text-[12px] font-normal ml-1">
              (Opsiyonel)
            </span>
          )}
        </label>
        <textarea
          ref={textareaRef}
          id={id}
          name={name}
          placeholder={focused ? placeholder : undefined}
          className={[
            "w-full pt-8 pb-2 px-4 text-[15px] font-medium text-primary-900 bg-white border-[1.5px] rounded-lg transition-all duration-200 appearance-none resize-y min-h-[100px]",
            error
              ? "border-error-600 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]"
              : focused
                ? "border-accent-600 shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                : "border-primary-200 hover:border-primary-300",
            "placeholder:text-transparent",
            focused ? "placeholder:text-primary-400" : "",
            "focus:outline-none focus:border-accent-600 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]",
          ]
            .filter(Boolean)
            .join(" ")}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setFilled(!!textareaRef.current?.value.trim());
          }}
          onInput={() => {
            setFilled(!!textareaRef.current?.value.trim());
            if (error && onClearError) onClearError();
          }}
        />
      </div>
      {error && (
        <p className="text-[12px] font-medium text-error-600 mt-2 pl-1">
          {error}
        </p>
      )}
    </div>
  );
}

/* ===== SVG ICONS ===== */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[18px] h-[18px]"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[18px] h-[18px]"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[18px] h-[18px]"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/* ===== DROPDOWN DATA ===== */
const followerOptions = [
  { value: "1k-alti", label: "1K altı" },
  { value: "1k-10k", label: "1K-10K" },
  { value: "10k-50k", label: "10K-50K" },
  { value: "50k-100k", label: "50K-100K" },
  { value: "100k-500k", label: "100K-500K" },
  { value: "500k-1m", label: "500K-1M" },
  { value: "1m-plus", label: "1M+" },
];

const categoryOptions = [
  { value: "moda-giyim", label: "Moda & Giyim" },
  { value: "kozmetik-guzellik", label: "Kozmetik & Güzellik" },
  { value: "teknoloji", label: "Teknoloji" },
  { value: "yemek-icecek", label: "Yemek & İçecek" },
  { value: "seyahat", label: "Seyahat" },
  { value: "fitness-saglik", label: "Fitness & Sağlık" },
  { value: "anne-bebek", label: "Anne & Bebek" },
  { value: "ev-dekorasyon", label: "Ev & Dekorasyon" },
  { value: "gaming", label: "Gaming" },
  { value: "egitim", label: "Eğitim" },
  { value: "diger", label: "Diğer" },
];

const ecommerceOptions = [
  { value: "ikas", label: "ikas" },
  { value: "shopify", label: "Shopify" },
  { value: "ticimax", label: "Ticimax" },
  { value: "woocommerce", label: "WooCommerce" },
  { value: "trendyol", label: "Trendyol" },
  { value: "hepsiburada", label: "Hepsiburada" },
  { value: "n11", label: "N11" },
  { value: "ciceksepeti", label: "Çiçeksepeti" },
  { value: "diger", label: "Diğer" },
];

/* ===== MAIN COMPONENT ===== */
export default function ApplicationModal({
  isOpen,
  onClose,
  defaultTab = "influencer",
}: ApplicationModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const [closing, setClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync defaultTab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setSubmitted(false);
      setErrors({});
      setClosing(false);
    }
  }, [isOpen, defaultTab]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    // Focus the close button on open
    setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector<HTMLElement>(
        '[aria-label="Kapat"]'
      );
      closeBtn?.focus();
    }, 100);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setSubmitted(false);
      setErrors({});
      onClose();
    }, 200);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleTabSwitch = (tab: TabType) => {
    if (submitted) return;
    setActiveTab(tab);
    setErrors({});
  };

  const clearError = useCallback((fieldId: string) => {
    setErrors((prev) => {
      if (!prev[fieldId]) return prev;
      const next = { ...prev };
      delete next[fieldId];
      return next;
    });
  }, []);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (activeTab === "influencer") {
      const form = modalRef.current;
      if (!form) return;

      const name = (form.querySelector("#inf-name") as HTMLInputElement)?.value
        .trim();
      const email = (form.querySelector("#inf-email") as HTMLInputElement)
        ?.value.trim();
      const phone = (form.querySelector("#inf-phone") as HTMLInputElement)
        ?.value.trim();
      const instagram = (
        form.querySelector("#inf-instagram") as HTMLInputElement
      )?.value.trim();
      const youtube = (form.querySelector("#inf-youtube") as HTMLInputElement)
        ?.value.trim();
      const tiktok = (form.querySelector("#inf-tiktok") as HTMLInputElement)
        ?.value.trim();
      const followers = (
        form.querySelector("#inf-followers") as HTMLSelectElement
      )?.value;
      const category = (
        form.querySelector("#inf-category") as HTMLSelectElement
      )?.value;

      if (!name) newErrors["inf-name"] = "Ad Soyad gereklidir";
      if (!email || !validateEmail(email))
        newErrors["inf-email"] = "Geçerli bir e-posta girin";
      if (!phone || !validatePhone(phone))
        newErrors["inf-phone"] = "Geçerli bir telefon girin (05XX XXX XX XX)";
      if (!instagram || !validateUrl(instagram))
        newErrors["inf-instagram"] = "Instagram linki gereklidir";
      if (youtube && !validateUrl(youtube))
        newErrors["inf-youtube"] = "Geçerli bir URL girin";
      if (tiktok && !validateUrl(tiktok))
        newErrors["inf-tiktok"] = "Geçerli bir URL girin";
      if (!followers) newErrors["inf-followers"] = "Takipçi sayısı seçiniz";
      if (!category) newErrors["inf-category"] = "İçerik kategorisi seçiniz";
    } else {
      const form = modalRef.current;
      if (!form) return;

      const company = (form.querySelector("#br-company") as HTMLInputElement)
        ?.value.trim();
      const name = (form.querySelector("#br-name") as HTMLInputElement)?.value
        .trim();
      const email = (form.querySelector("#br-email") as HTMLInputElement)?.value
        .trim();
      const phone = (form.querySelector("#br-phone") as HTMLInputElement)?.value
        .trim();
      const website = (form.querySelector("#br-website") as HTMLInputElement)
        ?.value.trim();
      const ecommerce = (
        form.querySelector("#br-ecommerce") as HTMLSelectElement
      )?.value;

      if (!company) newErrors["br-company"] = "Şirket adı gereklidir";
      if (!name) newErrors["br-name"] = "Ad Soyad gereklidir";
      if (!email || !validateEmail(email))
        newErrors["br-email"] = "Geçerli bir e-posta girin";
      if (!phone || !validatePhone(phone))
        newErrors["br-phone"] = "Geçerli bir telefon girin (05XX XXX XX XX)";
      if (website && !validateUrl(website))
        newErrors["br-website"] = "Geçerli bir URL girin";
      if (!ecommerce)
        newErrors["br-ecommerce"] = "E-ticaret platformu seçiniz";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={[
        "fixed inset-0 z-[1000] flex items-center justify-center p-4 max-[400px]:p-2",
        "bg-black/50",
        closing
          ? "animate-[fadeOut_200ms_ease_forwards]"
          : "animate-[fadeIn_200ms_ease_forwards]",
      ].join(" ")}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        className={[
          "bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-[560px] w-full flex flex-col relative overflow-hidden",
          "max-h-[calc(100vh-32px)]",
          closing
            ? "animate-[scaleOut_200ms_ease_forwards]"
            : "animate-[scaleIn_300ms_cubic-bezier(0.16,1,0.3,1)_forwards]",
          "max-sm:max-w-full max-sm:max-h-[calc(100dvh-16px)] max-sm:rounded-lg",
        ].join(" ")}
      >
        {/* ===== HEADER (always visible, including success state) ===== */}
        <div className="px-6 pt-6 flex-shrink-0 max-sm:px-4 max-sm:pt-4 max-[400px]:px-4 max-[400px]:pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="modal-title"
                className="text-2xl font-bold text-primary-900 leading-[1.3] tracking-[-0.02em] max-sm:text-xl"
              >
                Başvuru
              </h2>
              <p className="text-sm font-normal text-primary-500 mt-1 leading-[1.4]">
                İş birliği fırsatlarını kaçırmayın
              </p>
            </div>
            <button
              type="button"
              className="w-9 h-9 min-w-[36px] flex items-center justify-center bg-primary-50 text-primary-500 rounded-lg hover:text-primary-900 hover:bg-primary-200 transition-all duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
              aria-label="Kapat"
              onClick={handleClose}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== TABS ===== */}
        {!submitted && (
          <div className="px-6 pt-4 flex-shrink-0 max-sm:px-4 max-[400px]:px-4 max-[400px]:pt-3">
            <div
              className="flex bg-primary-50 rounded-md p-1 gap-1"
              role="tablist"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "influencer"}
                className={[
                  "flex-1 py-2 px-4 text-sm font-semibold rounded-[6px] text-center whitespace-nowrap transition-all duration-200 max-sm:text-[13px] max-sm:px-3",
                  activeTab === "influencer"
                    ? "bg-accent-600 text-primary-900 shadow-sm"
                    : "text-primary-500 bg-transparent hover:text-primary-700 hover:bg-accent-100",
                  "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]",
                ].join(" ")}
                onClick={() => handleTabSwitch("influencer")}
              >
                Influencer&apos;lar
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "brand"}
                className={[
                  "flex-1 py-2 px-4 text-sm font-semibold rounded-[6px] text-center whitespace-nowrap transition-all duration-200 max-sm:text-[13px] max-sm:px-3",
                  activeTab === "brand"
                    ? "bg-accent-600 text-primary-900 shadow-sm"
                    : "text-primary-500 bg-transparent hover:text-primary-700 hover:bg-accent-100",
                  "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]",
                ].join(" ")}
                onClick={() => handleTabSwitch("brand")}
              >
                Markalar &amp; Ajanslar
              </button>
            </div>
          </div>
        )}

        {/* ===== BODY (scrollable) ===== */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 pt-4 pb-6 min-h-0 scroll-smooth max-sm:px-4 max-sm:pt-4 max-sm:pb-4 max-[400px]:px-4 max-[400px]:pt-3 max-[400px]:pb-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary-200 [&::-webkit-scrollbar-thumb]:rounded-[2px]">
          {/* ──── INFLUENCER TAB ──── */}
          {!submitted && activeTab === "influencer" && (
            <div
              role="tabpanel"
              aria-labelledby="tab-influencer"
              className="animate-[fadeSlideIn_250ms_ease_forwards]"
            >
              {/* Row 1: Ad Soyad + E-posta */}
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mb-0 max-sm:[&>*]:mb-4">
                <FloatingInput
                  id="inf-name"
                  label="Ad Soyad"
                  name="adSoyad"
                  autoComplete="name"
                  required
                  error={errors["inf-name"]}
                  onClearError={() => clearError("inf-name")}
                />
                <FloatingInput
                  id="inf-email"
                  label="E-posta"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  error={errors["inf-email"]}
                  onClearError={() => clearError("inf-email")}
                />
              </div>

              {/* Row 2: Telefon (full width) */}
              <div className="mb-4">
                <FloatingInput
                  id="inf-phone"
                  label="Telefon"
                  type="tel"
                  name="telefon"
                  autoComplete="tel"
                  placeholder="05XX XXX XX XX"
                  required
                  error={errors["inf-phone"]}
                  onClearError={() => clearError("inf-phone")}
                />
              </div>

              {/* Social Section */}
              <p className="text-[11px] font-semibold text-primary-500 uppercase tracking-[0.06em] mb-4">
                Sosyal Hesaplar
              </p>

              {/* Row 3: Social — 3 columns */}
              <div className="grid grid-cols-3 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mb-0 max-sm:[&>*]:mb-4">
                <FloatingInput
                  id="inf-instagram"
                  label="Instagram"
                  type="url"
                  name="instagram"
                  placeholder="https://instagram.com/kullaniciadi"
                  required
                  prefixIcon={<InstagramIcon />}
                  error={errors["inf-instagram"]}
                  onClearError={() => clearError("inf-instagram")}
                />
                <FloatingInput
                  id="inf-youtube"
                  label="YouTube"
                  type="url"
                  name="youtube"
                  placeholder="https://youtube.com/@kanal"
                  prefixIcon={<YouTubeIcon />}
                  error={errors["inf-youtube"]}
                  onClearError={() => clearError("inf-youtube")}
                />
                <FloatingInput
                  id="inf-tiktok"
                  label="TikTok"
                  type="url"
                  name="tiktok"
                  placeholder="https://tiktok.com/@kullaniciadi"
                  prefixIcon={<TikTokIcon />}
                  error={errors["inf-tiktok"]}
                  onClearError={() => clearError("inf-tiktok")}
                />
              </div>

              {/* Row 4: Takipçi + Kategori */}
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:[&>*]:mb-4">
                <FloatingSelect
                  id="inf-followers"
                  label="Takipçi Sayısı"
                  name="takipciSayisi"
                  required
                  options={followerOptions}
                  error={errors["inf-followers"]}
                  onClearError={() => clearError("inf-followers")}
                />
                <FloatingSelect
                  id="inf-category"
                  label="İçerik Kategorisi"
                  name="icerikKategorisi"
                  required
                  options={categoryOptions}
                  error={errors["inf-category"]}
                  onClearError={() => clearError("inf-category")}
                />
              </div>
            </div>
          )}

          {/* ──── BRANDS TAB ──── */}
          {!submitted && activeTab === "brand" && (
            <div
              role="tabpanel"
              aria-labelledby="tab-brand"
              className="animate-[fadeSlideIn_250ms_ease_forwards]"
            >
              {/* Row 1: Şirket Adı + Ad Soyad */}
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mb-0 max-sm:[&>*]:mb-4">
                <FloatingInput
                  id="br-company"
                  label="Şirket Adı"
                  name="sirketAdi"
                  autoComplete="organization"
                  required
                  error={errors["br-company"]}
                  onClearError={() => clearError("br-company")}
                />
                <FloatingInput
                  id="br-name"
                  label="Ad Soyad"
                  name="adSoyad"
                  autoComplete="name"
                  required
                  error={errors["br-name"]}
                  onClearError={() => clearError("br-name")}
                />
              </div>

              {/* Row 2: E-posta + Telefon */}
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mb-0 max-sm:[&>*]:mb-4">
                <FloatingInput
                  id="br-email"
                  label="E-posta"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  error={errors["br-email"]}
                  onClearError={() => clearError("br-email")}
                />
                <FloatingInput
                  id="br-phone"
                  label="Telefon"
                  type="tel"
                  name="telefon"
                  autoComplete="tel"
                  placeholder="05XX XXX XX XX"
                  required
                  error={errors["br-phone"]}
                  onClearError={() => clearError("br-phone")}
                />
              </div>

              {/* Row 3: Web Sitesi + E-ticaret Platformu */}
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mb-0 max-sm:[&>*]:mb-4">
                <FloatingInput
                  id="br-website"
                  label="Web Sitesi"
                  type="url"
                  name="website"
                  placeholder="https://example.com"
                  error={errors["br-website"]}
                  onClearError={() => clearError("br-website")}
                />
                <FloatingSelect
                  id="br-ecommerce"
                  label="E-ticaret Platformu"
                  name="ecommercePlatform"
                  required
                  options={ecommerceOptions}
                  error={errors["br-ecommerce"]}
                  onClearError={() => clearError("br-ecommerce")}
                />
              </div>

              {/* Row 4: Mesajınız */}
              <FloatingTextarea
                id="br-message"
                label="Mesajınız"
                name="mesaj"
                placeholder="Eklemek istediğiniz notlar..."
                optional
                error={errors["br-message"]}
                onClearError={() => clearError("br-message")}
              />
            </div>
          )}

          {/* ──── SUCCESS STATE ──── */}
          {submitted && (
            <div
              className="flex flex-col items-center justify-center text-center py-12 px-6 min-h-[340px] animate-[fadeSlideIn_400ms_ease_forwards]"
              aria-live="polite"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(5,150,105,0.12)] flex items-center justify-center mb-6 relative">
                <div className="absolute inset-[-6px] rounded-full bg-[rgba(5,150,105,0.12)] opacity-50 animate-[pulseRing_1.5s_ease-out_forwards]" />
                <svg
                  className="w-8 h-8 text-success-600 relative z-[1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-primary-900 mb-2 tracking-[-0.01em]">
                Başvurunuz alındı!
              </h3>
              <p className="text-[15px] text-primary-500 leading-[1.5] mb-1">
                En kısa sürede size dönüş yapacağız.
              </p>
              <p className="text-[13px] text-primary-400 mt-2">
                Başvurunuz 24 saat içinde değerlendirilecektir.
              </p>
            </div>
          )}
        </div>

        {/* ===== STICKY FOOTER ===== */}
        <div
          className={[
            "flex-shrink-0 min-h-[72px] px-6 py-4 bg-white border-t border-primary-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center gap-3",
            "max-sm:px-4 max-sm:py-3 max-sm:min-h-[64px] max-[400px]:px-4 max-[400px]:py-3",
            submitted ? "justify-center" : "justify-end",
          ].join(" ")}
        >
          {!submitted ? (
            <button
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-7 text-[15px] font-semibold bg-primary-900 text-white border-[1.5px] border-primary-900 rounded-lg min-h-[48px] whitespace-nowrap cursor-pointer transition-all duration-200 hover:bg-primary-800 hover:border-primary-800 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)] active:scale-[0.98] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] max-sm:py-3 max-sm:px-4 max-sm:text-sm max-sm:min-h-[44px]"
              onClick={handleSubmit}
            >
              Gönder
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 py-3 px-7 text-[15px] font-semibold bg-primary-50 text-primary-700 border-[1.5px] border-primary-200 rounded-lg min-h-[48px] whitespace-nowrap cursor-pointer transition-all duration-200 hover:bg-primary-200 hover:text-primary-900 active:scale-[0.98] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] max-sm:py-3 max-sm:px-4 max-sm:text-sm max-sm:min-h-[44px]"
              onClick={handleClose}
            >
              Kapat
            </button>
          )}
        </div>
      </div>

      {/* Keyframe animations via style tag */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes scaleOut {
          to {
            opacity: 0;
            transform: scale(0.95) translateY(8px);
          }
        }
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
