const path = require("path");
const fs = require("fs");
const AdmZip = require("adm-zip");

try {
  const outDir = path.join(__dirname, "out");
  const zipPath = path.join(__dirname, "out.zip");

  if (!fs.existsSync(outDir)) {
    console.error("Error: 'out' directory not found. Please run 'npm run build' first.");
    process.exit(1);
  }

  console.log("Compressing 'out' folder to 'out.zip'...");
  const zip = new AdmZip();
  zip.addLocalFolder(outDir);
  zip.writeZip(zipPath);
  console.log("Successfully created out.zip!");
} catch (error) {
  console.error("Error during zipping:", error);
  process.exit(1);
}
