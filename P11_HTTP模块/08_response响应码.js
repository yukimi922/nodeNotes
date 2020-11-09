const http = require('http');

const server = http.createServer((req,res) => {
  // 设置状态码
  // res.statusCode = 400;

  // 另一种方式
  res.writeHead(402);
  res.write('请求结果返回1')
  res.end();
})

server.listen(9000, () => {
  console.log('服务已在' + server.address().port + '运行');
})