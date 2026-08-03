import type { Metadata } from "next";
import ProductsList from "@/pages/ProductsList";

export const metadata: Metadata = {
  title: "Standard Wooden Pallets Catalog | El Negma Pallets",
  description:
    "Catalog and guide of all wooden pallet types and sizes in Egypt - new and heat-treated (ISPM-15). Euro pallets, industrial pallets, chemical CP9 pallets, heavy 120x120, and GMA pallets for export.",
  keywords: [
    "wooden pallets catalog",
    "wooden pallet sizes",
    "Euro pallet Egypt",
    "industrial pallets",
    "chemical pallets CP9",
    "GMA pallets",
  ],
  alternates: {
    canonical: "https://elnegmapallets.com/en/products/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/products/",
      en: "https://elnegmapallets.com/en/products/",
      "x-default": "https://elnegmapallets.com/en/products/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://elnegmapallets.com/en/products/",
    title: "Standard Wooden Pallets Catalog | El Negma Pallets",
    description:
      "Catalog and guide of all wooden pallet types in Egypt, heat-treated ISPM-15 for export to Europe, the Gulf, and North America.",
    images: ["/images/sections/products-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Wooden Pallets | El Negma Pallets",
    description:
      "Catalog of all wooden pallet types in Egypt, heat-treated ISPM-15 for export.",
    images: ["/images/sections/products-image.webp"],
  },
};

export default function Page() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://elnegmapallets.com/en/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wooden Pallet Products",
        item: "https://elnegmapallets.com/en/products/",
      },
    ],
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