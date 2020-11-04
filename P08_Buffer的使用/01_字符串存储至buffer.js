const message = 'hello world';

// 第一种创建buffer的方式（已过期）控制台会有警告
// const buffer = new Buffer(message);
// console.log(buffer);

// 第二种创建

const buffer = Buffer.from(message);
console.log(buffer);