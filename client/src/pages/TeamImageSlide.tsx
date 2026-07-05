import { motion } from "framer-motion";

export default function TeamImageSlide() {
  return (
    <div className="w-full py-8 md:py-12 bg-[#181b24]" id="team-image-slide">
      <div className="w-full flex flex-col items-center gap-6 text-center">
        
        <div className="container relative z-10 flex flex-col items-center gap-3 px-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
            <h3 className="text-xl md:text-2xl font-black text-white">فريق العمل والعمليات الميدانية</h3>
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
          <picture>
            <source srcSet="/images/team-image.webp" type="image/webp" />
            <img 
              src="/images/team-image.jpg" 
              alt="فريق عمل شركة النجمة للبالتات الخشبية" 
              width={1920}
              height={600}
              loading="lazy"
              className="w-full h-auto object-contain block mx-auto"
            />
          </picture>
        </motion.div>

        <div className="container px-4">
          <p className="relative z-10 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed mt-2 mx-auto">
            كادر بشري مؤهل وهندسي يضمن دقة التفاصيل وجودة التوريد في كافة مراحل الإنتاج.
          </p>
        </div>

      </div>
    </div>
  );
}
