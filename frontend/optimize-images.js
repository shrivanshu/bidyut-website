import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const images = [
  { input: 'public/OurOfferingImages/school22.jpg', width: 440 },
  { input: 'public/OurOfferingImages/A2-W.webp', width: 440 },
  { input: 'public/OurOfferingImages/our offering.webp', width: 440 },
  { input: 'public/OurOfferingImages/school11.jpeg', width: 440 },
  { input: 'public/OurOfferingImages/D1-arm.webp', width: 440 },
  { input: 'public/OurOfferingImages/G1 Basic.webp', width: 440 },
  { input: 'public/OurOfferingImages/GO2 AIR.webp', width: 440 }
];

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join(__dirname, img.input);
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, `-optimized${ext}`);
    
    try {
      await sharp(inputPath)
        .resize(img.width, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath.replace(ext, '.webp'));
      
      console.log(`✓ Optimized: ${img.input}`);
    } catch (err) {
      console.error(`✗ Failed: ${img.input}`, err.message);
    }
  }
}

optimizeImages();
