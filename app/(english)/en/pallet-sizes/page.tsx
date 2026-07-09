import type { Metadata } from "next";
import PalletSizesList from "@/pages/PalletSizesList";

export const metadata: Metadata = {
  title: "Standard Wooden Pallet Sizes & Specifications | El Negma Pallets",
  description: "Comprehensive guide to wooden pallet sizes, structural dimensions, load limits, and container loading patterns. Euro EUR 1, Industrial 120x100, CP9, and GMA specifications.",
  keywords: ["pallet sizes", "wooden pallet dimensions", "euro pallet size", "citrus pallet specs", "industrial wooden pallets"],
};

export default function Page() {
  return <PalletSizesList lang="en" />;
}
