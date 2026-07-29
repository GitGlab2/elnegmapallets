import { writeFileSync } from "fs";
import path from "path";
import { palletSizesAr } from "../client/src/data/pallet-sizes";
import { servicesAr } from "../client/src/data/services";
import { articles } from "../client/src/data/articles";
import { articlesEn } from "../client/src/data/articles-en";

const SITE_URL = "https://elnegmapallets.com";
const today = new Date().toISOString().slice(0, 10);

type ImageEntry = {
  loc: string;
  title: string;
  caption: string;
};

type SitemapEntry = {
  path: string;
  enPath: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
  images?: ImageEntry[];
  enImages?: ImageEntry[];
};

// Build a lookup map: slug → English title (for image tags on /en/ article URLs)
const enTitleMap = new Map<string, string>(
  articlesEn.map(a => [a.slug, a.title])
);

// Gallery images with descriptive metadata
const galleryImages: ImageEntry[] = [
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-4.webp`,
    title: "بالتات خشبية لقطاع الكيماويات",
    caption: "بالتات مصنّعة لتوريدات قطاع الكيماويات مرصوصة داخل مخزن مصنع النجمة ببني سويف",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-3.webp`,
    title: "مستودع بالتات الأسمنت والسيراميك",
    caption: "أكوام بالتات خشبية متعددة الأحجام داخل مستودع كبير لتوريد قطاع الأسمنت والسيراميك",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-2.webp`,
    title: "رافعة شوكية داخل مصنع النجمة",
    caption: "رافعة شوكية تنقل ألواح خشبية داخل مصنع النجمة ببني سويف وبجوارها بالتات مرصوصة",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-1.webp`,
    title: "بالتة خشبية لقطاع الفاكهة والأغذية",
    caption: "بالتة خشبية مكشوفة القاعدة من إنتاج مصنع النجمة لقطاع الفاكهة والأغذية",
  },
  {
    loc: `${SITE_URL}/images/gallery/warehouse-stacked-pallets.webp`,
    title: "بالتات مكدسة جاهزة للتوريد",
    caption: "بالتات خشبية مكدسة بارتفاعات متعددة في مستودع مصنع النجمة جاهزة للتوريد",
  },
];

const galleryImagesEn: ImageEntry[] = [
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-4.webp`,
    title: "Wooden pallets for chemical sector",
    caption: "Wooden pallets for chemical sector stacked inside El Negma factory warehouse in Beni Suef",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-3.webp`,
    title: "Cement and ceramics sector pallet warehouse",
    caption: "Multiple pallet stacks of varying sizes in a large warehouse for cement and ceramics sector supply",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-2.webp`,
    title: "Forklift inside El Negma factory",
    caption: "Forklift transporting timber boards inside El Negma factory with stacked pallets alongside",
  },
  {
    loc: `${SITE_URL}/images/gallery/client-gallery-1.webp`,
    title: "Wooden pallet for fruit and food export",
    caption: "Open-bottom wooden pallet manufactured by El Negma for fruit and food export sector",
  },
  {
    loc: `${SITE_URL}/images/gallery/warehouse-stacked-pallets.webp`,
    title: "Stacked pallets ready for delivery",
    caption: "Wooden pallets stacked at multiple heights in El Negma factory warehouse ready for delivery",
  },
];

const entries: SitemapEntry[] = [
  { path: "/", enPath: "/en/", priority: "1.0", changefreq: "weekly" },
  { path: "/about/", enPath: "/en/about/", priority: "0.85", changefreq: "monthly" },
  { path: "/contact/", enPath: "/en/contact/", priority: "0.85", changefreq: "monthly" },
  { path: "/certificates/", enPath: "/en/certificates/", priority: "0.85", changefreq: "monthly" },
  {
    path: "/gallery/", enPath: "/en/gallery/", priority: "0.85", changefreq: "monthly",
    images: galleryImages,
    enImages: galleryImagesEn,
  },
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
    images: [{
      loc: `${SITE_URL}${p.image}`,
      title: p.title,
      caption: `${p.title} مقاس ${p.dimensions} خشب معالج حرارياً ISPM-15`,
    }] as ImageEntry[],
    enImages: [{
      loc: `${SITE_URL}${p.image}`,
      title: p.title,
      caption: `${p.title} ${p.dimensions} ISPM-15 heat treated wooden pallet`,
    }] as ImageEntry[],
  })),
  ...servicesAr.map(s => ({
    path: `/services/${s.slug}/`,
    enPath: `/en/services/${s.slug}/`,
    priority: "0.85",
    changefreq: "monthly",
    images: [{
      loc: `${SITE_URL}${s.image}`,
      title: s.title,
      caption: `${s.title} — ${s.subtitle}`,
    }] as ImageEntry[],
    enImages: [{
      loc: `${SITE_URL}${s.image}`,
      title: s.title,
      caption: `${s.title} — ${s.subtitle}`,
    }] as ImageEntry[],
  })),
  ...articles.map(a => ({
    path: `/articles/${a.slug}/`,
    enPath: `/en/articles/${a.slug}/`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: a.date,
    images: [{
      loc: `${SITE_URL}${a.image}`,
      title: a.title,
      caption: `${a.title} — مصنع النجمة للبالتات الخشبية`,
    }] as ImageEntry[],
    enImages: [{
      loc: `${SITE_URL}${a.image}`,
      title: enTitleMap.get(a.slug) ?? a.title,
      caption: `${enTitleMap.get(a.slug) ?? a.title} — El Negma Wooden Pallets Factory`,
    }] as ImageEntry[],
  })),
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderImages(images: ImageEntry[]): string {
  return images.map(img =>
    `    <image:image>\n` +
    `      <image:loc>${escapeXml(img.loc)}</image:loc>\n` +
    `      <image:title>${escapeXml(img.title)}</image:title>\n` +
    `      <image:caption>${escapeXml(img.caption)}</image:caption>\n` +
    `    </image:image>\n`
  ).join("");
}

function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const entry of entries) {
    const arUrl = `${SITE_URL}${entry.path}`;
    const enUrl = `${SITE_URL}${entry.enPath}`;

    // Arabic URL entry
    xml += `  <url>\n`;
    xml += `    <loc>${arUrl}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod ?? today}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="ar-EG" href="${arUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />\n`;
    if (entry.images && entry.images.length > 0) {
      xml += renderImages(entry.images);
    }
    xml += `  </url>\n`;

    // English URL entry
    xml += `  <url>\n`;
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod ?? today}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="ar-EG" href="${arUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${arUrl}" />\n`;
    if (entry.enImages && entry.enImages.length > 0) {
      xml += renderImages(entry.enImages);
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");
  writeFileSync(sitemapPath, xml, "utf-8");
  const articleCount = articles.length;
  console.log(`✅ Sitemap generated: ${entries.length * 2} URLs total`);
  console.log(`   • Static + product + service pages: ${(entries.length - articleCount) * 2} URLs (lastmod = today)`);
  console.log(`   • Article pages: ${articleCount * 2} URLs (lastmod = real article date)`);
}

generateSitemapXml();
