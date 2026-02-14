"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-primary-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-primary-900 rounded-md flex flex-col items-center justify-center group-hover:bg-primary-900 transition-colors">
              <span className="text-[9px] font-extrabold leading-none group-hover:text-white transition-colors">
                MD
              </span>
              <span className="text-[9px] font-extrabold leading-none group-hover:text-white transition-colors">
                ZN
              </span>
            </div>
            <span className="text-sm font-bold tracking-[1px]">PARTNERS</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Ana navigasyon"
          >
            <a
              href="/"
              className="text-sm font-medium text-primary-900 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
            >
              Ana Sayfa
            </a>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
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
                <a
                  href="/markalar-icin"
                  className="block px-4 py-2.5 text-sm text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200 transition-colors duration-150"
                  role="menuitem"
                >
                  Markalar İçin
                </a>
                <a
                  href="/influencerlar-icin"
                  className="block px-4 py-2.5 text-sm text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200 transition-colors duration-150"
                  role="menuitem"
                >
                  Influencer&apos;lar İçin
                </a>
                <a
                  href="/ajanslar-icin"
                  className="block px-4 py-2.5 text-sm text-primary-600 hover:text-accent-700 hover:bg-accent-100 active:bg-accent-200 transition-colors duration-150"
                  role="menuitem"
                >
                  Ajanslar İçin
                </a>
              </div>
            </div>
            <a
              href="/is-ortaklari"
              className="text-sm font-medium text-primary-600 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
            >
              İş Ortaklarımız
            </a>
            <a
              href="/influencerlar-icin"
              className="text-sm font-medium text-primary-600 hover:text-accent-700 active:text-accent-800 transition-colors duration-150"
            >
              Influencer Başvurusu
            </a>
          </nav>

          {/* CTA */}
          <button className="hidden lg:flex btn-primary h-11 px-6 rounded-lg text-sm font-semibold items-center gap-2">
            Demo Talep Et
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
            <a
              href="/"
              className="block py-2 text-sm font-medium text-primary-900"
            >
              Ana Sayfa
            </a>
            <a
              href="/markalar-icin"
              className="block py-2 text-sm font-medium text-primary-600"
            >
              Markalar İçin
            </a>
            <a
              href="/influencerlar-icin"
              className="block py-2 text-sm font-medium text-primary-600"
            >
              Influencer&apos;lar İçin
            </a>
            <a
              href="/ajanslar-icin"
              className="block py-2 text-sm font-medium text-primary-600"
            >
              Ajanslar İçin
            </a>
            <a
              href="/is-ortaklari"
              className="block py-2 text-sm font-medium text-primary-600"
            >
              İş Ortaklarımız
            </a>
            <a
              href="/influencerlar-icin"
              className="block py-2 text-sm font-medium text-primary-600"
            >
              Influencer Başvurusu
            </a>
            <button className="btn-primary w-full h-11 rounded-lg text-sm font-semibold mt-4">
              Demo Talep Et
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
