const Koa = require('koa');

const app = new Koa();

const userRouter = require("../routers/users");

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen("9000", () => {
  console.log("koa服务端启动成功~");
})