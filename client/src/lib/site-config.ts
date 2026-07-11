export const SITE_CONFIG = {
  siteUrl: "https://elnegmapallets.com",
  defaultLanguage: "ar",
  languages: ["ar", "en"],
  name: {
    ar: "شركة النجمة لتصنيع البالتات الخشبية",
    en: "El Negma Pallets"
  }
};

export function getAbsoluteUrl(path: string): string {
  // Normalize by removing leading and trailing slashes
  let cleaned = path.trim().replace(/^\/+/, '').replace(/\/+$/, '');
  
  // Root path
  if (!cleaned) {
    return `${SITE_CONFIG.siteUrl}/`;
  }
  
  // Files, anchors, or queries should not have a trailing slash appended
  if (cleaned.includes('.') || cleaned.includes('#') || cleaned.includes('?')) {
    return `${SITE_CONFIG.siteUrl}/${cleaned}`;
  }
  
  // Standard routes get a trailing slash
  return `${SITE_CONFIG.siteUrl}/${cleaned}/`;
}
