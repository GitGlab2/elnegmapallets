import type { Metadata } from "next";
import { articlesEn } from "@/data/articles-en";
import ArticleDetails from "@/pages/ArticleDetails";

const SITE_URL = "https://elnegmapallets.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesEn.find(a => a.slug === slug);
  if (!article) {
    return {
      title: "Article Not Found | El Negma Pallets",
    };
  }
  const articleUrl = `${SITE_URL}/en/articles/${slug}/`;
  const imageUrl = new URL(article.image, SITE_URL).toString();

  return {
    title: `${article.title} | El Negma Pallets`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: articleUrl,
      languages: {
        "ar": `${SITE_URL}/articles/${slug}/`,
        "en": `${SITE_URL}/en/articles/${slug}/`,
        "x-default": `${SITE_URL}/articles/${slug}/`,
      },
    },
    openGraph: {
      type: "article",
      url: articleUrl,
      title: article.title,
      description: article.description,
      images: [{ url: imageUrl, alt: article.title }],
    },
  };
}

export async function generateStaticParams() {
  return articlesEn.map(article => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articlesEn.find(item => item.slug === slug);
  const articleUrl = `${SITE_URL}/en/articles/${slug}/`;
  const imageUrl = article
    ? new URL(article.image, SITE_URL).toString()
    : undefined;
  const structuredData = article && {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.description,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "El Negma Pallets",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/brand/company-logo.webp`,
      },
    },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: "en",
  };

  const breadcrumbData = article && {
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
        "name": "Logistics Insights & Articles",
        "item": `${SITE_URL}/en/articles/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
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
      <ArticleDetails slug={slug} lang="en" />
    </>
  );
}
