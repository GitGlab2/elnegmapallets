import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About Us | El Negma Wooden Pallets Manufacturing Egypt",
  description: "About El Negma Wooden Pallets Factory in Beni Suef, Egypt. 18+ years of experience manufacturing standard and ISPM-15 heat-treated export pallets for major industrial clients.",
  keywords: ["about El Negma Pallets", "Beni Suef pallet factory history", "pallet manufacturer profile Egypt"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/about/",
    languages: {
      "ar": "https://elnegmapallets.com/about/",
      "en": "https://elnegmapallets.com/en/about/",
      "x-default": "https://elnegmapallets.com/about/",
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
        "item": "https://elnegmapallets.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://elnegmapallets.com/en/about/"
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
      <div className="py-8">
        <About lang="en" />
      </div>
    </>
  );
}
