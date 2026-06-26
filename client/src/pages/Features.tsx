import { useState } from "react";
import { Truck, Gift, ShieldCheck, Headphones, Percent, Flame } from "lucide-react";

export default function Features() {
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

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "توريد سريع",
      desc: "توريد أي كمية خلال 48 ساعة فقط، بفضل أسطولنا الكبير وشبكتنا اللوجستية القوية."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "شحن مجاني",
      desc: "الشحن والمعاينة مجانًا للكميات، مما يوفر عليك تكاليف إضافية ويسهل عملية الشراء."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "ضمان الجودة",
      desc: "ضمان الجودة والاستلام على المواصفة، مع إمكانية الاستبدال السريع."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "دعم فني",
      desc: "قسم فني متخصص لعمل المواصفات مجانًا وتقديم الاستشارات الفنية لمنتجك."
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: "خصومات مميزه",
      desc: "كاش باك على السحب السنوي، وخصومات تصل إلى 3% للكميات والعملاء المستمرين."
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "معالجة حرارية",
      desc: "معالجة حرارية (HT) معتمدة للتصدير العالمي - نقدمها مجانًا للكميات الكبيرة."
    }
  ];

  return (
    <div className="container py-12 flex flex-col gap-16">
      
      {/* Split Screen slide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
        
        {/* Left Side: Dark Presentation Card (Grid span 5) */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[450px]">
          {/* Decorative SVG lines */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 0 L500 400" stroke="#B165FB" strokeWidth="2" fill="none" />
              <path d="M-100 100 L500 500" stroke="#d4a976" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Floating Certificate Cards */}
          <div className="relative z-10 w-full flex flex-col gap-6 max-w-md">
            <div className="bg-white rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-center gap-6 border border-border hover:scale-105 transition-transform duration-300 text-center sm:text-right">
              <img 
                src="/images/quality-certification.jpg" 
                alt="شهادة الجودة لشركة النجمة" 
                className="rounded-xl w-32 h-32 object-cover shadow-md shrink-0"
              />
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-lg">اعتماد وزارة الزراعة والمعالجة</p>
                <p className="text-sm text-muted-foreground mt-2">حاصلة على شهادة المعالجة الحرارية المعتمدة للتصدير HT</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-center gap-6 border border-border hover:scale-105 transition-transform duration-300 text-center sm:text-right">
              <img 
                src="/images/international-standards.jpg" 
                alt="المعايير الدولية" 
                className="rounded-xl w-32 h-32 object-cover shadow-md shrink-0"
              />
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-lg">المعايير الدولية (ISPM-15)</p>
                <p className="text-sm text-muted-foreground mt-2">مطابقة بالكامل للمواصفات القياسية والمقاييس للاتحاد الأوروبي</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content (Grid span 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center text-right">
          {/* Title */}
          <div className="flex items-stretch gap-4 mb-6">
            <div className="w-1.5 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              مزايانا<br />التنافسية والعمليات
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            نقدم لعملائنا كبرى الشركات والمصانع في مصر مجموعة من الخدمات اللوجستية المتكاملة والمزايا الحصرية التي تضمن جودة الاستلام.
          </p>

          {/* Grid of 6 features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 border border-transparent hover:border-border transition-all">
                <div className="flex flex-col text-right flex-1">
                  <h4 className="font-bold text-foreground text-base">{feat.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1">{feat.desc}</p>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                  {feat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive pricing calculator section */}
      <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texts and Offer */}
          <div className="flex flex-col gap-6 text-right order-first lg:order-last">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-bold text-secondary">عرض خاص للعملاء الجدد</span>
            </div>
            
            <h3 className="text-3xl font-black text-foreground">
              أنظمة الأسعار <span className="text-primary">والعروض</span>
            </h3>
            
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
            <h4 className="text-xl font-bold text-foreground text-center">حاسبة الخصم التفاعلية</h4>
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

    </div>
  );
}
