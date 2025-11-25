const fs = require('fs');
const path = require('path');

const tracePath = path.resolve(__dirname, '..', '.next', 'trace');
const backupPath = tracePath + '.bak';

if (!fs.existsSync(tracePath)) {
    console.error('Trace file not found:', tracePath);
    process.exit(1);
}

const txt = fs.readFileSync(tracePath, 'utf8');

// Backup original
fs.writeFileSync(backupPath, txt, 'utf8');
console.log('Backup written to', backupPath);

// Find all top-level arrays and collect inner contents
const re = /\[([\s\S]*?)\](?=\s*(?:\r?\n|\s)*(?:\[|$))/g;
let m;
const parts = [];
while ((m = re.exec(txt)) !== null) {
    const inner = m[1].trim();
    if (inner) parts.push(inner);
}

if (parts.length === 0) {
    console.log('No top-level arrays found. Exiting without changes.');
    process.exit(0);
}

const merged = '[' + parts.join(',') + ']\n';
fs.writeFileSync(tracePath, merged, 'utf8');
console.log('Merged', parts.length, 'arrays into single JSON array at', tracePath);
