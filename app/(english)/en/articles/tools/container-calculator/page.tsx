import type { Metadata } from "next";
import ToolContainerCalculator from "@/pages/ToolContainerCalculator";

export const metadata: Metadata = {
  title: "Container Loading Calculator | El Negma Pallets",
  description: "Calculate optimal pallet loading capacity for 20ft and 40ft containers to maximize shipping efficiency.",
  keywords: ["container calculator", "40ft container capacity", "wooden pallets egypt", "container shipping"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/articles/tools/container-calculator/",
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elnegmapallets.com/en/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://elnegmapallets.com/en/articles/" },
      { "@type": "ListItem", "position": 3, "name": "Tools", "item": "https://elnegmapallets.com/en/articles/tools/" },
      { "@type": "ListItem", "position": 4, "name": "Container Calculator", "item": "https://elnegmapallets.com/en/articles/tools/container-calculator/" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }}
      />
      <ToolContainerCalculator lang="en" />
    </>
  );
}
