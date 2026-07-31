import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import IntroScreen from "@/components/intro-screen";
import "./globals.css";
import FloatingWhatsapp from "../components/floating-whatsapp";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title:
    "Verona Elektrik Enerji | Yenilenebilir Enerji ve Güneş Enerjisi Çözümleri",
  description:
    "Çatı GES, Arazi GES, sulama sistemleri, araç şarj istasyonları ve daha fazlası. Anahtar teslim güneş enerjisi santralleri ve teknik servis çözümleri.",
  generator: "v0.app",
  keywords: [
    "güneş enerjisi",
    "GES",
    "çatı GES",
    "arazi GES",
    "yenilenebilir enerji",
    "solar panel",
  ],
};

export const viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <IntroScreen />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsapp />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
