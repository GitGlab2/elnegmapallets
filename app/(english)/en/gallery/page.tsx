import type { Metadata } from "next";
import Gallery from "@/pages/Gallery";

export const metadata: Metadata = {
  title: "Factory Gallery & Production Lines | El Negma Pallets Egypt",
  description: "Live photos of wooden pallet production lines, manufacturing processes, container stuffing, and heat-treated export pallets storage at El Negma factory.",
  keywords: ["pallet factory gallery", "wooden pallet production line", "export container stuffing pallets", "El Negma photos"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/gallery/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/gallery/",
      "en": "https://elnegmapallets.com/en/gallery/",
      "x-default": "https://elnegmapallets.com/gallery/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Gallery lang="en" />
    </div>
  );
}
