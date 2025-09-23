import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutFooter from "@/components/layout/LayoutFooter";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codec Travel | Khám phá Việt Nam",
  description:
    "Khám phá vẻ đẹp Việt Nam – Trải nghiệm trọn vẹn cùng Codec Travel. Tour du lịch độc đáo, văn hoá, ẩm thực và hành trình khám phá thiên nhiên.",
  keywords: [
    "Codec Travel",
    "du lịch Việt Nam",
    "tour du lịch",
    "khám phá",
    "văn hoá Việt Nam",
    "ẩm thực",
    "trải nghiệm",
  ],
  authors: [{ name: "Codec Travel Team" }],
  creator: "Codec Travel",
  publisher: "Codec Travel",
  openGraph: {
    title: "Codec Travel | Khám phá Việt Nam",
    description:
      "Khám phá vẻ đẹp Việt Nam – Trải nghiệm trọn vẹn cùng Codec Travel.",
    url: "https://codec-travel.com",
    siteName: "Codec Travel",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://codec-travel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codec Travel - Khám phá Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codec Travel | Khám phá Việt Nam",
    description:
      "Tour du lịch độc đáo, văn hoá và trải nghiệm thiên nhiên cùng Codec Travel.",
    images: ["https://codec-travel.com/og-image.jpg"],
    creator: "@CodecTravel",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://codec-travel.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
         <ReactQueryProvider>
          <header className="fixed top-0 left-0 right-0 z-[9999]">
            <LayoutHeader />
          </header>

          <main className="min-h-[calc(100vh-96px)] mt-[96px]">
            {children}
          </main>

          <footer>
            <LayoutFooter />
          </footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
