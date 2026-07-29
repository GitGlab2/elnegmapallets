"use client";

import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck, Box, Layers, Truck, CheckCircle2, ChevronLeft, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const products = isEn ? palletSizesEn : palletSizesAr;

  const content = {
    ar: {
      badge: "كتالوج البالتات الخشبية القياسية والمعالجة للتصدير",
      title: "منتجات البالتات الخشبية لجميع الأغراض الصناعية والتصديرية",
      subtitle: "دليل المواصفات الهندسية والأحمال المعتمدة لجميع المقاسات القياسية المصنعة في مصنع النجمة ببني سويف بأعلى معايير الجودة العالمية.",
      viewDetails: "المواصفات الفنية والتفاصيل",
      moqTitle: "تجهيز الطلبيات الكبرى للمصانع والشركات",
      moqDesc: "نوفر توريدات البالتات الخشبية الجديدة والمعالجة حرارياً (HT) المطابقة لمعيار ISPM-15 الدولي، بالحد الأدنى للكميات الصناعية (2000 بالتة) مع كافة المستندات والتسليم في المواعيد.",
      staticLoad: "حمل استاتيكي",
      dynamicLoad: "حمل ديناميكي",
      rackingLoad: "حمل رفوف",
      certTag: "معالجة ISPM-15 معتمدة",
      requestQuote: "طلب عرض سعر كميات",
      directCall: "اتصال بمبيعات المصنع",
      home: "الرئيسية",
      catalog: "كتالوج المنتجات",
    },
    en: {
      badge: "Standard & Export-Ready Wooden Pallets Catalog",
      title: "Industrial & Export Wooden Pallet Products",
      subtitle: "Complete technical and structural load specifications for all standard wooden pallets manufactured at El Negma factory in Beni Suef.",
      viewDetails: "Technical Specifications & Details",
      moqTitle: "Bulk Supply & High-Capacity Factory Procurement",
      moqDesc: "Supplying new ISPM-15 heat-treated (HT) wooden pallets compliant with international export standards. Minimum bulk order: 2,000 pallets with full documentation and scheduled deliveries.",
      staticLoad: "Static Load",
      dynamicLoad: "Dynamic Load",
      rackingLoad: "Racking Load",
      certTag: "ISPM-15 HT Certified",
      requestQuote: "Request Bulk Quote",
      directCall: "Call Sales Direct",
      home: "Home",
      catalog: "Products Catalog",
    }
  }[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header Section */}
      <section className="relative bg-[#181b24] text-white py-16 md:py-20 overflow-hidden border-b border-border/40">
        {/* Background Ambient Glow & Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[120px]" />
          <svg className="w-full h-full text-secondary/30" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
            <path d="M-400,0 C-200,50 0,100 200,150 C400,200 600,250 800,300" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M-400,20 C-200,70 0,120 200,170 C400,220 600,270 800,320" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-6">
            <Link href={isEn ? "/en/" : "/"} className="hover:text-white transition-colors">
              {content.home}
            </Link>
            {isEn ? <ChevronLeft className="w-4 h-4 rotate-180" /> : <ChevronLeft className="w-4 h-4" />}
            <span className="text-secondary font-semibold">{content.catalog}</span>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs md:text-sm font-bold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
              {content.title}
            </h1>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed font-normal">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Dark Glass Background */}
                  <div className="aspect-[4/3] w-full bg-[#181b24] p-8 flex items-center justify-center relative overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-transparent to-transparent z-10" />
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.dimensions}`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-0"
                    />
                    
                    {/* Dimension Tag */}
                    <div className="absolute top-4 right-4 z-20 bg-secondary/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black shadow-md border border-white/10">
                      {item.dimensions}
                    </div>

                    {/* Cert Badge */}
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ISPM-15</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                      {item.category}
                    </span>

                    <h2 className="text-2xl font-bold text-foreground leading-snug group-hover:text-secondary transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {item.subtitle}
                    </p>

                    {/* Load Specifications Grid */}
                    <div className="pt-2 grid grid-cols-3 gap-2 text-center bg-muted/50 p-3 rounded-2xl border border-border/60">
                      <div className="space-y-0.5">
                        <span className="block text-xs font-black text-foreground">{item.loads.dynamic.toLocaleString()} kg</span>
                        <span className="text-[10px] text-muted-foreground block">{content.dynamicLoad}</span>
                      </div>
                      <div className="space-y-0.5 border-x border-border/60">
                        <span className="block text-xs font-black text-foreground">{item.loads.static.toLocaleString()} kg</span>
                        <span className="text-[10px] text-muted-foreground block">{content.staticLoad}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-xs font-black text-foreground">{item.loads.racking.toLocaleString()} kg</span>
                        <span className="text-[10px] text-muted-foreground block">{content.rackingLoad}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="p-6 md:p-8 pt-0">
                  <Button 
                    asChild 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-2xl shadow-md group-hover:shadow-lg transition-all"
                  >
                    <Link href={isEn ? `/en/products/${item.slug}/` : `/products/${item.slug}/`} className="flex items-center justify-center gap-2">
                      <span>{content.viewDetails}</span>
                      {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* B2B Guarantee & Order Info Banner */}
          <div className="mt-16 bg-[#181b24] text-white rounded-3xl p-8 md:p-12 border border-border/60 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{content.certTag}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white">
                  {content.moqTitle}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {content.moqDesc}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl">
                  <a href="https://wa.me/201080012261" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                    <span>{content.requestQuote}</span>
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-gray-700 text-white hover:bg-white/10 font-bold h-12 rounded-xl">
                  <a href="tel:01080012261" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>01080012261</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
