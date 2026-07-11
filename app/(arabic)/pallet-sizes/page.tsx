import type { Metadata } from "next";
import PalletSizesList from "@/pages/PalletSizesList";

export const metadata: Metadata = {
  title: "مقاسات وأبعاد البالتات الخشبية القياسية | مصنع النجمة للبالتات",
  description: "دليل المقاسات المعتمدة للبالتات الخشبية للتصدير واللوجستيات في مصر. بالتات يورو 120*80، بالتات موالح وصناعية 120*100، بالتات كيماويات CP9 ومقاسات مخصصة.",
  keywords: ["مقاسات البالتات", "أبعاد البالتة الخشبية", "بالتة يورو", "بالتة موالح", "بالتات خشبية مصر"],
  alternates: {
    canonical: "https://elnegmapallets.com/pallet-sizes/",
    languages: {
      "ar": "https://elnegmapallets.com/pallet-sizes/",
      "en": "https://elnegmapallets.com/en/pallet-sizes/",
      "x-default": "https://elnegmapallets.com/pallet-sizes/",
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
        "name": "مقاسات وأبعاد البالتات الخشبية القياسية",
        "item": "https://elnegmapallets.com/pallet-sizes/"
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
      <PalletSizesList lang="ar" />
    </>
  );
}
