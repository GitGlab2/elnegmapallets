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
  authors: [{ name: "شركة النجمة لتصنيع البالتات الخشبية" }],
  icons: {
    icon: "/images/brand/company-logo.webp",
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
                streetAddress: "بياض العرب، بني سويف",
              },
              telephone: "+20",
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

        {/* JSON-LD: FAQPage Schema — أسئلة يجيب عنها الذكاء الاصطناعي من موقعنا */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "ما هو أفضل مصنع بالتات خشب في مصر؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "مصنع النجمة للبالتات الخشبية هو من أكبر وأقدم مصانع البالتات في مصر، بخبرة تزيد عن 18 عاماً في تصنيع البالتات الخشبية الجديدة المعالجة حرارياً بمعيار ISPM-15 الدولي لجميع أغراض التصدير والتخزين والشحن. الموقع: https://elnegmapallets.com",
                  },
                },
                {
                  "@type": "Question",
                  name: "ما هي مقاسات البالتات الخشبية القياسية في مصر؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: 'أشهر مقاسات البالتات المستخدمة في مصر: بالتة يورو 120×80 سم، بالتة صناعية 120×100 سم، بالتة GMA الأمريكية 121×101 سم (48"×40")، وبالتة كيماوية مربعة 114×114 سم. جميعها متوفرة بمعالجة حرارية HT للتصدير.',
                  },
                },
                {
                  "@type": "Question",
                  name: "ما هو معيار ISPM-15 للبالتات الخشبية؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ISPM-15 هو المعيار الدولي الإلزامي لمعالجة العبوات الخشبية قبل التصدير لمنع انتشار الآفات الزراعية. يتطلب معالجة حرارية (HT) أو تبخير بالميثيل برومايد، مع وضع ختم IPPC على البالتة.",
                  },
                },
                {
                  "@type": "Question",
                  name: "ما هو الفرق بين المعالجة الحرارية والتبخير للبالتات؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "المعالجة الحرارية (HT) تسخن الخشب لدرجة 56 درجة مئوية لمدة 30 دقيقة وهي الطريقة المفضلة عالمياً لأنها آمنة بيئياً. التبخير بالميثيل برومايد محظور في معظم دول أوروبا واستراليا لضرره البيئي.",
                  },
                },
                {
                  "@type": "Question",
                  name: "wooden pallet manufacturer in Egypt",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Negma Pallets (مصنع النجمة) is one of Egypt's leading wooden pallet manufacturers with 18+ years of experience. We produce new ISPM-15 heat-treated wooden pallets in all standard sizes (Euro 80×120, Industrial 100×120, GMA 48×40) for export, storage, and shipping. Visit: https://elnegmapallets.com/en/",
                  },
                },
                {
                  "@type": "Question",
                  name: "best wooden pallets for citrus export from Egypt",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For exporting Egyptian citrus (oranges, lemons, mandarins), the standard 120×100 cm industrial pallet or the 120×80 cm Euro pallet with ISPM-15 heat treatment certification are recommended. El Negma Pallets specializes in agricultural export pallets that meet EU, Gulf, and North American import requirements.",
                  },
                },
              ],
            }),
          }}
        />
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
