"use client";

import React from "react";
import { ShieldCheck, Send } from "lucide-react";
import { PalletConfig } from "./types";

interface PalletSummaryProps {
  config: PalletConfig;
  handleWhatsAppInquiry: () => void;
  palletTypes: { id: string; name: string }[];
  industries: { id: string; name: string }[];
  lang?: "ar" | "en";
}

export function PalletSummary({
  config,
  handleWhatsAppInquiry,
  palletTypes,
  industries,
  lang = "ar",
}: PalletSummaryProps) {
  const isEn = lang === "en";

  return (
    <div className="bg-[#181b24] p-6 rounded-2xl border border-border/40 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-secondary text-xs font-bold border-b border-border/20 pb-3">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span>{isEn ? "Technical Specs Summary" : "ملخص التوصيف الفني المطلوب"}</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">{isEn ? "Pallet Type:" : "نوع البالتة:"}</span>
            <span className="text-accent font-bold text-right">
              {palletTypes.find((t) => t.id === config.palletType)?.name.split("(")[0]}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">{isEn ? "Dimensions:" : "الأبعاد:"}</span>
            <span className="text-white font-bold" dir="ltr" style={{ fontFamily: "system-ui, sans-serif" }}>
              {config.dimensions === "custom" ? (config.customDimensions || (isEn ? "Custom Dimension" : "مقاس مخصص")) : config.dimensions + " mm"}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">{isEn ? "Load Capacity:" : "سعة الحمولة:"}</span>
            <span className="text-white font-bold">
              {config.loadCapacity.includes("1500") ? (isEn ? "1500 kg (Standard)" : "1500 كجم (قياسية)") : config.loadCapacity.includes("2500") ? (isEn ? "2500 kg (Heavy)" : "2500 كجم (ثقيلة)") : (isEn ? "1000 kg" : "1000 كجم")}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">{isEn ? "Export Treatment:" : "التعقيم والتصدير:"}</span>
            <span className="text-secondary font-bold text-right">
              {config.woodTreatment === "ht_ispm15" ? (isEn ? "HT ISPM-15" : "معالجة حرارية HT ISPM-15") : config.woodTreatment === "mb_fumigation" ? (isEn ? "MB Fumigation" : "تبخير بغاز MB") : (isEn ? "Local Market" : "تداول محلي")}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">{isEn ? "Industry Sector:" : "القطاع الصناعي:"}</span>
            <span className="text-white font-bold text-right">
              {industries.find((i) => i.id === config.industry)?.name}
            </span>
          </div>

          <div className="flex justify-between pt-1">
            <span className="text-muted-foreground">{isEn ? "Required Quantity:" : "الكمية المطلوبة:"}</span>
            <span className="text-accent font-black text-sm" dir="ltr" style={{ fontFamily: "system-ui, sans-serif" }}>
              {config.quantity} {isEn ? "Pallets" : "بالتة"}
            </span>
          </div>
        </div>

        <div className="bg-[#202430] p-3.5 rounded-xl border border-border/20 text-[11px] text-muted-foreground leading-relaxed space-y-1">
          <p className="text-accent font-bold">{isEn ? "📌 B2B Sales Notice:" : "📌 تنويه المبيعات التجاري:"}</p>
          <p>{isEn ? "Quotes are custom-formulated based on technical specifications (thickness, wood type, load capacity) and required volume, without fixed prices due to timber market fluctuations." : "تتم صياغة عروض الأسعار بصورة مخصصة بناءً على المواصفات الفنية الهندسية (السمك، نوع الخشب، الحمولة) والكمية المطلوبة دون أسعار ثابتة لتقلبات أسواق الأخشاب."}</p>
        </div>
      </div>

      <button
        onClick={handleWhatsAppInquiry}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
      >
        <Send className="w-4 h-4 rtl:-scale-x-100" />
        <span>{isEn ? "Submit Specs for Direct Quote" : "إرسال التوصيف لطلب عرض سعر مباشر"}</span>
      </button>
    </div>
  );
}
