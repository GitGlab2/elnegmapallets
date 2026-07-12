"use client";

import { TocItem, Article } from "@/data/articles-types";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import ShareButton from "./ShareButton";

// ── Related Articles Widget ────────────────────────────────────────────────────

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategoryId: string;
  allArticles: Article[];
  lang?: "ar" | "en";
}

function formatShortDate(dateStr: string, isEn: boolean): string {
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const arMonths = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
  const enMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (isEn) return `${enMonths[monthIdx]} ${year}`;
  const toEastern = (s: string) => s.split("").map(c => ({"0":"٠","1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩"}[c] ?? c)).join("");
  return `${arMonths[monthIdx]} ${toEastern(year)}`;
}

export function RelatedArticles({ currentSlug, currentCategoryId, allArticles, lang = "ar" }: RelatedArticlesProps) {
  const isEn = lang === "en";

  // First: same category. Then: fill up with others if less than 4.
  const sameCat = allArticles.filter(a => a.slug !== currentSlug && a.categoryId === currentCategoryId);
  const others  = allArticles.filter(a => a.slug !== currentSlug && a.categoryId !== currentCategoryId);
  const related = [...sameCat, ...others].slice(0, 4);

  if (related.length === 0) return null;

  const basePath = isEn ? "/en/articles" : "/articles";

  return (
    <div className="bg-[#1c1f2a] border border-border/40 rounded-2xl p-5 shadow-lg">
      <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4 border-b border-border/20 pb-2">
        {isEn ? "Related Articles" : "مقالات ذات صلة"}
      </h3>
      <div className="flex flex-col gap-3">
        {related.map(article => (
          <a
            key={article.slug}
            href={`${basePath}/${article.slug}/`}
            className="flex gap-3 group items-start hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors"
          >
            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-muted">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="text-xs font-bold text-white group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <Calendar className="w-2.5 h-2.5 text-secondary/70" />
                  {formatShortDate(article.date, isEn)}
                </span>
                <span className="flex items-center gap-0.5">
                  <Clock className="w-2.5 h-2.5 text-secondary/70" />
                  {article.readTime}
                </span>
              </div>
            </div>
            {isEn
              ? <ArrowRight className="w-3.5 h-3.5 shrink-0 mt-1 text-secondary/50 group-hover:text-secondary transition-colors self-center" />
              : <ArrowLeft  className="w-3.5 h-3.5 shrink-0 mt-1 text-secondary/50 group-hover:text-secondary transition-colors self-center" />
            }
          </a>
        ))}
      </div>
    </div>
  );
}

interface ToCProps {
  items: TocItem[];
  lang?: "ar" | "en";
}

export function TableOfContents({ items, lang = "ar" }: ToCProps) {
  const isEn = lang === "en";
  return (
    <div className="bg-muted/20 border border-border/20 rounded-2xl p-6 shadow-md">
      <h3 className="font-bold text-lg text-white mb-4 border-b border-border/40 pb-2">
        {isEn ? "Table of Contents" : "فهرس المحتويات"}
      </h3>
      <nav className={`flex flex-col gap-2 ${isEn ? "text-left" : "text-right"}`}>
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.target}
            className={`text-sm text-muted-foreground hover:text-secondary hover:translate-x-${isEn ? "1" : "[-4px]"} transition-all flex items-center gap-2 py-1.5`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function ArticleContactCard({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const content = {
    ar: {
      title: "تواصل مباشر لطلب المنتجات",
      desc: "هل لديك شحنة تصدير زراعية أو صناعية وتبحث عن البالتة المثالية المتوافقة مع معيار ISPM-15 والجمارك الدولية؟",
      address: "بني سويف - منطقة بياض العرب الصناعية",
      btnText: "اتصل الآن بالشركة",
      alignClass: "text-right",
    },
    en: {
      title: "Direct Contact for Inquiries",
      desc: "Do you have an agricultural or industrial export shipment and need the ideal pallet compatible with ISPM-15 and international customs?",
      address: "Beni Suef - Bayad Al-Arab Industrial Zone, Egypt",
      btnText: "Call Company Now",
      alignClass: "text-left",
    }
  }[lang];

  return (
    <div className={`bg-gradient-to-br from-[#59331f] to-[#181b24] border border-border/30 rounded-2xl p-6 shadow-md flex flex-col gap-5 ${content.alignClass}`}>
      <h3 className="font-bold text-lg text-accent border-b border-white/10 pb-2">{content.title}</h3>
      <p className="text-xs text-gray-300 leading-relaxed">
        {content.desc}
      </p>
      
      <ul className={`flex flex-col gap-3 text-xs text-gray-300 ${isEn ? "items-start" : "items-end"}`}>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-accent" />
          <a href="tel:01080012261" className="hover:text-white transition-colors dir-ltr font-bold text-sm">01080012261</a>
        </li>
        <li className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-accent" />
          <a href="mailto:info@elnegmapallets.com" className="hover:text-white transition-colors">info@elnegmapallets.com</a>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-accent mt-0.5" />
          <span>{content.address}</span>
        </li>
      </ul>

      <a href="tel:01080012261" className="w-full">
        <Button className="w-full font-bold bg-secondary hover:bg-secondary/90 text-white gap-2">
          <Phone className="w-4 h-4" />
          {content.btnText}
        </Button>
      </a>
    </div>
  );
}

interface ShareProps {
  title: string;
  description: string;
  lang?: "ar" | "en";
}

export function ArticleShareWidget({ title, description, lang = "ar" }: ShareProps) {
  const isEn = lang === "en";
  return (
    <div className="bg-muted/10 border border-border/20 rounded-2xl p-6 shadow-md flex flex-col gap-4 text-center">
      <h4 className="font-bold text-sm text-gray-300">
        {isEn ? "Share Now" : "شاركه الان"}
      </h4>
      <div className="flex justify-center">
        <ShareButton title={title} description={description} />
      </div>
    </div>
  );
}
