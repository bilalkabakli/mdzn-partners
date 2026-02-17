import { Map } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="hidden md:block py-16 bg-primary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">
          Konumlarımız
        </h2>

        <div className="bg-white border border-primary-200 rounded-[20px] overflow-hidden h-80 flex items-center justify-center shadow-sm">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Map className="w-10 h-10 text-primary-400" />
            </div>
            <p className="text-primary-400 font-medium">Harita</p>
          </div>
        </div>
      </div>
    </section>
  );
}
