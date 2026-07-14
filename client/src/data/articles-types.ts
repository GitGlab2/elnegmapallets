export interface TocItem {
  title: string;
  target: string;
}

export type ArticleCategoryId =
  | "export"
  | "compliance"
  | "procurement"
  | "industry"
  | "sizes";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  categoryId: ArticleCategoryId;
  keywords: string[];
  content: string;
  toc?: TocItem[];
  faq?: FaqItem[];
}
