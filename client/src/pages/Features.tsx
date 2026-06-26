import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Gift, ShieldCheck, Headphones, Percent, Flame } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "توريد سريع",
      desc: "توريد أي كمية خلال 48 ساعة فقط، بفضل أسطولنا الكبير وشبكتنا اللوجستية القوية.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "شحن مجاني",
      desc: "الشحن والمعاينة مجانًا للكميات، مما يوفر عليك تكاليف إضافية ويسهل عملية الشراء.",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "ضمان الجودة",
      desc: "ضمان الجودة والاستلام على المواصفة، مع إمكانية الاستبدال في حالة وجود أي عيوب.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "دعم فني",
      desc: "قسم فني متخصص لعمل المواصفات مجانًا وتقديم الاستشارات الفنية المناسبة لمنتجك.",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "خصومات مميزة",
      desc: "كاش باك على السحب السنوي، وخصومات تصل إلى 3% للعملاء المستمرين والكميات الكبيرة.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "معالجة حرارية",
      desc: "معالجة حرارية (HT) معتمدة للتصدير العالمي - نقدمها مجانًا للكميات الكبيرة.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* Header */}
      <section className="container text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-base border-primary/30 text-primary bg-primary/5">
          لماذا نحن؟
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
          مزايا تنافسية <span className="text-primary">لا تقارن</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          نقدم لعملائنا مجموعة من الخدمات المجانية والمزايا الحصرية التي تضمن لهم أفضل قيمة مقابل السعر.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications & Standards Section */}
      <section className="container">
        <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Cards */}
            <div className="grid grid-cols-2 gap-6 order-last lg:order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border bg-card hover:shadow-2xl transition-all duration-300 group">
                <img 
                  src="/images/quality-certification.jpg" 
                  alt="شهادة الجودة لشركة النجمة" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 bg-background/90 text-center border-t border-border">
                  <p className="font-bold text-sm text-foreground">اعتماد وزارة الزراعة والمعالجة</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border bg-card hover:shadow-2xl transition-all duration-300 group">
                <img 
                  src="/images/international-standards.jpg" 
                  alt="المعايير الدولية" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 bg-background/90 text-center border-t border-border">
                  <p className="font-bold text-sm text-foreground">المعايير الدولية للتصدير</p>
                </div>
              </div>
            </div>

            {/* Content / Texts */}
            <div className="flex flex-col gap-6 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold text-primary">المعايير الدولية</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                الشهادات <span className="text-primary">والمعايير الدولية</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                تلتزم شركة النجمة بالمعايير العالمية والمواصفات المعتمدة للتصدير والسوق المحلي. جميع منتجاتنا معالجة كيميائياً وحرارياً لضمان سلامتها وملاءمتها للمقاييس اللوجستية الدولية.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 text-right">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 mt-1">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">المعالجة الحرارية (HT) المعتمدة دولياً</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                      نظام معالجة حرارية (Heat Treatment) معتمد يضمن خلو الأخشاب من الآفات والحشرات، مما يجعل البالتات مناسبة للتصدير العالمي متوافقة مع المعيار الدولي ISPM-15.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-right">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">معايير الاتحاد الأوروبي (EPAL)</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                      تتوافق بالتاتنا مع مواصفات الاتحاد الأوروبي للبالتات الخشبية، مما يضمن سلامة تداولها في الأسواق والموانئ الأوروبية دون أي عوائق جمركية.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container">
        <div className="bg-gradient-to-br from-primary/90 to-primary rounded-3xl p-8 md:p-16 text-primary-foreground shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-warehouse.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">أنظمة الأسعار والعروض</h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                نظام تسعير تنافسي، مع عروض خاصة حسب الكميات وخصومات تفضيلية للعملاء المستمرين. نقدم حلول مالية مرنة لتناسب احتياجات عملك.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-2">🎁 عرض خاص للعملاء الجدد</h3>
                <p className="opacity-90">خصم إضافي يصل إلى 3% على سعر المصنع لفترة محدودة</p>
              </div>
            </div>

            <div className="bg-background/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <h3 className="font-bold text-xl text-center">خصومات الكميات الشهرية</h3>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { range: "3000 - 5000 بالتة", discount: "1%" },
                  { range: "5000 - 7000 بالتة", discount: "2%" },
                  { range: "7000 - 10000 بالتة", discount: "3%" },
                ].map((tier, i) => (
                  <div key={i} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors">
                    <span className="font-medium">{tier.range}</span>
                    <span className="font-black text-2xl text-secondary">{tier.discount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
