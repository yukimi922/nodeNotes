const { json } = require("express");
const express = require("express");

const app = express();

app.get('/user',(req, res, next) => {
  // res.json({name: "mx", age: 18});
  res.type("application/json");
  res.end(JSON.stringify({name: "mx", age: 18}));
})

app.listen('9000', () => {
  console.log('服务器启动成功~');
})