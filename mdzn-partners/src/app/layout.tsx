import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MDZN Partners - Affiliate Pazarlamanın Yeni Nesil Platformu",
  description:
    "Markalar, influencer'lar ve yayıncıları tek platformda buluşturun. Gerçek zamanlı raporlama, güvenli ödemeler, sıfır manuel iş.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ModalProvider>
          <a href="#main-content" className="skip-to-content">
            İçeriğe geç
          </a>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
