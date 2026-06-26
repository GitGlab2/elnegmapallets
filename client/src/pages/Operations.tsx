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
      <div className="relative min-h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex items-center">
        
        {/* Wave Decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M400,300 C350,250 300,200 250,150 C200,100 150,50 100,0" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M420,300 C370,250 320,200 270,150 C220,100 170,50 120,0" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Framed Image (Grid span 6) - Order 2 on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md p-4">
              {/* Outer frame */}
              <div className="absolute inset-0 border-[6px] border-secondary/60 rounded-[25px] shadow-[0_15px_40px_rgba(177,101,251,0.3)] bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
              
              <img 
                src="/images/team-image.jpg" 
                alt="العمليات والجودة مصنع النجمة" 
                className="relative z-10 rounded-[18px] w-full h-80 object-cover border-2 border-background"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                }}
              />
            </div>
          </motion.div>

          {/* Right Side: Content (Grid span 6) - Order 1 on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-right order-1 lg:order-2"
          >
            <div className="relative flex items-stretch gap-4 mb-6 justify-start">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                العمليات والجودة
              </h2>
            </div>

            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
              نلتزم في شركة النجمة بأعلى معايير الجودة في عمليات التصنيع والإنتاج. تضمن منشآتنا الحديثة والمجهزة بأحدث المعدات استمرارية الإنتاج بكفاءة عالية وبمعدل <span className="text-secondary font-black">360 ألف بالتة سنوياً</span> لتلبية احتياجات عملائنا من القطاعات المختلفة.
            </p>

            {/* List with purple circular icons */}
            <div className="flex flex-col gap-5 mt-2">
              {operations.map((op, index) => (
                <div key={index} className="flex items-center gap-4 text-right justify-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                    {op.icon}
                  </div>
                  <span className="text-base md:text-lg text-white/90 font-medium">
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
