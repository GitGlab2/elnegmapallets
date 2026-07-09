import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articles-en";
import { BookOpen, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const currentArticles = isEn ? articlesEn : articles;

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
    }
  }[lang];

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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentArticles.map((article, idx) => (
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
