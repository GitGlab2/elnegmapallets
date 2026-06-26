import { motion } from "framer-motion";

export default function AdvantagesSlide() {
  return (
    <div className="w-full py-0 bg-[#181b24]" id="advantages-slide">
      <div className="w-full flex flex-col items-center text-center">
        
        {/* Full-width Image Display with absolutely no cropping or container limits */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full z-10 relative"
        >
          <img 
            src="/images/pallet-hero-detail.png" 
            alt="شركة النجمة لتصنيع البالتات الخشبية" 
            className="w-full h-auto object-contain block mx-auto cursor-zoom-in"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}
