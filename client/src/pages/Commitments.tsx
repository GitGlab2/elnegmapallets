import { motion } from "framer-motion";
import { Clock, ShieldAlert, Truck, Headset } from "lucide-react";

export default function Commitments({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title1: "ضمان",
      title2: "الالتزامات",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      commitments: [
        {
          icon: <Clock className="w-6 h-6 text-secondary" />,
          title: "التزام بمواعيد التسليم",
          desc: "التزام كامل بمواعيد التسليم المحددة مع العملاء لتفادي تأخير العمليات اللوجستية."
        },
        {
          icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
          title: "ضمان الجودة والاستبدال",
          desc: "ضمان الجودة والاستبدال طبقاً للمواصفة المتفق عليها فوراً دون تعقيد."
        },
        {
          icon: <Truck className="w-6 h-6 text-secondary" />,
          title: "التوصيل والشحن",
          desc: "خدمة التوصيل والشحن مجاناً لجميع أنحاء الجمهورية للكميات الكبيرة."
        },
        {
          icon: <Headset className="w-6 h-6 text-secondary" />,
          title: "خدمة ما بعد البيع",
          desc: "خدمة ما بعد البيع والاستشارات الفنية متواصلة على مدار الساعة للشركاء."
        }
      ]
    },
    en: {
      title1: "Guaranteed",
      title2: "Commitments",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      commitments: [
        {
          icon: <Clock className="w-6 h-6 text-secondary" />,
          title: "On-Time Delivery Commitments",
          desc: "Complete compliance with agreed shipping schedules to prevent supply chain bottlenecks."
        },
        {
          icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
          title: "Quality & Exchange Warranty",
          desc: "Solid quality guarantee and immediate exchange of pallets not matching the design spec."
        },
        {
          icon: <Truck className="w-6 h-6 text-secondary" />,
          title: "Free Shipping & Delivery",
          desc: "Complimentary freight and logistics delivery services across Egypt for bulk orders."
        },
        {
          icon: <Headset className="w-6 h-6 text-secondary" />,
          title: "Post-Sales Consultation",
          desc: "Continuous professional technical support and post-sales consultancy for our partners."
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-12" id="commitments">
      <div className="relative min-h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex items-center">
        
        {/* Wave Decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M250,0 Q300,30 350,60 T450,120" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M260,0 Q310,30 360,60 T460,120" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Title (Grid span 4) - Order 1 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-4 flex flex-col items-center ${isEn ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} justify-center order-1`}
          >
            <span className="text-white/80 text-3xl font-black mb-1">{content.title1}</span>
            <span className="text-secondary text-5xl md:text-6xl font-black tracking-wider">{content.title2}</span>
            <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
          </motion.div>

          {/* Middle: Purple Divider (Grid span 1) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center order-2">
            <div className="w-1.5 h-64 bg-secondary/30 rounded-full" />
          </div>

          {/* Right Side: Commitments List (Grid span 7) - Order 2 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 flex flex-col justify-center ${content.alignClass} order-3`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.commitments.map((com, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary transition-all">
                  <div className="shrink-0 mt-1 p-2 rounded-xl bg-secondary/15 flex items-center justify-center">
                    {com.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-1">{com.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{com.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
