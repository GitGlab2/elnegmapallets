import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { TableOfContents, ArticleContactCard, ArticleShareWidget } from "@/components/ArticleSidebarWidgets";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: "المقال غير موجود | شركة النجمة",
    };
  }
  return {
    title: `${article.title} | شركة النجمة`,
    description: article.description,
    keywords: article.keywords,
  };
}

// Generate static params for Next.js static build export
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Define Table of Contents items dynamically from metadata
  const tableOfContents = article.toc || [
    { title: "مقدمة ودور البالتات", target: "#intro" },
    { title: "البنية التحتية والموانئ", target: "#infrastructure" },
    { title: "القطاعات الزراعية والصناعية", target: "#sectors" },
    { title: "الهندسة الميكانيكية للبالتات", target: "#engineering" },
    { title: "المعايير القياسية للأبعاد", target: "#dimensions" },
    { title: "معيار الصحة النباتية ISPM-15", target: "#ispm15" },
    { title: "لوجستيات ورياضيات الحاويات", target: "#containers" },
    { title: "أنظمة التغليف المكملة للشحنة", target: "#protection" },
  ];

  return (
    <div className="min-h-screen bg-[#181b24] text-white py-8 md:py-16 font-['Cairo']" dir="rtl">
      
      {/* Scoped CSS Styles for Article Body rendering */}
      <style dangerouslySetInnerHTML={{ __html: `
        .article-body h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          border-right: 4px solid #b165fb;
          padding-right: 0.75rem;
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
          padding-right: 1.5rem;
          margin-bottom: 1.5rem;
          color: #cbd5e1;
        }
        .article-body ol {
          list-style-type: decimal;
          padding-right: 1.5rem;
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
          text-align: right;
        }
        .article-body td {
          padding: 1rem;
          border-bottom: 1px solid rgba(177, 101, 251, 0.1);
          color: #e2e8f0;
          line-height: 1.6;
        }
        .article-body tr:hover {
          background-color: rgba(177, 101, 251, 0.05);
        }
      `}} />

      <div className="container max-w-6xl">
        
        {/* Back Link */}
        <div className="mb-8">
          <a 
            href="/articles" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للمقالات
          </a>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border border-border/30 bg-muted/10 shadow-2xl">
          {/* Cover Blur Background */}
          <div className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110" style={{ backgroundImage: `url(${article.image})` }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12 items-center">
            {/* Title & Metadata */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-right">
              <span className="bg-secondary/20 border border-secondary/30 text-secondary w-fit px-3 py-1.5 rounded-full text-xs font-bold">
                {article.category}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
                {article.title}
              </h1>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {article.description}
              </p>

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
          
          {/* Right Column: Article Content */}
          <main className="lg:col-span-8 flex flex-col bg-muted/10 border border-border/20 rounded-3xl p-6 md:p-10 shadow-lg">
            <div 
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </main>

          {/* Left Column: Sidebar Widgets */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <TableOfContents items={tableOfContents} />
            <ArticleContactCard />
            <ArticleShareWidget title={article.title} description={article.description} />
          </aside>

        </div>

      </div>
    </div>
  );
}
