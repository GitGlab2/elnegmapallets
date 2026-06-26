import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, History } from "lucide-react";

export default function About() {
  return (
    <div className="container py-12 flex flex-col gap-16">
      
      {/* Split Screen slide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
        
        {/* Left Side: Dark Presentation Card (Grid span 5) */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[450px]">
          {/* Decorative SVG lines */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 200 L500 600 M-100 230 L500 630" stroke="#B165FB" strokeWidth="2" fill="none" />
              <path d="M-100 300 L500 -100 M-100 330 L500 -70" stroke="#d4a976" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Floating Factory Image Card */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-6 border border-border hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/factory-image.jpg" 
              alt="مصنع شركة النجمة" 
              className="rounded-xl w-full h-72 lg:h-80 object-cover shadow-md"
            />
            <div className="w-full text-right flex justify-between items-center border-t border-border pt-4">
              <span className="text-xs text-muted-foreground font-bold">بني سويف - مصر</span>
              <span className="text-lg font-black text-slate-900">مصانعنا</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content (Grid span 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center text-right">
          {/* Title */}
          <div className="flex items-stretch gap-4 mb-6">
            <div className="w-1.5 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              من نحن<br />نبذة عن الشركة
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            شركة النجمة لتصنيع البالتات الخشبية هي شركة مصرية رائدة تتمتع بخبرة تزيد عن 18 عامًا في مجال تصنيع البالتات الخشبية بجميع أنواعها وأشكالها. نحن متخصصون في توفير حلول البالتات الخشبية عالية الجودة لكبرى الشركات والمصانع داخل مصر وخارجها.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            تمكنا عبر سنوات الخبرة من بناء سمعة قوية كأفضل مورد للبالتات في السوق المصري، حيث نلتزم بأعلى معايير الجودة ودقة المواصفات والتسليم في المواعيد المحددة لتلبية احتياجات مختلف القطاعات الصناعية.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">الجودة أولاً</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  نلتزم بأعلى معايير الجودة والاستلام على المواصفة المحددة.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <History className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">18 عاماً خبرة</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  خبرة طويلة في خدمة مختلف القطاعات اللوجستية والتصديرية.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Vision & Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
          <div className="relative z-10 text-right">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 mr-auto">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-foreground">رسالتنا</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تقديم بالتة خشبية مصرية بمواصفة عالمية، تلبي احتياجات السوق المحلي والعالمي بأعلى معايير الجودة ومستويات الكفاءة.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
          <div className="relative z-10 text-right">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 mr-auto">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-foreground">رؤيتنا</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              الريادة في حلول النقل والتخزين والصادرات الخشبية بالسوقين المحلي والدولي، وأن نكون الاختيار الأول للمصانع والشركات الكبرى.
            </p>
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12 shadow-xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-black mb-4 text-foreground">
            الرؤية المستقبلية <span className="text-primary">والتوسعات</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نسعى دائماً للتطور والابتكار لتقديم أفضل الحلول اللوجستية وتلبية الاحتياجات المتنامية لشركائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div key={index} className="p-6 rounded-2xl bg-card border border-border shadow-md hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 text-right">
              <span className="text-primary font-black text-2xl">0{index + 1}</span>
              <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
