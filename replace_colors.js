const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace old gold/bronze (139,111,47) and (176,138,61) with Indigo (79,70,229)
  content = content.replace(/rgba\(139,111,47/g, 'rgba(79,70,229');
  content = content.replace(/rgba\(176,138,61/g, 'rgba(79,70,229');
  content = content.replace(/rgba\(176, 138, 61/g, 'rgba(79, 70, 229');
  
  // Replace old beige hover/backgrounds (250,246,237) and (239,231,216) with light gray (243,244,246)
  content = content.replace(/rgba\(250,246,237/g, 'rgba(243,244,246');
  content = content.replace(/rgba\(239,231,216/g, 'rgba(243,244,246');

  fs.writeFileSync(filePath, content);
});

console.log('Colors replaced successfully!');
