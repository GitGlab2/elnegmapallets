import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck, Phone, Package, BarChart3, Users, Globe2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const [quantity, setQuantity] = useState(5000);
  
  let discount = 0;
  let benefit = "خصم خاص للكميات";
  
  if (quantity >= 7000) {
    discount = 3;
    benefit = "شحن مجاني + معالجة HT مجانية للتصدير";
  } else if (quantity >= 5000) {
    discount = 2;
    benefit = "شحن مجاني + أولوية توريد خلال 24 ساعة";
  } else if (quantity >= 3000) {
    discount = 1;
    benefit = "شحن مجاني للكميات";
  } else {
    discount = 0;
    benefit = "توصيل سريع طبقاً للمواصفة";
  }

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "99%", label: "نسبة رضا العملاء" },
    { icon: <Globe2 className="w-8 h-8" />, value: "27", label: "محافظة نغطيها" },
    { icon: <Truck className="w-8 h-8" />, value: "47", label: "شبكة توريد شهرية" },
    { icon: <Package className="w-8 h-8" />, value: "+360k", label: "بالتة سنوياً" },
  ];

  const features = [
    { icon: <Truck className="w-10 h-10 text-primary" />, title: "توريد سريع", desc: "توريد أي كمية خلال 48 ساعة فقط" },
    { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: "ضمان الجودة", desc: "ضمان الجودة والاستلام على المواصفة" },
    { icon: <Package className="w-10 h-10 text-primary" />, title: "شحن مجاني", desc: "الشحن والمعاينة مجانًا للكميات" },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
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
              <Link href="/products">
                <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                  استكشف منتجاتنا
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-bold border-2 hover:bg-muted transition-all">
                  تواصل معنا
                </Button>
              </Link>
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

          {/* Abstract Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-2">
               <img 
                src="/images/product-pallet-detail.png" 
                alt="تفاصيل الباليات" 
                className="rounded-xl w-full h-auto object-cover shadow-inner"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-xl border border-border flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">معالجة حرارية</p>
                  <p className="text-xs text-muted-foreground">معتمدة للتصدير (HT)</p>
                </div>
              </div>
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

      {/* Features Section */}
      <section className="container py-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">لماذا تختار <span className="text-primary">النجمة</span>؟</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم مجموعة من الخدمات المجانية والمزايا التنافسية التي تجعلنا الخيار الأول للمصانع والشركات في مصر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-muted/30 border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="mb-6 p-4 bg-background rounded-2xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pricing & Offers Section */}
      <section className="container py-10">
        <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texts and Offer */}
            <div className="flex flex-col gap-6 text-right order-first lg:order-last">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-bold text-secondary">عرض خاص للعملاء الجدد</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                أنظمة الأسعار <span className="text-primary">والعروض</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقدم نظام تسعير تنافسي مع عروض خاصة حسب الكميات وخصومات تفضيلية للعملاء المستمرين. نوفر حلولاً مالية مرنة لتناسب احتياجات عملك وتحقق توفيراً حقيقياً على المدى الطويل.
              </p>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col gap-2">
                <h4 className="font-bold text-primary text-xl">خصم إضافي يصل إلى 3%</h4>
                <p className="text-muted-foreground text-sm">
                  احصل على خصومات تصاعدية تبدأ من 3,000 بالتة شهرياً، مع إمكانية الحصول على معالجة حرارية (HT) مجاناً للكميات الكبيرة.
                </p>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-muted/30 border border-border">
              <h3 className="text-xl font-bold text-foreground text-center">حاسبة الخصم التفاعلية</h3>
              <p className="text-sm text-muted-foreground text-center">
                اسحب المؤشر لتحديد كمية الطلب الشهري ومعرفة الخصم المتوقع والمزايا الإضافية
              </p>

              <div className="flex flex-col gap-4 my-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-primary font-black text-lg">{quantity.toLocaleString()} بالتة</span>
                  <span className="text-muted-foreground">الكمية المطلوبة:</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="12000" 
                  step="500"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  style={{ direction: 'ltr' }}
                />
                <div className="flex justify-between text-xs text-muted-foreground" style={{ direction: 'ltr' }}>
                  <span>2,000</span>
                  <span>3,000</span>
                  <span>5,000</span>
                  <span>7,000</span>
                  <span>12,000</span>
                </div>
              </div>

              {/* Result Badge */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <span className="text-xs text-muted-foreground block mb-1">نسبة الخصم</span>
                  <span className="text-3xl font-black text-primary">{discount}%</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <span className="text-xs text-muted-foreground block mb-1">الميزة المكتسبة</span>
                  <span className="text-sm font-bold text-foreground block mt-1">{benefit}</span>
                </div>
              </div>

              {/* Levels indicator */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-bold text-muted-foreground mb-1 text-right">مستويات الخصم:</span>
                {[
                  { range: "3,000 - 5,000 بالتة", pct: "1%" },
                  { range: "5,000 - 7,000 بالتة", pct: "2%" },
                  { range: "أكثر من 7,000 بالتة", pct: "3%" }
                ].map((lvl, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs p-2 rounded-lg bg-card/50 border border-border/50">
                    <span className="font-bold text-primary">{lvl.pct}</span>
                    <span className="text-muted-foreground">{lvl.range}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
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
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg font-bold h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
