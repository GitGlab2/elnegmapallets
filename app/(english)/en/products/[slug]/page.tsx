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
      robots: { index: false },
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
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - ${product.dimensions}`,
      description: product.description,
      images: [imageUrl],
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

  const parseNum = (val: any): number | undefined => {
    if (typeof val === "number" && !isNaN(val)) return Math.round(val);
    if (typeof val === "string") {
      const parsed = parseFloat(val.replace(/[^0-9.]/g, ""));
      return isNaN(parsed) ? undefined : Math.round(parsed);
    }
    return undefined;
  };

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
    manufacturer: {
      "@id": "https://elnegmapallets.com/#organization",
    },
    ...(parseNum(product.specs?.width) !== undefined && {
      width: {
        "@type": "QuantitativeValue",
        value: parseNum(product.specs.width),
        unitCode: "MMT",
      },
    }),
    ...(parseNum(product.specs?.length) !== undefined && {
      depth: {
        "@type": "QuantitativeValue",
        value: parseNum(product.specs.length),
        unitCode: "MMT",
      },
    }),
    ...(parseNum(product.specs?.height) !== undefined && {
      height: {
        "@type": "QuantitativeValue",
        value: parseNum(product.specs.height),
        unitCode: "MMT",
      },
    }),
    ...(parseNum(product.specs?.weight) !== undefined && {
      weight: {
        "@type": "QuantitativeValue",
        value: parseNum(product.specs.weight),
        unitCode: "KGM",
      },
    }),
    ...(product.specs?.woodType && {
      material: product.specs.woodType,
    }),
    additionalProperty: [
      ...(parseNum(product.loads?.static) !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "Static Load Capacity",
              value: parseNum(product.loads.static),
              unitCode: "KGM",
            },
          ]
        : []),
      ...(parseNum(product.loads?.dynamic) !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "Dynamic Load Capacity",
              value: parseNum(product.loads.dynamic),
              unitCode: "KGM",
            },
          ]
        : []),
      ...(parseNum(product.loads?.racking) !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "Racking Load Capacity",
              value: parseNum(product.loads.racking),
              unitCode: "KGM",
            },
          ]
        : []),
    ],
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
