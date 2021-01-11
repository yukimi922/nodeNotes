const express = require("express");

const router = express.Router();

router.get('/',(req, res) => {
  res.end("用户信息获取成功~")
})


module.exports = router;