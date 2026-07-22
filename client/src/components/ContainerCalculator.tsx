"use client";

import React, { useState } from "react";
import { Container, Package, Calculator, ArrowRight, Truck, Info, Check } from "lucide-react";

interface ContainerSpec {
  name: string;
  nameEn: string;
  lengthMm: number;
  widthMm: number;
  heightMm: number;
  maxWeightKg: number;
}

const CONTAINER_TYPES: Record<string, ContainerSpec> = {
  "20ft": {
    name: "حاوية 20 قدم (20ft Dry)",
    nameEn: "20ft Standard Container",
    lengthMm: 5898,
    widthMm: 2352,
    heightMm: 2393,
    maxWeightKg: 28200,
  },
  "40ft_hc": {
    name: "حاوية 40 قدم مرتفعة (40ft High Cube)",
    nameEn: "40ft High Cube Container",
    lengthMm: 12032,
    widthMm: 2352,
    heightMm: 2698,
    maxWeightKg: 28600,
  },
  "trailer": {
    name: "شاحنة نقل بري (Standard Trailer)",
    nameEn: "Standard Land Trailer",
    lengthMm: 13600,
    widthMm: 2450,
    heightMm: 2700,
    maxWeightKg: 30000,
  },
};

const STANDARD_PALLET_SIZES = [
  { name: "بالتة صناعية قياسية (1200×1000 مم)", length: 1200, width: 1000 },
  { name: "بالتة يورو قياسية (1200×800 مم)", length: 1200, width: 800 },
  { name: "بالتة مربعة كيميائية (1100×1100 مم)", length: 1100, width: 1100 },
  { name: "مقاس مخصص (Custom Dimensions)", length: 0, width: 0 },
];

