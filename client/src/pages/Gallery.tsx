import { motion } from "framer-motion";

export default function Gallery({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      badge: "الصور الميدانية",
      title1: "معرض شحنات وتوريدات العملاء - الجزء الأول",
      title2: "معرض شحنات وتوريدات العملاء - الجزء الثاني",
      alignClass: "text-right",
      paddingSideClass: "pr-1 md:pr-2",
      items1: [
        { src: "/images/gallery/client-gallery-4", title: "توريدات قطاع التصدير", desc: "شحنات بالتات خشبية معالجة حرارياً جاهزة للتصدير والموانئ." },
        { src: "/images/gallery/client-gallery-3", title: "أسطول الشحن والتوزيع", desc: "تحميل وتوريد البالتات لمختلف المحافظات والشركات." }
      ],
      items2: [
        { src: "/images/gallery/client-gallery-2", title: "مستودعات التخزين الجاف", desc: "تخزين وتجفيف الأخشاب لضمان مطابقتها لأعلى معايير الجودة." },
        { src: "/images/gallery/client-gallery-1", title: "شحن وتنزيل البالتات للعملاء", desc: "تفريغ وتوريد آمن للبالتات في مواقع العمل والمصانع مباشرة." }
      ]
    },
    en: {
      badge: "Field Gallery",
      title1: "Client Deliveries & Shipments - Part I",
      title2: "Client Deliveries & Shipments - Part II",
      alignClass: "text-left",
      paddingSideClass: "pl-1 md:pl-2",
      items1: [
        { src: "/images/gallery/client-gallery-4", title: "Export Sector Supplies", desc: "Heat-treated wooden pallet shipments ready for export and ports." },
        { src: "/images/gallery/client-gallery-3", title: "Shipping & Logistics Fleet", desc: "Loading and supplying pallets to various governorates and corporate clients." }
      ],
      items2: [
        { src: "/images/gallery/client-gallery-2", title: "Dry Storage Warehousing", desc: "Storing and seasoning wood to guarantee compliance with the highest standards." },
        { src: "/images/gallery/client-gallery-1", title: "Unloading Pallets for Clients", desc: "Safe unloading and delivery of pallets directly to operational sites and factories." }
      ]
    }
  }[lang];

  const renderGalleryItem = (item: { src: string; title: string; desc: string }, index: number) => (
    <motion.div 
      key={index} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col gap-3 md:gap-4 ${content.alignClass} group`}
    >
      <div className="overflow-hidden rounded-xl md:rounded-2xl">
        <picture>
          <source srcSet={`${item.src}.webp`} type="image/webp" />
          <img 
            src={`${item.src}.webp`} 
            alt={item.title} 
            width={800}
            height={500}
            loading="lazy"
            className="styled-image w-full h-56 sm:h-80 md:h-[380px] object-cover transition-transform duration-500 md:group-hover:scale-102"
          />
        </picture>
      </div>
      <div className={content.paddingSideClass}>
        <h4 className="font-bold text-lg md:text-xl text-white md:group-hover:text-secondary transition-colors">{item.title}</h4>
        <p className="text-xs md:text-base text-muted-foreground mt-0.5 md:mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col gap-16">
      
      {/* Slide 8: شحنات وتوريدات العملاء - الجزء الأول */}
      <div className="container py-8 md:py-12" id="gallery-part-1">
        <div className="rounded-2xl md:rounded-3xl border border-border shadow-2xl bg-[#181b24] p-4 md:p-12 flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <div className={`flex items-stretch gap-3 md:gap-4 border-b border-border/40 pb-4 md:pb-6 ${content.alignClass}`}>
            <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
            <div>
              <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-wider">{content.badge}</span>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mt-1 leading-tight">
                {content.title1}
              </h2>
            </div>
          </div>

          {/* Two Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.items1.map(renderGalleryItem)}
          </div>
        </div>
      </div>

      {/* Slide 8b: شحنات وتوريدات العملاء - الجزء الثاني */}
      <div className="container py-8 md:py-12" id="gallery-part-2">
        <div className="rounded-2xl md:rounded-3xl border border-border shadow-2xl bg-[#181b24] p-4 md:p-12 flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <div className={`flex items-stretch gap-3 md:gap-4 border-b border-border/40 pb-4 md:pb-6 ${content.alignClass}`}>
            <div className="w-1 md:w-1.5 bg-secondary rounded-full" />
            <div>
              <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-wider">{content.badge}</span>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mt-1 leading-tight">
                {content.title2}
              </h2>
            </div>
          </div>

          {/* Two Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.items2.map(renderGalleryItem)}
          </div>
        </div>
      </div>

    </div>
  );
}
