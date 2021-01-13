const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "hello world!";
  // ctx.body = "hhhh";
})
app.listen(9000, () => {
  console.log("koa服务器开启成功~");
})