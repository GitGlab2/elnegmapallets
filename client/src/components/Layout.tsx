"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, MapPin, Mail, BookOpen, Globe, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SearchModal } from "./SearchModal";

export default function Layout({ children, lang = "ar" }: { children: React.ReactNode; lang?: "ar" | "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isEn = lang === "en";

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

  const navItems = isEn ? [
    { name: "About Us", path: "/en#about-section", isAnchor: true },
    { name: "Products", path: "/en#products-section", isAnchor: true },
    { name: "Contact Us", path: "/en#contact-section", isAnchor: true },
    { name: "Blog", path: "/en/articles", isAnchor: false },
  ] : [
    { name: "من نحن", path: "/#about-section", isAnchor: true },
    { name: "المنتجات", path: "/#products-section", isAnchor: true },
    { name: "تواصل معنا", path: "/#contact-section", isAnchor: true },
    { name: "المدونة", path: "/articles", isAnchor: false },
  ];

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

  const toggleLangPath = () => {
    if (isEn) {
      if (pathname === "/en") return "/";
      if (pathname.startsWith("/en/articles")) {
        return pathname.replace("/en/articles", "/articles");
      }
      return "/";
    } else {
      if (pathname === "/") return "/en";
      if (pathname.startsWith("/articles")) {
        return pathname.replace("/articles", "/en/articles");
      }
      return "/en";
    }
  };

  const content = {
    ar: {
      logoMain: "شركة النجمة",
      logoSub: "لتصنيع البالتات الخشبية",
      logoAlt: "شعار شركة النجمة",
      callBtn: "اتصل الآن",
      switcherText: "English",
      footerDesc: "الشركة رقم 1 في مصر لتصنيع البالتات الخشبية. خبرة تزيد عن 18 عامًا في خدمة كبرى الشركات والمصانع.",
      footerQuickLinks: "روابط سريعة",
      footerProducts: "المنتجات",
      footerProductsList: [
        { name: "بالتة 100 × 120", path: "/articles/pallet-size-120x100-industrial-pallet", isAnchor: false },
        { name: "بالتة يورو (Euro Pallet)", path: "/articles/pallet-size-120x80-euro-pallet", isAnchor: false },
        { name: "تصميمات مخصصة", path: "/#contact-section", isAnchor: true },
        { name: "معالجة حرارية (HT)", path: "/articles/heat-treatment-vs-methyl-bromide", isAnchor: false }
      ],
      footerContact: "تواصل معنا",
      footerAddress: "بني سويف - المنطقة الصناعية بياض العرب (بجوار علوم إدارية)",
      footerCopyright: `© ${new Date().getFullYear()} شركة النجمة لتصنيع البالتات الخشبية. جميع الحقوق محفوظة.`,
      footerDev: "تم التطوير بواسطة",
      direction: "rtl" as const,
      fontClass: "font-['Cairo']",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
    },
    en: {
      logoMain: "El Negma",
      logoSub: "Pallet Manufacturing",
      logoAlt: "El Negma Pallets Logo",
      callBtn: "Call Now",
      switcherText: "العربية",
      footerDesc: "The #1 company in Egypt for wooden pallets manufacturing. Over 18 years of experience serving major companies and factories.",
      footerQuickLinks: "Quick Links",
      footerProducts: "Products",
      footerProductsList: [
        { name: "Pallet 100 × 120", path: "/en/articles/pallet-size-120x100-industrial-pallet", isAnchor: false },
        { name: "Euro Pallet (EPAL)", path: "/en/articles/pallet-size-120x80-euro-pallet", isAnchor: false },
        { name: "Custom Designs", path: "/en#contact-section", isAnchor: true },
        { name: "Heat Treatment (HT)", path: "/en/articles/heat-treatment-vs-methyl-bromide", isAnchor: false }
      ],
      footerContact: "Contact Us",
      footerAddress: "Beni Suef - Bayad Al-Arab Industrial Zone, Egypt",
      footerCopyright: `© ${new Date().getFullYear()} El Negma Pallets. All rights reserved.`,
      footerDev: "Developed by",
      direction: "ltr" as const,
      fontClass: "font-sans",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
    }
  }[lang];

  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground ${content.fontClass}`} dir={content.direction}>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <a 
              href={isEn ? "/en" : "/"}
              onClick={(e) => {
                const currentRoot = isEn ? "/en" : "/";
                if (window.location.pathname === currentRoot) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  e.preventDefault();
                  router.push(currentRoot);
                }
              }}
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <img 
                  src="/images/brand/company-logo.webp" 
                  alt={content.logoAlt} 
                  className="w-12 h-12 object-cover rounded-lg border border-border shadow-md bg-white"
                />
                <div className="flex flex-col text-left">
                  <span className="font-black text-xl leading-none text-white">{content.logoMain}</span>
                  <span className="text-xs text-muted-foreground font-medium mt-1">{content.logoSub}</span>
                </div>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isArticles = item.path === "/articles" || item.path === "/en/articles";
              if (isArticles) {
                return (
                  <a 
                    key={item.path} 
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path, item.isAnchor)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-black">
                      {item.name}
                    </span>
                  </a>
                );
              }
              return (
                <a 
                  key={item.path} 
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path, item.isAnchor)}
                >
                  <span
                    className="text-sm font-bold transition-colors hover:text-primary cursor-pointer relative py-2 text-muted-foreground"
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <a 
              href={toggleLangPath()} 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:bg-muted text-xs font-bold text-muted-foreground transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{content.switcherText}</span>
            </a>
            
            <a href="tel:01080012261">
              <Button variant="default" className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                {isEn ? <Phone className="mr-2 w-4 h-4" /> : <Phone className="ml-2 w-4 h-4" />}
                {content.callBtn}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switcher */}
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
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => {
              const isArticles = item.path === "/articles" || item.path === "/en/articles";
              if (isArticles) {
                return (
                  <a 
                    key={item.path} 
                    href={item.path} 
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      handleNavClick(e, item.path, item.isAnchor);
                    }}
                  >
                    <span
                      className="flex items-center justify-center gap-2 p-3 rounded-lg text-base font-black transition-colors cursor-pointer bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white"
                    >
                      <BookOpen className="w-5 h-5" />
                      {item.name}
                    </span>
                  </a>
                );
              }
              return (
                <a 
                  key={item.path} 
                  href={item.path} 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleNavClick(e, item.path, item.isAnchor);
                  }}
                >
                  <span
                    className="block p-3 rounded-lg text-base font-bold transition-colors cursor-pointer hover:bg-muted text-muted-foreground"
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
            <a href="tel:01080012261" className="w-full">
              <Button className="w-full font-bold">
                {isEn ? <Phone className="mr-2 w-4 h-4" /> : <Phone className="ml-2 w-4 h-4" />}
                {content.callBtn}
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-20">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/brand/company-logo.webp" 
                  alt={content.logoAlt} 
                  className="w-10 h-10 object-cover rounded-md border border-border shadow-sm bg-white"
                />
                <span className="font-black text-lg text-white">{content.logoMain}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {content.footerDesc}
              </p>
              <div className="flex gap-3">
                {/* Official Facebook Icon */}
                <a 
                  href="https://facebook.com/negma.wood" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  aria-label="Facebook Page" 
                  className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Official WhatsApp Icon */}
                <a 
                  href="https://wa.me/201080012261" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  aria-label="WhatsApp Contact" 
                  className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerQuickLinks}</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a 
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path, item.isAnchor)}
                    >
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerProducts}</h3>
              <ul className="space-y-3">
                {content.footerProductsList.map((prod, index) => (
                  <li key={index}>
                    <a 
                      href={prod.path}
                      onClick={(e) => handleNavClick(e, prod.path, prod.isAnchor)}
                    >
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {prod.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerContact}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:01080012261" className={`text-sm text-muted-foreground hover:text-primary transition-colors dir-ltr ${content.oppositeAlignClass}`}>01080012261</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <a href="mailto:info@elnegmapallets.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    info@elnegmapallets.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <a 
                    href="https://www.google.com/maps?cid=16821078517981758662" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                  >
                    {content.footerAddress}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center">
              {content.footerCopyright}
            </p>
            <p className="text-xs text-muted-foreground">
              {content.footerDev}{" "}
              <a 
                href="https://xfai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors underline"
              >
                XFAI
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Global Search Dialog */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
