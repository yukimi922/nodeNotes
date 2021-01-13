### 认识koa

官网简介
> Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

### 为什么要使用koa？

- koa没有捆绑中间件，体积小，对于构建小型轻量级应用更加适用


### koa创建基础服务器

安装koa
```
npm install koa
```

使用koa创建基础服务
```js
const Koa = require('koa');
const app = new Koa();

app.listen(9000, () => {
  console.log("服务器启动成功~")
})
```
- 与express不同的点：
  - 此时访问9000端口，koa会返回not found，express会一直挂起请求，直到超时之后断开请求。
  - express需要通过res.end()发送请求返回数据才可以请求成功
  - koa创建最基础的服务器之后访问不会一直处于请求状态

```js
const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "hello world!";
})
app.listen(9000, () => {
  console.log("服务器启动成功~")
})
```

- koa与express返回请求结果的差异
  - koa只有两个参数ctx和next，ctx中有两个对象，request和response，通过ctx.response.body返回请求成功的数据
  - express有三个参数req，res和next，通过 res.end('hello world')返回请求成功的数据

### 在koa中使用中间件

与express不同的是，koa没有提供methods的方法，例如以下方式的中间件是没有的

```js
app.use('/home',() => {

})

app.get('/user', () => {

})
// post等方法也没有

// 连续注册中间件也没有
app.use((ctx, next) => {

}, (ctx, next) => {

})
```
在koa中使用中间件可以通过koa-router来根据请求的路径和方式指定返回结果

### 在koa框架中使用koa-router

> koa-router并不是官方推荐的路由中间件，但是是使用最多的

安装

```
npm install koa-router
```

使用

```js
const Router = require("koa-router");

const router = new Router({prefix: '/users'}); // 创建路由并且添加路由前缀 /users

router.get('', (ctx, next) => {

})

module.exports = router;
```

### koa路由参数解析

解析pramas和query
```js
const Router = require ("koa-router");

const userRouter = new Router();

userRouter.get('/users/:id', (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.request.params);
  ctx.response.body = 'hello world~';
})
```

解析application/json

```js
const Router = require ("koa-router");
const userRouter = new Router();
const bodyparser = require("koa-bodyparser"); // 解析application/json
const multer = require("koa-multer"); // 解析form-data
const upload = multer();

app.use(upload.any());  // upload.single .array 等
app.use(bodyparser());

userRouter.post('/products', (ctx, next) => {
  console.log(ctx.req.body); // form-data类型的参数存储在req中
  console.log(ctx.request.body);
  console.log(ctx.request.query);
  ctx.response.body = "上传成功~";
})
app.use(userRouter.routes());
```

`注意` 使用koa-multer解析json和urlencoded类型数据时，接收的参数在ctx.req.body中，而不是ctx.request.body
