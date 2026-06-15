const path = require('path');
const { parsePageContent } = require('./lib/cms-parser');

console.log("--- ABOUT PAGE ---");
const aboutParsed = parsePageContent(path.join(process.cwd(), 'app/about/page.tsx'));
console.log(`Parsed sections: ${aboutParsed.length}`);
aboutParsed.forEach(s => {
  console.log(`Section: ${s.sectionName} (${s.sectionId}) - File: ${s.filePath}`);
  Object.keys(s.fields).forEach(key => {
    const f = s.fields[key];
    console.log(`  Field: ${key} (${f.type}) -> "${String(f.originalValue).substring(0, 50)}"`);
  });
});

console.log("\n--- PRODUCTS PAGE ---");
const productsParsed = parsePageContent(path.join(process.cwd(), 'app/products/page.tsx'));
console.log(`Parsed sections: ${productsParsed.length}`);
productsParsed.forEach(s => {
  console.log(`Section: ${s.sectionName} (${s.sectionId}) - File: ${s.filePath}`);
  Object.keys(s.fields).forEach(key => {
    const f = s.fields[key];
    console.log(`  Field: ${key} (${f.type}) -> "${String(f.originalValue).substring(0, 50)}"`);
  });
});
