const fs = require('fs');

const token  = process.env.VITE_AIRTABLE_TOKEN   || '';
const baseId = process.env.VITE_AIRTABLE_BASE_ID  || '';

if (!token || !baseId) {
  console.error('ERROR: VITE_AIRTABLE_TOKEN and VITE_AIRTABLE_BASE_ID must be set.');
  process.exit(1);
}

const content = `window.AIRTABLE_TOKEN = "${token}";\nwindow.AIRTABLE_BASE_ID = "${baseId}";\n`;
fs.writeFileSync('env-config.js', content);
console.log('env-config.js generated.');
