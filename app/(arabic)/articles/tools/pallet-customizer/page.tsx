import type { Metadata } from "next";
import ToolPalletCustomizer from "@/pages/ToolPalletCustomizer";

export const metadata: Metadata = {
  title: "مخصص البالتات الهندسية B2B | شركة النجمة للبالتات الخشبية",
  description: "حدد المواصفات الفنية والهندسية المطلوبة للبالتات (الأبعاد، السماكة، الحمولة) لطلب عرض سعر دقيق لشركتك عبر أداة تخصيص البالتات.",
  keywords: ["تحديد مواصفات البالتات", "تصميم البالتات", "البالتات الخشبية مصر", "عروض أسعار بالتات"],
  alternates: {
    canonical: "https://elnegmapallets.com/articles/tools/pallet-customizer/",
    languages: {
      "ar": "https://elnegmapallets.com/articles/tools/pallet-customizer/",
      "en": "https://elnegmapallets.com/en/articles/tools/pallet-customizer/",
      "x-default": "https://elnegmapallets.com/articles/tools/pallet-customizer/",
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
      { "@type": "ListItem", "position": 4, "name": "مخصص البالتات", "item": "https://elnegmapallets.com/articles/tools/pallet-customizer/" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }}
      />
      <ToolPalletCustomizer lang="ar" />
    </>
  );
}
