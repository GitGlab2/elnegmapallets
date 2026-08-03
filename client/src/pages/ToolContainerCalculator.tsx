"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerCalculator from "@/components/ContainerCalculator";
import { Calculator, BookOpen, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ToolContainerCalculator({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      badge: "أداة تفاعلية B2B",
      title: "حاسبة استيعاب الحاويات",
      desc: "احسب السعة التحميلية المثلى لحاويات 20 قدم و 40 قدم للبالتات الخشبية لضمان كفاءة الشحن والتصدير.",
      backToTools: "العودة للأدوات",
      backToBlog: "المدونة",
    },
    en: {
      badge: "Interactive B2B Tool",
      title: "Container Loading Calculator",
      desc: "Calculate optimal pallet loading capacity for 20ft and 40ft containers to maximize shipping efficiency.",
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
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={isEn ? "/en/articles/tools/" : "/articles/tools/"}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold hover:bg-white/10 hover:border-secondary/50 transition-all"
              >
                <Wrench className="w-3.5 h-3.5 text-secondary" />
                <span>{content.backToTools}</span>
              </a>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold shadow-sm">
                <Calculator className="w-3.5 h-3.5 text-secondary" />
                <span>{content.badge}</span>
              </div>
            </div>

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
          <ContainerCalculator lang={lang} />
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
              <span>مطابقة كاملة لمعايير التصدير والجودة</span>
            </h4>
            <p className="text-xs text-muted-foreground">
              تلتزم شركة النجمة بتوفير بالتات معقمة ومعالجة حرارياً (HT) ومعتمدة بالكامل لغايات التصدير لجميع أنحاء العالم.
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
