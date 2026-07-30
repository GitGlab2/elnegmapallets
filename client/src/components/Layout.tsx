"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, MapPin, Mail, BookOpen, Globe, Search, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SearchModal } from "./SearchModal";

export default function Layout({ children, lang = "ar" }: { children: React.ReactNode; lang?: "ar" | "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isEn = lang === "en";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsMenuOpen(false);
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

  const toggleLangPath = () => {
    if (isEn) {
      if (pathname === "/en" || pathname === "/en/") return "/";
      const arPath = pathname.replace(/^\/en/, "");
      return arPath === "" ? "/" : arPath;
    }
    if (pathname === "/") return "/en/";
    return `/en${pathname}`;
  };

  const navData = {
    ar: {
      blogBtn: "المدونة",
      callBtn: "تواصل معنا",
      menuCategories: [
        {
          id: "company",
          title: "الشركة والاعتمادات",
          items: [
            { name: "من نحن", path: "/about/" },
            { name: "الشهادات والاعتمادات الدولية", path: "/certificates/" },
            { name: "معرض الصور وخطوط الإنتاج", path: "/gallery/" },
            { name: "عملاؤنا والقطاعات الصناعية", path: "/clients/" },
          ]
        },
        {
          id: "services",
          title: "المنتجات والخدمات",
          items: [
            { name: "بالتات التصدير المعالجة حرارياً (ISPM-15)", path: "/certificates/" },
            { name: "عروض وتوريد الكميات", path: "/#pricing-section", isAnchor: true },
            { name: "التوريد والتوصيل لجميع المحافظات", path: "/#achievements", isAnchor: true },
            { name: "حلول القطاعات الزراعية والصناعية", path: "/clients/" },
          ]
        },
        {
          id: "media",
          title: "المركز الإعلامي",
          items: [
            { name: "دليل ومقالات البالتات الخشبية", path: "/articles/" },
            { name: "معايير التبخير والتصدير الدولية", path: "/articles/" },
          ]
        }
      ]
    },
    en: {
      blogBtn: "Blog",
      callBtn: "Contact Us",
      menuCategories: [
        {
          id: "company",
          title: "Company & ISO",
          items: [
            { name: "About Us", path: "/en/about/" },
            { name: "ISO & Global Certifications", path: "/en/certificates/" },
            { name: "Factory & Gallery", path: "/en/gallery/" },
            { name: "Clients & Sectors", path: "/en/clients/" },
          ]
        },
        {
          id: "services",
          title: "Products & Services",
          items: [
            { name: "Heat-Treated Export Pallets", path: "/en/certificates/" },
            { name: "Bulk Supply & Custom Specifications", path: "/en/#pricing-section", isAnchor: true },
            { name: "Nationwide Supply Network", path: "/en/#achievements", isAnchor: true },
            { name: "Food & Chemical Solutions", path: "/en/clients/" },
          ]
        },
        {
          id: "media",
          title: "Knowledge Center",
          items: [
            { name: "Pallet Industry Guides & Articles", path: "/en/articles/" },
            { name: "ISPM-15 Export Guidelines", path: "/en/articles/" },
          ]
        }
      ]
    }
  }[lang];

  const content = {
    ar: {
      logoMain: "شركة النجمة",
      logoSub: "لتصنيع البالتات الخشبية",
      logoAlt: "شعار شركة النجمة",
      callBtn: "تواصل معنا",
      switcherText: "English",
      footerDesc: "الشركة رقم 1 في مصر لتصنيع البالتات الخشبية. خبرة تزيد عن 18 عامًا في خدمة كبرى الشركات والمصانع.",
      footerQuickLinks: "روابط سريعة",
      footerQuickLinksList: [
        { name: "من نحن", path: "/about/", isAnchor: false },
        { name: "الشهادات والاعتمادات", path: "/certificates/", isAnchor: false },
        { name: "معرض الصور", path: "/gallery/", isAnchor: false },
        { name: "عملاؤنا والقطاعات", path: "/clients/", isAnchor: false },
        { name: "أنظمة الأسعار والعروض", path: "/#pricing-section", isAnchor: true },
        { name: "تواصل معنا", path: "/#contact-section", isAnchor: true },
      ],
      footerProducts: "منتجات البالتات",
      footerProductsList: [
        { name: "بالتة يورو (120×80)", path: "/products/120x80-euro-pallet/", isAnchor: false },
        { name: "بالتة تصدير (120×100)", path: "/products/120x100-export-pallet/", isAnchor: false },
        { name: "بالتات التصدير المعالجة حرارياً", path: "/certificates/", isAnchor: false },
        { name: "البالتات الخشبية المعاد تصنيعها", path: "/#products-section", isAnchor: true },
      ],
      footerServices: "خدمات المصنع",
      footerServicesList: [
        { name: "معالجة حرارية ISPM-15", path: "/services/heat-treatment-ht/", isAnchor: false },
        { name: "توريد كميات للمصانع", path: "/services/bulk-supply/", isAnchor: false },
        { name: "تصنيع هندسي مخصص", path: "/services/custom-manufacturing/", isAnchor: false },
        { name: "صناديق خشبية وإطارات", path: "/services/wooden-crates-collars/", isAnchor: false }
      ],
      footerContact: "معلومات الاتصال",
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
      logoSub: "Wooden Pallets Factory",
      logoAlt: "El Negma Pallets Logo",
      callBtn: "Contact Us",
      switcherText: "عربي",
      footerDesc: "Egypt's #1 wooden pallet manufacturer. 18+ years serving major industrial enterprise supply chains.",
      footerQuickLinks: "Quick Links",
      footerQuickLinksList: [
        { name: "About Us", path: "/en/about/", isAnchor: false },
        { name: "Certifications", path: "/en/certificates/", isAnchor: false },
        { name: "Factory Gallery", path: "/en/gallery/", isAnchor: false },
        { name: "Clients & Sectors", path: "/en/clients/", isAnchor: false },
        { name: "Pricing & Quotations", path: "/en/#pricing-section", isAnchor: true },
        { name: "Contact Us", path: "/en/#contact-section", isAnchor: true },
      ],
      footerProducts: "Pallet Products",
      footerProductsList: [
        { name: "120x80 Euro Pallet", path: "/en/products/120x80-euro-pallet/", isAnchor: false },
        { name: "120x100 Heavy Duty Export Pallet", path: "/en/products/120x100-export-pallet/", isAnchor: false },
        { name: "Heat-Treated ISPM-15 Pallets", path: "/en/certificates/", isAnchor: false },
        { name: "Recycled & Custom Pallets", path: "/en/#products-section", isAnchor: true },
      ],
      footerServices: "Services",
      footerServicesList: [
        { name: "ISPM-15 Heat Treatment", path: "/en/services/heat-treatment-ht/", isAnchor: false },
        { name: "Bulk Industrial Supply", path: "/en/services/bulk-supply/", isAnchor: false },
        { name: "Custom Pallet Engineering", path: "/en/services/custom-manufacturing/", isAnchor: false },
        { name: "Export Wooden Crates", path: "/en/services/wooden-crates-collars/", isAnchor: false }
      ],
      footerContact: "Contact Information",
      footerAddress: "Beni Suef - Bayad Al-Arab Industrial Zone, Egypt",
      footerRights: "All Rights Reserved © El Negma Wooden Pallets Co. 2026",
      footerDev: "Developed by",
      direction: "ltr" as const,
      fontClass: "font-sans",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
    }
  }[lang];

  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-white ${content.fontClass}`} dir={content.direction}>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} lang={lang} />

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-200">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={isEn ? "/en/" : "/"} className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1">
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                  ★
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-black text-xl leading-none text-white">{content.logoMain}</span>
                  <span className="text-xs text-muted-foreground font-medium mt-1">{content.logoSub}</span>
                </div>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
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
                  {cat.items.map((item: any) => (
                    <a
                      key={item.name}
                      href={item.path}
                      role="menuitem"
                      onClick={(e) => handleNavClick(e, item.path, !!item.isAnchor)}
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
              onClick={() => setIsSearchOpen(true)}
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

            <a href={isEn ? "/en/articles/" : "/articles/"}>
              <Button variant="outline" className="font-bold border-secondary/50 text-secondary hover:bg-secondary hover:text-white transition-all shadow-md">
                {navData.blogBtn}
              </Button>
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
              onClick={() => setIsSearchOpen(true)}
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
                      {cat.items.map((item: any) => (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={(e) => {
                            setIsMenuOpen(false);
                            handleNavClick(e, item.path, !!item.isAnchor);
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
              <a href={isEn ? "/en/articles/" : "/articles/"} className="w-full block" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full min-h-[44px] font-bold border-secondary/50 text-secondary hover:bg-secondary hover:text-white">
                  {navData.blogBtn}
                </Button>
              </a>
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

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-muted/30 border-t border-border mt-20">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                {content.footerQuickLinksList.map((item, index) => (
                  <li key={index}>
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
              <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerServices}</h3>
              <ul className="space-y-3">
                {content.footerServicesList.map((srv, index) => (
                  <li key={index}>
                    <a 
                      href={srv.path}
                      onClick={(e) => handleNavClick(e, srv.path, srv.isAnchor)}
                    >
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {srv.name}
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
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <span>{content.footerDev}</span>
              <a 
                href="https://xfai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-secondary/40 bg-secondary/10 hover:bg-secondary text-secondary hover:text-white font-black transition-all duration-300 shadow-md shadow-secondary/5 hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="tracking-wide">XFAI</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </a>
            </div>
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
