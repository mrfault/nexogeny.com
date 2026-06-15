import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const logoSvg = readFileSync(resolve(root, "public/assets/img/nexogeny.svg"), "utf8");

// Scale logo to ~360px wide
const scaledLogo = logoSvg.replace('width="121" height="37"', 'width="360" height="110"');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="50%" style="stop-color:#1e3a5f"/>
      <stop offset="100%" style="stop-color:#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Grid pattern -->
  <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
    <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  </pattern>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>

  <!-- Glow effects -->
  <circle cx="200" cy="200" r="250" fill="rgba(59,130,246,0.15)"/>
  <circle cx="1000" cy="450" r="200" fill="rgba(249,115,22,0.08)"/>

  <!-- Logo centered -->
  <g transform="translate(420, 200)">
    ${scaledLogo}
  </g>

  <!-- Tagline -->
  <text x="600" y="390" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="rgba(255,255,255,0.8)">Empowering Startups to Innovate and Grow</text>

  <!-- Subtitle -->
  <text x="600" y="435" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="rgba(148,163,184,0.9)">Software Development · AI · Web Design · Mobile Apps</text>

  <!-- Bottom bar -->
  <rect x="0" y="610" width="${WIDTH}" height="20" fill="rgba(37,99,235,0.5)"/>

  <!-- URL -->
  <text x="600" y="540" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="400" fill="rgba(148,163,184,0.6)">nexogeny.com</text>
</svg>`;

const outputPath = resolve(root, "public/assets/img/og-image.png");

await sharp(Buffer.from(svg))
  .resize(WIDTH, HEIGHT)
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);
