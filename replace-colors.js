const fs = require('fs');
const path = require('path');

const targetDirs = ['app/admin', 'components/Admin'];

const replacements = [
  { regex: /bg-\[#084032\]/g, replacement: 'bg-[#E7000B]' }, // Tailwind bg
  { regex: /hover:bg-\[#0a5c48\]/g, replacement: 'hover:bg-[#C40009]' }, // Tailwind hover bg
  { regex: /hover:bg-\[#00a63e\]/g, replacement: 'hover:bg-[#C40009]' }, // Tailwind hover green
  { regex: /focus:ring-\[#00a63e\]/g, replacement: 'focus:ring-[#FF333E]' }, // Tailwind focus ring
  { regex: /background:\s*['"]#084032['"]/g, replacement: 'background: "#E7000B"' }, // Inline background
  // NOT matching text-[#084032], border-[#084032], focus:border-[#084032]
];

function walkSync(currentDirPath, callback) {
  if (!fs.existsSync(currentDirPath)) return;
  fs.readdirSync(currentDirPath).forEach((name) => {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

let modifiedCount = 0;

targetDirs.forEach(dir => {
  walkSync(dir, (filePath) => {
    if (filePath.match(/\.(js|jsx|ts|tsx|css)$/)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      replacements.forEach(({regex, replacement}) => {
        if (content.match(regex)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        modifiedCount++;
      }
    }
  });
});

console.log(`Successfully selectively replaced colors in ${modifiedCount} files.`);
