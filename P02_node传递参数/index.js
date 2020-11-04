console.log("hello word!");

// 传递方式，运行程序时， node xxxx.js arg1 arg2 （参数可以是任何形式，比如字符串、键值对）、不能为数组
console.log(process);
console.log(process.argv[2]);

process.argv.forEach(item => {
  console.log(item);
});