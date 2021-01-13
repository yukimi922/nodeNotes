const Koa = require('koa');

const app = new Koa();

const Router = require ("koa-router");

const userRouter = new Router();

userRouter.get('/users/:id', (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.request.params);
  ctx.response.body = 'hello world~';
})

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);  // 此时获取不到parmas  undefined
//   ctx.response.body = "hello world"
// })

app.use(userRouter.routes());

app.listen("9000", () => {
  console.log("koa服务端启动成功~");
})