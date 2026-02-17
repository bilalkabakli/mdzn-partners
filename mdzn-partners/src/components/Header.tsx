"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-primary-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
            <span className="text-sm font-bold tracking-[1px]">PARTNERS</span>
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
                  <ChevronDown className="w-4 h-4" />
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
              <Link href="/hakkimizda" className={navLinkClass("/hakkimizda")}>
                Hakkımızda
              </Link>
              <Link href="/iletisim" className={navLinkClass("/iletisim")}>
                İletişim
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <button
            className="hidden lg:flex btn-primary h-11 px-6 rounded-lg text-sm font-semibold items-center gap-2"
            onClick={() => openModal()}
          >
            Aramıza Katıl
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary-600 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary-200 py-4 space-y-3">
            <Link
              href="/"
              className={`block py-2 text-sm font-medium ${
                isActive("/") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/markalar-icin"
              className={`block py-2 text-sm font-medium ${
                isActive("/markalar-icin") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              Markalar İçin
            </Link>
            <Link
              href="/influencerlar-icin"
              className={`block py-2 text-sm font-medium ${
                isActive("/influencerlar-icin") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              Influencer&apos;lar İçin
            </Link>
            <Link
              href="/ajanslar-icin"
              className={`block py-2 text-sm font-medium ${
                isActive("/ajanslar-icin") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              Ajanslar İçin
            </Link>
            <Link
              href="/is-ortaklari"
              className={`block py-2 text-sm font-medium ${
                isActive("/is-ortaklari") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              İş Ortaklarımız
            </Link>
            <Link
              href="/hakkimizda"
              className={`block py-2 text-sm font-medium ${
                isActive("/hakkimizda") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className={`block py-2 text-sm font-medium ${
                isActive("/iletisim") ? "text-accent-700" : "text-primary-600"
              }`}
            >
              İletişim
            </Link>
            <button
              className="btn-primary w-full h-11 rounded-lg text-sm font-semibold mt-4"
              onClick={() => { openModal(); setMobileMenuOpen(false); }}
            >
              Aramıza Katıl
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
