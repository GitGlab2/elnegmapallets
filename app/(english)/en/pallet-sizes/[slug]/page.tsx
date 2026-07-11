import type { Metadata } from "next";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import PalletSizeDetails from "@/pages/PalletSizeDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://elnegmapallets.com";

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
    alternates: {
      canonical: `${SITE_URL}/en/pallet-sizes/${slug}/`,
      languages: {
        "ar": `${SITE_URL}/pallet-sizes/${slug}/`,
        "en": `${SITE_URL}/en/pallet-sizes/${slug}/`,
        "x-default": `${SITE_URL}/pallet-sizes/${slug}/`,
      },
    },
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
