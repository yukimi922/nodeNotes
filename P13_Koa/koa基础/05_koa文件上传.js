const Koa = require("koa");
const app = new Koa();

app.listen('9000', () => {
  console.log("koa服务端启动成功~");
})