"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ContainerResultsProps {
  floorCapacity: number;
  totalCapacity: number;
  weightUsagePercent: number;
  estimatedCargoWeightKg: number;
  stackTiers: number;
  handleWhatsAppInquiry: () => void;
  lang?: "ar" | "en";
}

export function ContainerResults({
  floorCapacity,
  totalCapacity,
  weightUsagePercent,
  estimatedCargoWeightKg,
  stackTiers,
  handleWhatsAppInquiry,
  lang = "ar",
}: ContainerResultsProps) {
  const isEn = lang === "en";

  return (
    <>
      {/* Output Results Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#181b24] p-6 rounded-2xl border border-border/30">
        <div className="text-center md:text-right border-b md:border-b-0 md:border-l border-border/20 pb-4 md:pb-0 md:pl-6">
          <span className="text-xs text-muted-foreground block">{isEn ? "Floor Capacity (1 Tier)" : "سعة أرضية الحاوية (طابق 1)"}</span>
          <div className="text-3xl font-black text-accent mt-1" dir="ltr" style={{ fontFamily: "system-ui, sans-serif" }}>
            {floorCapacity} <span className="text-xs font-normal text-gray-300">{isEn ? "Pallets" : "بالتة"}</span>
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1">{isEn ? "Directly stacked on container floor" : "رص مباشر على أرضية الحاوية"}</span>
        </div>

        <div className="text-center md:text-right border-b md:border-b-0 md:border-l border-border/20 pb-4 md:pb-0 md:pl-6">
          <span className="text-xs text-muted-foreground block">{isEn ? "Total Pallet Capacity" : "إجمالي البالتات الشامل للرص"}</span>
          <div className="text-3xl font-black text-secondary mt-1" dir="ltr" style={{ fontFamily: "system-ui, sans-serif" }}>
            {totalCapacity} <span className="text-xs font-normal text-gray-300">{isEn ? "Pallets" : "بالتة"}</span>
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1" dir="ltr">{isEn ? `Total of ${stackTiers} tiers inside container` : `بإجمالي ${stackTiers} طوابق داخل الحاوية`}</span>
        </div>

        <div className="text-center md:text-right">
          <span className="text-xs text-muted-foreground block">{isEn ? "Max Weight Usage" : "استغلال الحمولة الوزن القصوى"}</span>
          <div className="text-3xl font-black text-white mt-1" dir="ltr" style={{ fontFamily: "system-ui, sans-serif" }}>
            {weightUsagePercent}%
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1" dir="ltr">
            {isEn ? `Estimated pallet weight: ${Math.round(estimatedCargoWeightKg / 1000 * 10) / 10} Ton` : `وزن البالتات التقديري: ${Math.round(estimatedCargoWeightKg / 1000 * 10) / 10} طن`}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="text-xs text-muted-foreground text-center sm:text-right">
          💡 {isEn ? "El Negma Factory designs custom pallets to maximize container space and reduce shipping costs." : "مصنع شركة النجمة يتيح تصميم بالتات مخصصة لتحقيق الأداء الأقصى داخل الحاويات وتقليل تكلفة النقل."}
        </div>
        <button
          onClick={handleWhatsAppInquiry}
          className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          <span>{isEn ? "Request Quote for this Container" : "طلب عرض سعر لهذه الحاوية"}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
    </>
  );
}
