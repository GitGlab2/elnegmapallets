"use client";

import React from "react";
import { Container, Package, Truck } from "lucide-react";
import { ContainerConfig } from "./types";
import { CONTAINER_TYPES, STANDARD_PALLET_SIZES } from "./constants";

interface ContainerFormProps {
  config: ContainerConfig;
  updateConfig: (key: keyof ContainerConfig, value: string | number) => void;
}

export function ContainerForm({ config, updateConfig }: ContainerFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Container Selection */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
          <Container className="w-4 h-4 text-secondary" />
          نوع الحاوية / وسيلة النقل
        </label>
        <select
          value={config.containerKey}
          onChange={(e) => updateConfig("containerKey", e.target.value)}
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
          value={config.selectedSizeIndex}
          onChange={(e) => updateConfig("selectedSizeIndex", Number(e.target.value))}
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
          value={config.stackTiers}
          onChange={(e) => updateConfig("stackTiers", Number(e.target.value))}
          className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
        >
          <option value={1}>طابق واحد (Single Level)</option>
          <option value={2}>طابقان فوق بعضهما (Double Stacked)</option>
          <option value={3}>ثلاثة طوابق (Triple Stacked)</option>
        </select>
      </div>

      {/* Custom Dimensions or Pallet Weight */}
      {config.selectedSizeIndex === 3 ? (
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300">المقاس الخاص (مم)</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              value={config.customLength}
              onChange={(e) => updateConfig("customLength", Number(e.target.value))}
              placeholder="الطول"
              className="bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-secondary"
            />
            <input
              type="number"
              value={config.customWidth}
              onChange={(e) => updateConfig("customWidth", Number(e.target.value))}
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
            value={config.palletWeightKg}
            onChange={(e) => updateConfig("palletWeightKg", Number(e.target.value))}
            className="w-full bg-[#181b24] border border-border/50 rounded-xl p-3 text-xs md:text-sm text-white focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
      )}
    </div>
  );
}
