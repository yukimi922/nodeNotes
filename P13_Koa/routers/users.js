const Router = require("koa-router");

const router = new Router({prefix: '/users'});

router.get('/', (ctx, next) => {
  ctx.response.body = "获取用户列表成功~";
})

module.exports = router;