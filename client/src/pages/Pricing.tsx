"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DiscountDetails {
  discount: number;
  benefit: string;
}

/**
 * Pure function to calculate discount and benefits based on requested monthly quantity and language
 */
function getDiscountDetails(quantity: number, lang: "ar" | "en"): DiscountDetails {
  const isEn = lang === "en";
  if (quantity >= 7000) {
    return {
      discount: 3,
      benefit: isEn ? "Free delivery + free ISPM-15 HT treatment" : "شحن مجاني + معالجة HT مجانية للتصدير"
    };
  }
  if (quantity >= 5000) {
    return {
      discount: 2,
      benefit: isEn ? "Free delivery + priority supply in 24 hrs" : "شحن مجاني + أولوية توريد خلال 24 ساعة"
    };
  }
  if (quantity >= 3000) {
    return {
      discount: 1,
      benefit: isEn ? "Free delivery for bulk batches" : "شحن مجاني للكميات"
    };
  }
  return {
    discount: 0,
    benefit: isEn ? "Fast delivery according to specifications" : "توصيل سريع طبقاً للمواصفة"
  };
}

export default function Pricing({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [quantity, setQuantity] = useState(5000);
  const { discount, benefit } = getDiscountDetails(quantity, lang);
  const isEn = lang === "en";

  // قم بتغيير هذه القيمة إلى true لتفعيل عرض خصم العملاء الجدد لفترات مؤقتة لزيادة مصداقية العروض
  const SHOW_PROMO_OFFER = false;

  const content = {
    ar: {
      title1: "أنظمة الأسعار",
      title2: "والعروض",
      desc: "نظام تسعير تنافسي مع عروض خاصة حسب الكميات وخصومات تفضيلية للعملاء المستمرين. نقدم حلول مالية مرنة لتناسب احتياجات عملك وتحقق توفيراً حقيقياً على المدى الطويل.",
      offerTitle: "عرض خاص للعملاء الجدد",
      offerDesc: "خصم إضافي يصل إلى 3% على سعر المصنع لفترة محدودة للعملاء الذين يتعاقدون على كميات مستمرة.",
      calcTitle: "حاسبة السعر التفاعلية",
      calcLabel: "الكمية المطلوبة شهرياً:",
      calcDiscount: "الخصم المكتسب",
      calcBenefits: "المزايا الإضافية",
      chartTitle: "خصومات تدريجية حسب الكميات الشهرية",
      unit: "بالتة",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
    },
    en: {
      title1: "Pricing Systems",
      title2: "& Offers",
      desc: "Competitive pricing system with special rates based on volume and preferential discounts for long-term clients. We offer flexible financial solutions to suit your business scale.",
      offerTitle: "Special Offer for New Clients",
      offerDesc: "An additional discount of up to 3% off factory rates for a limited time for clients committing to ongoing supply contracts.",
      calcTitle: "Interactive Pricing Calculator",
      calcLabel: "Requested monthly quantity:",
      calcDiscount: "Acquired Discount",
      calcBenefits: "Additional Benefits",
      chartTitle: "Graduated Discounts by Monthly Quantities",
      unit: "pallets",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
    }
  }[lang];

  return (
    <div className="container py-8 md:py-12" id="pricing">
      <div className="relative min-h-0 lg:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex items-center">
        
        {/* Wave decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q125,50 250,100 T500,100 T750,100" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M0,110 Q125,60 250,110 T500,110 T750,110" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Discount Chart & Interactive Calculator (Grid span 6) - Order 2 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4 md:gap-6 order-2 lg:order-1"
          >
            {/* Chart Area */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#202430]/60 border border-border/50 ${content.alignClass}`}>
              <h4 className="font-bold text-white text-base md:text-lg mb-3 md:mb-4">{content.chartTitle}</h4>
              <div className="flex flex-col gap-3 md:gap-4">
                
                {/* Level 1 */}
                <div className={`flex items-center justify-start gap-3 md:gap-4 ${isEn ? "flex-row-reverse" : ""}`}>
                  <span className="text-secondary font-bold text-base md:text-lg w-8 md:w-10 text-right">1%</span>
                  <div className="flex-1 bg-border/20 h-3 md:h-4 rounded-full overflow-hidden" style={{ direction: isEn ? 'ltr' : 'rtl' }}>
                    <div className="bg-secondary h-full rounded-full" style={{ width: '20%' }} />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm w-24 md:w-32 text-left">3000-5000 {content.unit}</span>
                </div>

                {/* Level 2 */}
                <div className={`flex items-center justify-start gap-3 md:gap-4 ${isEn ? "flex-row-reverse" : ""}`}>
                  <span className="text-secondary font-bold text-base md:text-lg w-8 md:w-10 text-right">2%</span>
                  <div className="flex-1 bg-border/20 h-3 md:h-4 rounded-full overflow-hidden" style={{ direction: isEn ? 'ltr' : 'rtl' }}>
                    <div className="bg-secondary h-full rounded-full" style={{ width: '40%' }} />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm w-24 md:w-32 text-left">5000-7000 {content.unit}</span>
                </div>

                {/* Level 3 */}
                <div className={`flex items-center justify-start gap-3 md:gap-4 ${isEn ? "flex-row-reverse" : ""}`}>
                  <span className="text-secondary font-bold text-base md:text-lg w-8 md:w-10 text-right">3%</span>
                  <div className="flex-1 bg-border/20 h-3 md:h-4 rounded-full overflow-hidden" style={{ direction: isEn ? 'ltr' : 'rtl' }}>
                    <div className="bg-secondary h-full rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm w-24 md:w-32 text-left">7000-10000 {content.unit}</span>
                </div>

              </div>
            </div>

            {/* Slider Calculator Tool */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#202430]/80 border border-secondary/30 ${content.alignClass}`}>
              <h4 className="font-bold text-secondary text-sm md:text-base mb-2 md:mb-3">{content.calcTitle}</h4>
              
              <div className={`flex justify-between items-center text-xs md:text-sm font-bold mb-2 ${isEn ? "flex-row-reverse" : ""}`}>
                <span className="text-secondary text-base md:text-lg font-black">{quantity.toLocaleString()} {content.unit}</span>
                <span className="text-white/70">{content.calcLabel}</span>
              </div>

              <input 
                type="range" 
                min="2000" 
                max="12000" 
                step="500"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                aria-label={content.calcLabel}
                className="w-full h-1.5 md:h-2 bg-border/20 rounded-lg appearance-none cursor-pointer accent-secondary my-2 md:my-3"
                style={{ direction: 'ltr' }}
              />

              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 pt-2 md:pt-3 border-t border-border/30">
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-[#181b24] border border-border text-center">
                  <span className="text-[10px] md:text-xs text-muted-foreground block mb-0.5 md:mb-1">{content.calcDiscount}</span>
                  <span className="text-lg md:text-2xl font-black text-secondary">{discount}%</span>
                </div>
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-[#181b24] border border-border text-center flex flex-col justify-center">
                  <span className="text-[10px] md:text-xs text-muted-foreground block mb-0.5 md:mb-1">{content.calcBenefits}</span>
                  <span className="text-[10px] md:text-xs font-bold text-white block mt-0.5 md:mt-1 leading-snug">{benefit}</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Title & Description (Grid span 6) - Order 1 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-6 flex flex-col justify-center ${content.alignClass} order-1 lg:order-2`}
          >
            <div className="flex items-stretch gap-3 md:gap-4 mb-4 md:mb-6 justify-start">
              <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-1 md:mb-2">
                  {content.title1}<br />{content.title2}
                </h2>
              </div>
            </div>

            <p className="text-sm md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8">
              {content.desc}
            </p>

            {SHOW_PROMO_OFFER && (
              <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/10 border border-secondary/20 ${content.alignClass}`}>
                <h4 className="font-bold text-secondary text-base md:text-lg mb-1 md:mb-2">{content.offerTitle}</h4>
                <p className="text-xs md:text-base text-white/70 leading-relaxed">
                  {content.offerDesc}
                </p>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
