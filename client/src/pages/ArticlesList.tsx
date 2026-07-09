"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import { BookOpen, ArrowLeft, ArrowRight, Phone, Package, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const currentArticles = isEn ? articlesEn : articles;
  const [activeCategory, setActiveCategory] = useState("all");

  // Dynamic grouping based on article slug
  const getCategoryKey = (slug: string) => {
    const exportSlugs = [
      "container-stuffing-physics",
      "exporting-citrus-agricultural-products",
      "exporting-ceramics-heavy-materials",
      "exporting-chemicals-safely",
      "exporting-products",
      "technical-guide"
    ];
    const sterilizationSlugs = [
      "ispm15-phytosanitary-standard",
      "heat-treatment-vs-methyl-bromide",
      "dates-fumigation-alternatives"
    ];
    const buyingSlugs = [
      "pallet-prices-egypt",
      "buying-pallets-guide",
      "wood-types-for-pallets",
      "new-wooden-pallets-quality-standards",
      "pallet-dimensions-standards"
    ];
    const industrySlugs = [
      "pallets-food-pharmaceutical",
      "pallets-warehouse-storage"
    ];

    if (exportSlugs.includes(slug)) return "export";
    if (sterilizationSlugs.includes(slug)) return "sterilization";
    if (buyingSlugs.includes(slug)) return "buying";
    if (industrySlugs.includes(slug)) return "industry";
    return "export";
  };

  const categories = {
    ar: [
      { id: "all", name: "الكل" },
      { id: "export", name: "🚢 أدلة التصدير والشحن" },
      { id: "sterilization", name: "🔬 المعالجة والتعقيم" },
      { id: "buying", name: "💰 أسعار الشراء والمواصفات" },
      { id: "industry", name: "🏭 متطلبات الصناعات" }
    ],
    en: [
      { id: "all", name: "All" },
      { id: "export", name: "🚢 Export & Shipping" },
      { id: "sterilization", name: "🔬 Sterilization & HT" },
      { id: "buying", name: "💰 Specs & Pricing" },
      { id: "industry", name: "🏭 Industry Specs" }
    ]
  }[lang];

  const content = {
    ar: {
      badge: "المعرفة واللوجستيات",
      title: "المقالات والدراسات اللوجستية",
      description: "نشارككم خبرتنا الممتدة لأكثر من 18 عاماً في تصنيع وتوريد البالتات. اكتشف أدلة التصدير، معايير الجمارك، والمواصفات الفنية للبالتات الخشبية والبلاستيكية لتطوير سلاسل إمدادك.",
      author: "الكاتب:",
      readMore: "اقرأ المقال",
      ctaTitle: "هل تحتاج إلى استشارة لوجستية؟",
      ctaDesc: "نوفر في شركة النجمة بالتات خشبية مصممة خصيصاً لتناسب مواصفات شحناتك وسعة حاوياتك لمنع التلف وتقليل تكلفة النقل. اتصل بخبرائنا الآن للحصول على استشارة مجانية.",
      ctaCall: "اتصل الآن",
      ctaContact: "تواصل معنا",
      fontClass: "font-['Cairo']",
      dir: "rtl" as const,
      palletSizesTitle: "دليل مقاسات وأبعاد البالتات الخشبية",
      palletSizesDesc: "اكتشف أبعاد ومواصفات بالتات اليورو القياسية، بالتات الموالح والتصدير الزراعي، بالتات الكيماويات CP9، والبالتة الأمريكية GMA المعتمدة للشحن الدولي.",
      palletSizesBtn: "عرض دليل المقاسات بالكامل",
      filterTitle: "تصنيف المقالات حسب الموضوع:",
    },
    en: {
      badge: "Knowledge & Logistics",
      title: "Logistics Insights & Articles",
      description: "We share our 18+ years of experience in pallet manufacturing and supply. Discover export guides, customs standards, and technical specifications for wood and plastic pallets to optimize your supply chain.",
      author: "Author:",
      readMore: "Read Article",
      ctaTitle: "Need a Logistics Consultation?",
      ctaDesc: "At El Negma, we provide custom wooden pallets designed specifically to match your shipment requirements and container capacity to prevent damage and reduce shipping costs. Contact our experts today for a free consultation.",
      ctaCall: "Call Now",
      ctaContact: "Contact Us",
      fontClass: "font-sans",
      dir: "ltr" as const,
      palletSizesTitle: "Standard Wooden Pallet Sizes & Specs Guide",
      palletSizesDesc: "Explore dimensions, load capacities, and stuffing details for Euro pallets, Citrus/Industrial, CP9 Chemical, and US GMA pallets.",
      palletSizesBtn: "View Full Sizing Guide",
      filterTitle: "Filter Articles by Category:",
    }
  }[lang];

  const filteredArticles = activeCategory === "all"
    ? currentArticles
    : currentArticles.filter((art) => getCategoryKey(art.slug) === activeCategory);

  return (
    <div className={`min-h-screen bg-[#181b24] text-white py-12 md:py-20 ${content.fontClass}`} dir={content.dir}>
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

        {/* Pallet Sizing Catalog CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1c1f2a] border border-secondary/20 p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-secondary/5">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-transparent pointer-events-none" />
          <div className={`flex items-center gap-4 ${isEn ? "text-left animate-slide-in-left" : "text-right animate-slide-in-right"} flex-1 w-full`}>
            <div className="p-3.5 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary hidden sm:block">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2">{content.palletSizesTitle}</h2>
              <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">{content.palletSizesDesc}</p>
            </div>
          </div>
          <a 
            href={isEn ? "/en/pallet-sizes/" : "/pallet-sizes/"}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold transition-all shadow-lg shadow-secondary/15 text-sm w-full md:w-auto justify-center"
          >
            <span>{content.palletSizesBtn}</span>
            {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          </a>
        </div>

        {/* Interactive Filters Bar */}
        <div className="mb-10 text-center animate-fade-in">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-bold">
            {content.filterTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-white shadow-md shadow-secondary/20 border border-secondary"
                      : "bg-[#1c1f2a] hover:bg-muted text-gray-300 hover:text-white border border-border/40"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, idx) => (
            <article 
              key={article.slug} 
              className="flex flex-col bg-muted/20 border border-border/40 hover:border-secondary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group shadow-lg"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Cover */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] to-transparent opacity-60 z-10" />
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className={`absolute top-4 ${isEn ? "left-4" : "right-4"} z-20 bg-secondary px-3 py-1.5 rounded-full text-xs font-bold shadow-md`}>
                  {article.category}
                </span>
              </div>

              {/* Card Content */}
              <div className={`flex flex-col flex-1 p-6 ${isEn ? "text-left" : "text-right"}`}>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  <a href={isEn ? `/en/articles/${article.slug}/` : `/articles/${article.slug}/`}>
                    {article.title}
                  </a>
                </h2>

                {/* Short Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                  {article.description}
                </p>

                {/* Action Link */}
                <div className="mt-auto pt-4 border-t border-border/20 flex justify-between items-center">
                  <span className="text-xs text-white/50 font-medium">
                    {content.author} {isEn ? article.author.split(' - ')[0] : article.author.split(' - ')[0]}
                  </span>
                  <a 
                    href={isEn ? `/en/articles/${article.slug}/` : `/articles/${article.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-accent transition-colors group/btn"
                  >
                    {content.readMore}
                    {isEn ? (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    ) : (
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                    )}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call To Action Widget */}
        <div className="relative rounded-3xl overflow-hidden bg-[#59331f] text-white p-8 md:p-12 text-center border border-border/40 max-w-4xl mx-auto shadow-xl shadow-primary/10">
          <div className="absolute inset-0 bg-[url('/images/sections/logistics-truck.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-black text-accent">{content.ctaTitle}</h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {content.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-base font-bold h-12 px-8 bg-secondary hover:bg-secondary/90 text-white">
                  {isEn ? <Phone className="mr-2 w-4 h-4" /> : <Phone className="ml-2 w-4 h-4" />}
                  {content.ctaCall}
                </Button>
              </a>
              <a href={isEn ? "/en#contact-section" : "/#contact-section"} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-base font-bold h-12 px-8 bg-transparent border-white/30 hover:bg-white/10 text-white">
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
