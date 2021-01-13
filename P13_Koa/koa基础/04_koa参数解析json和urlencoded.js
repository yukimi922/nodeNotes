const Koa = require('koa');
const app = new Koa();
const Router = require ("koa-router");
const userRouter = new Router();
const bodyparser = require("koa-bodyparser"); // 解析application/json
const multer = require("koa-multer"); // 解析form-data
const upload = multer();

app.use(upload.any());
app.use(bodyparser());

userRouter.post('/products', (ctx, next) => {
  console.log(ctx.req.body); // form-data类型的参数存储在req中
  console.log(ctx.request.body);
  console.log(ctx.request.query);
  ctx.response.body = "上传成功~";
})
app.use(userRouter.routes());

// 单纯的依靠koa无法解析json和urlencoded类型的数据，需要依赖koa-bodyparser
// app.use((ctx, next) => {
//   console.log(ctx.request.body); // 无法查询，undefined
//   ctx.response.body = "查询成功~"
// })

app.listen("9000", () => {
  console.log("koa服务端启动成功~");
})