const express = require("express");
const app = express();
const userPouter = require('./routers/user');

app.use('/users',userPouter);

app.listen('9000', ()=> {
  console.log("12_服务器启动成功~");
})