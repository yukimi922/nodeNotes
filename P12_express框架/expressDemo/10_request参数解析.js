const express = require("express");

const app = express();

app.get('/login', (req, res, next) => {
  console.log(req);
  res.end("登录成功~")
})

app.get('/products/:id', (req,res, next) => {
  console.log(req.params);
  res.end("商品信息请求成功成功~");
})

app.listen('9000', () => {
  console.log("9000 端口服务启动成功！")
})