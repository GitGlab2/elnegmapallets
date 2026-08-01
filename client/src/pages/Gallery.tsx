"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ArrowLeft, ArrowRight, Package, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  src: string;
  altAr: string;
  altEn: string;
  captionAr: string;
  captionEn: string;
}

export default function Gallery({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const items: GalleryItem[] = [
    {
      src: "/images/gallery/client-gallery-4.webp",
      altAr: "بالتات خشبية لقطاع الكيماويات مرصوصة داخل مخزن مصنع النجمة ببني سويف",
      altEn: "Wooden pallets for chemical sector stacked inside El Negma factory warehouse in Beni Suef",
      captionAr: "بالتات مصنّعة لتوريدات قطاع الكيماويات — تكديس مخزني جاهز للشحن",
      captionEn: "Pallets manufactured for chemical industry supply — warehouse stacking ready for shipment",
    },
    {
      src: "/images/gallery/client-gallery-3.webp",
      altAr: "أكوام بالتات خشبية متعددة الأحجام داخل مستودع كبير لتوريد قطاع الأسمنت والسيراميك",
      altEn: "Multiple pallet stacks of varying sizes in a large warehouse for cement and ceramics sector supply",
      captionAr: "مستودع التخزين الرئيسي — بالتات جاهزة لتوريدات الأسمنت والسيراميك",
      captionEn: "Main storage warehouse — pallets ready for cement and ceramics sector deliveries",
    },
    {
      src: "/images/gallery/client-gallery-2.webp",
      altAr: "رافعة شوكية تنقل ألواح خشبية داخل مصنع النجمة ببني سويف وبجوارها بالتات مرصوصة",
      altEn: "Forklift transporting timber boards inside El Negma factory with stacked pallets alongside",
      captionAr: "خط الإنتاج والنقل الداخلي — رافعة شوكية تغذّي محطات التجميع",
      captionEn: "Production line and internal transport — forklift feeding assembly stations",
    },
    {
      src: "/images/gallery/client-gallery-1.webp",
      altAr: "بالتة خشبية مكشوفة القاعدة من إنتاج مصنع النجمة لقطاع الفاكهة والأغذية",
      altEn: "Open-bottom wooden pallet manufactured by El Negma for fruit and food export sector",
      captionAr: "بالتة مخصصة لقطاع الفاكهة والأغذية — تصميم يسمح بالتهوية والتبريد",
      captionEn: "Pallet designed for fruit and food sector — open base allows ventilation and cooling",
    },
    {
      src: "/images/gallery/warehouse-stacked-pallets.webp",
      altAr: "بالتات خشبية مكدسة بارتفاعات متعددة في مستودع مصنع النجمة جاهزة للتوريد",
      altEn: "Wooden pallets stacked at multiple heights in El Negma factory warehouse ready for delivery",
      captionAr: "طاقة تخزينية كبيرة — بالتات جاهزة للتوريد الفوري للشركات والمصانع",
      captionEn: "Large storage capacity — pallets ready for immediate delivery to companies and factories",
    },
  ];

  const totalSlides = items.length;

  // We append a clone of the first slide at the end for seamless looping
  const extendedItems = [...items, items[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isRtl = lang === "ar";

  const getAlt = (item: GalleryItem) => isRtl ? item.altAr : item.altEn;
  const getCaption = (item: GalleryItem) => isRtl ? item.captionAr : item.captionEn;

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
        setActiveImageIndex(null);
      }
    };
    if (activeImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

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
  const displayDotIndex = currentIndex >= totalSlides ? 0 : currentIndex;

  const h1Title = isRtl
    ? "معرض صور مصنع البالتات الخشبية وخطوط الإنتاج"
    : "Factory Gallery & Wooden Pallet Production Lines";

  return (
    <div className="flex flex-col gap-12">
      
      {/* Top Hero Banner with Background Image */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
          style={{ backgroundImage: "url('/images/sections/gallery-hero-bg.webp')" }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-[#181b24]/80 to-black/60" />

        {/* Hero Content */}
        <div className="container relative z-10 text-center flex flex-col items-center gap-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-bold text-xs md:text-sm backdrop-blur-md">
            <Package className="w-4 h-4" />
            <span>{isRtl ? "المستودع وخطوط الإنتاج والتخزين" : "Factory Warehouse & Production Lines"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-4xl">
            {h1Title}
          </h1>

          <p className="text-sm md:text-lg text-gray-200 max-w-2xl font-medium leading-relaxed">
            {isRtl 
              ? "صور حية لعمليات تصنيع وتجميع وتخزين وتجهيز البالتات الخشبية للتوريد والتصدير بمصنع النجمة."
              : "Live high-definition photos of manufacturing processes, container loading, and pallet storage at El Negma factory."}
          </p>
        </div>
      </div>

      <div className="container py-4 pb-12" id="gallery-slider">

      {/* Main Interactive Carousel */}
      <div
        className="max-w-2xl mx-auto rounded-2xl md:rounded-3xl border border-border/30 shadow-2xl bg-[#181b24] p-3 md:p-5 flex flex-col gap-4 relative mb-12"
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
            {extendedItems.map((item, idx) => {
              const isClone = idx === totalSlides;
              const realIndex = idx % totalSlides;
              return (
                <div key={idx} className="w-full shrink-0">
                  <figure className="m-0">
                    <div 
                      className="overflow-hidden rounded-xl md:rounded-2xl cursor-zoom-in"
                      onClick={() => setActiveImageIndex(realIndex)}
                    >
                      <img
                        src={item.src}
                        alt={isClone ? "" : getAlt(item)}
                        aria-hidden={isClone ? "true" : undefined}
                        width={1200}
                        height={1200}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                    {!isClone && (
                      <figcaption className="text-center text-xs md:text-sm text-gray-300/90 mt-2.5 px-2 leading-relaxed">
                        {getCaption(item)}
                      </figcaption>
                    )}
                  </figure>
                </div>
              );
            })}
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

      {/* Static Indexable Image Grid & Substantive Industry Content */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Static Accessible Grid for Crawlers & Fast Visual Browsing */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-3">
            {isRtl ? "صور حية من خطوط التجميع والمستودعات" : "Live Photos from Assembly Lines & Warehouses"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <figure key={idx} className="m-0 bg-[#181b24] p-3 rounded-2xl border border-border/30 shadow-md flex flex-col justify-between">
                <div 
                  className="overflow-hidden rounded-xl cursor-zoom-in aspect-square mb-3"
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img
                    src={item.src}
                    alt={getAlt(item)}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="text-xs md:text-sm text-gray-300 leading-relaxed text-center px-1">
                  {getCaption(item)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Rich Substantive B2B Text Content */}
        <div className="bg-[#181b24] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-border/30 shadow-xl space-y-8">
          
          {/* Paragraph 1: Manufacturing Lines & Capacity */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-secondary flex items-center gap-2">
              <Package className="w-5 h-5 shrink-0" />
              {isRtl ? "خطوط الإنتاج والتصنيع الفني بمقاييس عالمية" : "World-Class Manufacturing Lines & Technical Capacity"}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {isRtl 
                ? "تمتد عمليات التصنيع داخل مصنع شركة النجمة بالمنطقة الصناعية ببياض العرب في بني سويف على مدار أكثر من 18 عاماً من الخبرة المتراكمة. نعتمد على خطوط تقطيع وتجميع متطورة تضمن دقة الأبعاد الهندسية لكل بالتة خشبية، بدءاً من اختيار ألواح خشب السويد والبياض عالي الكثافة، وصولاً إلى تثبيت المسامير المضلعة الحلزونية لضمان التماسك الهيكلي واستدامة الأحمال الشاقة في المنشآت الصناعية الكبرى."
                : "Manufacturing operations at El Negma factory in Bayad El Arab Industrial Zone, Beni Suef, draw on over 18 years of accumulated technical expertise. We operate advanced cutting and assembly lines that guarantee precise geometric dimensions for every wooden pallet, using high-density Swedish and White pine timber secured with ring-shank nails to ensure structural integrity under heavy industrial loading conditions."}
            </p>
          </div>

          {/* Paragraph 2: ISPM-15 Heat Treatment & Quality Standards */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-secondary flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              {isRtl ? "معايير التعقيم الحراري ISPM-15 والتطابق الجمركي" : "ISPM-15 Heat Treatment Standards & Customs Compliance"}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {isRtl
                ? "نوفر بالتات خشبية معالجة حرارياً (HT) متوافقة تماماً مع المعيار الدولي رقم 15 لحماية النباتات (ISPM-15)، وهو المتطلب الإلزامي لتصدير الشحنات عبر الموانئ البحرية والجوية الدولية. تتم عملية المعالجة في محطات تعقيم معتمدة لرفع درجة حرارة لب الخشب إلى 56 درجة مئوية لمدة 30 دقيقة على الأقل، مما يقضي على كافة الحشرات والآفات الخشبية، وتُختم البالتات بختم IPPC الرسمي المعتمد لتسهيل الإفراج الجمركي المباشر."
                : "We supply heat-treated (HT) wooden pallets fully compliant with ISPM-15 international phytosanitary standards, mandatory for all export shipments through international seaports and airports. Thermal treatment is performed in certified treatment facilities, elevating the wood core temperature to 56°C for at least 30 minutes to eradicate all wood pests, followed by official IPPC stamping for instant customs clearance."}
            </p>
          </div>

          {/* Paragraph 3: Bulk Storage, Container Loading & Supply Chain */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-secondary flex items-center gap-2">
              <Truck className="w-5 h-5 shrink-0" />
              {isRtl ? "قدرات التخزين والرص للحاويات والتوريد الفوري" : "Bulk Storage Capacity, Container Loading & Rapid Logistics"}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {isRtl
                ? "يمتلك المصنع مساحات تخزين مغطاة ومفتوحة تتسع لآلاف البالتات الجاهزة للتوريد السريع، مما يلبي احتياجات قطاعات الأغذية والكيماويات والأسمنت والسيراميك والمنتجات الهندسية. يتم تخطيط رص البالتات داخل حاويات التصدير (20 قدم و40 قدم) بدقة هندسية تحقق أقصى استغلال للمساحة المتاحة وحماية الشحنات من الاهتزاز أثناء النقل البحري والبري."
                : "Our facility maintains extensive indoor and outdoor storage space accommodating thousands of pallets ready for immediate dispatch, serving food, chemical, cement, ceramics, and engineering sectors. Container stuffing plans for 20ft and 40ft export containers are engineered for maximum space utilization and cargo stability during maritime and overland transit."}
            </p>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center cursor-zoom-out p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all cursor-pointer z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex(null);
            }}
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          
          <figure className="m-0 flex flex-col items-center">
            <img 
              src={items[activeImageIndex].src} 
              alt={getAlt(items[activeImageIndex])} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <figcaption className="text-center text-sm md:text-base text-gray-300/90 mt-3 px-4 leading-relaxed max-w-2xl">
              {getCaption(items[activeImageIndex])}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
    </div>
  );
}
