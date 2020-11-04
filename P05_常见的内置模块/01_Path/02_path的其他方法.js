const path = require('path');

const dirName = path.resolve(__dirname,__filename);
console.log(dirName);

const fileName = "/User/node/1.txt";

console.log(path.dirname(fileName));  // 获取文件的文件夹路径

console.log(path.basename(fileName));   // 获取文件的名字

console.log(path.extname(fileName));   // 获取文件的后缀


// 路径拼接，可以使用resolve，也可以使用join

const path1 = 'User/node';
const path3 = './User/node';  // 使用resolve拼接时，会先退到上层目录，再进行拼接
const path2 = '1.txt';

console.log(path.join(path3,path2)); // /Users/belstar/Documents/vsCodeDemo/node的学习/day05_常见的内置模块/01_Path/User/node/1.txt

// resolve拼接
// resolve会去检测拼接的路径前有没有 / ./ 或者../类似的东西，
// 如果有则直接拼接，如果没有，则按照路径前的 ./  ../的路径拼接
// console.log(path.resolve(path3,path2)); // /Users/belstar/Documents/vsCodeDemo/node的学习/day05_常见的内置模块/User/node/1.txt

// 如果拼接的两个路径都有 / 类似的开头
// 则会以最后一个文件为准，显示最后一个文件的路径

const path5 = './User/node'; 
const path6 = './1.txt';

console.log(path.resolve(path5,path6));

console.log(__dirname);
