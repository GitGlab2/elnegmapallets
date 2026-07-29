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
    canonical: "https://elnegmapallets.com/en/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/",
      "en": "https://elnegmapallets.com/en/",
      "x-default": "https://elnegmapallets.com/",
    },
  },
  openGraph: {
    type: "website",
    title: "El Negma Pallets | #1 Wooden Pallets Manufacturer in Egypt",
    description:
      "18+ years of experience manufacturing high-quality ISPM-15 heat-treated wooden pallets for export and local markets across Egypt and the Middle East.",
    images: ["/images/brand/company-logo.webp"],
    url: "https://elnegmapallets.com/en/",
    siteName: "El Negma Pallets",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Negma Pallets | #1 Wooden Pallets Manufacturer in Egypt",
    description:
      "18+ years of experience manufacturing high-quality ISPM-15 heat-treated wooden pallets for export and local markets.",
    images: ["/images/brand/company-logo.webp"],
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
                    url: "https://elnegmapallets.com/en/products/120x80-euro-pallet/",
                    priceCurrency: "EGP",
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                    itemOffered: {
                      "@type": "Product",
                      name: "Euro Pallet EUR 1 (120×80 cm)",
                      description:
                        "Standard Euro pallet 120×80 cm — 1,500 kg dynamic load — ISPM-15 heat treated for export to Europe",
                      sku: "EUR1-120x80",
                      offers: {
                        "@type": "Offer",
                        url: "https://elnegmapallets.com/en/products/120x80-euro-pallet/",
                        priceCurrency: "EGP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.9",
                        reviewCount: "128",
                        "bestRating": "5",
                        "worstRating": "1",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://elnegmapallets.com/en/products/120x100-industrial-pallet/",
                    priceCurrency: "EGP",
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                    itemOffered: {
                      "@type": "Product",
                      name: "Industrial Pallet 120×100 cm",
                      description:
                        "Standard industrial pallet 120×100 cm — 1,500 kg load — ideal for Gulf & Middle East exports",
                      sku: "IND-120x100",
                      offers: {
                        "@type": "Offer",
                        url: "https://elnegmapallets.com/en/products/120x100-industrial-pallet/",
                        priceCurrency: "EGP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.9",
                        reviewCount: "128",
                        "bestRating": "5",
                        "worstRating": "1",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://elnegmapallets.com/en/products/121x101-gma-pallet/",
                    priceCurrency: "EGP",
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                    itemOffered: {
                      "@type": "Product",
                      name: 'GMA American Pallet 48"×40" (121×101 cm)',
                      description:
                        "Standard GMA pallet 48×40 inches — 1,500 kg load — for North American exports",
                      sku: "GMA-121x101",
                      offers: {
                        "@type": "Offer",
                        url: "https://elnegmapallets.com/en/products/121x101-gma-pallet/",
                        priceCurrency: "EGP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.9",
                        reviewCount: "128",
                        "bestRating": "5",
                        "worstRating": "1",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />

      </head>
      <body className={outfit.className} suppressHydrationWarning>
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
