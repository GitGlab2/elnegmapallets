"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const items = [
    "/images/gallery/client-gallery-4.webp",
    "/images/gallery/client-gallery-3.webp",
    "/images/gallery/client-gallery-2.webp",
    "/images/gallery/client-gallery-1.webp",
    "/images/gallery/warehouse-stacked-pallets.webp",
  ];

  const totalSlides = items.length;

  // We append a clone of the first slide at the end for seamless looping
  const extendedItems = [...items, items[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(goToNext, 2000);
  }, [stopAutoplay, goToNext]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // When we land on the clone (index === totalSlides), snap back to 0 instantly
  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // wait for the slide animation to finish
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  const handleNext = () => {
    stopAutoplay();
    goToNext();
    startAutoplay();
  };

  const handlePrev = () => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
    startAutoplay();
  };

  const handleDotClick = (index: number) => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex(index);
    startAutoplay();
  };

  const translatePercent = currentIndex * 100;
  const isRtl = lang === "ar";
  const displayDotIndex = currentIndex >= totalSlides ? 0 : currentIndex;

  const h1Title = isRtl
    ? "معرض صور مصنع البالتات الخشبية وخطوط الإنتاج"
    : "Factory Gallery & Wooden Pallet Production Lines";

  return (
    <div className="container py-8 md:py-12" id="gallery-slider">
      {/* Page Header with Clean H1 */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 leading-tight">
          {h1Title}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {isRtl 
            ? "صور حية لإنتاج وتجميع وتخزين البالتات الخشبية المعالجة حرارياً بختم ISPM-15 بمصنع النجمة."
            : "Live photos of wooden pallet manufacturing processes, container loading, and storage at El Negma factory."}
        </p>
      </div>

      <div
        className="max-w-2xl mx-auto rounded-2xl md:rounded-3xl border border-border/30 shadow-2xl bg-[#181b24] p-3 md:p-5 flex flex-col gap-4 relative"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {/* Slider Viewport */}
        <div className="relative group/slider overflow-hidden w-full rounded-xl md:rounded-2xl">

          {/* Slides Track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: isRtl
                ? `translateX(${translatePercent}%)`
                : `translateX(-${translatePercent}%)`,
              transition: isTransitioning
                ? "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {extendedItems.map((src, idx) => (
              <div key={idx} className="w-full shrink-0">
                <div 
                  className="overflow-hidden rounded-xl md:rounded-2xl cursor-zoom-in"
                  onClick={() => setActiveImage(src)}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${(idx % totalSlides) + 1}`}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 z-20 p-2.5 md:p-3.5 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-secondary transition-all duration-300 shadow-lg md:opacity-0 md:group-hover/slider:opacity-100 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 z-20 p-2.5 md:p-3.5 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-secondary transition-all duration-300 shadow-lg md:opacity-0 md:group-hover/slider:opacity-100 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                displayDotIndex === idx
                  ? "w-7 bg-secondary"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center cursor-zoom-out p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all cursor-pointer z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          
          <img 
            src={activeImage} 
            alt="Pallet detail expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
