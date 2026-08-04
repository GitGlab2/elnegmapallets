"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
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
  Search,
  Calculator,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { matchSearchQuery } from "@/utils/search";

const ARTICLE_PAGE_SIZE = 7; // 1 featured + 6 grid

function formatBlogDate(dateStr: string, isEn: boolean): string {
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  
  const arMonths = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];
  
  const enMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  if (isEn) {
    return `${enMonths[monthIdx]} ${year}`;
  } else {
    const toEasternNumerals = (str: string) => {
      const easternMap: Record<string, string> = {
        '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
        '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
      };
      return str.split('').map(c => easternMap[c] || c).join('');
    };
    return `${arMonths[monthIdx]} ${toEasternNumerals(year)}`;
  }
}

export default function ArticlesList({ lang = "ar", initialCategory = "all" }: { lang?: "ar" | "en", initialCategory?: string }) {
  const isEn = lang === "en";
  const currentArticles = isEn ? articlesEn : articles;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleArticleCount, setVisibleArticleCount] = useState(ARTICLE_PAGE_SIZE);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleArticleCount(ARTICLE_PAGE_SIZE);
  };

  const categories = {
    ar: [
      { id: "all", name: "كل التصنيفات", icon: LayoutGrid },
      { id: "export", name: "شحن وتصدير", icon: Globe },
      { id: "compliance", name: "معالجة وتبخير", icon: ShieldCheck },
      { id: "procurement", name: "أسعار ومواصفات", icon: Tag },
      { id: "industry", name: "متطلبات صناعية", icon: Factory },
      { id: "sizes", name: "أبعاد ومقاسات", icon: Package },
    ],
    en: [
      { id: "all", name: "All Categories", icon: LayoutGrid },
      { id: "export", name: "Export & Shipping", icon: Globe },
      { id: "compliance", name: "Compliance & HT", icon: ShieldCheck },
      { id: "procurement", name: "Specs & Pricing", icon: Tag },
      { id: "industry", name: "Industrial Needs", icon: Factory },
      { id: "sizes", name: "Pallet Sizes", icon: Package },
    ],
  }[lang];

  const content = {
    ar: {
      badge: "المدونة الرسمية",
      title: "مدونة شركة النجمة للبالتات الخشبية",
      description:
        "أدلة لوجستية ومقالات متخصصة في التعبئة والتغليف، التصدير، معايير الجمارك، وتصميم سلاسل التوريد في مصر والشرق الأوسط.",
      readMore: "اقرأ المقال",
      ctaTitle: "هل تحتاج للتواصل مع المصنع؟",
      ctaDesc:
        "نحن هنا لتوريد البالتات الخشبية والصناديق لجميع محافظات مصر والتصدير الدولي بمطابقة معايير الجودة العالمية.",
      ctaCall: "اتصل بنا",
      ctaContact: "واتساب",
      fontClass: "font-['Cairo']",
      dir: "rtl" as const,
      searchPlaceholder: "ابحث في المدونة...",
      featuredLabel: "مقال مميز",
      readTimeLabel: "قراءة",
      emptyState: "لا توجد مقالات تطابق بحثك حاليًا.",
      sidebarTitleCategories: "الأقسام والتصنيفات",
      sidebarTitleSearch: "البحث في المدونة",
      sidebarTitleContact: "التواصل السريع",
      loadMore: "عرض المزيد من المقالات",
    },
    en: {
      badge: "Official Blog",
      title: "El Negma Wooden Pallets Blog",
      description:
        "Logistics insights, export guides, packaging standards, and supply chain design in Egypt and the Middle East.",
      readMore: "Read Article",
      ctaTitle: "Need to contact the factory?",
      ctaDesc:
        "We manufacture and supply wooden pallets and crates matching international quality and phytosanitary standards.",
      ctaCall: "Call Us",
      ctaContact: "WhatsApp",
      fontClass: "font-sans",
      dir: "ltr" as const,
      searchPlaceholder: "Search the blog...",
      featuredLabel: "Featured Article",
      readTimeLabel: "read",
      emptyState: "No articles found matching your search.",
      sidebarTitleCategories: "Categories",
      sidebarTitleSearch: "Search Blog",
      sidebarTitleContact: "Quick Contact",
      loadMore: "Load More Articles",
    },
  }[lang];

  // Count articles per category
  const categoryCounts = currentArticles.reduce<Record<string, number>>(
    (counts, article) => {
      counts[article.categoryId] = (counts[article.categoryId] ?? 0) + 1;
      return counts;
    },
    {}
  );

  // Filter categories that actually have articles
  const activeCategoriesList = categories.filter(
    cat => cat.id === "all" || (categoryCounts[cat.id] ?? 0) > 0
  );

  // Search filter using advanced token-based spell-tolerant utility
  const searchedArticles = searchQuery
    ? currentArticles.filter(article =>
        matchSearchQuery(
          searchQuery,
          [article.title, article.description, article.keywords, article.content],
          lang
        )
      )
    : currentArticles;

  // Category filter
  const filteredArticles =
    activeCategory === "all"
      ? searchedArticles
      : searchedArticles.filter(article => article.categoryId === activeCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticleCount);
  const remainingCount = Math.max(filteredArticles.length - displayedArticles.length, 0);

  // Featured is always the first matching article
  const featuredArticle = displayedArticles[0];
  const gridArticles = displayedArticles.slice(1);

  return (
    <div
      className={`min-h-screen bg-[#181b24] text-white py-12 md:py-16 ${content.fontClass}`}
      dir={content.dir}
    >
      {/* Blog Hero Banner */}
      <div className="container max-w-7xl mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#202534] via-[#1c1f2a] to-[#202534] p-8 md:p-12 text-center border border-border/30 shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              {content.badge}
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
              {content.title}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="container max-w-7xl">
        {/* Mobile Search & Categories (Visible only on mobile/tablet) */}
        <div className="mb-8 lg:hidden px-4">
          <div className="flex flex-col gap-4">
            {/* Mobile Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleArticleCount(ARTICLE_PAGE_SIZE);
                }}
                placeholder={content.searchPlaceholder}
                className="w-full text-sm bg-[#1c1f2a] border border-border/40 rounded-xl py-3 pl-4 pr-10 focus:border-secondary focus:outline-none text-white placeholder-muted-foreground transition-colors shadow-lg"
              />
              <Search className={`absolute w-5 h-5 text-muted-foreground top-3.5 ${isEn ? "right-3.5" : "left-3.5"}`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Column (70%) */}
          <main className="lg:col-span-8 space-y-8">
            {filteredArticles.length > 0 ? (
              <>
                {/* 1. Featured Article Card (Horizontal Layout) */}
                {featuredArticle && activeCategory === "all" && !searchQuery && (
                  <a
                    href={isEn ? `/en/articles/${featuredArticle.slug}/` : `/articles/${featuredArticle.slug}/`}
                    className="flex flex-col md:flex-row gap-6 p-5 bg-[#1c1f2a] border border-border/40 hover:border-secondary/50 rounded-2xl transition-all duration-300 group shadow-lg transform hover:-translate-y-1 block"
                  >
                    {/* Featured Image */}
                    <div className="relative w-full md:w-80 shrink-0 aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />
                      <span className="absolute top-3 right-3 bg-secondary text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow">
                        {content.featuredLabel}
                      </span>
                    </div>

                    {/* Featured Text Content */}
                    <div className="flex flex-col justify-between flex-1 gap-4">
                      <div className="space-y-2">
                        <span className="text-secondary text-xs font-bold">
                          {featuredArticle.category}
                        </span>
                        <h2 className="text-xl md:text-2xl font-black text-white leading-snug group-hover:text-accent transition-colors">
                          {featuredArticle.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {featuredArticle.description}
                        </p>
                      </div>

                      {/* Meta Footer */}
                      <div className="flex items-center justify-between border-t border-border/20 pt-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            {formatBlogDate(featuredArticle.date, isEn)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-secondary" />
                            {featuredArticle.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-secondary group-hover:text-accent transition-colors">
                          {content.readMore}
                          {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                {/* 2. Grid of Regular Cards (2 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(activeCategory !== "all" || searchQuery ? displayedArticles : gridArticles).map((article) => (
                    <a
                      key={article.slug}
                      href={isEn ? `/en/articles/${article.slug}/` : `/articles/${article.slug}/`}
                      className="flex flex-col bg-[#1c1f2a] border border-border/40 hover:border-secondary/50 rounded-2xl overflow-hidden transition-all duration-300 group shadow-lg transform hover:-translate-y-1"
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute bottom-3 right-3 bg-[#181b24]/80 backdrop-blur-md border border-border/30 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {article.category}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                            {article.description}
                          </p>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between border-t border-border/10 pt-4 mt-2">
                          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-secondary/70" />
                              {formatBlogDate(article.date, isEn)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-secondary/70" />
                              {article.readTime}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-secondary group-hover:text-accent transition-colors">
                            {content.readMore}
                            {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Load More Button */}
                {remainingCount > 0 && (
                  <div className="flex justify-center pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setVisibleArticleCount(prev => prev + 6)}
                      className="border-secondary/40 bg-secondary/15 hover:bg-secondary text-white font-bold px-6 py-2.5 rounded-full shadow transition-all duration-300"
                    >
                      {content.loadMore} (+{remainingCount})
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-border/50 bg-[#1c1f2a]/50 p-12 text-center text-muted-foreground shadow-inner">
                {content.emptyState}
              </div>
            )}

            {/* Mobile CTA (Visible only on mobile/tablet at the end of the articles list) */}
            <div className="lg:hidden mt-8">
              <div className="bg-[#59331f] text-white border border-border/40 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/sections/logistics-truck.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
                <div className="relative z-10 space-y-4">
                  <h4 className="text-lg font-black text-accent leading-snug">
                    {content.ctaTitle}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {content.ctaDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <a href="tel:01080012261" className="w-full sm:w-1/2">
                      <Button className="w-full text-xs font-bold h-10 bg-secondary hover:bg-secondary/90 text-white">
                        <Phone className="w-3.5 h-3.5 ml-1.5" />
                        {content.ctaCall} (01080012261)
                      </Button>
                    </a>
                    <a href="https://wa.me/201080012261" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
                      <Button variant="outline" className="w-full text-xs font-bold h-10 bg-transparent border-white/20 hover:bg-white/10 text-white">
                        {content.ctaContact}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar Column (30%) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-8">
            
            {/* Widget 1: Blog Search */}
            <div className="bg-[#1c1f2a] border border-border/40 p-5 rounded-2xl shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3 border-b border-border/20 pb-2">
                {content.sidebarTitleSearch}
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleArticleCount(ARTICLE_PAGE_SIZE);
                  }}
                  placeholder={content.searchPlaceholder}
                  className="w-full text-sm bg-[#181b24] border border-border/50 rounded-xl py-2.5 pl-3 pr-10 focus:border-secondary focus:outline-none text-white placeholder-muted-foreground transition-colors"
                />
                <Search className={`absolute w-4 h-4 text-muted-foreground top-3.5 ${isEn ? "right-3" : "left-3"}`} />
              </div>
            </div>

            {/* Widget 2: Blog Categories */}
            <div className="bg-[#1c1f2a] border border-border/40 p-5 rounded-2xl shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3 border-b border-border/20 pb-2">
                {content.sidebarTitleCategories}
              </h3>
              <div className="flex flex-col gap-1.5">
                {activeCategoriesList.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const total =
                    cat.id === "all"
                      ? currentArticles.length
                      : (categoryCounts[cat.id] ?? 0);
                  const Icon = cat.icon;

                  return (
                    <a
                      key={cat.id}
                      href={cat.id === "all" ? (isEn ? "/en/articles/" : "/articles/") : (isEn ? `/en/articles/category/${cat.id}/` : `/articles/category/${cat.id}/`)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 text-right ${
                        isActive
                          ? "bg-secondary text-white shadow-md shadow-secondary/15"
                          : "text-muted-foreground hover:bg-[#181b24] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-secondary"}`} />
                        <span>{cat.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-white/[0.04] text-muted-foreground"}`}>
                        {total}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: Quick CTA */}
            <div className="bg-[#59331f] text-white border border-border/40 p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/sections/logistics-truck.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
              <div className="relative z-10 space-y-4">
                <h4 className="text-lg font-black text-accent leading-snug">
                  {content.ctaTitle}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {content.ctaDesc}
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a href="tel:01080012261" className="w-full">
                    <Button className="w-full text-xs font-bold h-10 bg-secondary hover:bg-secondary/90 text-white">
                      <Phone className="w-3.5 h-3.5 ml-1.5" />
                      {content.ctaCall} (01080012261)
                    </Button>
                  </a>
                  <a href="https://wa.me/201080012261" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs font-bold h-10 bg-transparent border-white/20 hover:bg-white/10 text-white">
                      {content.ctaContact}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
