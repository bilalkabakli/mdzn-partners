"use client";

import { useState } from "react";
import {
  Clock,
  Database,
  Zap,
  CreditCard,
  RotateCcw,
  Smartphone,
  Check,
  TrendingUp,
  Package,
  Settings,
  Shirt,
  Laptop,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import ScrollablePills from "./ScrollablePills";

const tabs = [
  { icon: Clock, label: "Gerçek Zamanlı Takip" },
  { icon: Database, label: "Backend Veri Toplama" },
  { icon: Zap, label: "Anında Entegrasyon" },
  { icon: CreditCard, label: "Otomatik Ödeme" },
  { icon: RotateCcw, label: "İptal/İade Yönetimi" },
  { icon: Smartphone, label: "Mobil Uygulama Takibi" },
];

function TabContent0() {
  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <Clock className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">Gerçek Zamanlı Takip</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">
        Hızlı takip ile tüm satışlarınızı anlık görün
      </p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        Geleneksel affiliate platformlarının aksine, satışlarınız saniyeler
        içinde dashboard&apos;unuzda görünür. Ay sonu Excel raporları
        beklemeden, anlık verilerle karar alın.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-primary-200 p-4 rounded-xl text-center">
            <p className="text-3xl font-extrabold text-primary-900">191K</p>
            <p className="text-xs text-primary-400 mt-1">Tıklama</p>
          </div>
          <div className="bg-white border border-primary-200 p-4 rounded-xl text-center">
            <p className="text-3xl font-extrabold text-success-600">235</p>
            <p className="text-xs text-primary-400 mt-1">Sipariş</p>
          </div>
          <div className="bg-white border border-primary-200 p-4 rounded-xl text-center">
            <p className="text-3xl font-extrabold text-accent-600">₺10,351</p>
            <p className="text-xs text-primary-400 mt-1">Kazanç</p>
          </div>
        </div>
        <div className="h-16 flex items-end gap-1">
          {[30, 45, 35, 60, 75, 50, 65, 80, 70, 85, 60, 75].map((h, i) => {
            const colors = [
              "bg-primary-200", "bg-primary-200", "bg-primary-300", "bg-primary-300",
              "bg-primary-400", "bg-primary-400", "bg-primary-500", "bg-primary-600",
              "bg-primary-700", "bg-primary-900", "bg-primary-500", "bg-primary-400",
            ];
            return <div key={i} className={`flex-1 ${colors[i]} rounded-t`} style={{ height: `${h}%` }} />;
          })}
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Satışlar saniyeler içinde dashboard&apos;da</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Tarih, kampanya, kategori, influencer bazlı filtreleme</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Günlük/haftalık/aylık trend grafikleri</li>
      </ul>
    </>
  );
}

function TabContent1() {
  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <Database className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">Backend Veri Toplama</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">%30&apos;a varan takip kaybını önleyin</p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        GTM snippet&apos;leri yerine SDK tabanlı tracking kullanıyoruz. Server-side veri toplama sayesinde verileriniz güvende ve eksiksiz.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary-600 font-medium">Takip Doğruluğu</span>
          <span className="text-3xl font-extrabold text-success-600">%95+</span>
        </div>
        <div className="w-full bg-primary-200 rounded-full h-4 overflow-hidden">
          <div className="bg-success-600 h-4 rounded-full" style={{ width: "95%" }} />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-error-100 border border-error-100 p-4 rounded-xl">
            <p className="text-sm text-error-600 font-semibold">Geleneksel GTM</p>
            <p className="text-2xl font-extrabold text-error-600 mt-1">~70%</p>
          </div>
          <div className="bg-success-100 border border-success-100 p-4 rounded-xl">
            <p className="text-sm text-success-600 font-semibold">MDZN SDK</p>
            <p className="text-2xl font-extrabold text-success-600 mt-1">%95+</p>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />SDK tabanlı tracking (GTM değil)</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />API ve Excel ile server-side bağlantı</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Log sistemi ile kayıp raporları ve audit desteği</li>
      </ul>
    </>
  );
}

