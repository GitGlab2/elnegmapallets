"use client";

import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  Sparkles,
  Boxes,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const products = isEn ? palletSizesEn : palletSizesAr;

  const content = {
    ar: {
      badge: "كتالوج البالتات الخشبية القياسية والمعالجة للتصدير",
      title: "منتجات البالتات الخشبية لجميع الأغراض الصناعية والتصديرية",
      subtitle:
        "دليل المواصفات الهندسية والأحمال المعتمدة لجميع المقاسات القياسية المصنعة في مصنع النجمة ببني سويف بأعلى معايير الجودة العالمية.",
      viewDetails: "المواصفات الفنية والتفاصيل",
      moqTitle: "مميزات إضافية للكميات الكبيرة",
      moqDesc:
        "نخدم جميع الكميات دون استثناء، بينما تحظى الطلبيات الكبيرة بمزايا إضافية موثقة: أسعار تعاقدية تنافسية، أولوية في جدول الإنتاج والتسليم، ومعالجة حرارية HT معتمدة بمعيار ISPM-15 مع كافة المستندات الرسمية.",
      staticLoad: "حمل استاتيكي",
      dynamicLoad: "حمل ديناميكي",
      rackingLoad: "حمل رفوف",
      certTag: "معالجة ISPM-15 معتمدة",
      requestQuote: "اطلب عرض السعر على الواتساب",
      home: "الرئيسية",
      catalog: "كتالوج المنتجات",
    },
    en: {
      badge: "Standard & Export-Ready Wooden Pallets Catalog",
      title: "Industrial & Export Wooden Pallet Products",
      subtitle:
        "Complete technical and structural load specifications for all standard wooden pallets manufactured at El Negma factory in Beni Suef.",
      viewDetails: "Technical Specifications & Details",
      moqTitle: "Extra Benefits for Larger Orders",
      moqDesc:
        "We serve orders of every size without exception, while larger volumes unlock documented advantages — competitive contract pricing, priority production and delivery scheduling, and fully ISPM-15 heat-treated supply with complete official documentation.",
      staticLoad: "Static Load",
      dynamicLoad: "Dynamic Load",
      rackingLoad: "Racking Load",
      certTag: "ISPM-15 HT Certified",
      requestQuote: "Request Quote via WhatsApp",
      home: "Home",
      catalog: "Products Catalog",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#181b24] text-white py-12 md:py-16">
      {/* Hero Banner */}
      <div className="container max-w-7xl mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#202534] via-[#1c1f2a] to-[#202534] p-8 md:p-12 text-center border border-border/30 shadow-2xl">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/40 rounded-full filter blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-xs md:text-sm text-muted-foreground ${isEn ? "" : ""}`}>
              <Link href={isEn ? "/en/" : "/"} className="hover:text-white transition-colors">
                {content.home}
              </Link>
              {isEn ? (
                <ChevronLeft className="w-4 h-4 rotate-180 text-secondary" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-secondary" />
              )}
              <span className="text-secondary font-semibold">{content.catalog}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs md:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {content.title}
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Catalog Grid Section */}
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#1c1f2a] border border-border/40 hover:border-secondary/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[4/3] w-full bg-[#181b24] p-6 md:p-8 flex items-center justify-center relative overflow-hidden border-b border-border/20">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.dimensions}`}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500 z-0"
                  />

                  {/* Dimension Tag */}
                  <div className="absolute top-3 right-3 z-20 bg-secondary/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black shadow-md border border-white/10">
                    {item.dimensions}
                  </div>

                  {/* Cert Badge */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 bg-[#181b24]/85 backdrop-blur-md border border-secondary/40 px-3 py-1 rounded-full text-[11px] font-bold text-secondary">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ISPM-15</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                    {item.category}
                  </span>

                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-secondary transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Load Specifications Grid */}
                  <div className="pt-2 grid grid-cols-3 gap-2 text-center bg-[#181b24]/70 p-3 rounded-2xl border border-border/40">
                    <div className="space-y-0.5">
                      <span className="block text-xs font-black text-white">
                        {item.loads.dynamic.toLocaleString()} kg
                      </span>
                      <span className="text-[10px] text-muted-foreground block">
                        {content.dynamicLoad}
                      </span>
                    </div>
                    <div className="space-y-0.5 border-x border-border/40">
                      <span className="block text-xs font-black text-white">
                        {item.loads.static.toLocaleString()} kg
                      </span>
                      <span className="text-[10px] text-muted-foreground block">
                        {content.staticLoad}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-xs font-black text-white">
                        {item.loads.racking.toLocaleString()} kg
                      </span>
                      <span className="text-[10px] text-muted-foreground block">
                        {content.rackingLoad}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action CTA */}
              <div className="p-6 md:p-8 pt-0">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl shadow-md group-hover:shadow-lg transition-all"
                >
                  <Link
                    href={isEn ? `/en/products/${item.slug}/` : `/products/${item.slug}/`}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{content.viewDetails}</span>
                    {isEn ? (
                      <ArrowRight className="w-4 h-4" />
                    ) : (
                      <ArrowLeft className="w-4 h-4" />
                    )}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* B2B Guarantee & Order Info Banner */}
        <div className="mt-12 md:mt-16 bg-[#1c1f2a] text-white rounded-3xl p-8 md:p-12 border border-border/40 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/15 text-secondary border border-secondary/30 rounded-full text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{content.certTag}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white">
                {content.moqTitle}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {content.moqDesc}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl shadow-lg w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/201080012261"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Boxes className="w-4 h-4" />
                  <span>{content.requestQuote}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}