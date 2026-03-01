import {
  User,
  Zap,
  Sliders,
  TrendingUp,
  UserPlus,
  ShieldCheck,
  Search,
  Wallet,
} from "lucide-react";
import HowItWorksTimeline from "./HowItWorksTimeline";
import type { TimelineStep } from "./HowItWorksTimeline";

const brandsSteps: TimelineStep[] = [
  {
    num: 1,
    title: "Hesap Oluşturun",
    desc: "Ücretsiz hesabınızı dakikalar içinde açın. Kredi kartı gerekmez.",
    icon: User,
    tags: [
      { label: "Ücretsiz başlangıç", colorClass: "tag-green" },
      { label: "2 dakika", colorClass: "tag-gray" },
    ],
  },
  {
    num: 2,
    title: "Mağazanızı Bağlayın",
    desc: "İkas, Shopify veya Ticimax ile tek tıkla entegrasyon. Farklı altyapı? Biz hallederiz.",
    icon: Zap,
    tags: [
      { label: "Otomatik kurulum", colorClass: "tag-gold" },
      { label: "5 dakika", colorClass: "tag-gray" },
    ],
  },
  {
    num: 3,
    title: "Kampanya Oluşturun",
    desc: "Komisyon oranlarınızı belirleyin, ürün kategorilerini seçin.",
    icon: Sliders,
    tags: [{ label: "Esnek komisyonlar", colorClass: "tag-purple" }],
  },
  {
    num: 4,
    title: "Büyümeye Başlayın",
    desc: "Influencer\u2019lar ve yayıncılar kampanyalarınızı keşfeder. Gerçek zamanlı takip.",
    icon: TrendingUp,
    tags: [{ label: "Anlık raporlama", colorClass: "tag-green" }],
  },
];

const publisherSteps: TimelineStep[] = [
  {
    num: 1,
    title: "Başvurun",
    desc: "Online başvuru formunu doldurun. Sosyal medya hesaplarınızı belirtin.",
    icon: UserPlus,
    tags: [
      { label: "Herkese açık", colorClass: "tag-gold" },
      { label: "3 dakika", colorClass: "tag-gray" },
    ],
  },
  {
    num: 2,
    title: "Onay Alın",
    desc: "Başvurunuz incelenir ve 24 saat içinde size dönüş yapılır.",
    icon: ShieldCheck,
    tags: [{ label: "Hızlı onay", colorClass: "tag-green" }],
  },
  {
    num: 3,
    title: "Markaları Keşfedin",
    desc: "Sizin için uygun kampanyaları bulun. Kategori veya marka türüne göre filtreleyin.",
    icon: Search,
    tags: [{ label: "Gelişmiş filtreleme", colorClass: "tag-gold" }],
  },
  {
    num: 4,
    title: "Kazanmaya Başlayın",
    desc: "Linklerinizi paylaşın, satış yapın, komisyon kazanın. Anlık takip edin.",
    icon: Wallet,
    tags: [{ label: "Güvenli ödeme", colorClass: "tag-green" }],
  },
];

export default function HowItWorks() {
  return (
    <>
      <HowItWorksTimeline
        variant="brands"
        sectionLabel="Markalar İçin"
        title="Markalar İçin Nasıl Çalışır?"
        subtitle="Kayıt olun, mağazanızı bağlayın, kampanyanızı oluşturun ve büyümeye başlayın."
        steps={brandsSteps}
      />
      <HowItWorksTimeline
        variant="publishers"
        sectionLabel="Yayıncılar & Influencer'lar İçin"
        title="Yayıncılar İçin Nasıl Çalışır?"
        subtitle="Başvurun, onay alın, markaları keşfedin ve kazanmaya başlayın."
        steps={publisherSteps}
        className="border-t border-primary-200"
      />
    </>
  );
}
