import { motion } from "framer-motion";

export default function OperationsVideo() {
  return (
    <div className="container py-12" id="operations-video">
      <div className="rounded-3xl border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex flex-col items-center gap-8 text-center relative overflow-hidden">
        
        {/* Wave Decoration in background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
          <svg className="w-full h-full text-secondary" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 Q125,50 250,150 T500,150" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
          <h3 className="text-2xl md:text-3xl font-black text-white">المزايا التنافسية واللوجستية</h3>
          <div className="w-12 h-1 bg-secondary rounded-full animate-pulse" />
        </div>
        
        {/* Video Player Container - Large screen premium size */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl aspect-video rounded-[24px] overflow-hidden border-4 border-secondary shadow-[0_15px_50px_rgba(177,101,251,0.25)] bg-[#0f1116]"
        >
          <iframe 
            src="https://www.youtube.com/embed/upOSxwWufyI" 
            title="فيديو خط الإنتاج في مصنع النجمة"
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <p className="relative z-10 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-2">
          عرض مرئي يوضح جودة التوريد والخدمات اللوجستية وتفاصيل متانة البالتات الخشبية في مصنع النجمة.
        </p>

      </div>
    </div>
  );
}
