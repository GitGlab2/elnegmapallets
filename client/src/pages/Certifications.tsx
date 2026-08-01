"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Flame, ShieldCheck, Leaf, HardHat } from "lucide-react";

export function CertificationsList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      badge: "معتمد",
      title: "الشهادات والمعايير",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      items: [
        {
          icon: <Flame className="w-5 h-5 text-secondary shrink-0" />,
          title: "شهادات المعالجة الحرارية (HT):",
          desc: "جميع منتجاتنا حاصلة على شهادة المعالجة الحرارية (Heat Treatment) المعتمدة دولياً والتي تضمن خلو الأخشاب من الآفات والحشرات، مما يجعلها مناسبة للتصدير العالمي وفقاً للمعيار الدولي ISPM-15."
        },
        {
          icon: <Globe2 className="w-5 h-5 text-secondary shrink-0" />,
          title: "معايير الاتحاد الأوروبي:",
          desc: "تتوافق بالتاتنا مع جميع معايير ومواصفات الاتحاد الأوروبي للبالتات الخشبية (EPAL)، مما يضمن جودتها وقابليتها للاستخدام في الأسواق الأوروبية دون أي عوائق أو قيود جمركية."
        },
        {
          icon: <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 9001:2015 — نظام إدارة الجودة:",
          desc: "حاصلون على شهادة ISO 9001:2015 المعتمدة من هيئة ICERT الأوروبية وبتوثيق EGAC المصرية، والتي تضمن تطبيق نظام إدارة جودة شامل ومتكامل يغطي كافة مراحل الإنتاج من استلام المواد الخام حتى التوريد النهائي."
        },
        {
          icon: <Leaf className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 14001:2015 — نظام الإدارة البيئية:",
          desc: "حاصلون على شهادة ISO 14001:2015 لنظام الإدارة البيئية، والتي تؤكد التزام مصانعنا بالمعايير البيئية العالمية في التعامل مع الأخشاب والمخلفات الصناعية، مع تطبيق سياسات الاستدامة وتقليل الأثر البيئي."
        },
        {
          icon: <HardHat className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 45001:2018 — نظام إدارة السلامة والصحة المهنية:",
          desc: "حاصلون على شهادة ISO 45001:2018 لنظام السلامة والصحة المهنية، والتي تضمن توفير بيئة عمل آمنة لجميع العاملين وفقاً لأعلى المعايير الدولية، مع برامج تدريب مستمرة وإجراءات وقائية صارمة."
        },
        {
          icon: <Award className="w-5 h-5 text-secondary shrink-0" />,
          title: "نظام ضبط الجودة الداخلي:",
          desc: "نطبق نظام صارم لإدارة الجودة يضمن مطابقة كل منتج للمواصفات المطلوبة، مع اختبارات دورية للمواد الخام والمنتج النهائي، وتحت إشراف فريق متخصص من ضبط الجودة."
        }
      ]
    },
    en: {
      badge: "Approved",
      title: "Certificates & Standards",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      items: [
        {
          icon: <Flame className="w-5 h-5 text-secondary shrink-0" />,
          title: "Heat Treatment (HT) Certificates",
          desc: "All our wooden pallets are officially certified under international heat treatment protocols, guaranteeing the elimination of pests to meet the ISPM-15 export standard."
        },
        {
          icon: <Globe2 className="w-5 h-5 text-secondary shrink-0" />,
          title: "European Union Standards",
          desc: "Our pallets fully comply with European Pallet Association (EPAL) guidelines, ensuring smooth transit through EU ports and zero customs delays."
        },
        {
          icon: <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 9001:2015 — Quality Management System",
          desc: "Certified by ICERT (European accreditation body) with EGAC endorsement, our ISO 9001:2015 certification covers a comprehensive quality management system spanning all production stages — from raw material inspection through final delivery."
        },
        {
          icon: <Leaf className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 14001:2015 — Environmental Management System",
          desc: "Our ISO 14001:2015 certification confirms our commitment to global environmental standards in timber processing and industrial waste management, with sustainability policies that minimize our environmental footprint."
        },
        {
          icon: <HardHat className="w-5 h-5 text-secondary shrink-0" />,
          title: "ISO 45001:2018 — Occupational Health & Safety",
          desc: "Our ISO 45001:2018 certification ensures a safe working environment for all personnel under the highest international standards, with continuous training programs and strict preventive safety protocols."
        },
        {
          icon: <Award className="w-5 h-5 text-secondary shrink-0" />,
          title: "Internal Quality Control System",
          desc: "We apply rigid QC systems monitoring every batch. Inspections cover raw pine timber testing, nail spacing compliance, and final structural performance."
        }
      ]
    }
  }[lang];

  return (
    <div className="flex flex-col gap-12">
      
      {/* Top Hero Banner with Background Image */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
          style={{ backgroundImage: "url('/images/sections/certs-hero-bg.webp')" }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-[#181b24]/80 to-black/60" />

        {/* Hero Content */}
        <div className="container relative z-10 text-center flex flex-col items-center gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-bold text-xs md:text-sm backdrop-blur-md"
          >
            <Award className="w-4 h-4" />
            <span>{isEn ? "International ISO & Export Quality Compliance" : "اعتمادات الجودة والتبخير الحراري والتنظيم الدولي"}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-4xl"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-200 max-w-3xl font-medium leading-relaxed"
          >
            {isEn 
              ? "Certified Quality Management (ISO 9001), Environmental (ISO 14001), Safety (ISO 45001), and ISPM-15 Heat Treatment compliance."
              : "شهادات الأيزو العالمية (ISO 9001، ISO 14001، ISO 45001) والمعالجة الحرارية المعتمدة ISPM-15 بختم IPPC للتصدير الدولي."}
          </motion.p>
        </div>
      </div>

      <div className="container py-4 pb-12" id="certifications">
      <div className="relative min-h-0 lg:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex items-center">
        
        {/* Wave Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,0 Q50,50 0,100 T-100,200 T-200,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Left Side: Certifications List (Grid span 8) - Order 2 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-8 flex flex-col gap-4 md:gap-6 ${content.alignClass} order-2 lg:order-1`}
          >
            {content.items.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary transition-all">
                <div className="shrink-0 mt-1 p-1.5 md:p-2 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center">
                  <div className="[&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 flex items-center justify-center">
                    {cert.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-base md:text-lg mb-0.5 md:mb-1">{cert.title}</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side: Title & HT Badge (Grid span 4) - Order 1 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-4 flex flex-col items-center ${isEn ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} justify-center gap-4 md:gap-6 order-1 lg:order-2`}
          >
            {/* HT Approved Badge */}
            <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-secondary bg-secondary/10 shadow-[0_0_25px_rgba(177,101,251,0.3)] animate-pulse">
              <span className="text-secondary font-black text-xl md:text-2xl tracking-wider">HT</span>
              <span className="text-white text-[10px] md:text-xs font-bold mt-0.5">{content.badge}</span>
            </div>

            <div className="flex items-stretch gap-3 md:gap-4 justify-start">
              <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                {content.title}
              </h1>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
    </div>
  );
}

export function QualityCertImage({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  return (
    <div className="container py-8 md:py-12" id="quality-certification">
      <div className="rounded-2xl md:rounded-3xl border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-12 flex flex-col items-center gap-6 md:gap-8 text-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 md:w-12 h-1 bg-secondary rounded-full" />
          <h3 className="text-lg sm:text-xl md:text-3xl font-black text-white">
            {isEn ? "Certified Heat Treatment (HT) Certificate" : "شهادة التبخير الحراري المعتمدة"}
          </h3>
          <div className="w-8 md:w-12 h-1 bg-secondary rounded-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <picture>
            <source srcSet="/images/sections/quality-certification.webp" type="image/webp" />
            <img 
              src="/images/sections/quality-certification.webp" 
              alt={isEn ? "El Negma Quality Certificates" : "شهادات جودة شركة النجمة"} 
              width={1000}
              height={700}
              loading="lazy"
              className="styled-image w-full max-h-[300px] md:max-h-[500px] object-contain mx-auto"
            />
          </picture>
        </motion.div>
      </div>
    </div>
  );
}



