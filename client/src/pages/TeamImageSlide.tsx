"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function TeamImageSlide({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

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
        
        {/* Full-width Image Display with max-width limit and cursor pointer */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 w-full z-10 relative cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
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

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center cursor-zoom-out p-4 md:p-8 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all cursor-pointer z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          
          <img 
            src={teamImgSrc} 
            alt="Field operations team expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
