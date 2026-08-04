"use client";

import React from "react";
import { Container, Package, Truck } from "lucide-react";
import { ContainerConfig } from "./types";
import { CONTAINER_TYPES, STANDARD_PALLET_SIZES } from "./constants";

interface ContainerFormProps {
  config: ContainerConfig;
  updateConfig: (key: keyof ContainerConfig, value: string | number) => void;
  lang?: "ar" | "en";
}

export function ContainerForm({ config, updateConfig, lang = "ar" }: ContainerFormProps) {
  const isEn = lang === "en";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Container Selection */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
          <Container className="w-4 h-4 text-secondary" />
          {isEn ? "Container / Transport Type" : "نوع الحاوية / وسيلة النقل"}
        </label>
        <select
          value={config.containerKey}
          onChange={(e) => updateConfig("containerKey", e.target.value)}
          className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
        >
          {Object.entries(CONTAINER_TYPES).map(([key, spec]) => (
            <option key={key} value={key}>
              {isEn ? spec.nameEn : spec.name}
            </option>
          ))}
        </select>
      </div>

      {/* Pallet Standard Sizes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
          <Package className="w-4 h-4 text-secondary" />
          {isEn ? "Pallet Dimensions" : "أبعاد ومقاس البالتة"}
        </label>
        <select
          value={config.selectedSizeIndex}
          onChange={(e) => updateConfig("selectedSizeIndex", Number(e.target.value))}
          className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
        >
          {STANDARD_PALLET_SIZES.map((size, idx) => (
            <option key={idx} value={idx}>
              {isEn ? size.nameEn : size.name}
            </option>
          ))}
        </select>
      </div>

      {/* Stacking Tiers */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-secondary" />
          {isEn ? "Stacking Tiers" : "عدد مستويات الرص (Tiers)"}
        </label>
        <select
          value={config.stackTiers}
          onChange={(e) => updateConfig("stackTiers", Number(e.target.value))}
          className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
        >
          <option value={1}>{isEn ? "Single Level" : "طابق واحد (Single Level)"}</option>
          <option value={2}>{isEn ? "Double Stacked" : "طابقان فوق بعضهما (Double Stacked)"}</option>
          <option value={3}>{isEn ? "Triple Stacked" : "ثلاثة طوابق (Triple Stacked)"}</option>
        </select>
      </div>

      {/* Custom Dimensions or Pallet Weight */}
      {config.selectedSizeIndex === 3 ? (
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300">{isEn ? "Custom Dimension (mm)" : "المقاس الخاص (مم)"}</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              dir="ltr"
              lang="en"
              style={{ fontFamily: "system-ui, sans-serif" }}
              value={config.customLength || ""}
              onChange={(e) => {
                const enStr = e.target.value.replace(/[٠-٩]/g, d => '0123456789'[d.charCodeAt(0) - 1632]);
                const val = enStr.replace(/\D/g, "");
                updateConfig("customLength", val ? parseInt(val, 10) : 0);
              }}
              placeholder={isEn ? "Length" : "الطول"}
              className="bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
            />
            <input
              type="text"
              dir="ltr"
              lang="en"
              style={{ fontFamily: "system-ui, sans-serif" }}
              value={config.customWidth || ""}
              onChange={(e) => {
                const enStr = e.target.value.replace(/[٠-٩]/g, d => '0123456789'[d.charCodeAt(0) - 1632]);
                const val = enStr.replace(/\D/g, "");
                updateConfig("customWidth", val ? parseInt(val, 10) : 0);
              }}
              placeholder={isEn ? "Width" : "العرض"}
              className="bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300">{isEn ? "Empty Pallet Weight (kg)" : "وزن البالتة الفارغة (كجم)"}</label>
          <input
            type="text"
            dir="ltr"
            lang="en"
            style={{ fontFamily: "system-ui, sans-serif" }}
            value={config.palletWeightKg || ""}
            onChange={(e) => {
              const enStr = e.target.value.replace(/[٠-٩]/g, d => '0123456789'[d.charCodeAt(0) - 1632]);
              const val = enStr.replace(/\D/g, "");
              updateConfig("palletWeightKg", val ? parseInt(val, 10) : 0);
            }}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
      )}
    </div>
  );
}
