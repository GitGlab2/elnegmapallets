import type { Metadata } from "next";
import ToolContainerCalculator from "@/pages/ToolContainerCalculator";

export const metadata: Metadata = {
  title: "حاسبة استيعاب الحاويات | شركة النجمة للبالتات الخشبية",
  description: "احسب السعة التحميلية المثلى لحاويات 20 قدم و 40 قدم للبالتات الخشبية لضمان كفاءة الشحن والتصدير عبر أداة حاسبة الحاويات.",
  keywords: ["حاسبة الحاويات", "استيعاب الحاويات 40 قدم", "البالتات الخشبية مصر", "شحن الحاويات"],
  alternates: {
    canonical: "https://elnegmapallets.com/articles/tools/container-calculator/",
    languages: {
      "ar": "https://elnegmapallets.com/articles/tools/container-calculator/",
      "en": "https://elnegmapallets.com/en/articles/tools/container-calculator/",
      "x-default": "https://elnegmapallets.com/articles/tools/container-calculator/",
    },
  },
};

export default function Page() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://elnegmapallets.com/" },
      { "@type": "ListItem", "position": 2, "name": "المدونة", "item": "https://elnegmapallets.com/articles/" },
      { "@type": "ListItem", "position": 3, "name": "الأدوات", "item": "https://elnegmapallets.com/articles/tools/" },
      { "@type": "ListItem", "position": 4, "name": "حاسبة الحاويات", "item": "https://elnegmapallets.com/articles/tools/container-calculator/" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }}
      />
      <ToolContainerCalculator lang="ar" />
    </>
  );
}
