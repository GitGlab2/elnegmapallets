"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe, ChevronDown, Package, Layers, Box, TestTube, Weight, Truck, Sliders, Calculator, Info, Award, Briefcase, Image } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getNavData, getLayoutContent } from "@/data/navigation";

interface HeaderProps {
  lang: "ar" | "en";
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor: boolean) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Package, Layers, Box, TestTube, Weight, Truck, Sliders, Calculator, Info, Award, Briefcase, Image
};

export function Header({ lang, onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState<string | null>(null);
  const pathname = usePathname();
  const isEn = lang === "en";

  const navData = getNavData(lang);
  const content = getLayoutContent(lang);

  const toggleLangPath = () => {
    if (isEn) {
      if (pathname === "/en" || pathname === "/en/") return "/";
      const arPath = pathname.replace(/^\/en/, "");
      return arPath === "" ? "/" : arPath;
    }
    if (pathname === "/") return "/en/";
    return `/en${pathname}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-200">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={isEn ? "/en/" : "/"} className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src="/images/brand/company-logo.webp" 
                alt={content.logoAlt} 
                className="w-12 h-12 object-cover rounded-lg border border-border shadow-md bg-white group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col text-left">
                <span className="font-black text-xl leading-none text-white">{content.logoMain}</span>
                <span className="text-xs text-muted-foreground font-medium mt-1">{content.logoSub}</span>
              </div>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navData.mainLinks?.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => onNavClick(e, item.path, !!item.isAnchor)}
              className="text-sm font-bold text-muted-foreground hover:text-white transition-colors cursor-pointer py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              {item.name}
            </a>
          ))}
          {navData.menuCategories.map((cat) => (
            <div key={cat.id} className="relative group">
              <button
                className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-white transition-colors cursor-pointer py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>{cat.title}</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div
                className={`absolute top-[calc(100%+4px)] ${
                  isEn ? "left-0" : "right-0"
                } w-[360px] md:w-[480px] bg-[#181b24] border border-border/50 rounded-2xl shadow-2xl shadow-black/50 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 z-[60] p-4 before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:content-['']`}
                role="menu"
              >
                <div className={`grid gap-2 ${cat.items.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {cat.items.map((item) => {
                    const Icon = item.icon ? iconMap[item.icon] : null;
                    return (
                      <a
                        key={item.name}
                        href={item.path}
                        role="menuitem"
                        onClick={(e) => onNavClick(e, item.path, !!item.isAnchor)}
                        className={`group/item flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/10 transition-colors ${
                          isEn ? "text-left" : "text-right"
                        }`}
                      >
                        {Icon && (
                          <div className="shrink-0 mt-0.5 p-2 bg-secondary/10 text-secondary rounded-lg group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-gray-200 group-hover/item:text-white transition-colors text-sm">
                            {item.name}
                          </div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">

          <a 
            href={toggleLangPath()} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:bg-muted text-xs font-bold text-muted-foreground transition-all duration-300"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{content.switcherText}</span>
          </a>

          <a href={isEn ? "/en/#contact-section" : "/#contact-section"}>
            <Button variant="default" className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all bg-secondary hover:bg-secondary/90">
              {isEn ? <Phone className="mr-2 w-4 h-4" /> : <Phone className="ml-2 w-4 h-4" />}
              {navData.callBtn}
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a 
            href={toggleLangPath()} 
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border hover:bg-muted text-xs font-bold text-muted-foreground transition-all duration-300"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{content.switcherText}</span>
          </a>
          <button
            className="p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navData.mainLinks?.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => {
                setIsMenuOpen(false);
                onNavClick(e, item.path, !!item.isAnchor);
              }}
              className="flex items-center w-full min-h-[44px] px-3 rounded-lg text-base font-bold text-muted-foreground hover:bg-muted hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          {navData.menuCategories.map((cat) => {
            const isOpen = openMobileCat === cat.id;
            return (
              <div key={cat.id} className="flex flex-col border-b border-border/40 pb-2">
                <button
                  onClick={() => setOpenMobileCat(isOpen ? null : cat.id)}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-lg text-base font-bold text-muted-foreground hover:bg-muted transition-colors"
                >
                  <span>{cat.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="mt-1 flex flex-col gap-2 pr-4 pl-4 py-2 border-r border-l border-border/20 bg-black/10 rounded-lg">
                    {cat.items.map((item) => {
                      const Icon = item.icon ? iconMap[item.icon] : null;
                      return (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={(e) => {
                            setIsMenuOpen(false);
                            onNavClick(e, item.path, !!item.isAnchor);
                          }}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors group"
                        >
                          {Icon && (
                            <div className="text-muted-foreground group-hover:text-secondary transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                            {item.description && <span className="text-[10px] text-muted-foreground">{item.description}</span>}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-2 flex flex-col gap-2">
            <a href={isEn ? "/en/#contact-section" : "/#contact-section"} className="w-full block" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full min-h-[44px] font-bold bg-secondary hover:bg-secondary/90">
                {isEn ? <Phone className="mr-2 w-4 h-4" /> : <Phone className="ml-2 w-4 h-4" />}
                {navData.callBtn}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
