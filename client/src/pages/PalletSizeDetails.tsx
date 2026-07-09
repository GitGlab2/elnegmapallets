"use client";

import { motion } from "framer-motion";
import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { ArrowLeft, ArrowRight, ShieldCheck, Container, Weight, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function PalletSizeDetails({ slug, lang = "ar" }: { slug: string; lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const list = isEn ? palletSizesEn : palletSizesAr;
  const item = list.find((p) => p.slug === slug);

  const content = {
    ar: {
      backBtn: "العودة لدليل المقاسات",
      notFound: "المقاس المطلوب غير موجود",
      notFoundDesc: "عذراً، لم نتمكن من العثور على البالتة المطلوبة. يرجى مراجعة دليل المقاسات.",
      specsTitle: "المواصفات الفنية والهيكلية",
      loadsTitle: "سعات ومستويات التحميل",
      stuffingTitle: "حسابات التحميل داخل الحاويات",
      applicationsTitle: "أبرز قطاعات الاستخدام",
      featuresTitle: "المميزات الهيكلية والأمان",
      dimLabel: "الأبعاد الكلية",
      weightLabel: "وزن البالتة التقريبي",
      woodLabel: "نوع الخشب المستخدم",
      topLabel: "ألواح السطح العلوي",
      bottomLabel: "ألواح السطح السفلي",
      blocksLabel: "المكعبات الداعمة",
      staticLabel: "حمولة ثابتة (Static)",
      dynamicLabel: "حمولة متحركة (Dynamic)",
      rackingLabel: "حمولة الأرفف (Racking)",
      twentyFtLabel: "حاوية 20 قدم قياسية",
      fortyFtLabel: "حاوية 40 قدم قياسية",
      reefer40Label: "حاوية 40 قدم مبردة (Reefer)",
      layoutLabel: "طريقة رص البالتات",
      unitKg: "كجم",
      unitPallet: "بالتة",
      ctaTitle: "اطلب عرض سعر مخصص لهذا المقاس",
      ctaDesc: "تواصل مع الإدارة الفنية بمصنع النجمة للحصول على سعر تصنيع البالتات بمواصفاتك الفنية الدقيقة مع خيار المعالجة الحرارية للتصدير.",
      phoneBtn: "اتصال مباشر",
      waBtn: "واتساب مباشر"
    },
    en: {
      backBtn: "Back to Pallet Sizes",
      notFound: "Pallet Size Not Found",
      notFoundDesc: "Sorry, we could not find the requested pallet size specifications. Please consult the directory.",
      specsTitle: "Technical & Structural Specifications",
      loadsTitle: "Load Capacities & Performance",
      stuffingTitle: "Container Stuffing Calculations",
      applicationsTitle: "Key Industry Applications",
      featuresTitle: "Structural Features & Security",
      dimLabel: "Overall Dimensions",
      weightLabel: "Approx. Pallet Weight",
      woodLabel: "Wood Material Type",
      topLabel: "Top Deck Boards",
      bottomLabel: "Bottom Deck Boards",
      blocksLabel: "Support Blocks",
      staticLabel: "Static Loading Limit",
      dynamicLabel: "Dynamic Loading Limit",
      rackingLabel: "Racking Load Capacity",
      twentyFtLabel: "20ft Standard Container",
      fortyFtLabel: "40ft Standard Container",
      reefer40Label: "40ft Reefer (Refrigerated)",
      layoutLabel: "Recommended Stuffing Pattern",
      unitKg: "kg",
      unitPallet: "pallets",
      ctaTitle: "Request a Custom Quote for this Sizing",
      ctaDesc: "Contact El Negma Technical Department to receive a direct quote for this exact pallet specification, including heat-treatment options.",
      phoneBtn: "Call Us Now",
      waBtn: "Chat via WhatsApp"
    }
  }[lang];

  if (!item) {
    return (
      <div className="min-h-screen bg-[#111319] text-white pt-32 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-3xl font-black text-secondary mb-4">{content.notFound}</h2>
          <p className="text-gray-400 mb-8">{content.notFoundDesc}</p>
          <Link href={isEn ? "/en/pallet-sizes" : "/pallet-sizes"} className="px-6 py-3 rounded-xl bg-secondary text-white font-bold inline-flex items-center gap-2">
            {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            <span>{content.backBtn}</span>
          </Link>
        </div>
      </div>
    );
  }

  // Pre-formatted Whatsapp message
  const waMessage = encodeURIComponent(
    isEn 
      ? `Hello, I'm interested in requesting a quote for your standard pallet size: ${item.title} (${item.dimensions}).`
      : `مرحباً، أود الاستفسار عن تفاصيل وأسعار البالتة مقاس: ${item.title} (${item.dimensions}).`
  );

  return (
    <div className="min-h-screen bg-[#111319] text-white pt-24 pb-16">
      <div className="container">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href={isEn ? "/en/pallet-sizes" : "/pallet-sizes"}
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 font-bold group"
          >
            {isEn ? <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> : <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
            <span>{content.backBtn}</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-12 border-b border-border/20 pb-8">
          <span className="text-xs text-secondary font-black uppercase tracking-widest block mb-2">{item.category}</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{item.title}</h1>
          <p className="text-lg text-gray-400 max-w-4xl">{item.subtitle}</p>
        </div>

        {/* Detailed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Grid span 7) - Visual and specs table */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Visual Panel */}
            <div className="rounded-3xl border border-border/40 bg-[#181b24] p-8 flex items-center justify-center aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-secondary/5 to-transparent pointer-events-none" />
              <picture className="relative z-10 w-full h-full">
                <source srcSet={item.image} type="image/webp" />
                <img 
                  src={item.image.replace(".webp", ".png")} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>

            {/* Specifications Card */}
            <div className="rounded-3xl border border-border/40 bg-[#181b24] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <h2 className="text-xl font-bold text-white">{content.specsTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-1 border border-border/20 rounded-2xl overflow-hidden bg-[#111319]/40 text-sm">
                
                {/* Dimensions */}
                <div className={`grid grid-cols-3 p-4 border-b border-border/20 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.dimLabel}</span>
                  <span className="font-bold text-white col-span-2 dir-ltr">{item.dimensions}</span>
                </div>

                {/* Weight */}
                <div className={`grid grid-cols-3 p-4 border-b border-border/20 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.weightLabel}</span>
                  <span className="font-bold text-white col-span-2">{item.specs.weight} {content.unitKg}</span>
                </div>

                {/* Wood Type */}
                <div className={`grid grid-cols-3 p-4 border-b border-border/20 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.woodLabel}</span>
                  <span className="font-bold text-gray-200 col-span-2">{item.specs.woodType}</span>
                </div>

                {/* Top Boards */}
                <div className={`grid grid-cols-3 p-4 border-b border-border/20 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.topLabel}</span>
                  <span className="text-gray-300 col-span-2 leading-relaxed">{item.specs.topBoards}</span>
                </div>

                {/* Bottom Boards */}
                <div className={`grid grid-cols-3 p-4 border-b border-border/20 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.bottomLabel}</span>
                  <span className="text-gray-300 col-span-2 leading-relaxed">{item.specs.bottomBoards}</span>
                </div>

                {/* Blocks */}
                <div className={`grid grid-cols-3 p-4 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="text-muted-foreground font-medium col-span-1">{content.blocksLabel}</span>
                  <span className="text-gray-300 col-span-2 leading-relaxed">{item.specs.blocks}</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (Grid span 5) - Loads, stuffing and actions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Loads Card */}
            <div className="rounded-3xl border border-border/40 bg-[#181b24] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Weight className="w-6 h-6 text-secondary" />
                <h2 className="text-xl font-bold text-white">{content.loadsTitle}</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                
                {/* Dynamic */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-bold">{content.dynamicLabel}</span>
                    <span className="font-black text-secondary">{item.loads.dynamic.toLocaleString()} {content.unitKg}</span>
                  </div>
                  <div className="h-2 bg-[#111319] rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: `${(item.loads.dynamic / 2000) * 100}%` }} />
                  </div>
                </div>

                {/* Static */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-bold">{content.staticLabel}</span>
                    <span className="font-black text-white">{item.loads.static.toLocaleString()} {content.unitKg}</span>
                  </div>
                  <div className="h-2 bg-[#111319] rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: `${(item.loads.static / 6000) * 100}%` }} />
                  </div>
                </div>

                {/* Racking */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-bold">{content.rackingLabel}</span>
                    <span className="font-black text-gray-300">{item.loads.racking.toLocaleString()} {content.unitKg}</span>
                  </div>
                  <div className="h-2 bg-[#111319] rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: `${(item.loads.racking / 2000) * 100}%` }} />
                  </div>
                </div>

              </div>
            </div>

            {/* Stuffing container Card */}
            <div className="rounded-3xl border border-border/40 bg-[#181b24] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Container className="w-6 h-6 text-secondary" />
                <h2 className="text-xl font-bold text-white">{content.stuffingTitle}</h2>
              </div>
              <div className="flex flex-col gap-4">
                
                {/* 20ft */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#111319]/40 border border-border/20">
                  <span className="text-sm text-gray-400">{content.twentyFtLabel}</span>
                  <span className="font-black text-white">{item.stuffing.twentyFt} {content.unitPallet}</span>
                </div>

                {/* 40ft */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#111319]/40 border border-border/20">
                  <span className="text-sm text-gray-400">{content.fortyFtLabel}</span>
                  <span className="font-black text-white">{item.stuffing.fortyFt} {content.unitPallet}</span>
                </div>

                {/* Reefer */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#111319]/40 border border-border/20">
                  <span className="text-sm text-gray-400">{content.reefer40Label}</span>
                  <span className="font-black text-secondary">{item.stuffing.reefer40} {content.unitPallet}</span>
                </div>

                {/* Layout Pattern */}
                <div className="text-center p-3 rounded-xl bg-[#111319]/40 border border-border/20 mt-2">
                  <span className="text-xs text-muted-foreground block mb-1">{content.layoutLabel}</span>
                  <span className="text-sm font-bold text-white">{item.stuffing.layoutPattern}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Lower Row: Industry applications and features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Applications list */}
          <div className="rounded-3xl border border-border/40 bg-[#181b24] p-6 md:p-8">
            <h3 className="text-xl font-black text-white mb-6 border-b border-border/20 pb-4">{content.applicationsTitle}</h3>
            <ul className="flex flex-col gap-4">
              {item.applications.map((app, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span className="text-sm text-gray-300 leading-relaxed">{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features list */}
          <div className="rounded-3xl border border-border/40 bg-[#181b24] p-6 md:p-8">
            <h3 className="text-xl font-black text-white mb-6 border-b border-border/20 pb-4">{content.featuresTitle}</h3>
            <ul className="flex flex-col gap-4">
              {item.features.map((feat, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${isEn ? "text-left" : "text-right"}`}>
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span className="text-sm text-gray-300 leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Request Quote Card */}
        <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-[#1c1f2a] to-[#12141a] p-8 md:p-12 text-center mt-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">{content.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">{content.ctaDesc}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              
              {/* WhatsApp direct */}
              <a 
                href={`https://wa.me/201080012261?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-secondary text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-secondary/15 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{content.waBtn}</span>
              </a>

              {/* Official Phone */}
              <a 
                href="tel:01080012261"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#202430] border border-border/40 hover:border-secondary hover:bg-[#202430]/80 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span>{content.phoneBtn}</span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
