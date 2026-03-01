import { ExternalLink } from "lucide-react";

interface Partner {
  name: string;
  url: string;
  domain: string;
}

const partners: Partner[] = [
  { name: "Mackolik", url: "https://www.mackolik.com", domain: "mackolik.com" },
  { name: "Onedio", url: "https://onedio.com", domain: "onedio.com" },
  { name: "Mynet", url: "https://www.mynet.com", domain: "mynet.com" },
  { name: "Yemek.com", url: "https://yemek.com", domain: "yemek.com" },
  { name: "Webtekno", url: "https://www.webtekno.com", domain: "webtekno.com" },
  { name: "Hisse.net", url: "https://hisse.net", domain: "hisse.net" },
];

export default function Mediazone() {
  return (
    <section className="py-12 border-t border-primary-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-primary-400 mb-8 font-medium lg:hidden">
          Mediazone güvencesiyle
        </p>
        <p className="text-primary-400 mb-8 font-medium hidden lg:block">
          Türkiye&apos;nin en büyük dijital medya ağı Mediazone güvencesiyle
        </p>

        <div className="grid grid-cols-2 gap-2.5 lg:flex lg:flex-nowrap lg:justify-center lg:gap-3.5">
          {partners.map((partner) => (
            <a
              key={partner.domain}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website`}
              className="group flex items-center gap-2 py-3 px-3.5 bg-primary-50 border border-primary-200 rounded-xl transition-all duration-200 hover:border-accent-600 hover:bg-accent-100 hover:shadow-[0_4px_16px_rgba(212,175,55,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(212,175,55,0.2)] active:border-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 lg:gap-2.5 lg:py-3.5 lg:px-5"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=64`}
                alt={`${partner.name} logo`}
                className="w-7 h-7 rounded-md lg:w-9 lg:h-9 lg:rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-xs font-semibold text-primary-900 group-hover:text-accent-700 lg:text-[15px]">
                {partner.name}
              </span>
              <ExternalLink
                className="hidden lg:block w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 group-hover:text-accent-600 transition-opacity duration-200"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
