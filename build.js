const zipper = require('zip-local');
const fs = require('fs-extra');

const dir = './build';

console.log(`Clearing build folder: ${dir}`);

fs.emptyDirSync(dir);

const packageRaw = fs.readFileSync('package.json');
const json = JSON.parse(packageRaw);

console.log(`Building Deck v${json.version}`);

zipper.sync.zip("./datapack").compress().save(`${dir}/deck-v${json.version}.zip`);
