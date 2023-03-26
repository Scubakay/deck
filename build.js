const AdmZip = require('adm-zip');
const fs = require('fs-extra');

const dir = './build';

console.log(`Clearing build folder: ${dir}`);

fs.emptyDirSync(dir);

const packageRaw = fs.readFileSync('package.json');
const json = JSON.parse(packageRaw);

console.log(`Building Deck v${json.version}`);

var zip = new AdmZip();

zip.addLocalFile("./src/main/resources/pack.png");
zip.addLocalFile("./src/main/resources/pack.mcmeta");
zip.addLocalFolder("./src/main/resources/assets", './assets');

zip.writeZip(`${dir}/deck-${json.version}.zip`);