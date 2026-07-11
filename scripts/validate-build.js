import fs from "fs";
import path from "path";

const OUT_DIR = "./out";
let errors = 0;
let warnings = 0;

function log(type, message) {
  if (type === "ERROR") {
    errors++;
    console.error(`❌ [ERROR] ${message}`);
  } else if (type === "WARN") {
    warnings++;
    console.warn(`⚠️  [WARN]  ${message}`);
  } else {
    console.log(`✅ [OK]    ${message}`);
  }
}

function getAllHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

function normalizeOutPath(filePath) {
  // Convert out/articles/slug/index.html to /articles/slug/
  let rel = path.relative(OUT_DIR, filePath).replace(/\\/g, "/");
  rel = rel.replace(/index\.html$/, "");
  if (!rel.startsWith("/")) rel = "/" + rel;
  return rel;
}

console.log("=".repeat(60));
console.log("  Post-Build SEO & Link Validator");
console.log("=".repeat(60));
console.log();

// 1. Check out directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error("FATAL: 'out' directory not found. Run 'npm run build' first.");
  process.exit(1);
}

const htmlFiles = getAllHtmlFiles(OUT_DIR);
log("OK", `Found ${htmlFiles.length} HTML files in out/`);

// 2. Check sitemap exists
const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  log("ERROR", "sitemap.xml not found in out/");
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  log("OK", `sitemap.xml contains ${sitemapUrls.length} URLs`);

  // Verify each sitemap URL maps to an existing file
  for (const url of sitemapUrls) {
    const urlPath = new URL(url).pathname;
    const filePath = path.join(OUT_DIR, urlPath, "index.html");
    const altFilePath = path.join(OUT_DIR, urlPath.replace(/\/$/, "") + ".html");
    if (!fs.existsSync(filePath) && !fs.existsSync(altFilePath)) {
      // Check if it's a root-level sitemap URL
      const rootFile = path.join(OUT_DIR, urlPath.replace(/\/$/, ""), "index.html");
      if (!fs.existsSync(rootFile)) {
        log("ERROR", `Sitemap URL has no matching file: ${url} -> ${filePath}`);
      }
    }
  }
}

// 3. Validate each HTML file
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const relPath = normalizeOutPath(file);

  const isSystemFile = relPath.includes("404") || 
                       relPath.includes("_not-found") || 
                       path.basename(file).startsWith("google");

  if (isSystemFile) continue;

  // 3a. Check for title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    log("ERROR", `Missing or empty <title>: ${relPath}`);
  }

  // 3b. Check for meta description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  if (!descMatch || !descMatch[1].trim()) {
    log("WARN", `Missing meta description: ${relPath}`);
  }

  // 3c. Check for duplicate canonicals
  const canonicalMatches = content.match(/<link\s+rel="canonical"/g);
  if (canonicalMatches && canonicalMatches.length > 1) {
    log("ERROR", `Multiple canonical tags (${canonicalMatches.length}): ${relPath}`);
  }

  // 3d. Check for multiple H1
  const h1Matches = content.match(/<h1[\s>]/g);
  if (h1Matches && h1Matches.length > 1) {
    log("WARN", `Multiple H1 tags (${h1Matches.length}): ${relPath}`);
  }

  // 3e. Verify canonical points to self
  const canonicalHref = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  if (canonicalHref) {
    const canonicalPath = new URL(canonicalHref[1]).pathname;
    const normalizedRel = relPath.endsWith("/") ? relPath : relPath + "/";
    const normalizedCanonical = canonicalPath.endsWith("/") ? canonicalPath : canonicalPath + "/";
    if (normalizedCanonical !== normalizedRel) {
      log("WARN", `Canonical mismatch: page=${relPath} canonical=${canonicalPath}`);
    }
  }

  // 3f. Verify hreflang links point to existing files
  const hreflangMatches = [...content.matchAll(/hreflang="([^"]*)"\s+href="([^"]*)"/g)];
  for (const [, lang, href] of hreflangMatches) {
    const hrefPath = new URL(href).pathname;
    const hrefFile = path.join(OUT_DIR, hrefPath, "index.html");
    const hrefAlt = path.join(OUT_DIR, hrefPath.replace(/\/$/, "") + ".html");
    if (!fs.existsSync(hrefFile) && !fs.existsSync(hrefAlt)) {
      log("ERROR", `hreflang[${lang}] points to missing file: ${href} (from ${relPath})`);
    }
  }

  // 3g. Check internal links
  const internalLinks = [...content.matchAll(/href="(\/[^"#]*)"/g)];
  for (const [, linkPath] of internalLinks) {
    const normalizedLink = linkPath.endsWith("/") ? linkPath : linkPath + "/";
    const linkFile = path.join(OUT_DIR, normalizedLink, "index.html");
    const linkAlt = path.join(OUT_DIR, linkPath);
    // Skip static assets
    if (linkPath.match(/\.(css|js|png|jpg|webp|svg|ico|xml|txt|woff|woff2)$/)) continue;
    if (!fs.existsSync(linkFile) && !fs.existsSync(linkAlt) && !fs.existsSync(linkAlt + ".html")) {
      log("WARN", `Broken internal link: ${linkPath} (from ${relPath})`);
    }
  }
}

// Summary
console.log();
console.log("=".repeat(60));
console.log(`  Results: ${errors} errors, ${warnings} warnings`);
console.log("=".repeat(60));

if (errors > 0) {
  console.error("\n🔴 Build validation FAILED with critical errors.");
  process.exit(1);
} else if (warnings > 0) {
  console.warn("\n🟡 Build validation PASSED with warnings.");
  process.exit(0);
} else {
  console.log("\n🟢 Build validation PASSED — all checks clean.");
  process.exit(0);
}
