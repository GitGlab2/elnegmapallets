import { Sprout, Utensils, Tv, Hammer, Zap, FlaskConical } from "lucide-react";

export default function Clients() {
  const sectors = [
    {
      title: "قطاع التصدير الزراعي",
      icon: <Sprout className="w-5 h-5" />,
      clients: "نصنع بالتات مخصصة لتعبئة وشحن المنتجات الزراعية الطازجة للتصدير المحلي والدولي بأعلى درجات الأمان.",
      bg: "bg-green-500/10",
      color: "text-green-500"
    },
    {
      title: "الصناعات الغذائية",
      icon: <Utensils className="w-5 h-5" />,
      clients: "توفير بالتات خشبية معالجة ومطابقة للمواصفات الصحية والغذائية لتخزين وتداول الأغذية والمشروبات.",
      bg: "bg-orange-500/10",
      color: "text-orange-500"
    },
    {
      title: "الإلكترونيات والأجهزة",
      icon: <Tv className="w-5 h-5" />,
      clients: "حلول تغليف وحماية متطورة وتوريد بالتات خفيفة وقوية مخصصة لشحن الأجهزة الإلكترونية والمنزلية الحساسة.",
      bg: "bg-blue-500/10",
      color: "text-blue-500"
    },
    {
      title: "السيراميك والبناء",
      icon: <Hammer className="w-5 h-5" />,
      clients: "بالتات خشبية فائقة التحمل ومصممة خصيصاً للأوزان الثقيلة كالسيراميك، والرخام، والأسمنت ومواد البناء.",
      bg: "bg-stone-500/10",
      color: "text-stone-500"
    },
    {
      title: "الكابلات والكيماويات",
      icon: <Zap className="w-5 h-5" />,
      clients: "بالتات خشبية قوية ومخصصة لنقل بكرات الكابلات الكهربائية الكبرى وبراميل الكيماويات بأعلى مستويات الثبات.",
      bg: "bg-yellow-500/10",
      color: "text-yellow-500"
    },
    {
      title: "قطاعات متخصصة أخرى",
      icon: <FlaskConical className="w-5 h-5" />,
      clients: "نلبي احتياجات مزارع الدواجن الكبرى، شركات الأسمدة ومصانع الأدوية بحلول لوجستية وتخزينية مرنة.",
      bg: "bg-purple-500/10",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
        
        {/* Left Side: Dark Presentation Card (Grid span 5) */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[450px]">
          {/* Decorative SVG lines */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 150 L500 550" stroke="#B165FB" strokeWidth="2" fill="none" />
              <path d="M-100 250 L500 650" stroke="#d4a976" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Floating White Logos Card (Larger Size: max-w-md) */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-6 border border-border hover:scale-105 transition-transform duration-300">
            <h4 className="text-slate-900 font-black text-center text-base">نلبي متطلبات التخزين واللوجستيات لجميع القطاعات</h4>
            <div className="bg-white rounded-xl overflow-hidden p-2 border border-border w-full">
              <img 
                src="/images/sectors-preview.jpg" 
                alt="القطاعات التي نخدمها" 
                className="w-full h-72 lg:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="w-full text-center border-t border-border pt-4">
              <span className="text-xs text-muted-foreground font-bold">تغطية لكافة محافظات الجمهورية</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content (Grid span 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center text-right">
          {/* Title */}
          <div className="flex items-stretch gap-4 mb-6">
            <div className="w-1.5 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              القطاعات والمجالات<br />التي نخدمها
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            نتشرف بخدمة وتوفير حلول النقل والتخزين لنخبة متميزة من كبرى المجموعات الاقتصادية في مصر والعالم العربي في مختلف المجالات الصناعية والتجارية.
          </p>

          {/* Grid of 6 sectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sectors.map((sec, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 border border-transparent hover:border-border transition-all">
                <div className="flex flex-col text-right flex-1">
                  <h4 className="font-bold text-foreground text-base">{sec.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1">{sec.clients}</p>
                </div>
                <div className={`w-10 h-10 ${sec.bg} rounded-xl flex items-center justify-center ${sec.color} shrink-0`}>
                  {sec.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
