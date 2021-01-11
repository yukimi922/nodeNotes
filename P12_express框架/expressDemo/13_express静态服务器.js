// 将build好的项目防至根目录之后。
// 可以使用express.static(path)将项目设为指定端口的资源，可以通过端口访问

const express = require("express");

const app = express();

app.use(express.static('path'))  //此处path为build之后的文件夹目录

app.listen('9000', () => {
  console.log("13_服务器启动成功~");
})