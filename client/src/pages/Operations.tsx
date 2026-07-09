import { motion } from "framer-motion";
import { Flame, ShieldCheck, Truck, Settings } from "lucide-react";

export default function Operations({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "العمليات والجودة",
      desc: `نلتزم في شركة النجمة بأعلى معايير الجودة في عمليات التصنيع والإنتاج. تضمن منشآتنا الحديثة والمجهزة بأحدث المعدات استمرارية الإنتاج بكفاءة عالية وبمعدل <span class="text-secondary font-black">360 ألف بالتة سنوياً</span> لتلبية احتياجات عملائنا من القطاعات المختلفة.`,
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      items: [
        {
          title: "معالجة حرارية (HT) معتمدة للصادرات العالمية",
          icon: <Flame className="w-5 h-5 text-white" />
        },
        {
          title: "فحص دقيق لكل منتج قبل التسليم",
          icon: <ShieldCheck className="w-5 h-5 text-white" />
        },
        {
          title: "نظام لوجستي متكامل لضمان توصيل سريع وآمن",
          icon: <Truck className="w-5 h-5 text-white" />
        },
        {
          title: "صيانة دورية للمعدات لضمان استمرارية الإنتاج",
          icon: <Settings className="w-5 h-5 text-white" />
        }
      ]
    },
    en: {
      title: "Operations & Quality",
      desc: `At El Negma, we commit to the highest quality control in our manufacturing processes. Our modern facilities, equipped with state-of-the-art machinery, ensure efficient production at a capacity of <span class="text-secondary font-black">360,000 pallets annually</span> to meet the scale of our clients.`,
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      items: [
        {
          title: "Certified Heat Treatment (HT) for global export",
          icon: <Flame className="w-5 h-5 text-white" />
        },
        {
          title: "Rigorous quality inspection for each pallet before delivery",
          icon: <ShieldCheck className="w-5 h-5 text-white" />
        },
        {
          title: "Integrated logistics network for fast and secure shipping",
          icon: <Truck className="w-5 h-5 text-white" />
        },
        {
          title: "Routine machinery maintenance to guarantee production continuity",
          icon: <Settings className="w-5 h-5 text-white" />
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-8 md:py-12" id="operations">
      <div className="relative min-h-0 lg:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex items-center">
        
        {/* Wave Decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M400,300 C350,250 300,200 250,150 C200,100 150,50 100,0" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M420,300 C370,250 320,200 270,150 C220,100 170,50 120,0" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="flex items-stretch gap-3 md:gap-4 justify-center">
              <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                {content.title}
              </h2>
              <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
            </div>

            <p 
              className="text-sm md:text-lg text-white/80 leading-relaxed max-w-3xl px-2"
              dangerouslySetInnerHTML={{ __html: content.desc }}
            />

            {/* List in 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mt-4 md:mt-6">
              {content.items.map((op, index) => (
                <div key={index} className={`flex items-center gap-3 md:gap-4 ${content.alignClass} p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary transition-all justify-start`}>
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                    <div className="[&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5">
                      {op.icon}
                    </div>
                  </div>
                  <span className="text-sm md:text-lg text-white/95 font-bold">
                    {op.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
