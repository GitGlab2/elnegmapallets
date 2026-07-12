import { motion } from "framer-motion";
import { Truck, Search, ShieldAlert, BadgeAlert, Flame } from "lucide-react";

export default function Features({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title1: "مزايانا",
      title2: "التنافسية",
      imgAlt: "مزايا شركة النجمة التنافسية",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      advantages: [
        {
          title: "توريد أي كمية خلال 48 ساعة فقط",
          icon: <Truck className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "الشحن والمعاينة مجاناً للكميات",
          icon: <Search className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قسم فني متخصص لعمل المواصفات مجاناً",
          icon: <BadgeAlert className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "معالجة حرارية (HT) معتمدة للتصدير العالمي - نقدمها مجاناً للكميات الكبيرة",
          icon: <Flame className="w-5 h-5 text-secondary shrink-0" />
        }
      ]
    },
    en: {
      title1: "Our Competitive",
      title2: "Advantages",
      imgAlt: "Competitive Advantages of El Negma",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      advantages: [
        {
          title: "Delivery of any batch size in just 48 hours",
          icon: <Truck className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Free shipping and sample inspection for bulk orders",
          icon: <Search className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Specialized technical department to create custom designs for free",
          icon: <BadgeAlert className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "ISPM-15 Heat Treatment (HT) certified for global export - free for large orders",
          icon: <Flame className="w-5 h-5 text-secondary shrink-0" />
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-8 md:py-12" id="features">
      <div className="relative min-h-0 lg:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex items-center">
        
        {/* Wave decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 C50,100 100,50 150,0 C200,-50 250,-100 300,-150" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M20,150 C70,100 120,50 170,0 C220,-50 270,-100 320,-150" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M40,150 C90,100 140,50 190,0 C240,-50 290,-100 340,-150" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Left Side: Image (Grid span 6) - Order 2 on mobile, 1 on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <img 
                src="/images/sections/advantages-1.webp" 
                alt={content.imgAlt} 
                className="styled-image w-full h-60 md:h-80 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/sections/sectors-preview.webp';
                }}
              />
            </div>
          </motion.div>

          {/* Right Side: Content (Grid span 6) - Order 1 on mobile, 2 on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-6 flex flex-col justify-center ${content.alignClass} order-1 lg:order-2`}
          >
            <div className="flex items-stretch gap-3 md:gap-4 mb-4 md:mb-6 justify-start">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                {content.title1}<br />{content.title2}
              </h2>
            </div>

            {/* Advantages List */}
            <ul className="flex flex-col gap-4 md:gap-5 mt-2 md:mt-4">
              {content.advantages.map((adv, index) => (
                <li key={index} className={`flex items-center gap-3 md:gap-4 ${content.alignClass} justify-start`}>
                  <div className="shrink-0 p-1 md:p-1.5 rounded-full bg-secondary/15">
                    {adv.icon}
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-white/95 font-medium leading-relaxed">
                    {adv.title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
