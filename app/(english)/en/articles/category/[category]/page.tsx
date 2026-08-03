import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";
import { articlesEn } from "@/data/articles-en";

const SITE_URL = "https://elnegmapallets.com";

const categories = [
  { id: "export", name: "Export & Shipping" },
  { id: "compliance", name: "Compliance & HT" },
  { id: "procurement", name: "Specs & Pricing" },
  { id: "industry", name: "Industrial Needs" },
  { id: "sizes", name: "Pallet Sizes" },
];

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catInfo = categories.find(c => c.id === category);
  
  if (!catInfo) {
    return {
      title: "Category Not Found | Blog | El Negma",
    };
  }

  const categoryUrl = `${SITE_URL}/en/articles/category/${category}/`;

  return {
    title: `${catInfo.name} | El Negma Pallets Blog`,
    description: `Specialized articles on ${catInfo.name} in El Negma's wooden pallets blog.`,
    alternates: {
      canonical: categoryUrl,
      languages: {
        "ar": `${SITE_URL}/articles/category/${category}/`,
        "en": `${SITE_URL}/en/articles/category/${category}/`,
        "x-default": `${SITE_URL}/articles/category/${category}/`,
      },
    },
    openGraph: {
      type: "website",
      url: categoryUrl,
      title: `${catInfo.name} | El Negma Blog`,
      description: `Specialized articles on ${catInfo.name} in El Negma's wooden pallets blog.`,
    },
  };
}

export async function generateStaticParams() {
  return categories.map(cat => ({
    category: cat.id,
  }));
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const catInfo = categories.find(c => c.id === category);

  const categoryUrl = `${SITE_URL}/en/articles/category/${category}/`;

  const breadcrumbData = catInfo && {
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
        "name": "Articles & Logistics Blog",
        "item": `${SITE_URL}/en/articles/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": catInfo.name,
        "item": categoryUrl
      }
    ]
  };

  return (
    <>
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <ArticlesList lang="en" initialCategory={category} />
    </>
  );
}
