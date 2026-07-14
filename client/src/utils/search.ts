export function normalizeArabic(text: string): string {
  const easternNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  let normalized = text;
  for (let i = 0; i < 10; i++) {
    normalized = normalized.replace(new RegExp(easternNumbers[i], "g"), i.toString());
  }
  return normalized
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ىي]/g, "ي") // Normalize both to 'ي'
    .replace(/[\u064B-\u065F]/g, "") // Remove diacritics
    .replace(/باليت/g, "بالت"); // Normalize pallet spelling variations (باليت -> بالت)
}

export function normalizeText(text: string, lang: "ar" | "en"): string {
  const lower = text.toLowerCase().trim();
  return lang === "ar" ? normalizeArabic(lower) : lower;
}

/**
 * Checks if all words in the search query are present in the searchable content.
 */
export function matchSearchQuery(
  query: string,
  searchableTexts: (string | undefined | null | string[])[],
  lang: "ar" | "en"
): boolean {
  const cleanQuery = query.trim();
  if (!cleanQuery) return true;

  // Split query into individual words/tokens
  const queryWords = cleanQuery
    .split(/\s+/)
    .map(word => normalizeText(word, lang))
    .filter(word => word.length > 0);

  if (queryWords.length === 0) return true;

  // Flatten and normalize all searchable content elements
  const flatSearchableTexts = searchableTexts
    .flat()
    .filter((t): t is string => typeof t === "string" && t.length > 0)
    .map(t => normalizeText(t, lang));

  // Check if every single query word matches at least one of the searchable texts
  return queryWords.every(word =>
    flatSearchableTexts.some(text => text.includes(word))
  );
}
