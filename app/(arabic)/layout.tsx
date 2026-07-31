import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/index.css"; // Resolves to client/src/index.css

// Import providers and layout components from client/src
import LayoutClient from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elnegmapallets.com"),
  title: "شركة النجمة لتصنيع البالتات الخشبية | الشركة رقم 1 في مصر",
  description:
    "شركة النجمة لتصنيع البالتات الخشبية - الشركة رقم 1 في مصر. خبرة 18 عامًا في تصنيع البالتات عالية الجودة للتصدير والسوق المحلي والمعالجة الحرارية HT.",
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
  icons: {
    icon: "/images/brand/company-logo.webp",
  },
  alternates: {
    canonical: "https://elnegmapallets.com/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/",
      "en": "https://elnegmapallets.com/en/",
      "x-default": "https://elnegmapallets.com/",
    },
  },
  openGraph: {
    type: "website",
    title: "شركة النجمة لتصنيع البالتات الخشبية",
    description:
      "الشركة رقم 1 في مصر - خبرة 18 عامًا في تصنيع البالتات عالية الجودة والمعالجة الحرارية للتصدير.",
    images: ["/images/brand/company-logo.webp"],
    url: "https://elnegmapallets.com/",
    siteName: "شركة النجمة للبالتات الخشبية",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة النجمة لتصنيع البالتات الخشبية | الشركة رقم 1 في مصر",
    description:
      "خبرة 18 عامًا في تصنيع البالتات عالية الجودة والمعالجة الحرارية HT للتصدير والسوق المحلي.",
    images: ["/images/brand/company-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`} suppressHydrationWarning>
      <head>
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="EG-BNS" />
        <meta name="geo.placename" content="Beni Suef, Egypt" />
        <meta name="geo.position" content="29.0661;31.0980" />
        <meta name="ICBM" content="29.0661, 31.0980" />
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
              name: "شركة النجمة للبالتات الخشبية",
              alternateName: "El Negma Pallets",
              url: "https://elnegmapallets.com",
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
                streetAddress: "المنطقة الصناعية، بياض العرب، بني سويف",
                postalCode: "62721",
              },
              hasMap: "https://www.google.com/maps?cid=16821078517981758662",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.0661",
                longitude: "31.0980",
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
              sameAs: ["https://facebook.com/negma.wood"],
            }),
          }}
        />
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <GoogleAnalytics />
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
