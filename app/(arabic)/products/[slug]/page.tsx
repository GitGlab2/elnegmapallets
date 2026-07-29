import type { Metadata } from "next";
import { palletSizesAr } from "@/data/pallet-sizes";
import ProductDetails from "@/pages/ProductDetails";

const SITE_URL = "https://elnegmapallets.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = palletSizesAr.find(p => p.slug === slug);
  if (!product) {
    return {
      title: "المنتج غير موجود | شركة النجمة",
      robots: { index: false },
    };
  }
  const productUrl = `${SITE_URL}/products/${slug}/`;
  const imageUrl = new URL(product.image, SITE_URL).toString();

  return {
    title: `${product.title} (${product.dimensions}) | مصنع النجمة للبالتات`,
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
  return palletSizesAr.map(product => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = palletSizesAr.find(p => p.slug === slug);
  const productUrl = `${SITE_URL}/products/${slug}/`;
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
      name: "شركة النجمة للبالتات الخشبية",
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
              name: "قدرة التحميل الساكن",
              value: parseNum(product.loads.static),
              unitCode: "KGM",
            },
          ]
        : []),
      ...(parseNum(product.loads?.dynamic) !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "قدرة التحميل الديناميكي",
              value: parseNum(product.loads.dynamic),
              unitCode: "KGM",
            },
          ]
        : []),
      ...(parseNum(product.loads?.racking) !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "قدرة التحميل على الرفوف",
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
        name: "الرئيسية",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "منتجات البالتات الخشبية",
        item: `${SITE_URL}/products/`,
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
      <ProductDetails slug={slug} lang="ar" />
    </>
  );
}
