import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";

export const metadata: Metadata = {
  title: "Logistics Insights & Articles | El Negma Pallets Manufacturer",
  description: "Your comprehensive guide and specialized articles in packaging logistics, exporting products with wooden and plastic pallets, ISPM-15, and supply chain design.",
  keywords: ["logistics articles", "wooden pallets Egypt", "shipping on pallets", "packaging standards", "ISPM-15", "pallet manufacturing"],
};

export default function Page() {
  return <ArticlesList lang="en" />;
}
