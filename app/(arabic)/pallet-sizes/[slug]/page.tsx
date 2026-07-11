import type { Metadata } from "next";
import { palletSizesAr } from "@/data/pallet-sizes";
import PalletSizeDetails from "@/pages/PalletSizeDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://elnegmapallets.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = palletSizesAr.find((p) => p.slug === slug);
  if (!item) {
    return {
      title: "مقاس غير موجود | مصنع النجمة للبالتات",
    };
  }
  return {
    title: `${item.title} - المقاسات والمواصفات الفنية | مصنع النجمة`,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical: `${SITE_URL}/pallet-sizes/${slug}/`,
      languages: {
        "ar": `${SITE_URL}/pallet-sizes/${slug}/`,
        "en": `${SITE_URL}/en/pallet-sizes/${slug}/`,
        "x-default": `${SITE_URL}/pallet-sizes/${slug}/`,
      },
    },
  };
}

export async function generateStaticParams() {
  return palletSizesAr.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PalletSizeDetails slug={slug} lang="ar" />;
}
