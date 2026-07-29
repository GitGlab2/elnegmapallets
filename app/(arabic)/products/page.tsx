import type { Metadata } from "next";
import ProductsList from "@/pages/ProductsList";

export const metadata: Metadata = {
  title: "كتالوج البالتات الخشبية القياسية | شركة النجمة للبالتات",
  description: "كتالوج ودليل جميع أنواع ومقاسات البالتات الخشبية الجديدة والمعالجة حرارياً في مصر. بالتات يورو، بالتات صناعية، بالتات كيماويات، وبالتات GMA للتصدير.",
  keywords: ["كتالوج بالتات خشب", "أنواع البالتات الخشبية", "مقاسات البالتات", "بالتة يورو مصر", "بالتات صناعية"],
  alternates: {
    canonical: "https://elnegmapallets.com/products/",
    languages: {
      "ar": "https://elnegmapallets.com/products/",
      "en": "https://elnegmapallets.com/en/products/",
      "x-default": "https://elnegmapallets.com/products/",
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
        "name": "منتجات البالتات الخشبية",
        "item": "https://elnegmapallets.com/products/"
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
      <ProductsList lang="ar" />
    </>
  );
}
