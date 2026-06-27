import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, MoveHorizontal } from "lucide-react";

export default function AdvantagesSlide() {
  return (
    <div className="w-full py-4 bg-[#181b24]" id="advantages-slide">
      <div className="w-full flex flex-col items-center text-center">
        
        {/* Mobile-only scroll and zoom indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-3 text-xs text-accent/90 bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>اضغط لتكبير الصورة • اسحب لليمين واليسار لرؤية التفاصيل</span>
          <MoveHorizontal className="w-3.5 h-3.5 animate-pulse" />
        </div>

        {/* Scrollable Container on Mobile, Normal on Desktop */}
        <div className="w-full overflow-x-auto scrollbar-none select-none">
          <div className="min-w-[800px] md:min-w-0 w-full px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full z-10 relative"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative cursor-zoom-in group rounded-xl overflow-hidden">
                    <img 
                      src="/images/pallet-hero-detail.png" 
                      alt="شركة النجمة لتصنيع البالتات الخشبية" 
                      className="w-full h-auto object-contain block mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
                      }}
                    />
                    {/* Hover overlay with zoom icon (desktop only) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
                      <div className="p-3 rounded-full bg-black/50 text-white backdrop-blur-sm">
                        <ZoomIn className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-5xl p-2 bg-[#181b24] border border-border/40 rounded-2xl flex items-center justify-center overflow-auto max-h-[90vh]">
                  <img 
                    src="/images/pallet-hero-detail.png" 
                    alt="تفاصيل البالتة الخشبية" 
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
                    }}
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

