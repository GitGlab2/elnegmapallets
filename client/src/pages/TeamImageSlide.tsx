import { motion } from "framer-motion";

export default function TeamImageSlide({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "فريق العمل والعمليات الميدانية",
      imgAlt: "فريق عمل شركة النجمة للبالتات الخشبية",
      caption: "كادر بشري مؤهل وهندسي يضمن دقة التفاصيل وجودة التوريد في كافة مراحل الإنتاج."
    },
    en: {
      title: "Our Team & Field Operations",
      imgAlt: "El Negma Pallets Work Team",
      caption: "Qualified technical and engineering staff ensuring attention to detail and supply chain quality at all stages of production."
    }
  }[lang];

  const teamImgSrc = "/images/sections/team-image.webp";

  return (
    <div className="w-full py-8 md:py-12 bg-[#181b24]" id="team-image-slide">
      <div className="w-full flex flex-col items-center gap-6 text-center">
        
        <div className="container relative z-10 flex flex-col items-center gap-3 px-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
            <h3 className="text-xl md:text-2xl font-black text-white">{content.title}</h3>
            <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Full-width Image Display with max-width limit */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 w-full z-10 relative"
        >
          <picture>
            <source srcSet={teamImgSrc} type="image/webp" />
            <img 
              src={teamImgSrc} 
              alt={content.imgAlt} 
              width={1920}
              height={600}
              loading="lazy"
              className="styled-image w-full h-auto object-contain block mx-auto transition-transform duration-500 hover:scale-[1.01]"
            />
          </picture>
        </motion.div>

        <div className="container px-4">
          <p className="relative z-10 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed mt-2 mx-auto">
            {content.caption}
          </p>
        </div>

      </div>
    </div>
  );
}
