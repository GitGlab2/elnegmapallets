import type { Metadata } from "next";
import ServicesList from "@/pages/ServicesList";

export const metadata: Metadata = {
  title: "خدمات تصنيع وتوريد البالتات والتعقيم الحراري | شركة النجمة",
  description: "خدمات شركة النجمة لتصنيع وتوريد البالتات الخشبية، المعالجة الحرارية ISPM-15 للتصدير، توريد كميات المصانع، والتصنيع بمواصفات هندسية خاصة.",
  keywords: ["خدمات بالتات", "معالجة حرارية بالتات", "توريد بالتات للمصانع", "ISPM-15 مصر", "صناديق خشب تصدير"],
  alternates: {
    canonical: "https://elnegmapallets.com/services/",
    languages: {
      "ar": "https://elnegmapallets.com/services/",
      "en": "https://elnegmapallets.com/en/services/",
      "x-default": "https://elnegmapallets.com/services/",
    },
  },
};

export default function Page() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://elnegmapallets.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "خدمات تصنيع وتوريد البالتات",
        "item": "https://elnegmapallets.com/services/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesList lang="ar" />
    </>
  );
}
