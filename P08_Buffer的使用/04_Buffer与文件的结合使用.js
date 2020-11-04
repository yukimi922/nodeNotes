const fs = require('fs');
// 获取文本
// fs.readFile('./1.txt', {encoding: 'utf-8'},(res, data) => {
//   console.log(data);

//   //如果不使用encoding。也可以使用toString，默认utf-8编码
//   // console.log(data.toString()); 
// })


// 图片操作

// 简单的写入写出操作
fs.readFile('./fangao.jpg', (err, data) => {
  // 这样直接读出来的是很多的二进制代码
  console.log(data);

  fs.writeFile('./fg.png', data, err => {
    console.log(err);
  })
})

// 图片的剪裁或者其他操作，借助sharp库(Buffer相关的库)



