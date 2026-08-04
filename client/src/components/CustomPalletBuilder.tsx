"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";
import { trackGA4Event } from "@/utils/analytics";
import { PalletConfig } from "./tools/pallet-builder/types";
import { PalletForm } from "./tools/pallet-builder/PalletForm";
import { PalletSummary } from "./tools/pallet-builder/PalletSummary";

export default function CustomPalletBuilder({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [config, setConfig] = useState<PalletConfig>({
    palletType: "block_4way",
    dimensions: "1200x1000",
    customDimensions: "",
    loadCapacity: "1500kg_dynamic",
    woodTreatment: "ht_ispm15",
    quantity: 500,
    industry: "agricultural_export",
  });

  const updateConfig = (key: keyof PalletConfig, value: string | number) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const palletTypes = {
    ar: [
      { id: "block_4way", name: "بالتة بلوك 4 اتجاهات (4-Way Block Pallet)", desc: "مثالية للمستودعات الآلية وخطوط التعبئة والتصدير" },
      { id: "stringer_2way", name: "بالتة مريين اتجاهين (2-Way Stringer Pallet)", desc: "متانة عالية للحمولات الثقيلة والمصانع" },
      { id: "heavy_ceramic", name: "بالتة سيراميك ومواد ثقيلة (Heavy Duty)", desc: "مصممة لتحمل الأوزان الفائقة ومواد البناء" },
      { id: "crates_collars", name: "صناديق وإطارات خشبية (Collars & Crates)", desc: "حماية كاملة للمنتجات الحساسة والموالح" },
    ],
    en: [
      { id: "block_4way", name: "4-Way Block Pallet", desc: "Ideal for automated warehouses and export packing lines" },
      { id: "stringer_2way", name: "2-Way Stringer Pallet", desc: "High durability for heavy loads and factories" },
      { id: "heavy_ceramic", name: "Heavy Duty Pallet", desc: "Designed for extreme weights and building materials" },
      { id: "crates_collars", name: "Collars & Crates", desc: "Complete protection for sensitive products and citrus" },
    ]
  }[lang];

  const dimensionOptions = {
    ar: [
      { id: "1200x1000", label: "1200 × 1000 مم (قياسي صناعي)" },
      { id: "1200x800", label: "1200 × 800 مم (قياسي يورو Euro Pallet)" },
      { id: "1100x1100", label: "1100 × 1100 مم (صناعات كيميائية)" },
      { id: "custom", label: "مقاس مخصص بمواصفات خاصة" },
    ],
    en: [
      { id: "1200x1000", label: "1200 × 1000 mm (Industrial Standard)" },
      { id: "1200x800", label: "1200 × 800 mm (Euro Pallet Standard)" },
      { id: "1100x1100", label: "1100 × 1100 mm (Chemical Industry)" },
      { id: "custom", label: "Custom Dimension / Special Specs" },
    ]
  }[lang];

  const loadOptions = {
    ar: [
      { id: "1000kg_dynamic", label: "حمولة ديناميكية 1000 كجم (خفيفة إلى متوسطة)" },
      { id: "1500kg_dynamic", label: "حمولة ديناميكية 1500 كجم (قياسية للمستودعات والتصدير)" },
      { id: "2500kg_dynamic", label: "حمولة ديناميكية 2500 كجم (فائقة الصيانة للسيراميك والحديد)" },
    ],
    en: [
      { id: "1000kg_dynamic", label: "1000 kg Dynamic Load (Light to Medium)" },
      { id: "1500kg_dynamic", label: "1500 kg Dynamic Load (Standard for Export)" },
      { id: "2500kg_dynamic", label: "2500 kg Dynamic Load (Heavy Duty / Iron & Ceramic)" },
    ]
  }[lang];

  const treatmentOptions = {
    ar: [
      { id: "ht_ispm15", name: "معالجة حرارية معتمدة (HT ISPM-15)", desc: "نوفر بالتات معقمة ومعالجة حرارياً متوافقة مع المعيار الدولي للتصدير المباشر" },
      { id: "mb_fumigation", name: "تبخير بغاز بروميد الميثيل (MB Fumigation)", desc: "مبخرة مع كافة المستندات والشهادات المطلوبة للتصدير للأسواق العالمية" },
      { id: "standard_local", name: "أخشاب جديدة للتداول المحلي", desc: "مصنعة من أخشاب عالية الجودة ومطابقة للمواصفات الفنية للشركات" },
    ],
    en: [
      { id: "ht_ispm15", name: "Certified Heat Treatment (HT ISPM-15)", desc: "We provide sterilized and heat-treated pallets compliant with international export standards" },
      { id: "mb_fumigation", name: "Methyl Bromide Fumigation (MB)", desc: "Fumigated with all required certificates for global export markets" },
      { id: "standard_local", name: "New Wood for Local Market", desc: "Manufactured from high-quality wood matching technical corporate specs" },
    ]
  }[lang];

  const industries = {
    ar: [
      { id: "agricultural_export", name: "تصدير حاصلات زراعية وموالح" },
      { id: "petrochemicals", name: "صناعات بتروكيماوية وبلاستيك" },
      { id: "pharmaceutical_food", name: "أغذية وأدوية (مطابقة للاشتراطات الصحية)" },
      { id: "heavy_building", name: "سيراميك ومواد بناء ورخام" },
      { id: "general_manufacturing", name: "مصانع ومخازن عامة" },
    ],
    en: [
      { id: "agricultural_export", name: "Agriculture & Citrus Export" },
      { id: "petrochemicals", name: "Petrochemicals & Plastics" },
      { id: "pharmaceutical_food", name: "Pharma & Food (Sanitary Compliant)" },
      { id: "heavy_building", name: "Ceramics & Building Materials" },
      { id: "general_manufacturing", name: "General Manufacturing & Warehousing" },
    ]
  }[lang];

  const handleWhatsAppInquiry = () => {
    const selectedTypeObj = palletTypes.find((t) => t.id === config.palletType);
    const selectedDimLabel = config.dimensions === "custom" ? `مقاس خاص (${config.customDimensions})` : config.dimensions;
    const selectedTreatmentObj = treatmentOptions.find((t) => t.id === config.woodTreatment);
    const selectedIndustryObj = industries.find((i) => i.id === config.industry);

    trackGA4Event("generate_lead", {
      event_category: "b2b_tools",
      event_label: "custom_pallet_builder",
      pallet_type: config.palletType,
      quantity: config.quantity,
      wood_treatment: config.woodTreatment,
      industry: config.industry,
      value: 1
    });
    trackGA4Event("whatsapp_click", { tool: "custom_pallet_builder" });

    const message = `السلام عليكم ورحمة الله وبركاته،
يرجى إفادتنا بعرض سعر مخصص وتوصية فنية لطلب توريد كميات وفق التوصيف الفني التالي:
- نوع البالتة/المنتج: ${selectedTypeObj?.name}
- الأبعاد المطلوبة: ${selectedDimLabel}
- قدرة التحمل: ${config.loadCapacity}
- المعالجة والتعقيم: ${selectedTreatmentObj?.name}
- القطاع الصناعي: ${selectedIndustryObj?.name}
- الكمية المطلوبة: ${config.quantity} بالتة (طلب توريد كميات)

يرجى التواصل معنا لتأكيد التوصيف الفني وإرسال عرض السعر المخصص.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201080012261?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-[#1c1f2a] border border-border/40 text-white rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="border-b border-border/20 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold mb-2">
          <Sliders className="w-4 h-4" />
          <span>{lang === "ar" ? "أداة التوصيف الفني وتخصيص البالتات B2B" : "Technical Specs & B2B Custom Pallet Tool"}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white">{lang === "ar" ? "مُخصّص البالتات الهندسية وطلب عروض الأسعار" : "Custom Pallet Builder & Quote Request"}</h3>
        <p className="text-muted-foreground text-xs md:text-sm mt-1">
          {lang === "ar" 
            ? "قم بتحديد المواصفات الفنية المطلوبة لشحنتك أو مصنعك ليقوم الفريق الهندسي بإعداد عرض سعر مخصص للكميات وتوصية فنية بدقة." 
            : "Specify your required technical specifications so our engineering team can prepare a custom volume quote and accurate technical recommendation."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PalletForm
          config={config}
          updateConfig={updateConfig}
          palletTypes={palletTypes}
          dimensionOptions={dimensionOptions}
          loadOptions={loadOptions}
          treatmentOptions={treatmentOptions}
          industries={industries}
          lang={lang}
        />
        <PalletSummary
          config={config}
          handleWhatsAppInquiry={handleWhatsAppInquiry}
          palletTypes={palletTypes}
          industries={industries}
          lang={lang}
        />
      </div>
    </div>
  );
}
