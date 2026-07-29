"use client";

import { servicesAr } from "@/data/services";
import { servicesEn } from "@/data/services-en";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, ChevronLeft, Phone, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const services = isEn ? servicesEn : servicesAr;

  const content = {
    ar: {
      badge: "خدمات تصنيع وتوريد ومعالجة البالتات الخشبية",
      title: "خدمات التوريد، التعقيم والتصنيع الهندسي المخصص",
      subtitle: "حلول متكاملة لخدمة المصانع، الشركات الكبرى، ومحطات التصدير الزراعي بمصر والشرق الأوسط بأعلى معايير الجودة والالتزام.",
      viewDetails: "التفاصيل والمواصفات الكاملة",
      moqTitle: "خدمات التعقيم والتوريد المباشر لكبرى المصانع",
      moqDesc: "نوفر بالتات خشبية معالجة حرارياً (HT) متوافقة مع معيار ISPM-15 الدولي وجاهزة للتصدير المباشر مع كافة الشهادات والمستندات المطلوبة وبأعلى طاقة إنتاجية.",
      certTag: "مطابق لمعايير التصدير الدولية ISPM-15",
      requestQuote: "طلب عرض سعر خدمات",
      directCall: "تواصل مباشر مع المبيعات",
      home: "الرئيسية",
      servicesCatalog: "خدمات المصنع",
    },
    en: {
      badge: "Wooden Pallet Manufacturing, Supply & Sanitation Services",
      title: "Supply, Phytosanitary Sanitation & Custom Engineering Services",
      subtitle: "Integrated pallet solutions serving industrial plants, major exporters, and agricultural packhouses across Egypt and the Middle East.",
      viewDetails: "Full Specifications & Service Details",
      moqTitle: "Direct Supply & Certified Sanitation for Major Industrial Plants",
      moqDesc: "Providing ISPM-15 compliant heat-treated (HT) wooden pallets ready for immediate export with all required documentation and full production capacity.",
      certTag: "ISPM-15 International Compliance",
      requestQuote: "Request Service Quote",
      directCall: "Call Sales Direct",
      home: "Home",
      servicesCatalog: "Services",
    }
  }[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header Section */}
      <section className="relative bg-[#181b24] text-white py-16 md:py-20 overflow-hidden border-b border-border/40">
        {/* Background Ambient Glow & Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[120px]" />
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
            <span className="text-secondary font-semibold">{content.servicesCatalog}</span>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-xs md:text-sm font-bold mb-6 backdrop-blur-md">
              <Wrench className="w-4 h-4 text-secondary" />
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

      {/* Services Cards Grid Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Cover Photo & Overlay Banner */}
                  <div className="aspect-[4/3] w-full bg-[#181b24] relative overflow-hidden border-b border-border/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-transparent to-transparent z-10" />

                    <div className="absolute bottom-4 right-4 z-20 bg-secondary/90 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold shadow-md">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-foreground leading-snug group-hover:text-secondary transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {item.subtitle}
                    </p>

                    {/* Features List Highlights */}
                    <div className="pt-2 space-y-2.5">
                      {item.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground font-medium bg-muted/50 p-2.5 rounded-xl border border-border/60">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="p-6 md:p-8 pt-0">
                  <Button 
                    asChild 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-2xl shadow-md group-hover:shadow-lg transition-all"
                  >
                    <Link href={isEn ? `/en/services/${item.slug}/` : `/services/${item.slug}/`} className="flex items-center justify-center gap-2">
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
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-[100px] pointer-events-none" />
            
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
