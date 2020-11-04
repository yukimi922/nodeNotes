const fs = require('fs');

// const file = require('./1.txt');

const file = './1.txt';
// 1、同步操作，会阻塞运行
console.log(fs.statSync(file));
console.log(111);

//2、 异步操作，不会阻塞运行

fs.stat(file,(err, file)=> {
  if(err) {
    console.log(err);
    return;
  }
  console.log(file);
})

// console.log(111);

// promise方法，异步，不会阻塞运行

fs.promises.stat(file).then(file => {
  console.log(file);
}).catch(err => {
  console.log(err);
})
console.log(1111);