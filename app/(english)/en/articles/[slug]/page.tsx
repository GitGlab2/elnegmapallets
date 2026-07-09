import type { Metadata } from "next";
import { articlesEn } from "@/data/articles-en";
import ArticleDetails from "@/pages/ArticleDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesEn.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: "Article Not Found | El Negma Pallets",
    };
  }
  return {
    title: `${article.title} | El Negma Pallets`,
    description: article.description,
    keywords: article.keywords,
  };
}

export async function generateStaticParams() {
  return articlesEn.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleDetails slug={slug} lang="en" />;
}
