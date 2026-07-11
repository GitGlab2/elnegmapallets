import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import ArticleDetails from "@/pages/ArticleDetails";
import { getAbsoluteUrl } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    return {
      title: "المقال غير موجود | شركة النجمة",
    };
  }
  const articleUrl = getAbsoluteUrl(`/articles/${slug}/`);
  const imageUrl = getAbsoluteUrl(article.image);

  // Only add English alternate if the English version of this article exists
  const hasEnglishVersion = articlesEn.some(a => a.slug === slug);
  const languages: Record<string, string> = {
    "ar": articleUrl,
    "x-default": articleUrl,
  };
  if (hasEnglishVersion) {
    languages["en"] = getAbsoluteUrl(`/en/articles/${slug}/`);
  }

  return {
    title: `${article.title} | شركة النجمة`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: articleUrl,
      languages,
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
  return articles.map(article => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  const articleUrl = getAbsoluteUrl(`/articles/${slug}/`);
  const imageUrl = article
    ? getAbsoluteUrl(article.image)
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
      name: "شركة النجمة لتصنيع البالتات الخشبية",
      "@id": getAbsoluteUrl("/#organization"),
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/images/brand/company-logo.webp"),
      },
    },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: "ar-EG",
  };

  const breadcrumbData = article && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": getAbsoluteUrl("/")
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المقالات والمعلومات اللوجستية",
        "item": getAbsoluteUrl("/articles/")
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
      <ArticleDetails slug={slug} lang="ar" />
    </>
  );
}
