import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutFooter from "@/components/layout/LayoutFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codec Travel",
  description: "Khám phá Việt Nam – Trải nghiệm trọn vẹn cùng Codec Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-[9999]">
          <LayoutHeader />
        </header>

        <main className="min-h-[calc(100vh-96px)] mt-[96px]">
          {children}
        </main>

        <footer>
          <LayoutFooter />
        </footer>
      </body>
    </html>
  );
}
