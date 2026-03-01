import HowItWorksTimeline from "./HowItWorksTimeline";

export default function HowItWorks() {
  return (
    <>
      <HowItWorksTimeline
        variant="brands"
        sectionLabel="Markalar İçin"
        title="Markalar İçin Nasıl Çalışır?"
        subtitle="Kayıt olun, mağazanızı bağlayın, kampanyanızı oluşturun ve büyümeye başlayın."
      />
      <HowItWorksTimeline
        variant="publishers"
        sectionLabel="Yayıncılar & Influencer'lar İçin"
        title="Yayıncılar İçin Nasıl Çalışır?"
        subtitle="Başvurun, onay alın, markaları keşfedin ve kazanmaya başlayın."
        className="border-t border-primary-200"
      />
    </>
  );
}
