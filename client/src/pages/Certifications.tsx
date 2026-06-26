import { motion } from "framer-motion";
import { Award, Globe2, Flame } from "lucide-react";

export function CertificationsList() {
  const certifications = [
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
      icon: <Award className="w-5 h-5 text-secondary shrink-0" />,
      title: "نظام إدارة الجودة:",
      desc: "نطبق نظام صارم لإدارة الجودة يضمن مطابقة كل منتج للمواصفات المطلوبة، مع اختبارات دورية للمواد الخام والمنتج النهائي، وتحت إشراف فريق متخصص من ضبط الجودة."
    }
  ];

  return (
    <div className="container py-12" id="certifications">
      <div className="relative min-h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex items-center">
        
        {/* Wave Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,0 Q50,50 0,100 T-100,200 T-200,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Certifications List (Grid span 8) - Order 2 on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-6 text-right order-2 lg:order-1"
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary transition-all">
                <div className="shrink-0 mt-1 p-2 rounded-xl bg-secondary/10">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">{cert.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side: Title & HT Badge (Grid span 4) - Order 1 on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right justify-center gap-6 order-1 lg:order-2"
          >
            {/* HT Approved Badge */}
            <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-secondary bg-secondary/10 shadow-[0_0_25px_rgba(177,101,251,0.3)] animate-pulse">
              <span className="text-secondary font-black text-2xl tracking-wider">HT</span>
              <span className="text-white text-xs font-bold mt-0.5">معتمد</span>
            </div>

            <div className="flex items-stretch gap-4 justify-start">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                الشهادات والمعايير
              </h2>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export function QualityCertImage() {
  return (
    <div className="w-full py-8 md:py-12 bg-[#181b24]" id="quality-certification">
      <div className="w-full flex flex-col items-center gap-6 text-center">
        
        <div className="container relative z-10 flex flex-col items-center gap-3 px-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
            <h3 className="text-xl md:text-2xl font-black text-white">شهادات جودة وتوريدات المصنع</h3>
            <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Full-width Image Display with absolutely no cropping or container limits */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full z-10 relative"
        >
          <img 
            src="/images/quality-certification.jpg" 
            alt="نحافظ على أعلى معايير الجودة من أجلكم" 
            className="w-full h-auto object-contain block mx-auto cursor-zoom-in"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}

export function InternationalStandardsImage() {
  return (
    <div className="container py-12" id="international-standards">
      <div className="rounded-3xl border border-border shadow-2xl bg-[#181b24] p-8 md:p-12 flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-1 bg-secondary rounded-full" />
          <h3 className="text-2xl md:text-3xl font-black text-white">المعايير الدولية للأمان والتصدير</h3>
          <div className="w-12 h-1 bg-secondary rounded-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <img 
            src="/images/international-standards.jpg" 
            alt="المعايير الدولية لشركة النجمة" 
            className="styled-image w-full max-h-[500px] object-contain mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
