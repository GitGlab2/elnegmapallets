import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/index.css"; // Resolves to client/src/index.css

// Import providers and layout components from client/src
import LayoutClient from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "شركة النجمة لتصنيع البالتات الخشبية | الشركة رقم 1 في مصر",
  description: "شركة النجمة لتصنيع البالتات الخشبية - الشركة رقم 1 في مصر. خبرة 18 عامًا في تصنيع البالتات عالية الجودة للتصدير والسوق المحلي والمعالجة الحرارية HT.",
  keywords: ["بالتات خشبية", "pallets", "تصنيع بالتات", "شركة النجمة", "بالتات مصر", "wooden pallets", "HT treatment", "معالجة حرارية", "بياض العرب", "بني سويف"],
  authors: [{ name: "شركة النجمة لتصنيع البالتات الخشبية" }],
  icons: {
    icon: "/images/brand/company-logo.webp",
  },
  openGraph: {
    type: "website",
    title: "شركة النجمة لتصنيع البالتات الخشبية",
    description: "الشركة رقم 1 في مصر - خبرة 18 عامًا في تصنيع البالتات عالية الجودة والمعالجة الحرارية للتصدير.",
    images: ["/images/brand/company-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <head>
        <link rel="preload" as="image" type="image/webp" href="/images/pallet-hero-detail-mobile.webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" type="image/webp" href="/images/pallet-hero-detail.webp" media="(min-width: 769px)" fetchPriority="high" />
      </head>
      <body className={cairo.className}>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <LayoutClient>{children}</LayoutClient>
            </TooltipProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
