import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";
import { getAbsoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Logistics Insights & Articles | El Negma Pallets Manufacturer",
  description: "Your comprehensive guide and specialized articles in packaging logistics, exporting products with wooden and plastic pallets, ISPM-15, and supply chain design.",
  keywords: ["logistics articles", "wooden pallets Egypt", "shipping on pallets", "packaging standards", "ISPM-15", "pallet manufacturing"],
  alternates: {
    canonical: getAbsoluteUrl("/en/articles/"),
    languages: {
      "ar": getAbsoluteUrl("/articles/"),
      "en": getAbsoluteUrl("/en/articles/"),
      "x-default": getAbsoluteUrl("/articles/"),
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
