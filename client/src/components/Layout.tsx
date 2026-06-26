import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, Globe } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المنتجات", path: "/products" },
    { name: "المزايا", path: "/features" },
    { name: "العملاء", path: "/clients" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-['Cairo']" dir="rtl">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                  ⭐
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl leading-none text-primary">شركة النجمة</span>
                  <span className="text-xs text-muted-foreground font-medium">لتصنيع الباليات الخشبية</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-primary cursor-pointer relative py-2",
                    location === item.path
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-primary after:rounded-full"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </span>
              </Link>
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
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "block p-3 rounded-lg text-base font-bold transition-colors cursor-pointer",
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold shadow-md">
                  ⭐
                </div>
                <span className="font-black text-lg text-primary">شركة النجمة</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                الشركة رقم 1 في مصر لتصنيع الباليات الخشبية. خبرة تزيد عن 18 عامًا في خدمة كبرى الشركات والمصانع.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/negma.wood" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.elnegmapallets.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">روابط سريعة</h3>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
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
                    <a href="tel:01030325150" className="text-sm text-muted-foreground hover:text-primary transition-colors dir-ltr text-right">01030325150</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">المنطقة الصناعية بني سويف</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} شركة النجمة لتصنيع الباليات الخشبية. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-muted-foreground">
              تم التطوير بواسطة Manus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
