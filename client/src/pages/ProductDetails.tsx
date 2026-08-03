"use client";

import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Layers,
  Boxes,
} from "lucide-react";
import Link from "next/link";

export default function ProductDetails({
  slug,
  lang = "ar",
}: {
  slug: string;
  lang?: "ar" | "en";
}) {
  const isEn = lang === "en";
  const products = isEn ? palletSizesEn : palletSizesAr;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          {isEn ? "Product Not Found" : "المنتج غير موجود"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {isEn
            ? "The requested pallet specification does not exist."
            : "المواصفات المطلوبة غير متاحة حالياً."}
        </p>
        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
          <Link href={isEn ? "/en/products/" : "/products/"}>
            {isEn ? "View All Products" : "تصفح جميع المنتجات"}
          </Link>
        </Button>
      </div>
    );
  }

  const content = {
    ar: {
      home: "الرئيسية",
      products: "منتجات البالتات الخشبية",
      specsTitle: "المواصفات الفنية والهيكلية",
      loadsTitle: "قدرات التحميل والأحمال (كجم)",
      stuffingTitle: "كفاءة التعشية في الحاويات القياسية",
      applicationsTitle: "أبرز الاستخدامات والقطاعات",
      featuresTitle: "المميزات الفنية والمعايير",
      quoteTitle: "اطلب عرض السعر لأي كمية",
      quoteDesc:
        "نرحب بالاستفسارات بجميع الكميات مهما كانت صغيرة أو كبيرة، وتنال الطلبيات الأكبر مميزات إضافية كالأسعار التعاقدية والأولوية في الإنتاج والتسليم.",
      quoteBtn: "اطلب عرض السعر على الواتساب",
      callBtn: "اتصال مباشر بالمبيعات",
      faqTitle: "الأسئلة الشائعة حول هذه البالتة",
      twentyFt: "حاوية 20 قدم جافة",
      fortyFt: "حاوية 40 قدم عالية السقف (HC)",
      reefer40: "حاوية 40 قدم مبردة (Reefer)",
      staticLoad: "حمل استاتيكي (ثابت)",
      dynamicLoad: "حمل ديناميكي (متحرك)",
      rackingLoad: "حمل التكديس في الرفوف",
      moqNotice: "الكميات الكبيرة تحظى بمزايا إضافية: أسعار تعاقدية تنافسية • أولوية في الإنتاج والتسليم • مستندات تصدير كاملة",
      palletsPerLayer: "بالتة بالأرضية",
      recommendedPattern: "نمط الرص الموصى به: ",
      htBadge: "معالجة حرارية HT بمعيار ISPM-15 الدولي",
      truckBadge: "شحن وتوصيل لكافة المحافظات والمناطق الصناعية",
    },
    en: {
      home: "Home",
      products: "Wooden Pallet Products",
      specsTitle: "Technical & Structural Specifications",
      loadsTitle: "Load Capacity Ratings (kg)",
      stuffingTitle: "Container Stuffing Optimization",
      applicationsTitle: "Key Applications & Industries",
      featuresTitle: "Technical Features & Standards",
      quoteTitle: "Request a Quote for Any Quantity",
      quoteDesc:
        "We welcome inquiries of any size — from a few pallets to full container loads — and larger orders come with extra benefits like contract pricing and production & delivery priority.",
      quoteBtn: "Request Quote via WhatsApp",
      callBtn: "Direct Sales Call",
      faqTitle: "Frequently Asked Questions",
      twentyFt: "20ft Dry Container",
      fortyFt: "40ft High Cube Container",
      reefer40: "40ft Reefer Container",
      staticLoad: "Static Load Rating",
      dynamicLoad: "Dynamic Load Rating",
      rackingLoad: "Racking Load Rating",
      moqNotice: "Larger orders enjoy extra benefits: competitive contract pricing • production & delivery priority • complete export documentation",
      palletsPerLayer: "pallets per layer",
      recommendedPattern: "Recommended Stacking Pattern: ",
      htBadge: "ISPM-15 heat-treated HT pallets for international export",
      truckBadge: "Shipping & delivery to all governorates and industrial zones",
    },
  }[lang];

  const whatsappMessage = encodeURIComponent(
    isEn
      ? `Hello El Negma Pallets, I would like to request a quote for product: ${product.title} (${product.dimensions}) with a specific quantity. Please contact me with the details.`
      : `مرحباً شركة النجمة للبالتات الخشبية، أود طلب عرض سعر لمنتج: ${product.title} (${product.dimensions}) بكمية معينة. رجاءً تواصلوا معي بالتفاصيل.`
  );

  return (
    <article className="min-h-screen bg-[#181b24] text-white py-10 md:py-14">
      <div className="container max-w-7xl">
        {/* Breadcrumb Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#202534] via-[#1c1f2a] to-[#202534] p-6 md:p-10 border border-border/30 shadow-2xl mb-10">
          <div className="relative z-10">
            <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4 overflow-x-auto whitespace-nowrap">
              <Link href={isEn ? "/en/" : "/"} className="hover:text-white transition">
                {content.home}
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href={isEn ? "/en/products/" : "/products/"}
                className="hover:text-white transition"
              >
                {content.products}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-white font-medium">{product.title}</span>
            </nav>

            <div className="inline-block px-3 py-1 bg-secondary/15 text-secondary border border-secondary/30 rounded-full text-xs font-semibold mb-3">
              {product.category}
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              {product.title}
            </h1>

            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {product.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {/* Image & Description Card */}
            <div className="bg-[#1c1f2a] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-lg space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#181b24] border border-border/30 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={isEn
                    ? `${product.title} ${product.dimensions} ISPM-15 heat treated wooden pallet`
                    : `${product.title} مقاس ${product.dimensions} خشب معالج حرارياً ISPM-15`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {product.title} - {product.dimensions}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Load Capacities */}
            <div className="bg-[#1c1f2a] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/15 rounded-xl text-secondary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{content.loadsTitle}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#181b24]/70 rounded-xl border border-border/40 text-center">
                  <span className="text-xs text-muted-foreground font-medium block mb-1">
                    {content.staticLoad}
                  </span>
                  <span className="text-2xl font-black text-secondary">
                    {product.loads.static.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground block">كجم / kg</span>
                </div>
                <div className="p-4 bg-[#181b24]/70 rounded-xl border border-border/40 text-center">
                  <span className="text-xs text-muted-foreground font-medium block mb-1">
                    {content.dynamicLoad}
                  </span>
                  <span className="text-2xl font-black text-secondary">
                    {product.loads.dynamic.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground block">كجم / kg</span>
                </div>
                <div className="p-4 bg-[#181b24]/70 rounded-xl border border-border/40 text-center">
                  <span className="text-xs text-muted-foreground font-medium block mb-1">
                    {content.rackingLoad}
                  </span>
                  <span className="text-2xl font-black text-secondary">
                    {product.loads.racking.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground block">كجم / kg</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-[#1c1f2a] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/15 rounded-xl text-secondary">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{content.specsTitle}</h3>
              </div>
              <div className="divide-y divide-border/20 text-sm md:text-base">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-muted-foreground font-medium">
                    {isEn ? "Dimensions" : "الأبعاد القياسية"}
                  </span>
                  <span className="text-white font-semibold">{product.dimensions}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-muted-foreground font-medium">
                    {isEn ? "Wood Type" : "نوع الخشب المعالج"}
                  </span>
                  <span className="text-white font-semibold">{product.specs.woodType}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-muted-foreground font-medium">
                    {isEn ? "Top Boards" : "ألواح السطح العلوي"}
                  </span>
                  <span className="text-white font-semibold text-end">
                    {product.specs.topBoards}
                  </span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-muted-foreground font-medium">
                    {isEn ? "Bottom Boards" : "ألواح القاعدة السفلية"}
                  </span>
                  <span className="text-white font-semibold text-end">
                    {product.specs.bottomBoards}
                  </span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-muted-foreground font-medium">
                    {isEn ? "Blocks / Stringers" : "المكعبات / المراين"}
                  </span>
                  <span className="text-white font-semibold text-end">
                    {product.specs.blocks}
                  </span>
                </div>
              </div>
            </div>

            {/* Container Stuffing Optimization */}
            <div className="bg-[#1c1f2a] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/15 rounded-xl text-secondary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{content.stuffingTitle}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-[#181b24]/70 rounded-xl text-center border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-1">
                    {content.twentyFt}
                  </span>
                  <span className="text-2xl font-black text-white">
                    {product.stuffing.twentyFt}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    {content.palletsPerLayer}
                  </span>
                </div>
                <div className="p-4 bg-[#181b24]/70 rounded-xl text-center border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-1">
                    {content.fortyFt}
                  </span>
                  <span className="text-2xl font-black text-white">
                    {product.stuffing.fortyFt}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    {content.palletsPerLayer}
                  </span>
                </div>
                <div className="p-4 bg-[#181b24]/70 rounded-xl text-center border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-1">
                    {content.reefer40}
                  </span>
                  <span className="text-2xl font-black text-white">
                    {product.stuffing.reefer40}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    {content.palletsPerLayer}
                  </span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground bg-secondary/10 p-3 rounded-lg border border-secondary/20">
                <strong className="text-secondary">
                  {content.recommendedPattern}
                </strong>
                {product.stuffing.layoutPattern}
              </p>
            </div>

            {/* Applications & Features */}
            <div className="bg-[#1c1f2a] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {content.applicationsTitle}
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-border/20" />
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{content.featuresTitle}</h3>
                <ul className="space-y-3">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Column: CTA Card & B2B Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-[#1c1f2a] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 shadow-xl space-y-6">
              <div className="inline-block px-3 py-1 bg-secondary/15 text-secondary border border-secondary/30 rounded-full text-xs font-bold">
                B2B Bulk Wholesale
              </div>

              <h3 className="text-2xl font-black leading-tight text-white">
                {content.quoteTitle}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {content.quoteDesc}
              </p>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-amber-300 font-medium">
                {content.moqNotice}
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl shadow-lg"
                >
                  <a
                    href={`https://wa.me/201080012261?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Boxes className="w-4 h-4" />
                    <span>{content.quoteBtn}</span>
                  </a>
                </Button>
              </div>

              <hr className="border-border/20" />

              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span>{content.htBadge}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-secondary shrink-0" />
                  <span>{content.truckBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}