function TabContent2() {
  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <Zap className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">Anında Entegrasyon</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">Hazır ve özel entegrasyonlar için tek adres</p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        Popüler e-ticaret platformlarıyla hazır entegrasyonlar sunuyoruz. Özel altyapınız mı var? Sorun değil - tüm entegrasyon sürecini biz yönetiyoruz.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-primary-200 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-6 h-6 text-primary-900" />
              <span className="font-semibold">Hazır Entegrasyonlar</span>
            </div>
            <p className="text-sm text-primary-500">Popüler platformlarla anında başlayın</p>
            <div className="flex gap-2 mt-4">
              {["İkas", "Shopify", "Ticimax"].map((n) => (
                <span key={n} className="px-2 py-1 bg-primary-100 rounded text-xs font-medium">{n}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-primary-200 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-primary-900" />
              <span className="font-semibold">Özel Entegrasyonlar</span>
            </div>
            <p className="text-sm text-primary-500">Tüm kurulumu biz yapıyoruz</p>
            <div className="flex gap-2 mt-4">
              {["SDK", "API", "Webhook"].map((n) => (
                <span key={n} className="px-2 py-1 bg-primary-100 rounded text-xs font-medium">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Hazır platform entegrasyonları</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Özel altyapılar için tam destek</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Tüm teknik kurulum bizden</li>
      </ul>
    </>
  );
}

function TabContent3() {
  const categories = [
    { icon: Shirt, label: "Moda", rate: "%8 komisyon", bgColor: "bg-pink-100", iconColor: "text-pink-600" },
    { icon: Laptop, label: "Elektronik", rate: "%5 komisyon", bgColor: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: Sparkles, label: "Kozmetik", rate: "%12 komisyon", bgColor: "bg-rose-100", iconColor: "text-rose-600" },
  ];

  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <CreditCard className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">Otomatik Ödeme</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">Komisyonlar otomatik hesaplanır, ödemeler zamanında yapılır</p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        Kategori bazlı komisyon oranları tanımlayın, sistem her satış için otomatik hesaplasın. Tüm taraflar kazançlarını şeffaf şekilde takip edebilir.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="space-y-3">
          {categories.map(({ icon: Icon, label, rate, bgColor, iconColor }) => (
            <div key={label} className="flex justify-between items-center p-4 bg-white border border-primary-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${iconColor}`} />
                </div>
                <span className="text-primary-600 font-medium">{label}</span>
              </div>
              <span className="font-bold text-accent-700">{rate}</span>
            </div>
          ))}
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Kategori bazlı komisyon oranları</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Her satış için otomatik hesaplama</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Şeffaf kazanç dashboard&apos;u</li>
      </ul>
    </>
  );
}

function TabContent4() {
  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <RotateCcw className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">İptal/İade Yönetimi</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">İptal ve iadeler otomatik olarak komisyonlara yansır</p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        Sistem iptal edilen siparişleri otomatik algılar. İadeler takip edilir ve komisyonlardan düşülür. &apos;Beklemede&apos; ve &apos;Kazanıldı&apos; durumları net görünür.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-warning-100 border border-warning-100 p-5 rounded-xl text-center">
            <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3 border border-warning-600/20">
              <Clock className="w-6 h-6 text-warning-600" />
            </div>
            <p className="text-3xl font-extrabold text-warning-600">₺2,450</p>
            <p className="text-sm text-primary-500 mt-1">Beklemede</p>
          </div>
          <div className="bg-success-100 border border-success-100 p-5 rounded-xl text-center">
            <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3 border border-success-600/20">
              <CheckCircle className="w-6 h-6 text-success-600" />
            </div>
            <p className="text-3xl font-extrabold text-success-600">₺8,120</p>
            <p className="text-sm text-primary-500 mt-1">Kazanıldı</p>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Otomatik iptal algılama</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />İade takibi ve düşümü</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Net &apos;Beklemede&apos; vs &apos;Kazanıldı&apos; durumu</li>
      </ul>
    </>
  );
}

function TabContent5() {
  return (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-accent-100 rounded-xl">
          <Smartphone className="w-6 h-6 text-accent-700" />
        </div>
        <h3 className="text-2xl font-bold">Mobil Uygulama Takibi</h3>
      </div>
      <p className="text-accent-700 font-semibold mb-4">iOS ve Android uygulamalarınız için affiliate kampanyaları</p>
      <p className="text-primary-500 mb-8 leading-relaxed">
        Affiliate linklerinden uygulama yüklemelerini takip edin. Adjust &amp; Appsflyer entegrasyonu. İlk kez alıcılar ve kayıtlar için bounty sistemi.
      </p>
      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
        <div className="flex items-center justify-center gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 border border-orange-200 rounded-2xl flex items-center justify-center mb-3 mx-auto">
              <span className="font-extrabold text-orange-600 text-xl">AD</span>
            </div>
            <p className="text-primary-600 font-medium">Adjust</p>
          </div>
          <div className="w-px h-16 bg-primary-200" />
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 border border-blue-200 rounded-2xl flex items-center justify-center mb-3 mx-auto">
              <span className="font-extrabold text-blue-600 text-xl">AF</span>
            </div>
            <p className="text-primary-600 font-medium">Appsflyer</p>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Uygulama yüklemesi takibi</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />Adjust &amp; Appsflyer entegrasyonu</li>
        <li className="flex items-center gap-3 text-primary-600"><Check className="w-5 h-5 text-success-600" />İlk alıcı/kayıt bounty sistemi</li>
      </ul>
    </>
  );
}

const tabContents = [TabContent0, TabContent1, TabContent2, TabContent3, TabContent4, TabContent5];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveContent = tabContents[activeTab];

  return (
    <section className="py-10 lg:py-16 bg-primary-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-1px] mb-4">
            Neden MDZN Partners?
          </h2>
          <p className="text-primary-500 text-lg font-medium max-w-2xl mx-auto">
            Affiliate pazarlamanın geleceğini bugünden deneyimleyin
          </p>
        </div>

        {/* Mobile: Horizontal scrollable pills */}
        <ScrollablePills
          tabs={tabs.map(({ icon: Icon, label }) => ({
            icon: <Icon className="w-4 h-4" />,
            label,
          }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Vertical Tabs — desktop only */}
          <div className="hidden lg:block lg:col-span-4 space-y-2" role="tablist" aria-label="Özellikler">
            {tabs.map(({ icon: Icon, label }, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`feature-tab w-full text-left p-5 rounded-xl flex items-center gap-4 ${
                  activeTab === index ? "active" : ""
                }`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`feature-panel-${index}`}
                id={`feature-tab-${index}`}
              >
                <div className="tab-icon p-3 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold">{label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div
              className="bg-white border border-primary-200 rounded-2xl p-8 shadow-lg lg:min-h-[640px]"
              role="tabpanel"
              id={`feature-panel-${activeTab}`}
              aria-labelledby={`feature-tab-${activeTab}`}
            >
              <ActiveContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
