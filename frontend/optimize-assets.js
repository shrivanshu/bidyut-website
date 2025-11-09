const fs = require('fs');
const path = require('path');

// Compress SVGs by removing unnecessary data
function optimizeSVG(filePath) {
  let svg = fs.readFileSync(filePath, 'utf8');
  
  // Remove comments
  svg = svg.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove metadata
  svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/gi, '');
  
  // Remove unnecessary whitespace
  svg = svg.replace(/\s+/g, ' ');
  svg = svg.replace(/>\s+</g, '><');
  
  // Round numbers to 2 decimals
  svg = svg.replace(/(\d+\.\d{3,})/g, (match) => parseFloat(match).toFixed(2));
  
  fs.writeFileSync(filePath, svg);
  console.log(`Optimized: ${path.basename(filePath)}`);
}

// Optimize SVGs
const publicDir = path.join(__dirname, 'public');
optimizeSVG(path.join(publicDir, 'ChatBotRobot.svg'));
optimizeSVG(path.join(publicDir, 'bidyut_logo_green 1.svg'));

console.log('SVG optimization complete!');
