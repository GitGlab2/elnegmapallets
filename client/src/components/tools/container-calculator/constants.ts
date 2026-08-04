import { ContainerSpec } from "./types";

export const CONTAINER_TYPES: Record<string, ContainerSpec> = {
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

export const STANDARD_PALLET_SIZES = [
  { name: "بالتة صناعية قياسية (1200×1000 مم)", nameEn: "Standard Industrial (1200x1000 mm)", length: 1200, width: 1000 },
  { name: "بالتة يورو قياسية (1200×800 مم)", nameEn: "Standard Euro (1200x800 mm)", length: 1200, width: 800 },
  { name: "بالتة مربعة كيميائية (1100×1100 مم)", nameEn: "Chemical Square (1100x1100 mm)", length: 1100, width: 1100 },
  { name: "مقاس مخصص (Custom Dimensions)", nameEn: "Custom Dimensions", length: 0, width: 0 },
];
