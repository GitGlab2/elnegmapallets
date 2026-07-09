import type { Metadata } from "next";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import PalletSizeDetails from "@/pages/PalletSizeDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = palletSizesEn.find((p) => p.slug === slug);
  if (!item) {
    return {
      title: "Pallet Size Not Found | El Negma Pallets",
    };
  }
  return {
    title: `${item.title} Specifications & Dimensions | El Negma Pallets`,
    description: item.description,
    keywords: item.keywords,
  };
}

export async function generateStaticParams() {
  return palletSizesEn.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PalletSizeDetails slug={slug} lang="en" />;
}
