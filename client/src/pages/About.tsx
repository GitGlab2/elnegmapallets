import { motion } from "framer-motion";

export default function About() {
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
                <source srcSet="/images/factory-image.webp" type="image/webp" />
                <img 
                  src="/images/factory-image.jpg" 
                  alt="مصنع شركة النجمة للبالتات الخشبية" 
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
            className="lg:col-span-7 flex flex-col justify-center text-right"
          >
            <div className="flex items-stretch gap-4 mb-6 justify-start">
              <div className="w-1.5 bg-secondary rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                من نحن - نبذة عن الشركة
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4 md:mb-6">
              شركة النجمة لتصنيع البالتات الخشبية هي شركة مصرية رائدة تتمتع بخبرة تزيد عن 18 عامًا في مجال تصنيع البالتات الخشبية بجميع أنواعها وأشكالها. نحن متخصصون في توفير حلول البالتات الخشبية عالية الجودة لكبرى الشركات والمصانع داخل مصر وخارجها.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              تمكنا عبر سنوات الخبرة من بناء سمعة قوية كأفضل مورد للبالتات في السوق المصري، حيث نلتزم بأعلى معايير الجودة ودقة المواصفات والتسليم في المواعيد المحددة. تتنوع منتجاتنا لتلبية احتياجات مختلف القطاعات الصناعية بما في ذلك الأسمنت، السيراميك، الكيماويات، الإلكترونيات، والعديد من المجالات الأخرى.
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
              className="lg:col-span-7 text-right flex flex-col gap-8 order-2 lg:order-1"
            >
              <div>
                <h4 className="font-bold text-secondary text-xl md:text-2xl mb-2 md:mb-3">رسالتنا</h4>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  تقديم بالتة خشبية مصرية بمواصفة عالمية، تلبي احتياجات السوق المحلي والعالمي بأعلى معايير الجودة.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-secondary text-xl md:text-2xl mb-2 md:mb-3">رؤيتنا</h4>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  الريادة في حلول النقل والتخزين والصادرات الخشبية بالسوقين المحلي والدولي، وأن نكون الاختيار الأول للمصانع والشركات الكبرى.
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
              className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-right justify-center order-1 lg:order-3"
            >
              <span className="text-white/80 text-xl md:text-3xl font-black mb-1">شركة</span>
              <span className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-wider">النجمة</span>
            </motion.div>

          </div>

        </div>
      </div>

    </div>
  );
}
