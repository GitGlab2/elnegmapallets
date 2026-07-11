"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Package,
  LayoutGrid,
  Globe,
  ShieldCheck,
  Tag,
  Factory,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORY_PREVIEW_LIMIT = 6;
const ARTICLE_PAGE_SIZE = 9;

export default function ArticlesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const currentArticles = isEn ? articlesEn : articles;
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visibleArticleCount, setVisibleArticleCount] =
    useState(ARTICLE_PAGE_SIZE);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleArticleCount(ARTICLE_PAGE_SIZE);
  };

  const categories = {
    ar: [
      { id: "all", name: "الكل", icon: LayoutGrid },
      { id: "export", name: "أدلة التصدير والشحن", icon: Globe },
      { id: "compliance", name: "المعالجة والتعقيم", icon: ShieldCheck },
      { id: "procurement", name: "أسعار الشراء والمواصفات", icon: Tag },
      { id: "industry", name: "متطلبات الصناعات", icon: Factory },
      {
        id: "sizes",
        name: "أبعاد ومقاسات البالتات",
        icon: Package,
      },
    ],
    en: [
      { id: "all", name: "All", icon: LayoutGrid },
      { id: "export", name: "Export & Shipping", icon: Globe },
      { id: "compliance", name: "Sterilization & HT", icon: ShieldCheck },
      { id: "procurement", name: "Specs & Pricing", icon: Tag },
      { id: "industry", name: "Industry Specs", icon: Factory },
      {
        id: "sizes",
        name: "Pallet Sizes & Specs",
        icon: Package,
      },
    ],
  }[lang];

  const content = {
    ar: {
      badge: "المعرفة واللوجستيات",
      title: "المقالات والدراسات اللوجستية",
      description:
        "نشارككم خبرتنا الممتدة لأكثر من 18 عاماً في تصنيع وتوريد البالتات. اكتشف أدلة التصدير، معايير الجمارك، والمواصفات الفنية للبالتات الخشبية والبلاستيكية لتطوير سلاسل إمدادك.",
      author: "الكاتب:",
      readMore: "اقرأ المقال",
      ctaTitle: "هل تحتاج إلى استشارة لوجستية؟",
      ctaDesc:
        "نوفر في شركة النجمة بالتات خشبية مصممة خصيصاً لتناسب مواصفات شحناتك وسعة حاوياتك لمنع التلف وتقليل تكلفة النقل. اتصل بخبرائنا الآن للحصول على استشارة مجانية.",
      ctaCall: "اتصل الآن",
      ctaContact: "تواصل معنا",
      fontClass: "font-['Cairo']",
      dir: "rtl" as const,
      palletSizesTitle: "دليل مقاسات وأبعاد البالتات الخشبية",
      palletSizesDesc:
        "اكتشف أبعاد ومواصفات بالتات اليورو القياسية، بالتات الموالح والتصدير الزراعي، بالتات الكيماويات CP9، والبالتة الأمريكية GMA المعتمدة للشحن الدولي.",
      palletSizesBtn: "عرض دليل المقاسات بالكامل",
      filterTitle: "تصفّح المقالات حسب الموضوع",
      libraryEyebrow: "مكتبة المعرفة",
      articlesLabel: "مقال",
      showMoreCategories: "عرض كل التصنيفات",
      hideExtraCategories: "إخفاء التصنيفات الإضافية",
      loadMoreArticles: "عرض مقالات أكثر",
      emptyState: "لا توجد مقالات ضمن هذا التصنيف حاليًا.",
    },
    en: {
      badge: "Knowledge & Logistics",
      title: "Logistics Insights & Articles",
      description:
        "We share our 18+ years of experience in pallet manufacturing and supply. Discover export guides, customs standards, and technical specifications for wood and plastic pallets to optimize your supply chain.",
      author: "Author:",
      readMore: "Read Article",
      ctaTitle: "Need a Logistics Consultation?",
      ctaDesc:
        "At El Negma, we provide custom wooden pallets designed specifically to match your shipment requirements and container capacity to prevent damage and reduce shipping costs. Contact our experts today for a free consultation.",
      ctaCall: "Call Now",
      ctaContact: "Contact Us",
      fontClass: "font-sans",
      dir: "ltr" as const,
      palletSizesTitle: "Standard Wooden Pallet Sizes & Specs Guide",
      palletSizesDesc:
        "Explore dimensions, load capacities, and stuffing details for Euro pallets, Citrus/Industrial, CP9 Chemical, and US GMA pallets.",
      palletSizesBtn: "View Full Sizing Guide",
      filterTitle: "Browse articles by topic",
      libraryEyebrow: "Knowledge library",
      articlesLabel: "articles",
      showMoreCategories: "Show all categories",
      hideExtraCategories: "Hide extra categories",
      loadMoreArticles: "Load more articles",
      emptyState: "There are no articles in this category yet.",
    },
  }[lang];

  const categoryCounts = currentArticles.reduce<Record<string, number>>(
    (counts, article) => {
      counts[article.categoryId] = (counts[article.categoryId] ?? 0) + 1;
      return counts;
    },
    {}
  );
  const filterCategories = categories.filter(
    category => category.id === "all" || (categoryCounts[category.id] ?? 0) > 0
  );
  const visibleCategories = showAllCategories
    ? filterCategories
    : filterCategories.slice(0, CATEGORY_PREVIEW_LIMIT);
  const filteredArticles =
    activeCategory === "all"
      ? currentArticles
      : currentArticles.filter(
          article => article.categoryId === activeCategory
        );
  const displayedArticles = filteredArticles.slice(0, visibleArticleCount);
  const remainingArticleCount = Math.max(
    filteredArticles.length - displayedArticles.length,
    0
  );

  return (
    <div
      className={`min-h-screen bg-[#181b24] text-white py-12 md:py-20 ${content.fontClass}`}
      dir={content.dir}
    >
      <div className="container max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-bold">
            <BookOpen className="w-4 h-4" />
            {content.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>
        {/* Article category directory */}
        <section
          className="mb-12 animate-fade-in"
          aria-labelledby="article-categories-heading"
        >
          <div className="rounded-[1.75rem] border border-border/70 bg-[#1c1f2a]/90 p-3 shadow-2xl backdrop-blur-md sm:p-5">
            <div className="mb-4 flex flex-col gap-3 border-b border-border/30 px-2 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                  {content.libraryEyebrow}
                </p>
                <h2
                  id="article-categories-heading"
                  className="text-xl font-black text-white sm:text-2xl"
                >
                  {content.filterTitle}
                </h2>
              </div>
              <p
                className="text-sm font-semibold text-muted-foreground"
                aria-live="polite"
              >
                <span className="text-white">{filteredArticles.length}</span>{" "}
                {content.articlesLabel}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCategories.map(category => {
                const isActive = activeCategory === category.id;
                const categoryCount =
                  category.id === "all"
                    ? currentArticles.length
                    : (categoryCounts[category.id] ?? 0);
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    aria-pressed={isActive}
                    className={`group relative flex min-h-20 items-center gap-3 overflow-hidden rounded-2xl border px-3 py-3 text-start transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80 ${
                      isActive
                        ? "border-secondary/70 bg-secondary/15 shadow-lg shadow-secondary/10"
                        : "border-border/50 bg-[#181b24]/60 hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors ${
                        isActive
                          ? "border-secondary/50 bg-secondary text-white"
                          : "border-border/50 bg-white/[0.03] text-muted-foreground group-hover:border-secondary/30 group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="text-sm font-bold leading-snug text-white">
                        {category.name}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {categoryCount} {content.articlesLabel}
                      </span>
                    </span>
                    {isActive && (
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-white">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {filterCategories.length > CATEGORY_PREVIEW_LIMIT && (
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllCategories(isOpen => !isOpen)}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-secondary transition-colors hover:bg-secondary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
                >
                  {showAllCategories
                    ? content.hideExtraCategories
                    : content.showMoreCategories}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${showAllCategories ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="mb-16">
            <div
              className={`flex flex-col gap-4 ${remainingArticleCount > 0 ? "mb-8" : ""}`}
            >
              {displayedArticles.map((article, idx) => (
                <a
                  key={article.slug}
                  href={
                    isEn
                      ? `/en/articles/${article.slug}/`
                      : `/articles/${article.slug}/`
                  }
                  className="flex flex-col md:flex-row gap-5 p-4 md:p-5 bg-[#1c1f2a]/80 border border-white/5 hover:border-secondary/30 rounded-2xl transition-all duration-300 group items-center md:items-stretch"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {/* Image Thumbnail — compact 4:3 */}
                  <div className="relative w-full md:w-56 shrink-0 aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col flex-1 ${isEn ? "text-left" : "text-right"} justify-between gap-3`}
                  >
                    <div>
                      {/* Title */}
                      <h2 className="text-lg md:text-xl font-black text-white mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Short Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                    </div>

                    {/* Footer: Meta + Read Link */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-secondary/70" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-secondary/70" />
                          {article.readTime}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-bold text-secondary group-hover:text-accent transition-colors whitespace-nowrap"
                      >
                        {isEn ? "Read Full Article" : "اقرأ المقال بالكامل"}
                        {isEn ? (
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        ) : (
                          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {remainingArticleCount > 0 && (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-muted/10 p-5 text-center sm:flex-row sm:justify-between sm:text-start">
                <p className="text-sm text-muted-foreground">
                  {displayedArticles.length} / {filteredArticles.length}{" "}
                  {content.articlesLabel}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setVisibleArticleCount(count => count + ARTICLE_PAGE_SIZE)
                  }
                  className="border-secondary/50 bg-secondary/10 font-bold text-white hover:border-secondary hover:bg-secondary hover:text-white"
                >
                  {content.loadMoreArticles}
                  <span className="ms-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">
                    +{Math.min(ARTICLE_PAGE_SIZE, remainingArticleCount)}
                  </span>
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-16 rounded-3xl border border-dashed border-border/60 bg-muted/10 px-6 py-12 text-center text-muted-foreground">
            {content.emptyState}
          </div>
        )}

        {/* Call To Action Widget */}
        <div className="relative rounded-3xl overflow-hidden bg-[#59331f] text-white p-8 md:p-12 text-center border border-border/40 max-w-4xl mx-auto shadow-xl shadow-primary/10">
          <div className="absolute inset-0 bg-[url('/images/sections/logistics-truck.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-black text-accent">
              {content.ctaTitle}
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {content.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full text-base font-bold h-12 px-8 bg-secondary hover:bg-secondary/90 text-white"
                >
                  {isEn ? (
                    <Phone className="mr-2 w-4 h-4" />
                  ) : (
                    <Phone className="ml-2 w-4 h-4" />
                  )}
                  {content.ctaCall}
                </Button>
              </a>
              <a
                href={isEn ? "/en#contact-section" : "/#contact-section"}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base font-bold h-12 px-8 bg-transparent border-white/30 hover:bg-white/10 text-white"
                >
                  {content.ctaContact}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
