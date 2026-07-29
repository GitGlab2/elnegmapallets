"use client";

import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { Button } from "@/components/ui/button";
import { Package, ShieldCheck, Truck, CheckCircle2, ArrowRight, ArrowLeft, Phone, Layers, HelpCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetails({ slug, lang = "ar" }: { slug: string; lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const products = isEn ? palletSizesEn : palletSizesAr;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isEn ? "Product Not Found" : "المنتج غير موجود"}
        </h1>
        <p className="text-gray-600 mb-8">
          {isEn ? "The requested pallet specification does not exist." : "المواصفات المطلوبة غير متاحة حالياً."}
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
      loadsTitle: "قدرات التحمل والأحمال (كجم)",
      stuffingTitle: "كفاءة التعبئة في الحاويات القياسية",
      applicationsTitle: "أبرز الاستخدامات والقطاعات",
      featuresTitle: "المميزات الفنية والمعايير",
      quoteTitle: "اطلب عرض سعر كميات مخصص",
      quoteDesc: "نوفر توريدات الطلبيات الكبرى (الحد الأدنى 2000 بالتة) مع خدمة المعالجة الحرارية HT المعتمدة للتصدير والشهادات الرسمية.",
      quoteBtn: "طلب عرض سعر عبر الواتساب",
      callBtn: "اتصال مباشر بالمبيعات",
      faqTitle: "الأسئلة الشائعة حول هذه البالتة",
      twentyFt: "حاوية 20 قدم جافة",
      fortyFt: "حاوية 40 قدم عالية السقف (HC)",
      reefer40: "حاوية 40 قدم مبردة (Reefer)",
      staticLoad: "حمل استاتيكي (ثابت)",
      dynamicLoad: "حمل ديناميكي (متحرك)",
      rackingLoad: "حمل التكديس في الرفوف",
      moqNotice: "الحد الأدنى للطلبيات الصناعية: 2000 بالتة خشبية معالجة",
    },
    en: {
      home: "Home",
      products: "Wooden Pallet Products",
      specsTitle: "Technical & Structural Specifications",
      loadsTitle: "Load Capacity Ratings (kg)",
      stuffingTitle: "Container Stuffing Optimization",
      applicationsTitle: "Key Applications & Industries",
      featuresTitle: "Technical Features & Standards",
      quoteTitle: "Request Bulk Order B2B Quotation",
      quoteDesc: "We supply bulk industrial batches (Minimum order quantity 2,000 pallets) with certified ISPM-15 heat treatment and official phytosanitary documents.",
      quoteBtn: "Request Quote via WhatsApp",
      callBtn: "Direct Sales Call",
      faqTitle: "Frequently Asked Questions",
      twentyFt: "20ft Dry Container",
      fortyFt: "40ft High Cube Container",
      reefer40: "40ft Reefer Container",
      staticLoad: "Static Load Rating",
      dynamicLoad: "Dynamic Load Rating",
      rackingLoad: "Racking Load Rating",
      moqNotice: "Minimum B2B Order Quantity: 2,000 ISPM-15 Certified Pallets",
    }
  }[lang];

  const whatsappMessage = encodeURIComponent(
    isEn
      ? `Hello El Negma Pallets, I would like to request a bulk quote for product: ${product.title} (${product.dimensions}). Minimum quantity 2000 units.`
      : `مرحباً شركة النجمة للبالتات الخشبية، أود طلب عرض سعر لكمية من منتج: ${product.title} (${product.dimensions}). الحد الأدنى 2000 بالتة.`
  );

  return (
    <article className="min-h-screen bg-gray-50/50 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-[#181b24] text-white py-8 md:py-12 border-b border-gray-800">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4 overflow-x-auto whitespace-nowrap">
            <Link href={isEn ? "/en/" : "/"} className="hover:text-secondary transition">{content.home}</Link>
            <span>/</span>
            <Link href={isEn ? "/en/products/" : "/products/"} className="hover:text-secondary transition">{content.products}</Link>
            <span>/</span>
            <span className="text-white font-medium">{product.title}</span>
          </nav>
          <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-semibold mb-3">
            {product.category}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            {product.title}
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {product.subtitle}
          </p>
        </div>
      </div>

      <div className="container mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            
            {/* Image & Description Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#181b24]/5 border border-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {product.title} - {product.dimensions}
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Load Capacities */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/10 rounded-xl text-secondary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{content.loadsTitle}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <span className="text-xs text-gray-500 font-medium block mb-1">{content.staticLoad}</span>
                  <span className="text-2xl font-black text-secondary">{product.loads.static.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 block">كجم / kg</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <span className="text-xs text-gray-500 font-medium block mb-1">{content.dynamicLoad}</span>
                  <span className="text-2xl font-black text-secondary">{product.loads.dynamic.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 block">كجم / kg</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <span className="text-xs text-gray-500 font-medium block mb-1">{content.rackingLoad}</span>
                  <span className="text-2xl font-black text-secondary">{product.loads.racking.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 block">كجم / kg</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/10 rounded-xl text-secondary">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{content.specsTitle}</h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm md:text-base">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-gray-500 font-medium">{isEn ? "Dimensions" : "الأبعاد القياسية"}</span>
                  <span className="text-gray-900 font-semibold">{product.dimensions}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-gray-500 font-medium">{isEn ? "Wood Type" : "نوع الخشب المعالج"}</span>
                  <span className="text-gray-900 font-semibold">{product.specs.woodType}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-gray-500 font-medium">{isEn ? "Top Boards" : "ألواح السطح العلوي"}</span>
                  <span className="text-gray-900 font-semibold text-end">{product.specs.topBoards}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-gray-500 font-medium">{isEn ? "Bottom Boards" : "ألواح القاعدة السفلية"}</span>
                  <span className="text-gray-900 font-semibold text-end">{product.specs.bottomBoards}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-gray-500 font-medium">{isEn ? "Blocks / Stringers" : "المكعبات / المراين"}</span>
                  <span className="text-gray-900 font-semibold text-end">{product.specs.blocks}</span>
                </div>
              </div>
            </div>

            {/* Container Stuffing Optimization */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/10 rounded-xl text-secondary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{content.stuffingTitle}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                  <span className="text-xs text-gray-500 block mb-1">{content.twentyFt}</span>
                  <span className="text-2xl font-black text-gray-900">{product.stuffing.twentyFt}</span>
                  <span className="text-xs text-gray-500 block">{isEn ? "pallets per layer" : "بالتة بالأرضية"}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                  <span className="text-xs text-gray-500 block mb-1">{content.fortyFt}</span>
                  <span className="text-2xl font-black text-gray-900">{product.stuffing.fortyFt}</span>
                  <span className="text-xs text-gray-500 block">{isEn ? "pallets per layer" : "بالتة بالأرضية"}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                  <span className="text-xs text-gray-500 block mb-1">{content.reefer40}</span>
                  <span className="text-2xl font-black text-gray-900">{product.stuffing.reefer40}</span>
                  <span className="text-xs text-gray-500 block">{isEn ? "pallets per layer" : "بالتة بالأرضية"}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 bg-secondary/5 p-3 rounded-lg border border-secondary/10">
                <strong className="text-secondary">{isEn ? "Recommended Stacking Pattern: " : "نمط الرص الموصى به: "}</strong>
                {product.stuffing.layoutPattern}
              </p>
            </div>

            {/* Applications & Features */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.applicationsTitle}</h3>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-gray-100" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.featuresTitle}</h3>
                <ul className="space-y-3">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
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
            <div className="sticky top-24 bg-[#181b24] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-800 shadow-xl space-y-6">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold">
                B2B Bulk Wholesale
              </div>
              
              <h3 className="text-2xl font-black leading-tight text-white">
                {content.quoteTitle}
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                {content.quoteDesc}
              </p>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-amber-300 font-medium">
                {content.moqNotice}
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  asChild 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl shadow-lg"
                >
                  <a 
                    href={`https://wa.me/201080012261?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{content.quoteBtn}</span>
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10 font-bold h-12 rounded-xl"
                >
                  <a href="tel:+201080012261" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>{content.callBtn}</span>
                  </a>
                </Button>
              </div>

              <hr className="border-gray-800" />

              <div className="space-y-3 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span>معالجة حرارية HT بمعيار ISPM-15 الدولي</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-secondary shrink-0" />
                  <span>شحن وتوصيل لكافة المحافظات والمناطق الصناعية</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
