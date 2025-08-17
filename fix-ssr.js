const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixSSRIssues() {
  console.log('Finding all TSX files...');
  
  // Find all .tsx files in client/src
  const files = glob.sync('client/src/**/*.tsx');
  console.log(`Found ${files.length} files to process`);

  let fixedCount = 0;

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Fix window.location.href assignments
    const locationRegex = /window\.location\.href\s*=\s*([^;]+);?/g;
    const newContent = content.replace(locationRegex, (match, url) => {
      hasChanges = true;
      return `if (typeof window !== "undefined") { window.location.href = ${url}; }`;
    });

    // Fix window.open calls
    const openRegex = /window\.open\(([^)]+)\)/g;
    const finalContent = newContent.replace(openRegex, (match, args) => {
      hasChanges = true;
      return `typeof window !== "undefined" && window.open(${args})`;
    });

    // Fix broken assignment patterns from previous sed command
    const brokenPatternRegex = /typeof window !== "undefined" \? window\.(location\.href|open\([^)]+\)) : "" = /g;
    const fixedContent = finalContent.replace(brokenPatternRegex, (match, operation) => {
      hasChanges = true;
      if (operation.startsWith('location.href')) {
        return 'if (typeof window !== "undefined") { window.location.href = ';
      } else {
        return 'if (typeof window !== "undefined") { window.open(';
      }
    });

    if (hasChanges) {
      fs.writeFileSync(file, fixedContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
try {
  fixedSSRIssues();
} catch (error) {
  console.error('Error fixing SSR issues:', error);
  process.exit(1);
}