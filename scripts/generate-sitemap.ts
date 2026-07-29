import { writeFileSync } from "fs";
import path from "path";
import { palletSizesAr } from "../client/src/data/pallet-sizes";
import { servicesAr } from "../client/src/data/services";
import { articles } from "../client/src/data/articles";

const SITE_URL = "https://elnegmapallets.com";
const today = new Date().toISOString().slice(0, 10);

type SitemapEntry = {
  path: string;
  enPath: string;
  priority: string;
  changefreq: string;
};

const entries: SitemapEntry[] = [
  { path: "/", enPath: "/en/", priority: "1.0", changefreq: "weekly" },
  { path: "/about/", enPath: "/en/about/", priority: "0.85", changefreq: "monthly" },
  { path: "/contact/", enPath: "/en/contact/", priority: "0.85", changefreq: "monthly" },
  { path: "/certificates/", enPath: "/en/certificates/", priority: "0.85", changefreq: "monthly" },
  { path: "/gallery/", enPath: "/en/gallery/", priority: "0.85", changefreq: "monthly" },
  { path: "/clients/", enPath: "/en/clients/", priority: "0.85", changefreq: "monthly" },
  { path: "/quote/", enPath: "/en/quote/", priority: "0.85", changefreq: "monthly" },
  { path: "/products/", enPath: "/en/products/", priority: "0.9", changefreq: "weekly" },
  { path: "/services/", enPath: "/en/services/", priority: "0.9", changefreq: "weekly" },
  { path: "/articles/", enPath: "/en/articles/", priority: "0.85", changefreq: "weekly" },
  { path: "/articles/tools/", enPath: "/en/articles/tools/", priority: "0.85", changefreq: "weekly" },
  ...palletSizesAr.map(p => ({
    path: `/products/${p.slug}/`,
    enPath: `/en/products/${p.slug}/`,
    priority: "0.85",
    changefreq: "monthly",
  })),
  ...servicesAr.map(s => ({
    path: `/services/${s.slug}/`,
    enPath: `/en/services/${s.slug}/`,
    priority: "0.85",
    changefreq: "monthly",
  })),
  ...articles.map(a => ({
    path: `/articles/${a.slug}/`,
    enPath: `/en/articles/${a.slug}/`,
    priority: "0.7",
    changefreq: "monthly",
  })),
];

function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const entry of entries) {
    const arUrl = `${SITE_URL}${entry.path}`;
    const enUrl = `${SITE_URL}${entry.enPath}`;

    // Arabic URL entry
    xml += `  <url>\n`;
    xml += `    <loc>${arUrl}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="ar-EG" href="${arUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />\n`;
    xml += `  </url>\n`;

    // English URL entry
    xml += `  <url>\n`;
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="ar-EG" href="${arUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");
  writeFileSync(sitemapPath, xml, "utf-8");
  console.log(`✅ Automated sitemap generated successfully with ${entries.length * 2} URLs!`);
}

generateSitemapXml();