export default function ContainerCalculator({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const [containerKey, setContainerKey] = useState<string>("40ft_hc");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [customLength, setCustomLength] = useState<number>(1200);
  const [customWidth, setCustomWidth] = useState<number>(1000);
  const [stackTiers, setStackTiers] = useState<number>(1);
  const [palletWeightKg, setPalletWeightKg] = useState<number>(25);

  const container = CONTAINER_TYPES[containerKey];
  const palletLength = selectedSizeIndex === 3 ? customLength : STANDARD_PALLET_SIZES[selectedSizeIndex].length;
  const palletWidth = selectedSizeIndex === 3 ? customWidth : STANDARD_PALLET_SIZES[selectedSizeIndex].width;

  // Calculation Logic (Single Level Floor Stacking Optimization)
  const countLenA = palletLength > 0 ? Math.floor(container.lengthMm / palletLength) : 0;
  const countWidA = palletWidth > 0 ? Math.floor(container.widthMm / palletWidth) : 0;
  const totalFloorA = countLenA * countWidA;

  const countLenB = palletWidth > 0 ? Math.floor(container.lengthMm / palletWidth) : 0;
  const countWidB = palletLength > 0 ? Math.floor(container.widthMm / palletLength) : 0;
  const totalFloorB = countLenB * countWidB;

  const floorCapacity = Math.max(totalFloorA, totalFloorB);
  const totalCapacity = floorCapacity * stackTiers;
  const estimatedCargoWeightKg = totalCapacity * palletWeightKg;
  const weightUsagePercent = Math.min(100, Math.round((estimatedCargoWeightKg / container.maxWeightKg) * 100));

  const handleWhatsAppInquiry = () => {
    const palletName = selectedSizeIndex === 3 
      ? `مقاس مخصص (${palletLength}×${palletWidth} مم)`
      : STANDARD_PALLET_SIZES[selectedSizeIndex].name;

    const message = `السلام عليكم ورحمة الله وبركاته،
أود الاستفسار عن توريد طلبيات خشبية وفق حسابات الحاوية التالية:
- نوع الحاوية: ${container.name}
- مقاس البالتة: ${palletName}
- عدد البالتات في الرصة (طابق واحد): ${floorCapacity} بالتة
- التستيف المقترح: ${stackTiers} طوابق (إجمالي ${totalCapacity} بالتة)
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

      {/* Controls Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Container Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <Container className="w-4 h-4 text-secondary" />
            نوع الحاوية / وسيلة النقل
          </label>
          <select
            value={containerKey}
            onChange={(e) => setContainerKey(e.target.value)}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
          >
            {Object.entries(CONTAINER_TYPES).map(([key, spec]) => (
              <option key={key} value={key}>
                {spec.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pallet Standard Sizes */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <Package className="w-4 h-4 text-secondary" />
            أبعاد ومقاس البالتة
          </label>
          <select
            value={selectedSizeIndex}
            onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
          >
            {STANDARD_PALLET_SIZES.map((size, idx) => (
              <option key={idx} value={idx}>
                {size.name}
              </option>
            ))}
          </select>
        </div>

        {/* Stacking Tiers */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-secondary" />
            عدد مستويات الرص (Tiers)
          </label>
          <select
            value={stackTiers}
            onChange={(e) => setStackTiers(Number(e.target.value))}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
          >
            <option value={1}>طابق واحد (Single Level)</option>
            <option value={2}>طابقان فوق بعضهما (Double Stacked)</option>
            <option value={3}>ثلاثة طوابق (Triple Stacked)</option>
          </select>
        </div>

        {/* Custom Dimensions or Pallet Weight */}
        {selectedSizeIndex === 3 ? (
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300">المقاس الخاص (مم)</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={customLength}
                onChange={(e) => setCustomLength(Number(e.target.value))}
                placeholder="الطول"
                className="bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
              />
              <input
                type="number"
                value={customWidth}
                onChange={(e) => setCustomWidth(Number(e.target.value))}
                placeholder="العرض"
                className="bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300">وزن البالتة الفارغة (كجم)</label>
            <input
              type="number"
              value={palletWeightKg}
              onChange={(e) => setPalletWeightKg(Number(e.target.value))}
              className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        )}
      </div>

      {/* Output Results Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#181b24] p-6 rounded-2xl border border-border/30">
        <div className="text-center md:text-right border-b md:border-b-0 md:border-l border-border/20 pb-4 md:pb-0 md:pl-6">
          <span className="text-xs text-muted-foreground block">سعة أرضية الحاوية (طابق 1)</span>
          <div className="text-3xl font-black text-accent mt-1">
            {floorCapacity} <span className="text-xs font-normal text-gray-300">بالتة</span>
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1">رص مباشر على أرضية الحاوية</span>
        </div>

        <div className="text-center md:text-right border-b md:border-b-0 md:border-l border-border/20 pb-4 md:pb-0 md:pl-6">
          <span className="text-xs text-muted-foreground block">إجمالي البالتات الشامل للرص</span>
          <div className="text-3xl font-black text-secondary mt-1">
            {totalCapacity} <span className="text-xs font-normal text-gray-300">بالتة</span>
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1">بإجمالي {stackTiers} طوابق داخل الحاوية</span>
        </div>

        <div className="text-center md:text-right">
          <span className="text-xs text-muted-foreground block">استغلال الحمولة الوزن القصوى</span>
          <div className="text-3xl font-black text-white mt-1">
            {weightUsagePercent}%
          </div>
          <span className="text-[11px] text-muted-foreground block mt-1">
            وزن البالتات التقديري: {Math.round(estimatedCargoWeightKg / 1000 * 10) / 10} طن
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="text-xs text-muted-foreground text-center sm:text-right">
          💡 مصنع شركة النجمة يتيح تصميم بالتات مخصصة لتحقيق الأداء الأقصى داخل الحاويات وتقليل تكلفة النقل.
        </div>
        <button
          onClick={handleWhatsAppInquiry}
          className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          <span>طلب عرض سعر لهذه الحاوية</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
