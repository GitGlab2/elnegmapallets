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
  return (
    <div className="py-8">
      <About lang="en" />
    </div>
  );
}
