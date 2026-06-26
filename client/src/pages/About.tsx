import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, History } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* Header */}
      <section className="container text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-base border-primary/30 text-primary bg-primary/5">
          من نحن
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
          الريادة في صناعة <span className="text-primary">الباليات الخشبية</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          شركة النجمة لتصنيع الباليات الخشبية هي شركة مصرية رائدة تتمتع بخبرة تزيد عن 18 عامًا في مجال تصنيع الباليات الخشبية بجميع أنواعها وأشكالها.
        </p>
      </section>

      {/* Main Content */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
            <img 
              src="/images/factory-image.jpg" 
              alt="مصنع شركة النجمة" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-2xl mb-2">مصنعنا</p>
                <p className="opacity-90">مجهز بأحدث تقنيات التصنيع الآلي لضمان الجودة</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">تاريخنا وخبرتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحن متخصصون في توفير حلول الباليات الخشبية عالية الجودة لكبرى الشركات والمصانع داخل مصر وخارجها. تمكنا عبر سنوات الخبرة من بناء سمعة قوية كأفضل مورد للباليات في السوق المصري.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">الجودة أولاً</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    نلتزم بأعلى معايير الجودة والمواصفات والأسعار في المواعيد المحددة.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <History className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">18 عاماً خبرة</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    خبرة طويلة في خدمة مختلف القطاعات الصناعية والزراعية.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black mb-4 text-foreground">رسالتنا</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  تقديم بالتة خشبية مصرية بمواصفة عالمية، تلبي احتياجات السوق المحلي والعالمي بأعلى معايير الجودة.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black mb-4 text-foreground">رؤيتنا</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  الريادة في حلول النقل والتخزين والصادرات الخشبية بالسوقين المحلي والدولي، وأن نكون الاختيار الأول للمصانع والشركات الأخرى.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision & Expansions */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            الرؤية المستقبلية <span className="text-primary">والتوسعات</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نسعى دائماً للتطور والابتكار لتقديم أفضل الحلول اللوجستية وتلبية الاحتياجات المتنامية لشركائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "التوسع المحلي",
              desc: "زيادة القدرة الإنتاجية للمصنع بنسبة 50% وتغطية كامل محافظات مصر بخدمات التوريد السريع في غضون 24 ساعة."
            },
            {
              title: "الأسواق الخارجية",
              desc: "الدخول في أسواق التصدير للدول العربية والأفريقية وتوسيع نطاق العملاء الدوليين وفق معايير التصدير العالمية."
            },
            {
              title: "تطوير المنتجات",
              desc: "استحداث خطوط إنتاج جديدة للبالتات متعددة الاستخدامات وإضافة معالجات خاصة للصناعات الغذائية والدوائية."
            },
            {
              title: "التحول الرقمي",
              desc: "أتمتة عمليات الإنتاج وإطلاق منصة إلكترونية لإدارة طلبات العملاء وتتبع الشحنات وجدولة التوريدات بشكل مباشر."
            }
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-card border border-border shadow-lg hover:border-primary/50 hover:shadow-2xl transition-all duration-300 flex flex-col gap-4">
              <span className="text-primary font-black text-2xl">0{index + 1}</span>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
