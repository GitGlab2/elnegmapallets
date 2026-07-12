"use client";

import { Button } from "@/components/ui/button";
import { Home, BookOpen, Ruler, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");

  const content = isEn ? {
    title: "Page Not Found",
    subtitle: "404",
    desc: "Sorry, the page you are looking for doesn't exist or has been moved.",
    helpTitle: "Here are some useful links:",
    homeLabel: "Go to Homepage",
    homePath: "/en",
    articlesLabel: "Articles & Guides",
    articlesPath: "/en/articles",
    contactLabel: "Contact Us",
    contactPath: "/en#contact-section",
    searchHint: "Or try searching using Ctrl + K",
  } : {
    title: "الصفحة غير موجودة",
    subtitle: "404",
    desc: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    helpTitle: "إليك بعض الروابط المفيدة:",
    homeLabel: "الصفحة الرئيسية",
    homePath: "/",
    articlesLabel: "المقالات والمعلومات",
    articlesPath: "/articles",
    contactLabel: "تواصل معنا",
    contactPath: "/#contact-section",
    searchHint: "أو جرّب البحث باستخدام Ctrl + K",
  };

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        {/* 404 large number */}
        <div className="relative mb-6">
          <span className="text-[120px] sm:text-[160px] font-black leading-none text-primary/10 select-none">
            {content.subtitle}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
          {content.title}
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto">
          {content.desc}
        </p>

        {/* Useful links */}
        <div className="mb-8">
          <p className="text-sm font-bold text-muted-foreground mb-4">
            {content.helpTitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <a href={content.homePath} className="w-full sm:w-auto">
              <Button 
                variant="default" 
                className="w-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                <Home className={`w-4 h-4 ${isEn ? "mr-2" : "ml-2"}`} />
                {content.homeLabel}
              </Button>
            </a>
            <a href={content.articlesPath} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full font-bold border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
              >
                <BookOpen className={`w-4 h-4 ${isEn ? "mr-2" : "ml-2"}`} />
                {content.articlesLabel}
              </Button>
            </a>
            <a href={content.contactPath} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full font-bold border-accent/30 text-accent hover:bg-accent hover:text-white transition-all"
              >
                <Phone className={`w-4 h-4 ${isEn ? "mr-2" : "ml-2"}`} />
                {content.contactLabel}
              </Button>
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/60">
          {content.searchHint}
        </p>
      </div>
    </div>
  );
}
