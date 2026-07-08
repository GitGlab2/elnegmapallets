export default function AdvantagesSlide() {
  return (
    <div className="w-full py-0 bg-[#181b24]" id="advantages-slide">
      <div className="w-full flex flex-col items-center text-center">
        
        {/* Full-width Image Display - CSS animation instead of framer-motion */}
        <div className="w-full z-10 relative animate-fade-in-up">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/sections/pallet-hero-detail-mobile.webp" type="image/webp" />
            <source media="(min-width: 769px)" srcSet="/images/sections/pallet-hero-detail.webp" type="image/webp" />
            <img 
              src="/images/sections/pallet-hero-detail.webp" 
              alt="شركة النجمة لتصنيع البالتات الخشبية" 
              width={1920}
              height={600}
              fetchPriority="high"
              className="w-full h-auto object-contain block mx-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/sections/sectors-preview.webp';
              }}
            />
          </picture>
        </div>

      </div>
    </div>
  );
}
