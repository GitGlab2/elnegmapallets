import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Ruler, Weight, Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  const products = [
    {
      title: "بالتة شرق أوسط (120 × 100)",
      desc: "الخيار الأمثل للاستخدام المحلي والإقليمي، مصممة لتحمل الأوزان الثقيلة.",
      specs: [
        { label: "الأبعاد", value: "120 × 100 سم", icon: <Ruler className="w-4 h-4" /> },
        { label: "الحمولة", value: "1250 كجم", icon: <Weight className="w-4 h-4" /> },
        { label: "الاستخدام", value: "محلي وإقليمي", icon: <Package className="w-4 h-4" /> },
      ],
      features: ["متوافقة مع المعايير المحلية", "قوة تحمل عالية", "مثالية للتخزين"],
      image: "/images/product-pallet-detail.png"
    },
    {
      title: "بالتة يورو (120 × 80)",
      desc: "مطابقة لمواصفات الاتحاد الأوروبي، الخيار الأول للتصدير للأسواق العالمية.",
      specs: [
        { label: "الأبعاد", value: "120 × 80 سم", icon: <Ruler className="w-4 h-4" /> },
        { label: "الحمولة", value: "1500 كجم", icon: <Weight className="w-4 h-4" /> },
        { label: "الاستخدام", value: "تصدير (EU)", icon: <Package className="w-4 h-4" /> },
      ],
      features: ["مطابقة لمواصفات EPAL", "معالجة حرارية HT", "سهولة التداول"],
      image: "/images/products-image.jpg"
    },
    {
      title: "تصميمات مخصصة",
      desc: "نصمم وننفذ بالتات بمواصفات خاصة تناسب احتياجات منتجك وطبيعة تخزينه.",
      specs: [
        { label: "الأبعاد", value: "حسب الطلب", icon: <Ruler className="w-4 h-4" /> },
        { label: "الحمولة", value: "متغيرة", icon: <Weight className="w-4 h-4" /> },
        { label: "الاستخدام", value: "خاص", icon: <Package className="w-4 h-4" /> },
      ],
      features: ["مرونة كاملة في التصميم", "استشارات فنية مجانية", "عينات قبل التنفيذ"],
      image: "/images/factory-image.jpg"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* Header */}
      <section className="container text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-base border-primary/30 text-primary bg-primary/5">
          منتجاتنا
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
          حلول خشبية <span className="text-primary">متكاملة</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          نقدم مجموعة متكاملة من الباليات الخشبية المصنعة وفقًا للمواصفات العالمية والمحلية، مع مرونة في التصنيع حسب متطلبات العملاء.
        </p>
      </section>

      {/* Products Grid */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col overflow-hidden border-border shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{product.desc}</p>
                </div>
              </div>
              
              <CardContent className="flex-1 p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-2 bg-muted/50 rounded-lg">
                      <div className="text-primary mb-1">{spec.icon}</div>
                      <span className="text-[10px] text-muted-foreground font-bold">{spec.label}</span>
                      <span className="text-xs font-bold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 mt-auto">
                <Link href="/contact" className="w-full">
                  <Button className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    اطلب عرض سعر
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">معايير الجودة</h2>
            <p className="text-lg text-muted-foreground">
              نلتزم بأعلى معايير الجودة في عمليات التصنيع والإنتاج لضمان منتج نهائي يليق بعملائنا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "معالجة حرارية", desc: "معتمدة للصادرات العالمية (HT)" },
              { title: "فحص دقيق", desc: "لكل منتج قبل التسليم" },
              { title: "نظام لوجستي", desc: "لضمان توصيل سريع وآمن" },
              { title: "صيانة دورية", desc: "للمعدات لضمان استمرارية الإنتاج" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
