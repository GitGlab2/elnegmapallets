"use client";

import React, { useState } from "react";
import { Calculator, Info } from "lucide-react";
import { trackGA4Event } from "@/utils/analytics";
import { ContainerConfig } from "./tools/container-calculator/types";
import { CONTAINER_TYPES, STANDARD_PALLET_SIZES } from "./tools/container-calculator/constants";
import { ContainerForm } from "./tools/container-calculator/ContainerForm";
import { ContainerResults } from "./tools/container-calculator/ContainerResults";

export default function ContainerCalculator({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [config, setConfig] = useState<ContainerConfig>({
    containerKey: "40ft_hc",
    selectedSizeIndex: 0,
    customLength: 1200,
    customWidth: 1000,
    stackTiers: 1,
    palletWeightKg: 25,
  });

  const updateConfig = (key: keyof ContainerConfig, value: string | number) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const container = CONTAINER_TYPES[config.containerKey];
  const palletLength = config.selectedSizeIndex === 3 ? config.customLength : STANDARD_PALLET_SIZES[config.selectedSizeIndex].length;
  const palletWidth = config.selectedSizeIndex === 3 ? config.customWidth : STANDARD_PALLET_SIZES[config.selectedSizeIndex].width;

  // Calculation Logic (Single Level Floor Stacking Optimization)
  const countLenA = palletLength > 0 ? Math.floor(container.lengthMm / palletLength) : 0;
  const countWidA = palletWidth > 0 ? Math.floor(container.widthMm / palletWidth) : 0;
  const totalFloorA = countLenA * countWidA;

  const countLenB = palletWidth > 0 ? Math.floor(container.lengthMm / palletWidth) : 0;
  const countWidB = palletLength > 0 ? Math.floor(container.widthMm / palletLength) : 0;
  const totalFloorB = countLenB * countWidB;

  const floorCapacity = Math.max(totalFloorA, totalFloorB);
  const totalCapacity = floorCapacity * config.stackTiers;
  const estimatedCargoWeightKg = totalCapacity * config.palletWeightKg;
  const weightUsagePercent = Math.min(100, Math.round((estimatedCargoWeightKg / container.maxWeightKg) * 100));

  const handleWhatsAppInquiry = () => {
    const palletName = config.selectedSizeIndex === 3 
      ? `مقاس مخصص (${palletLength}×${palletWidth} مم)`
      : STANDARD_PALLET_SIZES[config.selectedSizeIndex].name;

    trackGA4Event("generate_lead", {
      event_category: "b2b_tools",
      event_label: "container_calculator",
      container_type: container.name,
      pallet_size: palletName,
      total_pallets: totalCapacity,
      value: 1
    });
    trackGA4Event("whatsapp_click", { tool: "container_calculator" });

    const message = `السلام عليكم ورحمة الله وبركاته،
أود الاستفسار عن توريد طلبيات خشبية وفق حسابات الحاوية التالية:
- نوع الحاوية: ${container.name}
- مقاس البالتة: ${palletName}
- عدد البالتات في الرصة (طابق واحد): ${floorCapacity} بالتة
- التستيف المقترح: ${config.stackTiers} طوابق (إجمالي ${totalCapacity} بالتة)
يرجى تزويدنا بتوصية فنية وعرض سعر مخصص للكمية.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201080012261?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-[#1c1f2a] text-white rounded-3xl p-6 md:p-10 border border-border/40 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/20 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold mb-2">
            <Calculator className="w-4 h-4" />
            <span>حاسبة كفاءة التصدير والشحن</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white">حاسبة استيعاب الحاويات للبالتات الخشبية</h3>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            احسب عدد البالتات الأمثل لحاويات الشحن والتصدير وفق المقاسات الفنية والهندسية المعتمَدة.
          </p>
        </div>
        <div className="bg-[#202430] border border-border/40 px-4 py-2.5 rounded-2xl text-accent text-xs flex items-center gap-2 self-start md:self-auto">
          <Info className="w-4 h-4 shrink-0 text-secondary" />
          <span>حساب هندسي دقيق لمسؤولي اللوجستيات والمشتريات</span>
        </div>
      </div>

      <ContainerForm config={config} updateConfig={updateConfig} />
      
      <ContainerResults 
        floorCapacity={floorCapacity}
        totalCapacity={totalCapacity}
        weightUsagePercent={weightUsagePercent}
        estimatedCargoWeightKg={estimatedCargoWeightKg}
        stackTiers={config.stackTiers}
        handleWhatsAppInquiry={handleWhatsAppInquiry}
      />
    </div>
  );
}
