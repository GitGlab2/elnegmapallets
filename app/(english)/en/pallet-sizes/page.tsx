import type { Metadata } from "next";
import PalletSizesList from "@/pages/PalletSizesList";

export const metadata: Metadata = {
  title: "Standard Wooden Pallet Sizes & Specifications | El Negma Pallets",
  description: "Comprehensive guide to wooden pallet sizes, structural dimensions, load limits, and container loading patterns. Euro EUR 1, Industrial 120x100, CP9, and GMA specifications.",
  keywords: ["pallet sizes", "wooden pallet dimensions", "euro pallet size", "citrus pallet specs", "industrial wooden pallets"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/pallet-sizes/",
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
        "name": "Home",
        "item": "https://elnegmapallets.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Standard Wooden Pallet Sizes & Specifications",
        "item": "https://elnegmapallets.com/en/pallet-sizes/"
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
      <PalletSizesList lang="en" />
    </>
  );
}
