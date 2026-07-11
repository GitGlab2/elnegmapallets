import type { Metadata } from "next";
import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import PalletSizeDetails from "@/pages/PalletSizeDetails";
import { getAbsoluteUrl } from "@/lib/site-config";

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
  const sizeUrl = getAbsoluteUrl(`/en/pallet-sizes/${slug}/`);
  const hasArabicVersion = palletSizesAr.some(s => s.slug === slug);
  const languages: Record<string, string> = {
    "en": sizeUrl,
  };
  if (hasArabicVersion) {
    languages["ar"] = getAbsoluteUrl(`/pallet-sizes/${slug}/`);
    languages["x-default"] = getAbsoluteUrl(`/pallet-sizes/${slug}/`);
  } else {
    languages["x-default"] = sizeUrl;
  }
  return {
    title: `${item.title} Specifications & Dimensions | El Negma Pallets`,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical: sizeUrl,
      languages,
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
  const item = palletSizesEn.find((p) => p.slug === slug);
  const itemUrl = getAbsoluteUrl(`/en/pallet-sizes/${slug}/`);
  const imageUrl = item ? getAbsoluteUrl(item.image) : undefined;

  const productData = item && {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.title,
    "description": item.description,
    "image": imageUrl ? [imageUrl] : undefined,
    "sku": item.slug,
    "brand": {
      "@type": "Brand",
      "name": "El Negma Pallets"
    },
    "offers": {
      "@type": "Offer",
      "url": itemUrl,
      "priceCurrency": "EGP",
      "price": "0",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "El Negma Pallets",
        "@id": getAbsoluteUrl("/#organization")
      }
    }
  };

  const breadcrumbData = item && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": getAbsoluteUrl("/en/")
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pallet Sizes",
        "item": getAbsoluteUrl("/en/pallet-sizes/")
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": item.title,
        "item": itemUrl
      }
    ]
  };

  return (
    <>
      {productData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <PalletSizeDetails slug={slug} lang="en" />
    </>
  );
}
