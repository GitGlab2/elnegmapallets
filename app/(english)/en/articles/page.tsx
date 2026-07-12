import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";

export const metadata: Metadata = {
  title: "El Negma Pallets Blog | Shipping & Export Crates Guides",
  description: "The official blog of El Negma Pallets. Expert articles on logistics, shipping, wooden crates, pallet customization, and packaging standards in Egypt.",
  keywords: ["pallet blog", "wooden pallets Egypt", "shipping on pallets", "packaging standards", "ISPM-15", "pallet manufacturing"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/articles/",
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
        "name": "Home",
        "item": "https://elnegmapallets.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Logistics Insights & Articles",
        "item": "https://elnegmapallets.com/en/articles/"
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
      <ArticlesList lang="en" />
    </>
  );
}
