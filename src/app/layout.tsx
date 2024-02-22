import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin ve Kripto Satın Alın | Kripto Borsası, Kripto Uygulaması, Kripto Cüzdanı | OKX",
  description: "Lider kripto borsası OKX’ten BTC, ETH, XRP ve daha fazlasını satın alın, Web3’ü keşfedin, DeFi ve NFT yatırımları yapın. Şimdi kaydolun, finansın geleceğini deneyimleyin.",
  keywords:"BTC, BTC İşlem Platformu, ETH, EOS, Qtum, NEO, Ripple, BTC Fiyatı, LTC, BCH, ETC, Blok Zinciri"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
