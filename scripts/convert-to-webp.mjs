/**
 * WebP Konvertierung – Galloway Getaway
 * Konvertiert alle JPEG-Bilder in public/media/ nach WebP (Qualität 85%)
 * Ausführen: node scripts/convert-to-webp.mjs
 */

import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MEDIA_DIR = join(__dirname, '..', 'public', 'media');
const QUALITY = 85;

const files = await readdir(MEDIA_DIR);
const jpegFiles = files.filter(f => /\.(jpg|jpeg)$/i.test(f));

console.log(`\n🖼  Konvertiere ${jpegFiles.length} JPEG-Dateien → WebP (Qualität ${QUALITY}%)\n`);

let converted = 0;
let skipped = 0;

for (const file of jpegFiles) {
  const inputPath = join(MEDIA_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(MEDIA_DIR, outputName);

  try {
    const inputStat = await stat(inputPath);
    await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);
    const outputStat = await stat(outputPath);
    const savings = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);
    console.log(`  ✓ ${file.padEnd(30)} → ${outputName}  (${savings}% kleiner)`);
    converted++;
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`);
    skipped++;
  }
}

console.log(`\n✅ Fertig: ${converted} Bilder konvertiert, ${skipped} Fehler\n`);
