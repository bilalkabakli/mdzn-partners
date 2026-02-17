import { Mail, Building2, FlaskConical } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
          {/* E-posta */}
          <div className="contact-card bg-white border border-primary-200 rounded-xl md:rounded-2xl px-4 py-3.5 md:p-8 flex items-center md:items-stretch md:flex-col md:text-center gap-3.5 md:gap-0">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-accent-100 rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-6">
              <Mail className="w-5 h-5 md:w-8 md:h-8 text-accent-600" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm md:text-lg font-bold text-primary-900 md:mb-2">
                E-posta
              </h3>
              <a
                href="mailto:contact@mdznpartners.com"
                className="text-xs md:text-base text-primary-600 hover:text-accent-700 transition-colors font-medium"
              >
                contact@mdznpartners.com
              </a>
            </div>
          </div>

          {/* Merkez Ofis */}
          <div className="contact-card bg-white border border-primary-200 rounded-xl md:rounded-2xl px-4 py-3.5 md:p-8 flex items-start md:items-stretch md:flex-col md:text-center gap-3.5 md:gap-0">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-accent-100 rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0 md:mx-auto md:mb-6">
              <Building2 className="w-5 h-5 md:w-8 md:h-8 text-accent-600" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm md:text-lg font-bold text-primary-900 mb-0.5 md:mb-2">
                Merkez Ofis
              </h3>
              <p className="text-xs md:text-base text-primary-600 leading-relaxed md:leading-normal">
                <span className="md:hidden">Merkez Mah. Abide-i Hürriyet Cad. Divan Saray No: 136-4, Şişli/İstanbul</span>
                <span className="hidden md:inline">
                  Merkez Mah. Abide-i Hürriyet Cad.
                  <br />
                  Divan Saray No: 136-4
                  <br />
                  Şişli/İstanbul
                </span>
              </p>
            </div>
          </div>

          {/* R&D Merkezi */}
          <div className="contact-card bg-white border border-primary-200 rounded-xl md:rounded-2xl px-4 py-3.5 md:p-8 flex items-start md:items-stretch md:flex-col md:text-center gap-3.5 md:gap-0">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-info-100 rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0 md:mx-auto md:mb-6">
              <FlaskConical className="w-5 h-5 md:w-8 md:h-8 text-info-600" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm md:text-lg font-bold text-primary-900 mb-0.5 md:mb-2">
                R&D Merkezi
              </h3>
              <p className="text-xs md:text-base text-primary-600 leading-relaxed md:leading-normal">
                <span className="md:hidden">YTÜ İkitelli Teknopark, Başakşehir/İstanbul</span>
                <span className="hidden md:inline">
                  YTÜ İkitelli Teknopark
                  <br />
                  Başakşehir/İstanbul
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
