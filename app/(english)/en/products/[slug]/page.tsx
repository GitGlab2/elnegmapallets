import type { Metadata } from "next";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import ProductDetails from "@/pages/ProductDetails";

const SITE_URL = "https://elnegmapallets.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = palletSizesEn.find(p => p.slug === slug);
  if (!product) {
    return {
      title: "Product Not Found | El Negma Pallets",
    };
  }
  const productUrl = `${SITE_URL}/en/products/${slug}/`;
  const imageUrl = new URL(product.image, SITE_URL).toString();

  return {
    title: `${product.title} (${product.dimensions}) | El Negma Pallets Egypt`,
    description: product.description,
    keywords: product.keywords,
    alternates: {
      canonical: productUrl,
      languages: {
        "ar": `${SITE_URL}/products/${slug}/`,
        "en": `${SITE_URL}/en/products/${slug}/`,
        "x-default": `${SITE_URL}/products/${slug}/`,
      },
    },
    openGraph: {
      type: "website",
      url: productUrl,
      title: `${product.title} - ${product.dimensions}`,
      description: product.description,
      images: [{ url: imageUrl, alt: product.title }],
    },
  };
}

export async function generateStaticParams() {
  return palletSizesEn.map(product => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = palletSizesEn.find(p => p.slug === slug);
  const productUrl = `${SITE_URL}/en/products/${slug}/`;
  const imageUrl = product
    ? new URL(product.image, SITE_URL).toString()
    : undefined;

  const productSchema = product && {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productUrl,
    name: product.title,
    image: imageUrl ? [imageUrl] : undefined,
    description: product.description,
    category: product.category,
    sku: `PALLET-${slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "El Negma Pallets",
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "El Negma Pallets Manufacturing",
      },
    },
  };

  const breadcrumbData = product && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/en/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wooden Pallet Products",
        item: `${SITE_URL}/en/products/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
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
      <ProductDetails slug={slug} lang="en" />
    </>
  );
}
