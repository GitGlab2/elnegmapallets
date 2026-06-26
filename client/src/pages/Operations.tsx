import { motion } from "framer-motion";
import { Flame, ShieldCheck, Truck, Settings } from "lucide-react";

export default function Operations() {
  const operations = [
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
  ];

  return (
    <div className="container py-12" id="operations">
      <div className="relative min-h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex items-center">
        
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
            className="w-full max-w-4xl flex flex-col items-center gap-6"
          >
            <div className="flex items-stretch gap-4 justify-center">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                العمليات والجودة
              </h2>
              <div className="w-1.5 bg-secondary rounded-full" />
            </div>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
              نلتزم في شركة النجمة بأعلى معايير الجودة في عمليات التصنيع والإنتاج. تضمن منشآتنا الحديثة والمجهزة بأحدث المعدات استمرارية الإنتاج بكفاءة عالية وبمعدل <span className="text-secondary font-black">360 ألف بالتة سنوياً</span> لتلبية احتياجات عملائنا من القطاعات المختلفة.
            </p>

            {/* List in 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
              {operations.map((op, index) => (
                <div key={index} className="flex items-center gap-4 text-right p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary transition-all justify-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                    {op.icon}
                  </div>
                  <span className="text-base md:text-lg text-white/95 font-bold">
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
