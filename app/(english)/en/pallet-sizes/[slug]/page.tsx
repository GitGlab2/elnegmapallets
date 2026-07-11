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
  const item = palletSizesEn.find((p) => p.slug === slug);
  const itemUrl = `${SITE_URL}/en/pallet-sizes/${slug}/`;
  const imageUrl = item ? new URL(item.image, SITE_URL).toString() : undefined;

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
        "name": "El Negma Pallets"
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
        "item": `${SITE_URL}/en/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pallet Sizes",
        "item": `${SITE_URL}/en/pallet-sizes/`
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
