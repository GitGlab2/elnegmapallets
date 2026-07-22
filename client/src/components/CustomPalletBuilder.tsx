"use client";

import React, { useState } from "react";
import { ShieldCheck, Send, CheckCircle2, Sliders, AlertCircle } from "lucide-react";

export default function CustomPalletBuilder({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const [palletType, setPalletType] = useState<string>("block_4way");
  const [dimensions, setDimensions] = useState<string>("1200x1000");
  const [customDimensions, setCustomDimensions] = useState<string>("");
  const [loadCapacity, setLoadCapacity] = useState<string>("1500kg_dynamic");
  const [woodTreatment, setWoodTreatment] = useState<string>("ht_ispm15");
  const [quantity, setQuantity] = useState<number>(500);
  const [industry, setIndustry] = useState<string>("agricultural_export");

  const palletTypes = [
    { id: "block_4way", name: "بالتة بلوك 4 اتجاهات (4-Way Block Pallet)", desc: "مثالية للمستودعات الآلية وخطوط التعبئة والتصدير" },
    { id: "stringer_2way", name: "بالتة مريين اتجاهين (2-Way Stringer Pallet)", desc: "متانة عالية للحمولات الثقيلة والمصانع" },
    { id: "heavy_ceramic", name: "بالتة سيراميك ومواد ثقيلة (Heavy Duty)", desc: "مصممة لتحمل الأوزان الفائقة ومواد البناء" },
    { id: "crates_collars", name: "صناديق وإطارات خشبية (Collars & Crates)", desc: "حماية كاملة للمنتجات الحساسة والموالح" },
  ];

  const dimensionOptions = [
    { id: "1200x1000", label: "1200 × 1000 مم (قياسي صناعي)" },
    { id: "1200x800", label: "1200 × 800 مم (قياسي يورو Euro Pallet)" },
    { id: "1100x1100", label: "1100 × 1100 مم (صناعات كيميائية)" },
    { id: "custom", label: "مقاس مخصص بمواصفات خاصة" },
  ];

  const loadOptions = [
    { id: "1000kg_dynamic", label: "حمولة ديناميكية 1000 كجم (خفيفة إلى متوسطة)" },
    { id: "1500kg_dynamic", label: "حمولة ديناميكية 1500 كجم (قياسية للمستودعات والتصدير)" },
    { id: "2500kg_dynamic", label: "حمولة ديناميكية 2500 كجم (فائقة الصيانة للسيراميك والحديد)" },
  ];

  const treatmentOptions = [
    {
      id: "ht_ispm15",
      name: "معالجة حرارية معتمدة (HT ISPM-15)",
      desc: "نوفر بالتات معقمة ومعالجة حرارياً متوافقة مع المعيار الدولي للتصدير المباشر",
    },
    {
      id: "mb_fumigation",
      name: "تبخير بغاز بروميد الميثيل (MB Fumigation)",
      desc: "مبخرة مع كافة المستندات والشهادات المطلوبة للتصدير للأسواق العالمية",
    },
    {
      id: "standard_local",
      name: "أخشاب جديدة للتداول المحلي",
      desc: "مصنعة من أخشاب عالية الجودة ومطابقة للمواصفات الفنية للشركات",
    },
  ];

  const industries = [
    { id: "agricultural_export", name: "تصدير حاصلات زراعية وموالح" },
    { id: "petrochemicals", name: "صناعات بتروكيماوية وبلاستيك" },
    { id: "pharmaceutical_food", name: "أغذية وأدوية (مطابقة للاشتراطات الصحية)" },
    { id: "heavy_building", name: "سيراميك ومواد بناء ورخام" },
    { id: "general_manufacturing", name: "مصانع ومخازن عامة" },
  ];

  const handleWhatsAppInquiry = () => {
    const selectedTypeObj = palletTypes.find((t) => t.id === palletType);
    const selectedDimLabel = dimensions === "custom" ? `مقاس خاص (${customDimensions})` : dimensions;
    const selectedTreatmentObj = treatmentOptions.find((t) => t.id === woodTreatment);
    const selectedIndustryObj = industries.find((i) => i.id === industry);

    const message = `السلام عليكم ورحمة الله وبركاته،
يرجى إفادتنا بعرض سعر مخصص وتوصية فنية لطلب توريد كميات وفق التوصيف الفني التالي:
- نوع البالتة/المنتج: ${selectedTypeObj?.name}
- الأبعاد المطلوبة: ${selectedDimLabel}
- قدرة التحمل: ${loadCapacity}
- المعالجة والتعقيم: ${selectedTreatmentObj?.name}
- القطاع الصناعي: ${selectedIndustryObj?.name}
- الكمية المطلوبة: ${quantity} بالتة (طلب توريد كميات)

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
          <span>أداة التوصيف الفني وتخصيص البالتات B2B</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white">مُخصّص البالتات الهندسية وطلب عروض الأسعار</h3>
        <p className="text-muted-foreground text-xs md:text-sm mt-1">
          قم بتحديد المواصفات الفنية المطلوبة لشحنتك أو مصنعك ليقوم الفريق الهندسي بإعداد عرض سعر مخصص للكميات وتوصية فنية بدقة.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Configurator Steps */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Pallet Type */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">1</span>
              اختر نوع وهيكل البالتة الخشبية
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {palletTypes.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setPalletType(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    palletType === item.id
                      ? "bg-secondary/15 border-secondary text-white shadow-md shadow-secondary/10"
                      : "bg-[#181b24] border-border/30 text-gray-300 hover:border-border/60"
                  }`}
                >
                  <div className="font-bold text-xs md:text-sm flex items-center justify-between">
                    <span>{item.name}</span>
                    {palletType === item.id && <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Dimensions & Load */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">2</span>
                الأبعاد والمقاسات (مم)
              </label>
              <select
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
              >
                {dimensionOptions.map((dim) => (
                  <option key={dim.id} value={dim.id}>
                    {dim.label}
                  </option>
                ))}
              </select>

              {dimensions === "custom" && (
                <input
                  type="text"
                  placeholder="أدخل المقاس بالمليمتر (مثال: 1140×1140×145)"
                  value={customDimensions}
                  onChange={(e) => setCustomDimensions(e.target.value)}
                  className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
                />
              )}
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">3</span>
                سعة الحمولة المطلوبة
              </label>
              <select
                value={loadCapacity}
                onChange={(e) => setLoadCapacity(e.target.value)}
                className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
              >
                {loadOptions.map((ld) => (
                  <option key={ld.id} value={ld.id}>
                    {ld.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Wood Treatment & ISPM-15 */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">4</span>
              اشتراطات المعالجة والتعقيم لغايات التصدير
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {treatmentOptions.map((tr) => (
                <div
                  key={tr.id}
                  onClick={() => setWoodTreatment(tr.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    woodTreatment === tr.id
                      ? "bg-secondary/15 border-secondary text-white shadow-md shadow-secondary/10"
                      : "bg-[#181b24] border-border/30 text-gray-300 hover:border-border/60"
                  }`}
                >
                  <div className="font-bold text-xs flex items-center justify-between">
                    <span>{tr.name}</span>
                    {woodTreatment === tr.id && <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{tr.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Sector & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">5</span>
                القطاع والتطبيق الصناعي
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
              >
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">6</span>
                الكمية المطلوبة (طلبيات كبيرة)
              </label>
              <input
                type="number"
                min={500}
                step={100}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(500, Number(e.target.value)))}
                className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
              />
              <span className="text-[11px] text-accent flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                الحد الأدنى للطلبيات والتصنيع الفوري: 500 بالتة
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Specification Summary Card */}
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
                  {palletTypes.find((t) => t.id === palletType)?.name.split("(")[0]}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-border/10">
                <span className="text-muted-foreground">الأبعاد:</span>
                <span className="text-white font-bold">
                  {dimensions === "custom" ? customDimensions || "مقاس مخصص" : dimensions + " مم"}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-border/10">
                <span className="text-muted-foreground">سعة الحمولة:</span>
                <span className="text-white font-bold">
                  {loadCapacity.includes("1500") ? "1500 كجم (قياسية)" : loadCapacity.includes("2500") ? "2500 كجم (ثقيلة)" : "1000 كجم"}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-border/10">
                <span className="text-muted-foreground">التعقيم والتصدير:</span>
                <span className="text-secondary font-bold text-right">
                  {woodTreatment === "ht_ispm15" ? "معالجة حرارية HT ISPM-15" : woodTreatment === "mb_fumigation" ? "تبخير بغاز MB" : "تداول محلي"}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-border/10">
                <span className="text-muted-foreground">القطاع الصناعي:</span>
                <span className="text-white font-bold text-right">
                  {industries.find((i) => i.id === industry)?.name}
                </span>
              </div>

              <div className="flex justify-between pt-1">
                <span className="text-muted-foreground">الكمية المطلوبة:</span>
                <span className="text-accent font-black text-sm">
                  {quantity} بالتة
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
      </div>
    </div>
  );
}
