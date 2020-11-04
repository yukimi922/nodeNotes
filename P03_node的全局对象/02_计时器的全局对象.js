// 延迟执行
setTimeout(() => {
  console.log(111);
}, 1000);

// 循环执行
setInterval(() => {
  console.log(222);
}, 1000);

// 立即执行
setImmediate(() => {
  console.log(333);
})

// 下一个滴答的时间
process.nextTick(() => {
  console.log("process.nextTick");
})