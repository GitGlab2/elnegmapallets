import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, Layers, CornerDownLeft, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { articles } from "../data/articles";
import { articlesEn } from "../data/articles-en";
import { palletSizesAr } from "../data/pallet-sizes";
import { palletSizesEn } from "../data/pallet-sizes-en";
import { matchSearchQuery } from "@/utils/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "ar" | "en";
}

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: "articles" | "pallets";
  badge: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, lang }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const isEn = lang === "en";

  const content = {
    ar: {
      placeholder: "ابحث عن مقالات، مقاسات، مواصفات البالتات...",
      noResults: "لم يتم العثور على نتائج تطابق بحثك.",
      shortcutTips: "استخدم الأسهم للتنقل، و Enter للاختيار، و Esc للإغلاق",
      categories: {
        articles: "المقالات والمعلومات اللوجستية",
        pallets: "أبعاد ومواصفات البالتات"
      }
    },
    en: {
      placeholder: "Search articles, dimensions, specifications...",
      noResults: "No results found matching your search.",
      shortcutTips: "Use arrow keys to navigate, Enter to select, Esc to close",
      categories: {
        articles: "Articles & Logistics Information",
        pallets: "Pallet Dimensions & Specs"
      }
    }
  }[lang];

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const tempResults: SearchResult[] = [];

    // 1. Search Articles
    const activeArticles = isEn ? articlesEn : articles;
    activeArticles.forEach((art) => {
      const isMatched = matchSearchQuery(
        query,
        [art.title, art.description, art.keywords, art.content],
        lang
      );
      
      if (isMatched) {
        tempResults.push({
          title: art.title,
          description: art.description,
          url: isEn ? `/en/articles/${art.slug}` : `/articles/${art.slug}`,
          category: "articles",
          badge: isEn ? "Article" : "مقال"
        });
      }
    });

    // 2. Search Pallet Sizes (Removed since they are indexed as regular articles)

    setResults(tempResults);
    setSelectedIndex(0);
  }, [query, lang, isEn]);

  // Handle Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
        onClose();
      }
    }
  };

  // Scroll active item into view inside scroll container
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector("[data-active='true']");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 md:px-0">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Search box container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl flex flex-col"
          >
            {/* Search Input Section */}
            <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3.5">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={content.placeholder}
                className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none text-base border-none focus:ring-0"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Section */}
            <div
              ref={resultsContainerRef}
              className="max-h-[50vh] overflow-y-auto p-2 space-y-4 divide-y divide-border/20 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              {query && results.length === 0 && (
                <div className="py-12 text-center text-muted-foreground">
                  <FileText className="w-12 h-12 mx-auto stroke-[1.2] mb-3 text-muted-foreground/60" />
                  <p className="text-sm font-medium">{content.noResults}</p>
                </div>
              )}

              {!query && (
                <div className="py-10 text-center text-muted-foreground">
                  <Search className="w-12 h-12 mx-auto stroke-[1.2] mb-3 text-primary/60 animate-pulse" />
                  <p className="text-xs max-w-xs mx-auto">
                    {isEn 
                      ? "Search standard dimensions like '120x80' or articles about 'export regulations'."
                      : "ابحث بمقاس البالتة مثل '120x80' أو مواضيع مثل 'التصدير للسعودية'."
                    }
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  {results.map((item, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <a
                        key={item.url}
                        href={item.url}
                        data-active={isActive}
                        onClick={() => onClose()}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                          isActive 
                            ? "bg-primary/20 border border-primary/30" 
                            : "hover:bg-muted/40 border border-transparent"
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg ${isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                          {item.category === "articles" ? (
                            <BookOpen className="w-4 h-4" />
                          ) : (
                            <Layers className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                          <div className="flex items-center gap-2 mb-0.5 justify-end">
                            <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-muted text-primary border border-border">
                              {item.badge}
                            </span>
                            <h4 className="font-bold text-sm text-white truncate shrink-0">{item.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                        </div>
                        {isActive && (
                          <span className="text-xs text-primary flex items-center gap-1 shrink-0">
                            <span className="text-[10px] opacity-75 font-mono">Enter</span>
                            <CornerDownLeft className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Keyboard Guide */}
            <div className="border-t border-border/40 px-4 py-2 bg-muted/30 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{content.shortcutTips}</span>
              <span className="flex items-center gap-1 bg-muted px-1.5 py-0.5 rounded border border-border font-mono text-[9px]">
                ESC
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
