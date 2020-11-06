const fs = require('fs');

const text = fs.createReadStream('./a.txt',{
  start: 2,
  end: 8,
  highWaterMark: 1
});


// 监听读出的数据
text.on('data',(data) => {
  console.log(data);
  text.pause(); // 暂停流
  setTimeout(() => {
    text.resume(); // 开始流
  }, 1000)
})

// 监听文件打开时间
text.on('open', () => {
  console.log('文件被打开了！');
})



// 监听文件关闭时间
text.on('close', () => {
  console.log('文件已关闭~');
})