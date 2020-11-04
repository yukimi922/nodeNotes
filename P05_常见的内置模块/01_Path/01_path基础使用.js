// require，commonjs的引入方式, 同步，运行时加载
const path = require('path');

const dirPath = '/User/desktop';

const fileName = "1.txt";

const filePath = path.resolve(dirPath,fileName);

console.log(filePath);