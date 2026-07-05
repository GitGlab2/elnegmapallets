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
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/pallet-hero-detail-mobile.webp" type="image/webp" />
            <source media="(min-width: 769px)" srcSet="/images/pallet-hero-detail.webp" type="image/webp" />
            <img 
              src="/images/pallet-hero-detail.png" 
              alt="شركة النجمة لتصنيع البالتات الخشبية" 
              width={1920}
              height={600}
              fetchPriority="high"
              className="w-full h-auto object-contain block mx-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
              }}
            />
          </picture>
        </motion.div>

      </div>
    </div>
  );
}
