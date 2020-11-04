const message = '你好';

const buffer = Buffer.from(message,"utf16le");

// 不同的编码方式应使用不同的解码格式，否则会乱码

console.log(buffer);
// toString默认使用utf-8方式解码
console.log(buffer.toString());
console.log(buffer.toString('utf16le'));