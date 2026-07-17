import { Article } from "./articles-types";
import { ispm15GuideEgyptArticle } from "./articles/ispm-15-guide-egypt";
import { customPalletDesignArticle } from "./articles/custom-pallet-design-specifications";
import { palletRecyclingRepairReuseArticle } from "./articles/pallet-recycling-repair-reuse";
import { palletsPetrochemicalHeavyIndustryArticle } from "./articles/pallets-petrochemical-heavy-industry";
import { palletPricesEgyptArticle } from "./articles/pallet-prices-egypt";
import { woodTypesForPalletsArticle } from "./articles/wood-types-for-pallets";
import { palletsFoodPharmaceuticalArticle } from "./articles/pallets-food-pharmaceutical";
import { palletsWarehouseStorageArticle } from "./articles/pallets-warehouse-storage";
// Deleted ispm15PhytosanitaryStandardArticle
import { heatTreatmentVsMethylBromideArticle } from "./articles/heat-treatment-vs-methyl-bromide";
import { newWoodenPalletsQualityStandardsArticle } from "./articles/new-wooden-pallets-quality-standards";
import { containerStuffingPhysicsArticle } from "./articles/container-stuffing-physics";
import { exportingCitrusAgriculturalProductsArticle } from "./articles/exporting-citrus-agricultural-products";
import { exportingCeramicsHeavyMaterialsArticle } from "./articles/exporting-ceramics-heavy-materials";
import { exportingChemicalsSafelyArticle } from "./articles/exporting-chemicals-safely";
// Deleted datesFumigationAlternativesArticle
import { palletDimensionsStandardsArticle } from "./articles/pallet-dimensions-standards";
import { palletSizeArticlesAr } from "./pallet-size-articles";
import { palletTypesDokumStringerArticle } from "./articles/pallet-types-dokum-stringer";
import { palletRunnersMarainArticle } from "./articles/pallet-runners-marain";
import { palletBlockSolidArticle } from "./articles/pallet-block-solid";
import { bestPalletFactoryEgyptArticle } from "./articles/best-pallet-factory-egypt";
import { wholesalePalletsEgyptArticle } from "./articles/wholesale-pallets-egypt";
import { woodVsPlasticPalletsArticle } from "./articles/wood-vs-plastic-pallets";
import { palletsPotatoVegetablesExportArticle } from "./articles/pallets-potato-vegetables-export";
import { palletsFactoriesWarehousesArticle } from "./articles/pallets-factories-warehouses";
import { woodenCratesPalletCollarsExportArticle } from "./articles/wooden-crates-pallet-collars-export";
import { heatTreatmentHtPalletsArticle } from "./articles/heat-treatment-ht-pallets";
import { methylBromideFumigationPalletsArticle } from "./articles/methyl-bromide-fumigation-pallets";
import { wholesalePallets10thRamadanArticle } from "./articles/wholesale-pallets-10th-ramadan";
import { wholesalePallets6thOctoberArticle } from "./articles/wholesale-pallets-6th-october";
import { wholesalePalletsSadatCityArticle } from "./articles/wholesale-pallets-sadat-city";

function getDeterministicOldDate(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const year = 2024 + Math.abs(hash % 2); // 2024 or 2025
  const month = 1 + Math.abs((hash >> 2) % 12); // 1 to 12
  const day = 1 + Math.abs((hash >> 4) % 28); // 1 to 28
  
  const yyyy = year.toString();
  const mm = month < 10 ? `0${month}` : month.toString();
  const dd = day < 10 ? `0${day}` : day.toString();
  
  return `${yyyy}-${mm}-${dd}`;
}

const rawArticles: Article[] = [
  woodenCratesPalletCollarsExportArticle,
  palletPricesEgyptArticle,
  bestPalletFactoryEgyptArticle,
  wholesalePalletsEgyptArticle,
  woodVsPlasticPalletsArticle,
  palletsPotatoVegetablesExportArticle,
  palletsFactoriesWarehousesArticle,
  woodTypesForPalletsArticle,
  palletTypesDokumStringerArticle,
  palletRunnersMarainArticle,
  palletBlockSolidArticle,
  palletsFoodPharmaceuticalArticle,
  palletsWarehouseStorageArticle,
  // Deleted ispm15PhytosanitaryStandardArticle
  heatTreatmentVsMethylBromideArticle,
  newWoodenPalletsQualityStandardsArticle,
  containerStuffingPhysicsArticle,
  exportingCitrusAgriculturalProductsArticle,
  exportingCeramicsHeavyMaterialsArticle,
  exportingChemicalsSafelyArticle,
  // Deleted datesFumigationAlternativesArticle
  palletDimensionsStandardsArticle,
  heatTreatmentHtPalletsArticle,
  methylBromideFumigationPalletsArticle,
  wholesalePallets10thRamadanArticle,
  wholesalePallets6thOctoberArticle,
  wholesalePalletsSadatCityArticle,
    ispm15GuideEgyptArticle,
  customPalletDesignArticle,
  palletRecyclingRepairReuseArticle,
  palletsPetrochemicalHeavyIndustryArticle,
...palletSizeArticlesAr,
];

export const articles = rawArticles.map(article => ({
  ...article,
  date: getDeterministicOldDate(article.slug)
}));

