import type { Metadata } from "next";
import Pricing from "@/pages/Pricing";

export const metadata: Metadata = {
  title: "Request Bulk B2B Quote | El Negma Wooden Pallets Manufacturing",
  description: "Get a custom B2B quotation & bulk discounts (2,000+ units) for standard and ISPM-15 heat-treated export wooden pallets.",
  keywords: ["request pallet quote Egypt", "bulk wooden pallet pricing", "ISPM-15 export quote", "El Negma factory quote"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/quote/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/quote/",
      "en": "https://elnegmapallets.com/en/quote/",
      "x-default": "https://elnegmapallets.com/quote/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Pricing lang="en" />
    </div>
  );
}
