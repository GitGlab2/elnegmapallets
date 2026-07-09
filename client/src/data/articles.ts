import { Article } from "./articles-types";
import { ispm15PhytosanitaryStandardArticle } from "./articles/ispm15-phytosanitary-standard";
import { heatTreatmentVsMethylBromideArticle } from "./articles/heat-treatment-vs-methyl-bromide";
import { newWoodenPalletsQualityStandardsArticle } from "./articles/new-wooden-pallets-quality-standards";
import { containerStuffingPhysicsArticle } from "./articles/container-stuffing-physics";
import { exportingCitrusAgriculturalProductsArticle } from "./articles/exporting-citrus-agricultural-products";
import { exportingCeramicsHeavyMaterialsArticle } from "./articles/exporting-ceramics-heavy-materials";
import { exportingChemicalsSafelyArticle } from "./articles/exporting-chemicals-safely";
import { datesFumigationAlternativesArticle } from "./articles/dates-fumigation-alternatives";

export type { Article, TocItem } from "./articles-types";

export const articles: Article[] = [
  ispm15PhytosanitaryStandardArticle,
  heatTreatmentVsMethylBromideArticle,
  newWoodenPalletsQualityStandardsArticle,
  containerStuffingPhysicsArticle,
  exportingCitrusAgriculturalProductsArticle,
  exportingCeramicsHeavyMaterialsArticle,
  exportingChemicalsSafelyArticle,
  datesFumigationAlternativesArticle,
];

