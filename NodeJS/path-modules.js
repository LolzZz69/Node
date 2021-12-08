const path = require('path');
console.log(path)

console.log(path.sep);

const pather = path.join('./content', 'test.txt');
console.log(pather);

const absolute = path.resolve(__dirname, 'content', 'test.txt');
console.log(absolute);