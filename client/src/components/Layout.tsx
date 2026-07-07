"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, MapPin, Mail } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "من نحن", path: "#about-section" },
    { name: "المنتجات", path: "#products-section" },
    { name: "المزايا", path: "#features-section" },
    { name: "معرض الصور", path: "#gallery-section" },
    { name: "الأسعار", path: "#pricing-section" },
    { name: "الشهادات", path: "#certifications-section" },
    { name: "تواصل معنا", path: "#contact-section" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-['Cairo']" dir="rtl">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <img 
                  src="/images/company-logo.jpg" 
                  alt="شعار شركة النجمة" 
                  className="w-12 h-12 object-cover rounded-lg border border-border shadow-md bg-white"
                />
                <div className="flex flex-col">
                  <span className="font-black text-xl leading-none text-white">شركة النجمة</span>
                  <span className="text-xs text-muted-foreground font-medium mt-1">لتصنيع الباليات الخشبية</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.path} href={item.path}>
                <span
                  className="text-sm font-bold transition-colors hover:text-primary cursor-pointer relative py-2 text-muted-foreground"
                >
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:01080012261">
              <Button variant="default" className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Phone className="w-4 h-4 ml-2" />
                اتصل الآن
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة الرئيسية" : "فتح القائمة الرئيسية"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} onClick={() => setIsMenuOpen(false)}>
                <span
                  className="block p-3 rounded-lg text-base font-bold transition-colors cursor-pointer hover:bg-muted text-muted-foreground"
                >
                  {item.name}
                </span>
              </a>
            ))}
            <a href="tel:01080012261" className="w-full">
              <Button className="w-full font-bold">
                <Phone className="w-4 h-4 ml-2" />
                اتصل الآن
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
                  src="/images/company-logo.jpg" 
                  alt="شعار شركة النجمة" 
                  className="w-10 h-10 object-cover rounded-md border border-border shadow-sm bg-white"
                />
                <span className="font-black text-lg text-white">شركة النجمة</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                الشركة رقم 1 في مصر لتصنيع الباليات الخشبية. خبرة تزيد عن 18 عامًا في خدمة كبرى الشركات والمصانع.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/negma.wood" target="_blank" rel="noopener noreferrer nofollow" aria-label="صفحة فيسبوك لشركة النجمة" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">روابط سريعة</h3>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <a href={item.path}>
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">المنتجات</h3>
              <ul className="space-y-3">
                <li><span className="text-muted-foreground text-sm">بالتة 100 × 120</span></li>
                <li><span className="text-muted-foreground text-sm">بالتة يورو (Euro Pallet)</span></li>
                <li><span className="text-muted-foreground text-sm">تصميمات مخصصة</span></li>
                <li><span className="text-muted-foreground text-sm">معالجة حرارية (HT)</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">تواصل معنا</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:01080012261" className="text-sm text-muted-foreground hover:text-primary transition-colors dir-ltr text-right">01080012261</a>
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
                    بني سويف - المنطقة الصناعية بياض العرب (بجوار علوم إدارية)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} شركة النجمة لتصنيع الباليات الخشبية. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-muted-foreground">
              تم التطوير بواسطة{" "}
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
    </div>
  );
}
