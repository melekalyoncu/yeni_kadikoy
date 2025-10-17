import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Providers from "./components/providers/Providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kadıköy Spor Kulübü",
  description: "Kadıköy Spor Kulübü - Voleybol, Basketbol, Okçuluk",
  openGraph: {
    title: "Kadıköy Spor Kulübü",
    description: "Voleybol, Basketbol ve Okçulukta modern tesisler, güçlü altyapı.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full min-h-screen flex flex-col
        bg-white text-slate-900`}
      >
        {/* Skip link (erişilebilirlik) */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50
                     bg-white text-slate-900 px-3 py-2 rounded-lg shadow"
        >
          İçeriğe atla
        </a>

        <Providers>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
