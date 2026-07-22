import type { Metadata } from "next";
import ToolsPage from "@/pages/ToolsPage";

export const metadata: Metadata = {
  title: "Pallet & Container Loading Calculators | El Negma Pallets",
  description: "Interactive logistics & engineering tools: calculate container loading capacity for wooden pallets and build custom technical specifications.",
  keywords: ["container calculator", "pallet calculator", "custom pallet specifier", "40ft container loading", "wooden pallets Egypt"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/articles/tools/",
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
        "name": "Home",
        "item": "https://elnegmapallets.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles & Insights",
        "item": "https://elnegmapallets.com/en/articles/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Interactive Tools",
        "item": "https://elnegmapallets.com/en/articles/tools/"
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
      <ToolsPage lang="en" />
    </>
  );
}
