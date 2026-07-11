import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";

export const metadata: Metadata = {
  title: "المقالات والمعلومات اللوجستية | شركة النجمة لتصنيع البالتات الخشبية",
  description: "دليلك الشامل ومقالات متخصصة في لوجستيات التعبئة والتغليف، تصدير المنتجات بالبالتات الخشبية والبلاستيكية، معيار ISPM-15، وتصميم سلاسل التوريد في مصر.",
  keywords: ["مقالات لوجستية", "بالتات خشبية مصر", "شحن وتصدير المنتجات بالبالتات", "معايير التعبئة والتغليف", "معيار ISPM-15", "تصنيع بالتات"],
  alternates: {
    canonical: "https://elnegmapallets.com/articles/",
    languages: {
      "ar": "https://elnegmapallets.com/articles/",
      "en": "https://elnegmapallets.com/en/articles/",
      "x-default": "https://elnegmapallets.com/articles/",
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
      <ArticlesList lang="ar" />
    </>
  );
}
