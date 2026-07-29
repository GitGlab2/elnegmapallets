"use client";

import { motion } from "framer-motion";
import { Sprout, Utensils, Tv, Hammer, Zap, FlaskConical } from "lucide-react";

export default function Clients({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "عملاؤنا الكرام",
      desc: "نتشرف بخدمة نخبة متميزة من الشركات الرائدة في قطاعات التصدير الزراعي، الصناعات الغذائية، الإلكترونيات، السيراميك، الكابلات، الأدوية وغيرها. شراكتنا معهم تمتد لسنوات من الثقة والتميز.",
      caption: "نفتخر بثقة عملائنا الكرام",
      imgAlt: "شعارات عملاء شركة النجمة الكرام",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      sectors: [
        {
          title: "قطاع التصدير الزراعي والخضروات",
          desc: "نصنع بالتات مخصصة لتعبئة وشحن المنتجات الزراعية الطازجة للتصدير المحلي والدولي بأعلى درجات الأمان.",
          icon: <Sprout className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قطاع الصناعات الغذائية",
          desc: "توفير بالتات خشبية معالجة ومطابقة للمواصفات الصحية والغذائية لتخزين وتداول الأغذية والمشروبات.",
          icon: <Utensils className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قطاع الإلكترونيات والأجهزة المنزلية",
          desc: "حلول تغليف وحماية متطورة وتوريد بالتات خفيفة وقوية مخصصة لشحن الأجهزة الإلكترونية والمنزلية الحساسة.",
          icon: <Tv className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قطاع السيراميك والبناء والأسمنت",
          desc: "بالتات خشبية فائقة التحمل ومصممة خصيصاً للأوزان الثقيلة كالسيراميك، والرخام، والأسمنت ومواد البناء.",
          icon: <Hammer className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قطاع الكابلات والكيماويات والصناعات التكميلية",
          desc: "بالتات خشبية قوية ومخصصة لنقل بكرات الكابلات الكهربائية الكبرى وبراميل الكيماويات بأعلى مستويات الثبات.",
          icon: <Zap className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "قطاعات متخصصة أخرى",
          desc: "نلبي احتياجات مزارع الدواجن الكبرى، شركات الأسمدة ومصانع الأدوية بحلول لوجستية وتخزينية مرنة.",
          icon: <FlaskConical className="w-5 h-5 text-secondary shrink-0" />
        }
      ]
    },
    en: {
      title: "Our Valued Clients",
      desc: "We are honored to serve a distinguished group of leading companies in agricultural export, food industries, electronics, ceramics, cables, pharmaceuticals, and more. Our partnership spans years of trust and quality.",
      caption: "Proud to Have the Trust of Our Clients",
      imgAlt: "El Negma Valued Clients Logos",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      sectors: [
        {
          title: "Agricultural & Vegetable Export",
          desc: "We manufacture custom pallets optimized for packing and shipping fresh produce safely to local and international markets.",
          icon: <Sprout className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Food & Beverage Industries",
          desc: "Providing treated, sanitary wood pallets compliant with food safety specifications for storage and transport.",
          icon: <Utensils className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Electronics & Home Appliances",
          desc: "Advanced packaging and protection solutions, offering lightweight yet robust pallets for sensitive appliance shipments.",
          icon: <Tv className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Ceramics, Construction & Cement",
          desc: "Heavy-duty wooden pallets designed specifically to bear extreme weights like ceramics, marble, cement, and construction materials.",
          icon: <Hammer className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Cables, Chemicals & Heavy Industry",
          desc: "Strong pallets customized to transport large cable reels and chemical drums with maximum stability.",
          icon: <Zap className="w-5 h-5 text-secondary shrink-0" />
        },
        {
          title: "Other Specialized Sectors",
          desc: "Meeting the needs of large poultry farms, fertilizer producers, and pharmaceutical factories with flexible storage layouts.",
          icon: <FlaskConical className="w-5 h-5 text-secondary shrink-0" />
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-8 md:py-12" id="clients">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl min-h-0 lg:min-h-[680px]">
        
        {/* Right Section (Dark Background, Logos Grid) - Grid span 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-[#181b24] p-6 md:p-12 flex flex-col justify-center items-center relative overflow-hidden order-1 lg:order-2"
        >
          {/* Wave Decoration */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="w-full h-full text-secondary" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
              <path d="M-400,0 C-200,50 0,100 200,150 C400,200 600,250 800,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M-400,20 C-200,70 0,120 200,170 C400,220 600,270 800,320" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-sm md:max-w-md bg-white p-3 md:p-4 rounded-2xl shadow-xl flex flex-col items-center">
            <picture>
              <source srcSet="/images/brand/clients-logos-grid.webp" type="image/webp" />
              <img 
                src="/images/brand/clients-logos-grid.webp" 
                alt={content.imgAlt} 
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-[200px] md:h-[320px] object-contain rounded-lg"
              />
            </picture>
            <div className="mt-3 md:mt-4 text-center">
              <span className="font-bold text-[#181b24] text-sm md:text-lg">{content.caption}</span>
            </div>
          </div>
        </motion.div>

        {/* Left Section (White Background, Sectors) - Grid span 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`lg:col-span-6 bg-white p-6 md:p-12 flex flex-col justify-center ${content.alignClass} order-2 lg:order-1`}
        >
          <div className="flex items-stretch gap-3 md:gap-4 mb-4 md:mb-6 justify-start">
            <div className="w-1.5 md:w-2 bg-secondary rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#181b24] leading-tight">
              {content.title}
            </h2>
          </div>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-6">
            {content.desc}
          </p>

          {/* Grid of 6 sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {content.sectors.map((sec, index) => (
              <div key={index} className={`flex items-start gap-2.5 md:gap-3 ${content.alignClass} justify-start p-2 rounded-xl hover:bg-gray-50 transition-colors`}>
                <div className="shrink-0 mt-1 p-1.5 rounded-lg bg-secondary/10 flex items-center justify-center">
                  {sec.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-bold text-xs md:text-sm text-[#181b24]">{sec.title}</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
