import { Article } from "./articles-types";
import { palletSizesAr } from "./pallet-sizes";
import { palletSizesEn } from "./pallet-sizes-en";
import { PalletSize } from "./pallet-sizes-types";

type Language = "ar" | "en";

const copy = {
  ar: {
    category: "مقاسات وأبعاد البالتات",
    author: "",
    readTime: "4 دقائق للقراءة",
    dimensions: "الأبعاد",
    specifications: "المواصفات الأساسية",
    material: "نوع الخشب",
    topBoards: "الألواح العلوية",
    bottomBoards: "الألواح السفلية",
    blocks: "الدعامات الخشبية",
    loadCapacity: "قدرة التحمل",
    staticLoad: "الحمولة الثابتة",
    dynamicLoad: "الحمولة المتحركة",
    rackingLoad: "حمولة الأرفف",
    containerCapacity: "سعة الحاويات",
    twentyFoot: "حاوية 20 قدم",
    fortyFoot: "حاوية 40 قدم",
    reefer: "حاوية 40 قدم مبردة",
    loadingPattern: "طريقة التحميل",
    applications: "الاستخدامات المناسبة",
    features: "المزايا الفنية",
    kilogram: "كجم",
  },
  en: {
    category: "Pallet Sizes & Specs",
    author: "",
    readTime: "4 min read",
    dimensions: "Dimensions",
    specifications: "Key specifications",
    material: "Timber type",
    topBoards: "Top boards",
    bottomBoards: "Bottom boards",
    blocks: "Blocks",
    loadCapacity: "Load capacity",
    staticLoad: "Static load",
    dynamicLoad: "Dynamic load",
    rackingLoad: "Racking load",
    containerCapacity: "Container capacity",
    twentyFoot: "20 ft container",
    fortyFoot: "40 ft container",
    reefer: "40 ft reefer",
    loadingPattern: "Loading pattern",
    applications: "Recommended applications",
    features: "Technical features",
    kilogram: "kg",
  },
} as const;

function escapeHtml(value: string | number) {
  return String(value).replace(/[&<>"]/g, character => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function listItems(items: string[]) {
  return items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

function createPalletSizeArticle(size: PalletSize, lang: Language): Article {
  const labels = copy[lang];
  const number = new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-US");
  const kg = (value: number) => `${number.format(value)} ${labels.kilogram}`;

  return {
    slug: `pallet-size-${size.slug}`,
    title: size.title,
    description: size.description,
    date: "2026-07-10",
    author: labels.author,
    readTime: labels.readTime,
    image: size.image,
    category: labels.category,
    categoryId: "sizes",
    keywords: size.keywords,
    toc: [
      { title: labels.specifications, target: "#specifications" },
      { title: labels.loadCapacity, target: "#load-capacity" },
      { title: labels.containerCapacity, target: "#container-capacity" },
      { title: labels.applications, target: "#applications" },
    ],
    content: `
      <div class="space-y-8">
        <section>
          <p>${escapeHtml(size.subtitle)}</p>
          <div class="rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
            <p class="mb-1 text-sm font-bold text-secondary">${labels.dimensions}</p>
            <p class="mb-0 text-2xl font-black text-white">${escapeHtml(size.dimensions)}</p>
          </div>
        </section>

        <section id="specifications">
          <h2>${labels.specifications}</h2>
          <ul>
            <li><strong>${labels.material}:</strong> ${escapeHtml(size.specs.woodType)}</li>
            <li><strong>${labels.topBoards}:</strong> ${escapeHtml(size.specs.topBoards)}</li>
            <li><strong>${labels.bottomBoards}:</strong> ${escapeHtml(size.specs.bottomBoards)}</li>
            <li><strong>${labels.blocks}:</strong> ${escapeHtml(size.specs.blocks)}</li>
          </ul>
        </section>

        <section id="load-capacity">
          <h2>${labels.loadCapacity}</h2>
          <ul>
            <li><strong>${labels.staticLoad}:</strong> ${kg(size.loads.static)}</li>
            <li><strong>${labels.dynamicLoad}:</strong> ${kg(size.loads.dynamic)}</li>
            <li><strong>${labels.rackingLoad}:</strong> ${kg(size.loads.racking)}</li>
          </ul>
        </section>

        <section id="container-capacity">
          <h2>${labels.containerCapacity}</h2>
          <ul>
            <li><strong>${labels.twentyFoot}:</strong> ${number.format(size.stuffing.twentyFt)}</li>
            <li><strong>${labels.fortyFoot}:</strong> ${number.format(size.stuffing.fortyFt)}</li>
            <li><strong>${labels.reefer}:</strong> ${number.format(size.stuffing.reefer40)}</li>
            <li><strong>${labels.loadingPattern}:</strong> ${escapeHtml(size.stuffing.layoutPattern)}</li>
          </ul>
        </section>

        <section id="applications">
          <h2>${labels.applications}</h2>
          <ul>${listItems(size.applications)}</ul>
        </section>

        <section>
          <h2>${labels.features}</h2>
          <ul>${listItems(size.features)}</ul>
        </section>
      </div>
    `,
  };
}

export const palletSizeArticlesAr = palletSizesAr.map(size =>
  createPalletSizeArticle(size, "ar")
);

export const palletSizeArticlesEn = palletSizesEn.map(size =>
  createPalletSizeArticle(size, "en")
);
