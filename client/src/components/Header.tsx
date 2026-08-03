"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getNavData, getLayoutContent } from "@/data/navigation";

interface HeaderProps {
  lang: "ar" | "en";
  onOpenSearch: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor: boolean) => void;
}

export function Header({ lang, onOpenSearch, onNavClick }: HeaderProps) {
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
                } w-64 bg-[#181b24] backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl shadow-black/40 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-200 z-[60] overflow-hidden py-2`}
                role="menu"
              >
                {cat.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    role="menuitem"
                    onClick={(e) => onNavClick(e, item.path, !!item.isAnchor)}
                    className={`block px-4 py-2.5 text-xs md:text-sm font-semibold text-gray-300 hover:text-white hover:bg-secondary/20 transition-colors ${
                      isEn ? "text-left" : "text-right"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-muted/30 hover:bg-muted text-xs font-semibold text-muted-foreground hover:text-white transition-all cursor-pointer mr-1"
            aria-label="Search site"
          >
            <Search className="w-3.5 h-3.5 text-secondary" />
            <span>{isEn ? "Search..." : "بحث..."}</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold bg-background/80 rounded border border-border text-muted-foreground">
              Ctrl K
            </kbd>
          </button>

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
          <button
            onClick={onOpenSearch}
            className="p-2 text-muted-foreground hover:text-white rounded-lg hover:bg-muted"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
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
                  <div className="mt-1 flex flex-col gap-1 pr-4 border-r border-border/50">
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          onNavClick(e, item.path, !!item.isAnchor);
                        }}
                        className="block min-h-[40px] px-3 py-2 text-sm font-semibold text-muted-foreground/90 hover:text-white rounded-md hover:bg-muted/60 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
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
