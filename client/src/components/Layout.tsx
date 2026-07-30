"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SearchModal } from "./SearchModal";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getLayoutContent } from "@/data/navigation";

export default function Layout({ children, lang = "ar" }: { children: React.ReactNode; lang?: "ar" | "en" }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isEn = lang === "en";
  const content = getLayoutContent(lang);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const hash = window.location.hash || sessionStorage.getItem('scrollTargetHash');
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollTargetHash');
          setTimeout(() => {
            window.history.replaceState(null, "", window.location.pathname);
          }, 800);
        }, 100);
      } else {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('scrollTargetHash');
            setTimeout(() => {
              window.history.replaceState(null, "", window.location.pathname);
            }, 800);
            clearInterval(interval);
          } else if (attempts > 40) {
            sessionStorage.removeItem('scrollTargetHash');
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      const currentRoot = isEn ? "/en" : "/";
      const normalizedPathname = window.location.pathname.replace(/\/$/, "");
      const normalizedRoot = currentRoot.replace(/\/$/, "");

      if (normalizedPathname === normalizedRoot) {
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            window.history.replaceState(null, "", window.location.pathname);
          }, 800);
        }
      } else {
        const hash = '#' + path.split('#')[1];
        sessionStorage.setItem('scrollTargetHash', hash);
        router.push(currentRoot);
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-secondary selection:text-white ${content.fontClass}`} dir={content.direction}>
      <Header 
        lang={lang} 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onNavClick={handleNavClick} 
      />

      <main className="flex-1">
        {children}
      </main>

      <Footer 
        lang={lang} 
        onNavClick={handleNavClick} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
