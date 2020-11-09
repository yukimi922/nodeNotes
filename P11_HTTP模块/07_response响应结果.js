const http = require('http');

const server = http.createServer((req,res) => {
  res.write('请求结果返回1')
  res.end();
})

server.listen(9000, () => {
  console.log('服务已在' + server.address().port + '运行');
})