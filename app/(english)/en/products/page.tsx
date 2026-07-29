import type { Metadata } from "next";
import ProductsList from "@/pages/ProductsList";

export const metadata: Metadata = {
  title: "Standard & Custom Wooden Pallets Catalog | El Negma Pallets",
  description: "Catalog and technical specifications guide for all new ISPM-15 heat-treated wooden pallets in Egypt. Euro pallets, industrial pallets, chemical pallets, and GMA pallets for export.",
  keywords: ["wooden pallets catalog", "pallet sizes Egypt", "export pallets", "Euro pallet 120x80", "industrial pallet 120x100"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/products/",
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
        "name": "Home",
        "item": "https://elnegmapallets.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Wooden Pallet Products",
        "item": "https://elnegmapallets.com/en/products/"
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
      <ProductsList lang="en" />
    </>
  );
}
