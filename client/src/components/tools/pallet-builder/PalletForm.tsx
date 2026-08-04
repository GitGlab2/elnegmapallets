"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { PalletConfig } from "./types";

interface PalletFormProps {
  config: PalletConfig;
  updateConfig: (key: keyof PalletConfig, value: string | number) => void;
  palletTypes: { id: string; name: string; desc: string }[];
  dimensionOptions: { id: string; label: string }[];
  loadOptions: { id: string; label: string }[];
  treatmentOptions: { id: string; name: string; desc: string }[];
  industries: { id: string; name: string }[];
}

export function PalletForm({
  config,
  updateConfig,
  palletTypes,
  dimensionOptions,
  loadOptions,
  treatmentOptions,
  industries,
}: PalletFormProps) {
  return (
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
              onClick={() => updateConfig("palletType", item.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                config.palletType === item.id
                  ? "bg-secondary/15 border-secondary text-white shadow-md shadow-secondary/10"
                  : "bg-[#181b24] border-border/30 text-gray-300 hover:border-border/60"
              }`}
            >
              <div className="font-bold text-xs md:text-sm flex items-center justify-between">
                <span>{item.name}</span>
                {config.palletType === item.id && <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />}
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
            value={config.dimensions}
            onChange={(e) => updateConfig("dimensions", e.target.value)}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
          >
            {dimensionOptions.map((dim) => (
              <option key={dim.id} value={dim.id}>
                {dim.label}
              </option>
            ))}
          </select>

          {config.dimensions === "custom" && (
            <input
              type="text"
              placeholder="أدخل المقاس بالمليمتر (مثال: 1140×1140×145)"
              value={config.customDimensions}
              onChange={(e) => updateConfig("customDimensions", e.target.value)}
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
            value={config.loadCapacity}
            onChange={(e) => updateConfig("loadCapacity", e.target.value)}
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

      {/* Step 3: Wood Treatment */}
      <div className="space-y-3 pt-2">
        <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold">4</span>
          اشتراطات المعالجة والتعقيم لغايات التصدير
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {treatmentOptions.map((tr) => (
            <div
              key={tr.id}
              onClick={() => updateConfig("woodTreatment", tr.id)}
              className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                config.woodTreatment === tr.id
                  ? "bg-secondary/15 border-secondary text-white shadow-md shadow-secondary/10"
                  : "bg-[#181b24] border-border/30 text-gray-300 hover:border-border/60"
              }`}
            >
              <div className="font-bold text-xs flex items-center justify-between">
                <span>{tr.name}</span>
                {config.woodTreatment === tr.id && <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />}
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
            value={config.industry}
            onChange={(e) => updateConfig("industry", e.target.value)}
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
            value={config.quantity}
            onChange={(e) => updateConfig("quantity", Math.max(500, Number(e.target.value)))}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary"
          />
          <span className="text-[11px] text-accent flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            الحد الأدنى للطلبيات والتصنيع الفوري: 500 بالتة
          </span>
        </div>
      </div>
    </div>
  );
}
