const path = require('path')

console.log(path.sep);


//accessing a folder or file inside the main folder
const filepath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filepath);

//dont know
//maybe just the files?
const base = path.basename(filepath)
console.log(base);


//total path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);