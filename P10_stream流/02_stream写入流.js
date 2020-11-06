const fs = require('fs');

// 不写options，直接覆盖
// const write = fs.createWriteStream('./b1.txt');
// write.write('hhhhh'); 

// 指定插入位置

const write = fs.createWriteStream('./b1.txt',{
  flags: "a",
  start: 8  // 指定位置之后，插入的内容从指定位置开始覆盖
});
write.write('ddddddd'); 


write.write('xxxxxx'); 

// write.close();
write.end('ni hao');

write.on('close', () => {
  console.log('文件已关闭');
})

// write.write('wwwww'); 

