import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleDetails from "@/pages/ArticleDetails";

const SITE_URL = "https://elnegmapallets.com";

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
  const articleUrl = `${SITE_URL}/articles/${slug}/`;
  const imageUrl = new URL(article.image, SITE_URL).toString();

  return {
    title: `${article.title} | شركة النجمة`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: articleUrl,
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
  const articleUrl = `${SITE_URL}/articles/${slug}/`;
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
      name: "شركة النجمة لتصنيع البالتات الخشبية",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/brand/company-logo.webp`,
      },
    },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: "ar-EG",
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
      <ArticleDetails slug={slug} lang="ar" />
    </>
  );
}
