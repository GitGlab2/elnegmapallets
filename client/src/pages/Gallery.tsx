import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "الكل" },
    { id: "products", label: "المنتجات والبالتات" },
    { id: "factory", label: "المصنع والإنتاج" },
    { id: "logistics", label: "الشحن والتوريد" }
  ];

  const galleryItems = [
    {
      src: "/images/products-image.jpg",
      category: "products",
      title: "مخزون جاهز للتسليم",
      desc: "بالتات خشبية مكدسة ومطابقة للمواصفات جاهزة للشحن الفوري."
    },
    {
      src: "/images/client-gallery-1.jpg",
      category: "logistics",
      title: "تحميل الشحنات",
      desc: "نقل وتجهيز الشحنات مباشرة إلى أسطول النقل الخاص بالمصنع."
    },
    {
      src: "/images/client-gallery-2.jpg",
      category: "factory",
      title: "مخازن التجفيف والتخزين",
      desc: "مساحات تخزين واسعة ومجهزة لضمان جودة الأخشاب ومستويات الرطوبة."
    },
    {
      src: "/images/client-gallery-3.jpg",
      category: "logistics",
      title: "أسطول التوزيع والتوريد",
      desc: "توريد سريع لكافة محافظات الجمهورية عبر شاحناتنا الكبيرة."
    },
    {
      src: "/images/client-gallery-4.jpg",
      category: "products",
      title: "أخشاب معالجة ومطابقة",
      desc: "بالتات خشبية مصنعة من أجود أنواع الأخشاب الطبيعية المعالجة."
    },
    {
      src: "/images/factory-image.jpg",
      category: "factory",
      title: "خطوط الإنتاج والأتمتة",
      desc: "تصنيع دقيق وآلي لضمان توحيد الأبعاد وجودة التحمل."
    },
    {
      src: "/images/team-image.jpg",
      category: "factory",
      title: "فريق العمل والمتخصصين",
      desc: "كوادر فنية مدربة على أعلى مستويات التصنيع والرقابة على الجودة."
    },
    {
      src: "/images/pallet-hero-detail.png",
      category: "products",
      title: "دقة وجودة التفاصيل",
      desc: "تقفيل فائق المتانة للزوايا والمسامير لضمان أقصى درجات أمان الحمولات الثقيلة."
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="container py-12 flex flex-col gap-10">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
        <div className="flex items-stretch gap-4 text-right">
          <div className="w-1.5 bg-primary rounded-full" />
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">معرض الصور</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 leading-tight">
              ألبوم صور الإنتاج<br />والتوريدات الواقعية
            </h2>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md text-right">
          صور حية وواقعية من داخل مصانعنا ومواقع العمل توثق جودة منتجاتنا وعمليات التخزين والشحن اليومية لعملائنا.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3" dir="rtl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent hover:border-border"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.src}
              onClick={() => setSelectedImg(item.src)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border shadow-md aspect-[4/3] bg-muted"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 text-right text-white">
                <ZoomIn className="w-8 h-8 text-primary mb-3 bg-white/10 p-1.5 rounded-lg border border-white/20 self-start" />
                <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Zoom / Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="معاينة كاملة"
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              
              {/* Modal Text Details */}
              {(() => {
                const item = galleryItems.find(i => i.src === selectedImg);
                if (!item) return null;
                return (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-right text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-white/80 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
