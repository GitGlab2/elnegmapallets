import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Utensils, Tv, Hammer, Zap, FlaskConical } from "lucide-react";

export default function Clients() {
  const sectors = [
    {
      title: "قطاع التصدير الزراعي",
      icon: <Sprout className="w-6 h-6" />,
      clients: ["Agro Egypt", "طيبة فروت", "إيدن إكسبورت", "أرزين العالمية", "سينا", "Egypt Valley", "Eden Export"],
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20"
    },
    {
      title: "الصناعات الغذائية",
      icon: <Utensils className="w-6 h-6" />,
      clients: ["niloa foods", "دريم فودز", "نيلكس", "ديزي جولد", "المالي دروب", "Faragalla", "NILEX FOODS"],
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/20"
    },
    {
      title: "الإلكترونيات والأجهزة",
      icon: <Tv className="w-6 h-6" />,
      clients: ["Samsung", "Unionaire", "حلول تغليف وحماية متطورة لمنتجات الإلكترونية"],
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "السيراميك والبناء",
      icon: <Hammer className="w-6 h-6" />,
      clients: ["Cleopatra Group", "Ceramica Prima", "الجوهرة", "الشركة الوطنية للأسمنت", "المعمار للمقاولات"],
      color: "text-stone-600",
      bg: "bg-stone-100 dark:bg-stone-900/20"
    },
    {
      title: "الكابلات والكيماويات",
      icon: <Zap className="w-6 h-6" />,
      clients: ["Giza Cable Industries", "ACMA", "Alfa Carbonate", "Al Rowad", "Elrowad Pellet", "Supply Cloud"],
      color: "text-yellow-600",
      bg: "bg-yellow-100 dark:bg-yellow-900/20"
    },
    {
      title: "قطاعات متخصصة",
      icon: <FlaskConical className="w-6 h-6" />,
      clients: ["الكيميائية بالدواجن", "MUP للأدوية", "Ever Group للأسمدة", "إيجيبرافيست", "وبرد للخدمات الزراعية"],
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/20"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* Header */}
      <section className="container text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-base border-primary/30 text-primary bg-primary/5">
          شركاء النجاح
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
          نفتخر بثقة <span className="text-primary">عملائنا</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          نشرف بخدمة نخبة متميزة من الشركات الرائدة في مختلف القطاعات الصناعية والتجارية. شراكتنا معهم تمتد لسنوات من الثقة والنمو.
        </p>
      </section>

      {/* Clients Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="border-border shadow-md hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${sector.bg} flex items-center justify-center ${sector.color}`}>
                    {sector.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{sector.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {sector.clients.map((client, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${sector.bg.replace('/20', '')} bg-current opacity-50`} />
                      {client}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground">الرؤية المستقبلية والتوسعات</h2>
            <p className="text-lg text-muted-foreground">
              نخطط لمستقبل واعد من خلال استراتيجية توسع طموحة تشمل الأسواق المحلية والدولية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "التوسع المحلي", desc: "زيادة القدرة الإنتاجية بنسبة 50% وتغطية كامل محافظات مصر." },
              { title: "الأسواق الخارجية", desc: "الدخول في أسواق التصدير للدول العربية والأفريقية." },
              { title: "تطوير المنتجات", desc: "استحداث خطوط إنتاج جديدة للباليات متعددة الاستخدامات." },
              { title: "التحول الرقمي", desc: "أتمتة عمليات الإنتاج وإطلاق منصة إلكترونية لإدارة الطلبات." },
              { title: "الشراكات الاستراتيجية", desc: "عقد شراكات مع كبرى الشركات العالمية والمحلية." },
              { title: "التطوير التقني", desc: "استخدام أحدث التقنيات وأنظمة الذكاء الاصطناعي." }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-xl mb-3 text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
