"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomPalletBuilder from "@/components/CustomPalletBuilder";
import { Sliders, BookOpen, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ToolPalletCustomizer({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      badge: "أداة تفاعلية B2B",
      title: "مُخصّص البالتات الهندسية",
      desc: "حدد المواصفات الفنية والهندسية المطلوبة للبالتات (الأبعاد، السماكة، الحمولة) لطلب عرض سعر دقيق لشركتك.",
      backToTools: "العودة للأدوات",
      backToBlog: "المدونة",
    },
    en: {
      badge: "Interactive B2B Tool",
      title: "Custom Pallet Specifier",
      desc: "Specify your required technical pallet specifications (dimensions, thickness, load capacity) to request an accurate B2B quote.",
      backToTools: "Back to Tools",
      backToBlog: "Blog",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#181b24] text-white py-12 md:py-16 font-['Cairo']">
      <div className="container max-w-7xl space-y-10">
        
        {/* Top Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#202534] via-[#1c1f2a] to-[#202534] p-8 md:p-12 text-center border border-border/30 shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">


            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">
              {content.title}
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {content.desc}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <CustomPalletBuilder lang={lang} />
        </motion.div>

        {/* Bottom Callout & Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1c1f2a] border border-border/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1 text-center md:text-right">
            <h4 className="text-lg font-bold text-accent flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>{isEn ? "Full Compliance with Export & Quality Standards" : "مطابقة كاملة لمعايير التصدير والجودة"}</span>
            </h4>
            <p className="text-xs text-muted-foreground">
              {isEn 
                ? "El Negma is committed to providing sterilized and heat-treated (HT) pallets fully certified for worldwide export."
                : "تلتزم شركة النجمة بتوفير بالتات معقمة ومعالجة حرارياً (HT) ومعتمدة بالكامل لغايات التصدير لجميع أنحاء العالم."}
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <a href="tel:01080012261">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-secondary/20">
                01080012261
              </Button>
            </a>
            <a href={isEn ? "/en/articles/" : "/articles/"}>
              <Button variant="outline" className="border-border/40 hover:bg-white/5 text-white font-bold text-xs px-6 py-3 rounded-xl">
                <BookOpen className="w-4 h-4 ml-2" />
                {content.backToBlog}
              </Button>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
