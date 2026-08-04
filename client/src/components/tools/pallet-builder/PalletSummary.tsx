"use client";

import React from "react";
import { ShieldCheck, Send } from "lucide-react";
import { PalletConfig } from "./types";

interface PalletSummaryProps {
  config: PalletConfig;
  handleWhatsAppInquiry: () => void;
  palletTypes: { id: string; name: string }[];
  industries: { id: string; name: string }[];
}

export function PalletSummary({
  config,
  handleWhatsAppInquiry,
  palletTypes,
  industries,
}: PalletSummaryProps) {
  return (
    <div className="bg-[#181b24] p-6 rounded-2xl border border-border/40 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-secondary text-xs font-bold border-b border-border/20 pb-3">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span>ملخص التوصيف الفني المطلوب</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">نوع البالتة:</span>
            <span className="text-accent font-bold text-right">
              {palletTypes.find((t) => t.id === config.palletType)?.name.split("(")[0]}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">الأبعاد:</span>
            <span className="text-white font-bold">
              {config.dimensions === "custom" ? config.customDimensions || "مقاس مخصص" : config.dimensions + " مم"}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">سعة الحمولة:</span>
            <span className="text-white font-bold">
              {config.loadCapacity.includes("1500") ? "1500 كجم (قياسية)" : config.loadCapacity.includes("2500") ? "2500 كجم (ثقيلة)" : "1000 كجم"}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">التعقيم والتصدير:</span>
            <span className="text-secondary font-bold text-right">
              {config.woodTreatment === "ht_ispm15" ? "معالجة حرارية HT ISPM-15" : config.woodTreatment === "mb_fumigation" ? "تبخير بغاز MB" : "تداول محلي"}
            </span>
          </div>

          <div className="flex justify-between pb-2 border-b border-border/10">
            <span className="text-muted-foreground">القطاع الصناعي:</span>
            <span className="text-white font-bold text-right">
              {industries.find((i) => i.id === config.industry)?.name}
            </span>
          </div>

          <div className="flex justify-between pt-1">
            <span className="text-muted-foreground">الكمية المطلوبة:</span>
            <span className="text-accent font-black text-sm">
              {config.quantity} بالتة
            </span>
          </div>
        </div>

        <div className="bg-[#202430] p-3.5 rounded-xl border border-border/20 text-[11px] text-muted-foreground leading-relaxed space-y-1">
          <p className="text-accent font-bold">📌 تنويه المبيعات التجاري:</p>
          <p>تتم صياغة عروض الأسعار بصورة مخصصة بناءً على المواصفات الفنية الهندسية (السمك، نوع الخشب، الحمولة) والكمية المطلوبة دون أسعار ثابتة لتقلبات أسواق الأخشاب.</p>
        </div>
      </div>

      <button
        onClick={handleWhatsAppInquiry}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
      >
        <Send className="w-4 h-4 rtl:-scale-x-100" />
        <span>إرسال التوصيف لطلب عرض سعر مباشر</span>
      </button>
    </div>
  );
}
