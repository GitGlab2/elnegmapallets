import { Article } from "./articles-types";
import { exportingProductsArticle } from "./articles/exporting-products";
import { technicalGuideArticle } from "./articles/technical-guide";

export type { Article, TocItem } from "./articles-types";

export const articles: Article[] = [
  exportingProductsArticle,
  technicalGuideArticle,
];
