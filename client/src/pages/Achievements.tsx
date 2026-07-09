import { motion } from "framer-motion";
import { Package, Truck, Globe2, Users } from "lucide-react";

export default function Achievements({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "الإنجازات والإحصاءات",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      stats: [
        {
          icon: <Package className="w-6 h-6" />,
          value: "360,000+",
          desc: "بالتة خشبية سنوياً تنتجها مصانعنا بأعلى معايير الجودة المحلية والدولية"
        },
        {
          icon: <Truck className="w-6 h-6" />,
          value: "47",
          desc: "شحنة توريد شهرية لكبرى الشركات والمصانع في جميع أنحاء مصر"
        },
        {
          icon: <Globe2 className="w-6 h-6" />,
          value: "27",
          desc: "محافظة مصرية نقوم بخدمتها وتوفير احتياجاتها من البالتات الخشبية بمختلف المواصفات"
        },
        {
          icon: <Users className="w-6 h-6" />,
          value: "99%",
          desc: "نسبة رضا العملاء عن منتجاتنا وخدماتنا، وهو ما يؤكد التزامنا بالجودة والمواصفات"
        }
      ]
    },
    en: {
      title: "Achievements & Statistics",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      stats: [
        {
          icon: <Package className="w-6 h-6" />,
          value: "360,000+",
          desc: "Wooden pallets annually manufactured by our facility conforming to strict global standards."
        },
        {
          icon: <Truck className="w-6 h-6" />,
          value: "47",
          desc: "Ongoing monthly supply shipments delivered to major factories and companies across Egypt."
        },
        {
          icon: <Globe2 className="w-6 h-6" />,
          value: "27",
          desc: "Egyptian governorates actively served with custom-specification wooden pallet logistics."
        },
        {
          icon: <Users className="w-6 h-6" />,
          value: "99%",
          desc: "Client satisfaction rate reflecting our rigorous quality control and dimensional precision."
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-12" id="achievements">
      <div className="relative min-h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex flex-col justify-center">
        
        {/* Wave decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M350,0 C400,50 450,100 500,150 C550,200 600,250 650,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M360,0 C410,50 460,100 510,150 C560,200 610,250 660,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className={`relative z-10 w-full flex flex-col gap-12 ${content.alignClass}`}>
          
          {/* Header section matching original slide style */}
          <div className="flex items-center gap-4 border-b border-border/40 pb-6 justify-start">
            <div className="w-1.5 h-16 bg-secondary rounded-full animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {content.title}
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="relative mt-8">
            
            {/* Horizontal Line for timeline on larger screens */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary/30 -translate-y-1/2 rounded-full hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {content.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col items-center md:items-start text-center ${isEn ? "md:text-left" : "md:text-right"} gap-4 bg-[#202430]/40 p-6 rounded-2xl border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all duration-300 relative group`}
                >
                  {/* Timeline dot connection */}
                  <div className={`absolute top-0 md:top-1/2 left-1/2 md:left-auto ${isEn ? "md:left-0" : "md:right-0"} w-4 h-4 bg-secondary border-4 border-[#181b24] rounded-full -translate-x-1/2 -translate-y-2 md:${isEn ? "-translate-x-2" : "translate-x-2"} md:-translate-y-1/2 shadow-[0_0_10px_rgba(177,101,251,0.5)] z-20 group-hover:scale-125 transition-transform`} />

                  <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
