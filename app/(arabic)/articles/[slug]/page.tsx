import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleDetails from "@/pages/ArticleDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: "المقال غير موجود | شركة النجمة",
    };
  }
  return {
    title: `${article.title} | شركة النجمة`,
    description: article.description,
    keywords: article.keywords,
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleDetails slug={slug} lang="ar" />;
}
