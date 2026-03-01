"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);
  const { openModal } = useModal();
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isSolutionsActive =
    isActive("/markalar-icin") ||
    isActive("/influencerlar-icin") ||
    isActive("/ajanslar-icin");

  const navLinkClass = (href: string) =>
    `relative text-sm font-medium transition-colors duration-150 pb-[26px] mb-[-26px] ${
      isActive(href)
        ? "text-accent-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-600"
        : "text-primary-600 hover:text-accent-700 active:text-accent-800"
    }`;

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        (e.currentTarget as HTMLElement).blur();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setDropdownOpen((prev) => {
          if (prev) {
            (e.currentTarget as HTMLElement).blur();
          }
          return !prev;
        });
      }
    },
    []
  );

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const el = mobileMenuRef.current;
      if (el) {
        el.style.maxHeight = el.scrollHeight + "px";
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const mobileNavLinkClass = (href: string) =>
    `flex items-center min-h-[44px] px-1 text-sm font-semibold border-b border-primary-100 transition-colors duration-150 ${
      isActive(href) ? "text-accent-700" : "text-primary-600"
    }`;

  const mobileSubLinkClass = (href: string) =>
    `flex items-center min-h-[44px] text-sm font-medium transition-colors duration-150 ${
      isActive(href) ? "text-accent-700" : "text-primary-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-primary-200">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-primary-900 rounded-md flex flex-col items-center justify-center group-hover:bg-primary-900 transition-colors">
              <span className="text-[9px] font-extrabold leading-none group-hover:text-white transition-colors">
                MD
              </span>
              <span className="text-[9px] font-extrabold leading-none group-hover:text-white transition-colors">
                ZN
              </span>
            </div>
            <span
              className={`text-sm font-bold tracking-[1px] transition-all duration-300 overflow-hidden whitespace-nowrap ${
                scrolled ? "w-0 opacity-0" : "w-[72px] opacity-100"
              }`}
            >
              PARTNERS
            </span>
          </Link>

          {/* Desktop Navigation — centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav
              className="flex items-center gap-8"
              role="navigation"
              aria-label="Ana navigasyon"
            >
              <Link
                href="/"
                className={`relative text-sm font-medium transition-colors duration-150 pb-[26px] mb-[-26px] ${
                  isActive("/")
                    ? "text-accent-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-600"
                    : "text-primary-600 hover:text-accent-700 active:text-accent-800"
                }`}
              >
                Ana Sayfa
              </Link>
              <div className="relative group">
                <button
                  className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-150 pb-[26px] mb-[-26px] ${
                    isSolutionsActive
                      ? "text-accent-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-600"
                      : "text-primary-600 hover:text-accent-700 active:text-accent-800"
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onKeyDown={handleDropdownKeyDown}
                >
                  Çözümler
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-52 bg-white border border-primary-200 rounded-xl py-2 shadow-lg transition-all duration-200 ${
                    dropdownOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 translate-y-2"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  role="menu"
                >
                  <Link
                    href="/markalar-icin"
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      isActive("/markalar-icin")
                        ? "text-accent-700 bg-accent-100"
                        : "text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200"
                    }`}
                    role="menuitem"
                  >
                    Markalar İçin
                  </Link>
                  <Link
                    href="/influencerlar-icin"
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      isActive("/influencerlar-icin")
                        ? "text-accent-700 bg-accent-100"
                        : "text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200"
                    }`}
                    role="menuitem"
                  >
                    Influencer&apos;lar İçin
                  </Link>
                  <Link
                    href="/ajanslar-icin"
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      isActive("/ajanslar-icin")
                        ? "text-accent-700 bg-accent-100"
                        : "text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200"
                    }`}
                    role="menuitem"
                  >
                    Ajanslar İçin
                  </Link>
                </div>
              </div>
              <Link href="/is-ortaklari" className={navLinkClass("/is-ortaklari")}>
                İş Ortaklarımız
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <button
            className="hidden lg:flex btn-primary h-11 px-6 rounded-lg text-sm font-semibold items-center gap-2"
            onClick={() => openModal("brand")}
          >
            Aramıza Katıl
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-primary-600 hover:bg-primary-50 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menü"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu — smooth slide-down animation */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: mobileMenuOpen ? mobileMenuRef.current?.scrollHeight ?? 500 : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="border-t border-primary-200 py-4">
            {/* Ana Sayfa */}
            <Link href="/" className={mobileNavLinkClass("/")}>
              Ana Sayfa
            </Link>

            {/* Çözümler — grouped with left border + indent */}
            <div className="border-b border-primary-100">
              <button
                className="flex items-center justify-between w-full min-h-[44px] px-1 text-sm font-semibold text-primary-600"
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
              >
                Çözümler
                <ChevronDown className={`w-4 h-4 text-primary-400 transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`ml-2 pl-4 pb-1 border-l-2 border-primary-200 space-y-0 overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pb-0"}`}>
                <Link href="/markalar-icin" className={mobileSubLinkClass("/markalar-icin")}>
                  Markalar İçin
                </Link>
                <Link href="/influencerlar-icin" className={mobileSubLinkClass("/influencerlar-icin")}>
                  Influencer&apos;lar İçin
                </Link>
                <Link href="/ajanslar-icin" className={mobileSubLinkClass("/ajanslar-icin")}>
                  Ajanslar İçin
                </Link>
              </div>
            </div>

            {/* Other nav links */}
            <Link href="/is-ortaklari" className={mobileNavLinkClass("/is-ortaklari")}>
              İş Ortaklarımız
            </Link>

            {/* CTA in mobile menu */}
            <button
              className="btn-primary w-full h-12 rounded-lg text-sm font-semibold mt-6"
              onClick={() => { openModal("brand"); setMobileMenuOpen(false); }}
            >
              Aramıza Katıl
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
