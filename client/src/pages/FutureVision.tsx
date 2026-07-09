import { motion } from "framer-motion";

export default function FutureVision({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "الرؤية المستقبلية والتوسعات",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      items: [
        {
          title: "التوسع المحلي",
          desc: "زيادة القدرة الإنتاجية للمصنع بنسبة 50% خلال العام القادم وتغطية كامل محافظات مصر بخدمات التوريد السريع في غضون 24 ساعة"
        },
        {
          title: "الأسواق الخارجية",
          desc: "الدخول في أسواق التصدير للدول العربية والأفريقية وتوسيع نطاق العملاء الدوليين وفق معايير التصدير العالمية"
        },
        {
          title: "تطوير المنتجات",
          desc: "استحداث خطوط إنتاج جديدة للبالتات متعددة الاستخدامات وإضافة معالجات خاصة للصناعات الغذائية والدوائية"
        },
        {
          title: "التحول الرقمي",
          desc: "أتمتة عمليات الإنتاج وإطلاق منصة إلكترونية لإدارة طلبات العملاء وتتبع الشحنات وجدولة التوريدات بشكل مباشر"
        },
        {
          title: "الشراكات الاستراتيجية",
          desc: "عقد شراكات مع كبرى الشركات العالمية والمحلية لتوفير حلول متكاملة وتبادل الخبرات التقنية والتسويقية"
        },
        {
          title: "التطوير التقني",
          desc: "استخدام أحدث التقنيات في الإنتاج والمعالجة وتطبيق أنظمة الذكاء الاصطناعي لتحسين الجودة والكفاءة"
        }
      ]
    },
    en: {
      title: "Future Vision & Expansion",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      items: [
        {
          title: "Domestic Expansion",
          desc: "Increasing the factory's production capacity by 50% next year, covering all Egyptian governorates with 24-hour delivery service."
        },
        {
          title: "International Markets",
          desc: "Expanding export services into Middle East and African countries, scaling our international client base to global standards."
        },
        {
          title: "Product Development",
          desc: "Adding new production lines for multi-purpose pallets and introducing sanitized wooden packaging for food & pharmaceutical industries."
        },
        {
          title: "Digital Integration",
          desc: "Automating production tracking systems, launching a client portal to track shipments and schedule deliveries instantly."
        },
        {
          title: "Strategic Partnerships",
          desc: "Forging alliances with key global and domestic logistics leaders to exchange technical expertise."
        },
        {
          title: "Advanced Technology",
          desc: "Utilizing modern manufacturing machinery and deploying quality assurance systems to maximize efficiency."
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-12" id="future-vision">
      <div className="relative min-h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex flex-col justify-center">
        
        {/* Wave decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C50,50 100,100 150,150 C200,200 250,250 300,300" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <path d="M0,10 C50,60 100,110 150,160 C200,210 250,260 300,310" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <path d="M0,20 C50,70 100,120 150,170 C200,220 250,270 300,320" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <path d="M0,30 C50,80 100,130 150,180 C200,230 250,280 300,330" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          {/* Header section */}
          <div className={`flex items-center justify-start gap-6 border-b border-border/40 pb-6 ${content.alignClass}`}>
            <div className="w-2 h-16 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {content.title}
            </h2>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-[#202430]/40 border border-border/50 hover:border-secondary hover:bg-[#202430]/80 transition-all duration-300 flex flex-col gap-3 ${content.alignClass} group`}
              >
                <div className={`flex items-center gap-3 text-secondary ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <span className="text-xl font-bold">•</span>
                  <h4 className="font-bold text-white text-lg group-hover:text-secondary transition-colors">{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
