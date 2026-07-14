import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { TableOfContents, ArticleContactCard, ArticleShareWidget, RelatedArticles } from "@/components/ArticleSidebarWidgets";

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

export default function ArticleDetails({ slug, lang = "ar" }: { slug: string; lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const currentArticles = isEn ? articlesEn : articles;
  const article = currentArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Define Table of Contents items dynamically from metadata
  const tableOfContents = article.toc || (isEn ? [
    { title: "Introduction & Unitization", target: "#intro" },
    { title: "Infrastructure & Ports", target: "#infrastructure" },
    { title: "Agricultural & Industrial Sectors", target: "#sectors" },
    { title: "Pallet Mechanical Engineering", target: "#engineering" },
    { title: "Standard Dimensions Specifications", target: "#dimensions" },
    { title: "ISPM-15 Phytosanitary Standard", target: "#ispm15" },
    { title: "Container Stuffing Mathematics", target: "#containers" },
    { title: "Complementary Packaging Systems", target: "#protection" },
  ] : [
    { title: "مقدمة ودور البالتات", target: "#intro" },
    { title: "البنية التحتية والموانئ", target: "#infrastructure" },
    { title: "القطاعات الزراعية والصناعية", target: "#sectors" },
    { title: "الهندسة الميكانيكية للبالتات", target: "#engineering" },
    { title: "المعايير القياسية للأبعاد", target: "#dimensions" },
    { title: "معيار الصحة النباتية ISPM-15", target: "#ispm15" },
    { title: "لوجستيات ورياضيات الحاويات", target: "#containers" },
    { title: "أنظمة التغليف المكملة للشحنة", target: "#protection" },
  ]);

  const config = {
    ar: {
      backText: "العودة للمقالات",
      backPath: "/articles",
      fontClass: "font-['Cairo']",
      dir: "rtl" as const,
      alignClass: "text-right",
      borderSide: "border-right",
      paddingSide: "padding-right",
    },
    en: {
      backText: "Back to Articles",
      backPath: "/en/articles",
      fontClass: "font-sans",
      dir: "ltr" as const,
      alignClass: "text-left",
      borderSide: "border-left",
      paddingSide: "padding-left",
    }
  }[lang];

  return (
    <div className={`min-h-screen bg-[#181b24] text-white py-8 md:py-16 ${config.fontClass}`} dir={config.dir}>
      
      {/* Scoped CSS Styles for Article Body rendering */}
      <style dangerouslySetInnerHTML={{ __html: `
        .article-body h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          ${config.borderSide}: 4px solid #b165fb;
          ${config.paddingSide}: 0.75rem;
          scroll-margin-top: 100px;
        }
        .article-body h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #d4a976;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          scroll-margin-top: 100px;
        }
        .article-body p {
          margin-bottom: 1.25rem;
          color: #e2e8f0;
          font-size: 1rem;
          line-height: 1.85;
          text-align: justify;
        }
        .article-body ul {
          list-style-type: disc;
          ${config.paddingSide}: 1.5rem;
          margin-bottom: 1.5rem;
          color: #cbd5e1;
        }
        .article-body ol {
          list-style-type: decimal;
          ${config.paddingSide}: 1.5rem;
          margin-bottom: 1.5rem;
          color: #cbd5e1;
        }
        .article-body li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .article-body strong {
          color: #d4a976;
          font-weight: 700;
        }
        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background-color: rgba(32, 36, 48, 0.4);
          border: 1px solid rgba(177, 101, 251, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }
        .article-body th {
          background-color: rgba(89, 51, 31, 0.7);
          color: #ffffff;
          font-weight: 800;
          padding: 1rem;
          border-bottom: 2px solid rgba(177, 101, 251, 0.3);
          text-align: ${isEn ? "left" : "right"};
        }
        .article-body td {
          padding: 1rem;
          border-bottom: 1px solid rgba(177, 101, 251, 0.1);
          color: #e2e8f0;
          line-height: 1.6;
          text-align: ${isEn ? "left" : "right"};
        }
        .article-body tr:hover {
          background-color: rgba(177, 101, 251, 0.05);
        }
      `}} />

      <div className="container max-w-7xl">
        
        {/* Back Link */}
        <div className="mb-8">
          <a 
            href={config.backPath} 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            {config.backText}
          </a>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border border-border/30 bg-muted/10 shadow-2xl">
          {/* Cover Blur Background */}
          <div className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110" style={{ backgroundImage: `url(${article.image})` }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12 items-center">
            {/* Title & Metadata */}
            <div className={`lg:col-span-7 flex flex-col gap-5 ${config.alignClass}`}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
                {article.title}
              </h1>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mt-2">
                <span className="bg-secondary/20 border border-secondary/30 text-secondary w-fit px-3 py-1.5 rounded-full text-xs font-bold">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-secondary" />
                  {formatBlogDate(article.date, isEn)}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Main Image */}
            <div className="lg:col-span-5 w-full aspect-video lg:aspect-square overflow-hidden rounded-2xl border-4 border-secondary shadow-xl">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Right/Left Column: Article Content */}
          <main className="lg:col-span-8 flex flex-col bg-muted/10 border border-border/20 rounded-3xl p-6 md:p-10 shadow-lg">
            {/* Mobile Table of Contents (Visible only on mobile/tablet at the start of the article) */}
            <div className="lg:hidden mb-8">
              <TableOfContents items={tableOfContents} lang={lang} />
            </div>

            <div 
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Bottom Call to Action Card */}
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#202534] to-[#1c1f2a] border border-secondary/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-right">
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {isEn ? "Do you need wooden pallets for your business?" : "هل تحتاج بالتات خشبية لعملك؟"}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {isEn 
                    ? "Our team is ready to help you choose the right specifications and provide a competitive quote." 
                    : "فريق شركة النجمة جاهز لمساعدتك في اختيار المواصفة الصحيحة وتقديم عرض سعر تنافسي."}
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/201080012261"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#8b2626] hover:bg-[#a63030] text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-red-900/30 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isEn ? "Request a Quote Now" : "اطلب عرض سعر الآن"}</span>
                </a>
              </div>
            </div>

            {/* Mobile Share Widget (Visible only on mobile/tablet right below the CTA card) */}
            <div className="lg:hidden mt-6">
              <ArticleShareWidget title={article.title} description={article.description} lang={lang} />
            </div>
          </main>

          {/* Left/Right Column: Sidebar Widgets */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="hidden lg:block">
              <TableOfContents items={tableOfContents} lang={lang} />
            </div>
            <RelatedArticles
              currentSlug={slug}
              currentCategoryId={article.categoryId}
              allArticles={currentArticles}
              lang={lang}
            />
            <div className="hidden lg:block">
              <ArticleContactCard lang={lang} />
            </div>
            <div className="hidden lg:block">
              <ArticleShareWidget title={article.title} description={article.description} lang={lang} />
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
