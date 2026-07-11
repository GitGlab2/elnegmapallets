import { MetadataRoute } from "next";
import { articles } from "../client/src/data/articles";
import { articlesEn } from "../client/src/data/articles-en";
import { palletSizesAr } from "../client/src/data/pallet-sizes";
import { palletSizesEn } from "../client/src/data/pallet-sizes-en";

const SITE_URL = "https://elnegmapallets.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "articles",
    "pallet-sizes",
    "en",
    "en/articles",
    "en/pallet-sizes",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}/${route}${route ? '/' : ''}`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: "weekly" as const,
    priority: route === "" || route === "en" ? 1.0 : 0.8,
  }));

  // Arabic articles
  const arArticleEntries = articles.map((art) => ({
    url: `${SITE_URL}/articles/${art.slug}/`,
    lastModified: new Date(art.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // English articles
  const enArticleEntries = articlesEn.map((art) => ({
    url: `${SITE_URL}/en/articles/${art.slug}/`,
    lastModified: new Date(art.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Arabic pallet sizes
  const arSizeEntries = palletSizesAr.map((size) => ({
    url: `${SITE_URL}/pallet-sizes/${size.slug}/`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // English pallet sizes
  const enSizeEntries = palletSizesEn.map((size) => ({
    url: `${SITE_URL}/en/pallet-sizes/${size.slug}/`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...arArticleEntries,
    ...enArticleEntries,
    ...arSizeEntries,
    ...enSizeEntries,
  ];
}
