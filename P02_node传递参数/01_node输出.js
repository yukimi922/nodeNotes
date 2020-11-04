console.log("hello word!");

console.log(process);
console.log(process.argv[2]);

console.clear();

process.argv.forEach(item => {
  console.log(item);
});

// 可以在函数体内部使用，打印出函数的具体调用过程
console.trace();