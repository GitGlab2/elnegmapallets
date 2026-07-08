export interface TocItem {
  title: string;
  target: string;
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
  keywords: string[];
  content: string;
  toc?: TocItem[];
}
