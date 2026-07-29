import type { Metadata } from "next";
import ServicesList from "@/pages/ServicesList";

export const metadata: Metadata = {
  title: "Pallet Manufacturing, ISPM-15 Heat Treatment & Bulk Services | El Negma",
  description: "Comprehensive pallet services by El Negma Pallets: ISPM-15 heat treatment for export, bulk industrial pallet supply, custom engineering, and export wooden crates.",
  keywords: ["pallet services Egypt", "ISPM-15 heat treatment", "bulk pallet supply", "export wooden crates", "custom pallet manufacturing"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/services/",
    languages: {
      "ar": "https://elnegmapallets.com/services/",
      "en": "https://elnegmapallets.com/en/services/",
      "x-default": "https://elnegmapallets.com/services/",
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
        "name": "Pallet Manufacturing & Export Services",
        "item": "https://elnegmapallets.com/en/services/"
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
      <ServicesList lang="en" />
    </>
  );
}
