import type { Metadata } from "next";
import ToolsPage from "@/pages/ToolsPage";

export const metadata: Metadata = {
  title: "أدوات وحاسبات البالتات والحاويات | شركة النجمة للبالتات الخشبية",
  description: "أدوات تفاعلية هندسية لمسؤولي اللوجستيات والمشتريات: حاسبة استيعاب الحاويات للبالتات الخشبية ومُخصّص البالتات الهندسية وطلب عروض الأسعار.",
  keywords: ["حاسبة الحاويات", "حاسبة البالتات", "تحديد مواصفات البالتات", "استيعاب الحاويات 40 قدم", "البالتات الخشبية مصر"],
  alternates: {
    canonical: "https://elnegmapallets.com/articles/tools/",
    languages: {
      "ar": "https://elnegmapallets.com/articles/tools/",
      "en": "https://elnegmapallets.com/en/articles/tools/",
      "x-default": "https://elnegmapallets.com/articles/tools/",
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
        "name": "المقالات والمعلومات اللوجستية",
        "item": "https://elnegmapallets.com/articles/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "الأدوات والتطبيقات التفاعلية",
        "item": "https://elnegmapallets.com/articles/tools/"
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
      <ToolsPage lang="ar" />
    </>
  );
}
