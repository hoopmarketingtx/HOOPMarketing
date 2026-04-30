/**
 * compress-images.mjs
 * Converts all PNG/JPG assets in public/assets to WebP at 80% quality.
 * Originals are kept. WebP files are written alongside them.
 * Run once: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'public', 'assets');
const QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

const files = await walk(ASSETS_DIR);
let saved = 0;
let count = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const webpPath = file.replace(new RegExp(`\\${ext}$`), '.webp');

  // Skip if webp already exists and is newer
  try {
    const [srcStat, dstStat] = await Promise.all([stat(file), stat(webpPath)]);
    if (dstStat.mtimeMs > srcStat.mtimeMs) {
      console.log(`  skip (up to date): ${basename(webpPath)}`);
      continue;
    }
  } catch { /* webp doesn't exist yet — proceed */ }

  try {
    const info = await sharp(file)
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(webpPath);

    const orig = (await stat(file)).size;
    const reduction = Math.round((1 - info.size / orig) * 100);
    saved += orig - info.size;
    count++;
    console.log(`  ✓ ${basename(webpPath)} — ${(orig/1024/1024).toFixed(1)}MB → ${(info.size/1024).toFixed(0)}KB (-${reduction}%)`);
  } catch (err) {
    console.error(`  ✗ ${basename(file)}: ${err.message}`);
  }
}

console.log(`\nDone. ${count} files converted. Saved ${(saved/1024/1024).toFixed(1)} MB total.`);
