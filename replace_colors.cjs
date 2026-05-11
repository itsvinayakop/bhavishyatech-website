const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Revert indigo (79,70,229) to the refined muted bronze (154,123,79)
  content = content.replace(/rgba\(79,70,229/g, 'rgba(154,123,79');
  content = content.replace(/rgba\(79, 70, 229/g, 'rgba(154, 123, 79');
  
  // Revert the gray back to alabaster rgb(253,252,248) or similar
  content = content.replace(/rgba\(243,244,246/g, 'rgba(253,252,248');

  fs.writeFileSync(filePath, content);
});

console.log('Colors reverted to Alabaster & Bronze successfully!');
