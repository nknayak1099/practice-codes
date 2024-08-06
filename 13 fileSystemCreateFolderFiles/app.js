//Following code creates structure 
// Project || <fileName given>
//  index.html
//  app.js
//  style.css

const fs = require('fs');
const folderName = process.argv[2] || 'Project';
console.log('hi')

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
} catch (e) {
    console.log('Something went wrong!');
    console.log(e);
}