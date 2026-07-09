"use client";

import { motion } from "framer-motion";
import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { MoveRight, Package, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PalletSizesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const list = isEn ? palletSizesEn : palletSizesAr;

  const content = {
    ar: {
      title: "مقاسات وأبعاد البالتات الخشبية",
      subtitle: "دليل المواصفات القياسية للبالتات الخشبية الجديدة للتصدير واللوجستيات",
      desc: "تعتمد كفاءة الشحن الدولي واللوجستيات على مطابقة مقاسات البالتات لوسائل النقل والحاويات القياسية. نوفر في مصنع النجمة تشكيلة متكاملة من البالتات الخشبية الجديدة المصممة خصيصاً لتناسب متطلبات التصدير والسوق المحلي ومحطات تعبئة الموالح.",
      badge: "دليل أبعاد البالتات",
      viewDetails: "عرض التفاصيل الفنية",
      staticLoad: "حمولة ثابتة",
      dynamicLoad: "حمولة متحركة",
      dimensionsLabel: "الأبعاد:",
      ctaTitle: "هل تحتاج إلى مقاس مخصص لشحنتك؟",
      ctaDesc: "يمكننا تصنيع البالتات الخشبية بمواصفات وأبعاد خاصة تناسب متطلبات ماكيناتك وحاويات شحنك بدقة تامة.",
      ctaBtn: "تواصل معنا لطلب عرض سعر"
    },
    en: {
      title: "Wooden Pallet Sizes & Dimensions",
      subtitle: "Standard Specifications Guide for New Wooden Export & Logistics Pallets",
      desc: "International shipping and logistics efficiency rely heavily on matching pallet dimensions to cargo containers. At El Negma factory, we manufacture a comprehensive selection of new wooden pallets engineered to fit export requirements, citrus packing houses, and local supply chains.",
      badge: "Pallet Dimensions Guide",
      viewDetails: "View Technical Specs",
      staticLoad: "Static Load",
      dynamicLoad: "Dynamic Load",
      dimensionsLabel: "Dimensions:",
      ctaTitle: "Need Custom Dimensions for Your Cargo?",
      ctaDesc: "We can manufacture new wooden pallets with custom specifications and sizing tailored precisely to your machinery and container requirements.",
      ctaBtn: "Contact Us for a Quote"
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#111319] text-white pt-24 pb-16">
      
      {/* Hero Header Section */}
      <div className="container py-8 md:py-12 border-b border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-sm font-bold mb-4"
          >
            {content.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-gray-200 to-secondary bg-clip-text text-transparent"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-6"
          >
            {content.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {content.desc}
          </motion.p>
        </div>
      </div>

      {/* Grid Directory Section */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((pallet, index) => (
            <motion.div
              key={pallet.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-border/40 bg-[#181b24] p-6 hover:border-secondary transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-secondary/5"
            >
              <div>
                {/* Visual Image Render */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#111319]/80 border border-border/20 mb-6 flex items-center justify-center p-4">
                  <picture>
                    <source srcSet={pallet.image} type="image/webp" />
                    <img 
                      src={pallet.image.replace(".webp", ".png")} 
                      alt={pallet.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>
                </div>

                {/* Tags & Categories */}
                <span className="text-xs text-secondary font-bold uppercase tracking-wider block mb-2">
                  {pallet.category}
                </span>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-white group-hover:text-secondary transition-colors mb-3">
                  {pallet.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {pallet.description}
                </p>

                {/* Specs highlights */}
                <div className="border-t border-border/30 pt-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{content.dimensionsLabel}</span>
                    <span className="font-bold text-white dir-ltr">{pallet.dimensions}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 bg-[#111319]/60 p-3 rounded-xl border border-border/20">
                    <div className="text-center">
                      <span className="text-[11px] text-muted-foreground block">{content.dynamicLoad}</span>
                      <span className="text-sm font-black text-secondary">{pallet.loads.dynamic} {isEn ? "kg" : "كجم"}</span>
                    </div>
                    <div className="text-center border-l border-border/20">
                      <span className="text-[11px] text-muted-foreground block">{content.staticLoad}</span>
                      <span className="text-sm font-black text-white">{pallet.loads.static} {isEn ? "kg" : "كجم"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link 
                href={isEn ? `/en/pallet-sizes/${pallet.slug}` : `/pallet-sizes/${pallet.slug}`}
                className="w-full py-3.5 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary text-secondary hover:text-white transition-all font-bold flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>{content.viewDetails}</span>
                {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Quote call to action banner */}
      <div className="container mt-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1c1f2a] to-[#12141a] p-8 md:p-12 border border-border/40 text-center shadow-xl">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
            <Package className="w-96 h-96 absolute -right-20 -bottom-20 text-white" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">{content.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 text-base leading-relaxed">{content.ctaDesc}</p>
            <Link 
              href={isEn ? "/en#contact-section" : "/#contact-section"}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-secondary/15"
            >
              <span>{content.ctaBtn}</span>
              {isEn ? <MoveRight className="w-5 h-5" /> : <MoveRight className="w-5 h-5 rotate-180" />}
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
