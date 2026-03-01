import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const solutionLinks = [
  { href: "#", label: "Markalar İçin" },
  { href: "#", label: "Influencer'lar İçin" },
  { href: "#", label: "Ajanslar İçin" },
];

const companyLinks = [
  { href: "#", label: "Hakkımızda" },
  { href: "#", label: "İş Ortaklarımız" },
  { href: "#", label: "İletişim" },
];

const legalLinks = [
  { href: "#", label: "Gizlilik Politikası" },
  { href: "#", label: "Kullanım Koşulları" },
  { href: "#", label: "KVKK" },
];

const mediazoneFamily = [
  "Mackolik",
  "Onedio",
  "Mynet",
  "Yemek.com",
  "Webtekno",
  "Hisse.net",
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center mb-6 rounded-lg p-1 transition-all duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2"
                aria-label="MDZN Partners ana sayfa"
              >
                <Image
                  src="/images/logo-mdzn-partners.png"
                  alt="MDZN Partners"
                  width={1563}
                  height={1563}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-primary-400 leading-relaxed mb-6 max-w-xs">
                Türkiye&apos;nin yeni nesil affiliate pazarlama platformu.
                Markalar, influencer&apos;lar ve yayıncılar için tek adres.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="footer-social-icon w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70" />
                </a>
                <a
                  href="#"
                  className="footer-social-icon w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/70" />
                </a>
                <a
                  href="#"
                  className="footer-social-icon w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white/70" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Çözümler */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                    Çözümler
                  </h3>
                  <ul className="space-y-3">
                    {solutionLinks.map(({ href, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="footer-link text-primary-400 hover:text-accent-500 active:text-accent-600 transition-colors duration-150"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Şirket */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                    Şirket
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map(({ href, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="footer-link text-primary-400 hover:text-accent-500 active:text-accent-600 transition-colors duration-150"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Yasal */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                    Yasal
                  </h3>
                  <ul className="space-y-3">
                    {legalLinks.map(({ href, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="footer-link text-primary-400 hover:text-accent-500 active:text-accent-600 transition-colors duration-150"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* İletişim */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                    İletişim
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-primary-400 text-sm">
                      <span className="block text-white/60 mb-1">E-posta</span>
                      contact@mdznpartners.com
                    </li>
                    <li className="text-primary-400 text-sm">
                      <span className="block text-white/60 mb-1">
                        Merkez Ofis
                      </span>
                      Şişli/İstanbul
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-400">
              © 2025 MDZN Partners. Bir Mediazone girişimidir.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 uppercase tracking-wider">
                Mediazone Ailesi
              </span>
              <div className="flex items-center gap-3 text-sm text-primary-400">
                {mediazoneFamily.map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="footer-link hover:text-accent-500 active:text-accent-600 transition-colors duration-150 cursor-pointer"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
