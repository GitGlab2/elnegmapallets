import { motion } from "framer-motion";

export default function About({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "من نحن - نبذة عن الشركة",
      desc1: "شركة النجمة لتصنيع البالتات الخشبية هي شركة مصرية رائدة تتمتع بخبرة تزيد عن 18 عامًا في مجال تصنيع البالتات الخشبية بجميع أنواعها وأشكالها. نحن متخصصون في توفير حلول البالتات الخشبية عالية الجودة لكبرى الشركات والمصانع داخل مصر وخارجها.",
      desc2: "تمكنا عبر سنوات الخبرة من بناء سمعة قوية كأفضل مورد للبالتات في السوق المصري، حيث نلتزم بأعلى معايير الجودة ودقة المواصفات والتسليم في المواعيد المحددة. تتنوع منتجاتنا لتلبية احتياجات مختلف القطاعات الصناعية بما في ذلك الأسمنت، السيراميك، الكيماويات، الإلكترونيات، والعديد من المجالات الأخرى.",
      missionTitle: "رسالتنا",
      missionDesc: "تقديم بالتة خشبية مصرية بمواصفة عالمية، تلبي احتياجات السوق المحلي والعالمي بأعلى معايير الجودة.",
      visionTitle: "رؤيتنا",
      visionDesc: "الريادة في حلول النقل والتخزين والصادرات الخشبية بالسوقين المحلي والدولي، وأن نكون الاختيار الأول للمصانع والشركات الكبرى.",
      logo1: "شركة",
      logo2: "النجمة",
      imgAlt: "مصنع شركة النجمة للبالتات الخشبية",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
    },
    en: {
      title: "About Us - Company Overview",
      desc1: "El Negma for Wooden Pallets Manufacturing is a leading Egyptian company with over 18 years of experience in the wood packaging industry. We specialize in providing high-quality wooden pallet solutions to major domestic and international companies.",
      desc2: "Over the years, we have built a solid reputation as the premier pallet supplier in the Egyptian market. We commit to the highest quality control, dimensional precision, and timely delivery. Our products serve diverse sectors including cement, ceramics, chemicals, electronics, and many others.",
      missionTitle: "Our Mission",
      missionDesc: "To deliver high-grade Egyptian wooden pallets that meet international standards, serving both local and global supply chains with extreme reliability.",
      visionTitle: "Our Vision",
      visionDesc: "To lead the domestic and international wood cargo and warehousing industry, remaining the first choice for major factories and shipping companies.",
      logo1: "El Negma",
      logo2: "Pallets",
      imgAlt: "El Negma Pallets Factory",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
    }
  }[lang];

  return (
    <div className="flex flex-col gap-16">
      
      {/* Slide 2: من نحن - نبذة عن الشركة */}
      <div className="container py-8 md:py-12" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16">
          
          {/* Left Side: Image (Grid span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex items-center justify-center relative overflow-hidden"
          >
            <div className="relative w-full max-w-md">
              <picture>
                <source srcSet="/images/sections/factory-image.webp" type="image/webp" />
                <img 
                  src="/images/sections/factory-image.webp" 
                  alt={content.imgAlt} 
                  width={800}
                  height={600}
                  loading="lazy"
                  className="styled-image w-full h-60 md:h-80 object-contain"
                />
              </picture>
            </div>
          </motion.div>

          {/* Right Side: Content (Grid span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 flex flex-col justify-center ${content.alignClass}`}
          >
            <div className="flex items-stretch gap-4 mb-6 justify-start">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                {content.title}
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4 md:mb-6">
              {content.desc1}
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              {content.desc2}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Slide 3: رسالتنا ورؤيتنا */}
      <div className="container py-8 md:py-12" id="vision-mission">
        <div className="relative min-h-[350px] md:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex items-center">
          
          {/* Wave Decoration in background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="w-full h-full text-secondary" viewBox="0 0 400 720" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 Q50,150 0,200 T0,300 T0,400 T0,500 T0,600" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M-20,120 Q30,170 -20,220 T-20,320 T-20,420 T-20,520 T-20,620" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
          </div>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Mission & Vision Content (Grid span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-7 ${content.alignClass} flex flex-col gap-8 order-2 lg:order-1`}
            >
              <div>
                <h4 className="font-bold text-secondary text-xl md:text-2xl mb-2 md:mb-3">{content.missionTitle}</h4>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  {content.missionDesc}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-secondary text-xl md:text-2xl mb-2 md:mb-3">{content.visionTitle}</h4>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  {content.visionDesc}
                </p>
              </div>
            </motion.div>

            {/* Middle: Purple Line Divider (Grid span 1) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center order-2">
              <div className="w-1.5 h-64 bg-secondary rounded-full" />
            </div>

            {/* Right Side: Large Text Logo (Grid span 4) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-4 flex flex-col items-center lg:items-start text-center ${isEn ? "lg:text-left" : "lg:text-right"} justify-center order-1 lg:order-3`}
            >
              <span className="text-white/80 text-xl md:text-3xl font-black mb-1">{content.logo1}</span>
              <span className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-wider">{content.logo2}</span>
            </motion.div>

          </div>

        </div>
      </div>

    </div>
  );
}
