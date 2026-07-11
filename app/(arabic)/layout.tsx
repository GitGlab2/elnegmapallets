import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/index.css"; // Resolves to client/src/index.css
import { SITE_CONFIG, getAbsoluteUrl } from "@/lib/site-config";

// Import providers and layout components from client/src
import LayoutClient from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: "شركة النجمة لتصنيع البالتات الخشبية | الشركة رقم 1 في مصر",
  description:
    "شركة النجمة لتصنيع البالتات الخشبية - الشركة رقم 1 في مصر. خبرة 18 عامًا in تصنيع البالتات عالية الجودة للتصدير والسوق المحلي والمعالجة الحرارية HT.",
  keywords: [
    "بالتات خشبية",
    "pallets",
    "تصنيع بالتات",
    "شركة النجمة",
    "بالتات مصر",
    "wooden pallets",
    "HT treatment",
    "معالجة حرارية",
    "بياض العرب",
    "بني سويف",
  ],
  authors: [{ name: "شركة النجمة لتصنيع البالتات الخشبية" }],
  icons: {
    icon: "/images/brand/company-logo.webp",
  },
  alternates: {
    canonical: getAbsoluteUrl("/"),
    languages: {
      "ar": getAbsoluteUrl("/"),
      "en": getAbsoluteUrl("/en/"),
      "x-default": getAbsoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    title: "شركة النجمة لتصنيع البالتات الخشبية",
    description:
      "الشركة رقم 1 في مصر - خبرة 18 عامًا في تصنيع البالتات عالية الجودة والمعالجة الحرارية للتصدير.",
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
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/pallet-hero-detail-mobile.webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/pallet-hero-detail.webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />

        {/* JSON-LD: LocalBusiness Schema — يساعد الذكاء الاصطناعي على التعرف على الشركة */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://elnegmapallets.com/#organization",
              name: "مصنع النجمة للبالتات الخشبية",
              alternateName: "El Negma Pallets",
              url: "https://elnegmapallets.com/",
              logo: "https://elnegmapallets.com/images/brand/company-logo.webp",
              image:
                "https://elnegmapallets.com/images/brand/company-logo.webp",
              description:
                "مصنع النجمة للبالتات الخشبية — الشركة رقم 1 في مصر لتصنيع البالتات الخشبية الجديدة والمعالجة حرارياً بختم ISPM-15. خبرة 18 عاماً في خدمة المصانع والمصدرين في مصر والشرق الأوسط.",
              foundingDate: "2006",
              areaServed: ["مصر", "الشرق الأوسط", "Egypt", "Middle East"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressRegion: "Beni Suef",
                streetAddress: "بياض العرب، بني سويف",
              },
              telephone: "+201080012261",
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-18:00",
              knowsAbout: [
                "بالتات خشبية",
                "wooden pallets",
                "معالجة حرارية ISPM-15",
                "heat treatment HT",
                "تصدير زراعي مصر",
                "شحن بضائع دولي",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "أنواع البالتات الخشبية",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "بالتة يورو EUR 1",
                      description:
                        "البالتة اليورو القياسية 120×80 سم — حمولة 1500 كجم — معالجة حرارية HT للتصدير لأوروبا",
                      sku: "EUR1-120x80",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "بالتة صناعية 120×100 سم",
                      description:
                        "البالتة الصناعية القياسية 120×100 سم — حمولة 1500 كجم — مثالية للتصدير للخليج والشرق الأوسط",
                      sku: "IND-120x100",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "بالتة GMA الأمريكية 121×101 سم",
                      description:
                        "بالتة GMA المعيارية 48×40 بوصة — حمولة 1500 كجم — للتصدير لأمريكا الشمالية",
                      sku: "GMA-121x101",
                    },
                  },
                ],
              },
              sameAs: ["https://github.com/GitGlab2/elnegmapallets"],
            }),
          }}
        />
        {/* FAQ Schema is removed temporarily as it has no corresponding visible content on the pages */}
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
