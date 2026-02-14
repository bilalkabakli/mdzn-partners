import { Mail, Building2, FlaskConical } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* E-posta */}
          <div className="contact-card bg-white border border-primary-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              E-posta
            </h3>
            <a
              href="mailto:contact@mdznpartners.com"
              className="text-primary-600 hover:text-accent-700 transition-colors font-medium"
            >
              contact@mdznpartners.com
            </a>
          </div>

          {/* Merkez Ofis */}
          <div className="contact-card bg-white border border-primary-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              Merkez Ofis
            </h3>
            <p className="text-primary-600">
              Merkez Mah. Abide-i Hürriyet Cad.
              <br />
              Divan Saray No: 136-4
              <br />
              Şişli/İstanbul
            </p>
          </div>

          {/* R&D Merkezi */}
          <div className="contact-card bg-white border border-primary-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-info-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FlaskConical className="w-8 h-8 text-info-600" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              R&D Merkezi
            </h3>
            <p className="text-primary-600">
              YTÜ İkitelli Teknopark
              <br />
              Başakşehir/İstanbul
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
