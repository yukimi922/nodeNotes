const http = require('http');

const server = http.createServer((req,res) => {
  // 设置状态码
  // res.statusCode = 400;

  // 另一种方式
  res.setHeader("Conent-type","application/json;charset=utf8"); // text/html  text/json  application/html 等等
  // res.writeHead(402);
  res.write('请求结果返回1');
  res.end();
})

server.listen(9000, () => {
  console.log('服务已在' + server.address().port + '运行');
})