const fs = require('fs');

fs.open("./1.txt",(err, fd) => {
  console.log(fd);
  // 通过fd获取文件信息
  fs.fstat(fd, (err, state) => {
    console.log(state);
  })
})