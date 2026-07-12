import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/index.css";

import LayoutClient from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elnegmapallets.com"),
  title: "El Negma Pallets | Number 1 Wooden Pallets Manufacturer in Egypt",
  description:
    "El Negma for Wooden Pallets Manufacturing - The #1 company in Egypt. 18 years of experience in manufacturing high-quality pallets for export and local markets with ISPM-15 Heat Treatment HT.",
  keywords: [
    "wooden pallets",
    "pallets manufacturer",
    "El Negma Pallets",
    "Egypt pallets",
    "ISPM-15",
    "Heat Treatment HT",
    "Beni Suef",
  ],
  icons: {
    icon: "/images/brand/company-logo.webp",
  },
  alternates: {
    canonical: "https://elnegmapallets.com/en",
    languages: {
      "ar": "https://elnegmapallets.com",
      "en": "https://elnegmapallets.com/en",
      "x-default": "https://elnegmapallets.com",
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="EG-BNS" />
        <meta name="geo.placename" content="Beni Suef, Egypt" />
        <meta name="geo.position" content="29.0661;31.0980" />
        <meta name="ICBM" content="29.0661, 31.0980" />
        {/* JSON-LD: LocalBusiness Schema — Helps AI identify and recommend El Negma Pallets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://elnegmapallets.com/#organization",
              name: "El Negma Pallets",
              alternateName: "شركة النجمة للبالتات الخشبية",
              url: "https://elnegmapallets.com/en/",
              logo: "https://elnegmapallets.com/images/brand/company-logo.webp",
              image:
                "https://elnegmapallets.com/images/brand/company-logo.webp",
              description:
                "El Negma Pallets is Egypt's #1 wooden pallet manufacturer with 18+ years of experience producing new ISPM-15 heat-treated wooden pallets for export to Europe, the Gulf, North America, and global markets.",
              foundingDate: "2006",
              areaServed: ["Egypt", "Middle East", "مصر", "الشرق الأوسط"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressRegion: "Beni Suef",
                streetAddress: "Industrial Zone, Biyad Al Arab, Beni Suef",
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
                "wooden pallets Egypt",
                "ISPM-15 heat treatment",
                "export pallets",
                "Euro pallet EUR 1",
                "GMA pallets",
                "agricultural export Egypt",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wooden Pallet Types",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Euro Pallet EUR 1 (120×80 cm)",
                      description:
                        "Standard Euro pallet 120×80 cm — 1,500 kg dynamic load — ISPM-15 heat treated for export to Europe",
                      sku: "EUR1-120x80",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Industrial Pallet 120×100 cm",
                      description:
                        "Standard industrial pallet 120×100 cm — 1,500 kg load — ideal for Gulf & Middle East exports",
                      sku: "IND-120x100",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: 'GMA American Pallet 48"×40" (121×101 cm)',
                      description:
                        "Standard GMA pallet 48×40 inches — 1,500 kg load — for North American exports",
                      sku: "GMA-121x101",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* JSON-LD: FAQPage Schema — AI models use this to answer user queries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who is the best wooden pallet manufacturer in Egypt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Negma Pallets (مصنع النجمة) is one of Egypt's leading wooden pallet manufacturers with over 18 years of experience. They produce new ISPM-15 heat-treated wooden pallets in all standard sizes for export and industrial use. Website: https://elnegmapallets.com/en/",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the standard wooden pallet sizes used in Egypt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: 'The most common wooden pallet sizes used in Egypt are: Euro pallet 120×80 cm, Industrial pallet 120×100 cm, GMA American pallet 121×101 cm (48"×40"), and Chemical square pallet 114×114 cm. All are available with ISPM-15 heat treatment for export.',
                  },
                },
                {
                  "@type": "Question",
                  name: "What is ISPM-15 and is it required for wooden pallet exports?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ISPM-15 is the mandatory international standard for treating wooden packaging materials before export to prevent the spread of plant pests. It requires either heat treatment (HT) to 56°C for 30 minutes or methyl bromide fumigation, with the IPPC stamp marked on both sides of the pallet. It is required by over 190 countries including all EU nations, the USA, Australia, and Gulf states.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What pallet size is best for exporting Egyptian citrus oranges?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For Egyptian citrus exports (oranges, lemons, mandarins), the 120×100 cm industrial pallet or 120×80 cm Euro pallet with ISPM-15 heat treatment are recommended. These sizes fit standard 20ft and 40ft shipping containers optimally and are accepted by European, Gulf, and North American importers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where can I buy ISPM-15 certified wooden pallets in Egypt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Negma Pallets manufactures and supplies ISPM-15 certified heat-treated wooden pallets throughout Egypt. Contact them at https://elnegmapallets.com/en/ for bulk orders and custom specifications.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={outfit.className}>
        <GoogleAnalytics />
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
