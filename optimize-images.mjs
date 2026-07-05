import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'client', 'public', 'images');
const outputDir = imagesDir; // overwrite in place

const files = fs.readdirSync(imagesDir).filter(f => 
  /\.(jpg|jpeg|png)$/i.test(f) && !f.endsWith('.webp')
);

console.log(`Found ${files.length} images to optimize:\n`);

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const webpOutput = path.join(outputDir, `${baseName}.webp`);
  
  const stats = fs.statSync(inputPath);
  const originalSize = stats.size;
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if width > 1200px for regular images, or > 1920px for hero/full-width
    const isFullWidth = ['pallet-hero-detail', 'advantages-1', 'team-image', 'logistics-truck'].includes(baseName);
    const maxWidth = isFullWidth ? 1920 : 1200;
    
    let pipeline = sharp(inputPath);
    
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }
    
    // Convert to WebP with quality 80
    await pipeline.webp({ quality: 80 }).toFile(webpOutput);
    
    const webpStats = fs.statSync(webpOutput);
    const webpSize = webpStats.size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${file} (${(originalSize/1024).toFixed(0)}KB) → ${baseName}.webp (${(webpSize/1024).toFixed(0)}KB) — saved ${savings}%`);
    
    // Also optimize the original JPG/PNG (keep for fallback, but compressed)
    if (ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg') {
      await sharp(inputPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 75 })
        .toFile(inputPath + '.tmp');
      fs.renameSync(inputPath + '.tmp', inputPath);
    } else if (ext.toLowerCase() === '.png') {
      await sharp(inputPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(inputPath + '.tmp');
      fs.renameSync(inputPath + '.tmp', inputPath);
    }
    
    const compressedStats = fs.statSync(inputPath);
    console.log(`   Original also compressed: ${(compressedStats.size/1024).toFixed(0)}KB`);
    
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
  }
}

console.log('\n🎉 Image optimization complete!');
