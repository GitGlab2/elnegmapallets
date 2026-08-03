import type { Metadata } from "next";
import ToolPalletCustomizer from "@/pages/ToolPalletCustomizer";

export const metadata: Metadata = {
  title: "Custom B2B Pallet Specifier | El Negma Pallets",
  description: "Specify your required technical pallet specifications (dimensions, thickness, load capacity) to request an accurate B2B quote.",
  keywords: ["pallet specifier", "pallet dimensions", "wooden pallets egypt", "pallet quotes"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/articles/tools/pallet-customizer/",
    languages: {
      "ar": "https://elnegmapallets.com/articles/tools/pallet-customizer/",
      "en": "https://elnegmapallets.com/en/articles/tools/pallet-customizer/",
      "x-default": "https://elnegmapallets.com/articles/tools/pallet-customizer/",
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
      { "@type": "ListItem", "position": 4, "name": "Pallet Customizer", "item": "https://elnegmapallets.com/en/articles/tools/pallet-customizer/" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }}
      />
      <ToolPalletCustomizer lang="en" />
    </>
  );
}
