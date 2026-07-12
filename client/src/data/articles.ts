import { Article } from "./articles-types";
import { palletPricesEgyptArticle } from "./articles/pallet-prices-egypt";
import { buyingPalletsGuideArticle } from "./articles/buying-pallets-guide";
import { woodTypesForPalletsArticle } from "./articles/wood-types-for-pallets";
import { palletsFoodPharmaceuticalArticle } from "./articles/pallets-food-pharmaceutical";
import { palletsWarehouseStorageArticle } from "./articles/pallets-warehouse-storage";
import { ispm15PhytosanitaryStandardArticle } from "./articles/ispm15-phytosanitary-standard";
import { heatTreatmentVsMethylBromideArticle } from "./articles/heat-treatment-vs-methyl-bromide";
import { newWoodenPalletsQualityStandardsArticle } from "./articles/new-wooden-pallets-quality-standards";
import { containerStuffingPhysicsArticle } from "./articles/container-stuffing-physics";
import { exportingCitrusAgriculturalProductsArticle } from "./articles/exporting-citrus-agricultural-products";
import { exportingCeramicsHeavyMaterialsArticle } from "./articles/exporting-ceramics-heavy-materials";
import { exportingChemicalsSafelyArticle } from "./articles/exporting-chemicals-safely";
import { datesFumigationAlternativesArticle } from "./articles/dates-fumigation-alternatives";
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

export type { Article, TocItem } from "./articles-types";

export const articles: Article[] = [
  woodenCratesPalletCollarsExportArticle,
  palletPricesEgyptArticle,
  buyingPalletsGuideArticle,
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
  ispm15PhytosanitaryStandardArticle,
  heatTreatmentVsMethylBromideArticle,
  newWoodenPalletsQualityStandardsArticle,
  containerStuffingPhysicsArticle,
  exportingCitrusAgriculturalProductsArticle,
  exportingCeramicsHeavyMaterialsArticle,
  exportingChemicalsSafelyArticle,
  datesFumigationAlternativesArticle,
  palletDimensionsStandardsArticle,
  ...palletSizeArticlesAr,
];

