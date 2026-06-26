import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck, Phone, Package, Users, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

// Import other sections
import About from "./About";
import Products from "./Products";
import Features from "./Features";
import Clients from "./Clients";
import Contact from "./Contact";
import Gallery from "./Gallery";

export default function Home() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "99%", label: "نسبة رضا العملاء" },
    { icon: <Globe2 className="w-8 h-8" />, value: "27", label: "محافظة نغطيها" },
    { icon: <Truck className="w-8 h-8" />, value: "47", label: "شبكة توريد شهرية" },
    { icon: <Package className="w-8 h-8" />, value: "+360k", label: "بالتة سنوياً" },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-10 scroll-mt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-warehouse.png" 
            alt="مستودع شركة النجمة" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">الشركة رقم 1 في مصر</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-foreground">
              نصنع <span className="text-primary">الجودة</span><br />
              ونضمن <span className="text-secondary">الوصول</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              شركة النجمة لتصنيع الباليات الخشبية. خبرة 18 عاماً في تقديم حلول النقل والتخزين بأعلى المواصفات العالمية.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#products">
                <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                  استكشف منتجاتنا
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-bold border-2 hover:bg-muted transition-all">
                  تواصل معنا
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="flex -space-x-4 space-x-reverse">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {i}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">+500 عميل</span>
                <span className="text-sm text-muted-foreground">يثقون في منتجاتنا</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative z-10"
          >
            <div className="relative w-full max-w-2xl mx-auto group">
              {/* Glowing background aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-600 to-secondary rounded-[32px] blur-xl opacity-25 group-hover:opacity-45 transition duration-1000 group-hover:duration-300" />
              
              <img 
                src="/images/pallet-hero-detail.png" 
                alt="تفاصيل الباليات" 
                className="relative rounded-[28px] w-full h-[450px] lg:h-[580px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg bg-card/50 backdrop-blur hover:bg-card transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-4xl font-black text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* Products Section */}
      <section id="products" className="scroll-mt-24">
        <Products />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>

      {/* Clients Section */}
      <section id="clients" className="scroll-mt-24">
        <Clients />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground px-6 py-16 md:p-20 text-center">
          <div className="absolute inset-0 bg-[url('/images/logistics-truck.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black">جاهز لطلب كميتك؟</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              احصل على عرض سعر خاص للكميات الكبيرة، واستفد من خدمات التوريد السريع والشحن المجاني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full text-lg font-bold h-14 px-8">
                  <Phone className="ml-2 w-5 h-5" />
                  01080012261
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-lg font-bold h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  تواصل معنا
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
