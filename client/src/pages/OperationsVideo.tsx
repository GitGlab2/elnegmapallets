import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function OperationsVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use IntersectionObserver to detect when video section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% of the element must be visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Build YouTube URL: only enable JS API and allow autoplay when visible
  const videoSrc = isVisible
    ? "https://www.youtube.com/embed/upOSxwWufyI?enablejsapi=1"
    : "";

  return (
    <div className="container py-8 md:py-12" id="operations-video" ref={containerRef}>
      <div className="rounded-2xl md:rounded-3xl border border-border shadow-2xl bg-[#181b24] p-4 md:p-8 lg:p-16 flex flex-col items-center gap-4 md:gap-8 text-center relative overflow-hidden">
        
        {/* Wave Decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
          <svg className="w-full h-full text-secondary" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 Q125,50 250,150 T500,150" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:gap-3">
          <div className="w-8 md:w-12 h-1 bg-secondary rounded-full animate-pulse" />
          <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white">المزايا التنافسية واللوجستية</h3>
          <div className="w-8 md:w-12 h-1 bg-secondary rounded-full animate-pulse" />
        </div>
        
        {/* Video Player Container - Responsive sizing */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl aspect-video rounded-xl md:rounded-[24px] overflow-hidden border-2 md:border-4 border-secondary shadow-[0_8px_30px_rgba(177,101,251,0.25)] md:shadow-[0_15px_50px_rgba(177,101,251,0.25)] bg-[#0f1116]"
        >
          {isVisible ? (
            <iframe 
              src={videoSrc}
              title="فيديو خط الإنتاج في مصنع النجمة"
              className="w-full h-full border-none"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm md:text-base">مرّر لأسفل لمشاهدة الفيديو</p>
              </div>
            </div>
          )}
        </motion.div>

        <p className="relative z-10 text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1 md:mt-2 px-2">
          عرض مرئي يوضح جودة التوريد والخدمات اللوجستية وتفاصيل متانة البالتات الخشبية في مصنع النجمة.
        </p>

      </div>
    </div>
  );
}
