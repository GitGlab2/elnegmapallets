import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/index.css";

import LayoutClient from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "El Negma Pallets | Number 1 Wooden Pallets Manufacturer in Egypt",
  description: "El Negma for Wooden Pallets Manufacturing - The #1 company in Egypt. 18 years of experience in manufacturing high-quality pallets for export and local markets with ISPM-15 Heat Treatment HT.",
  keywords: ["wooden pallets", "pallets manufacturer", "El Negma Pallets", "Egypt pallets", "ISPM-15", "Heat Treatment HT", "Beni Suef"],
  icons: {
    icon: "/images/brand/company-logo.webp",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${outfit.variable}`}>
      <body className={outfit.className}>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <LayoutClient lang="en">{children}</LayoutClient>
            </TooltipProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
