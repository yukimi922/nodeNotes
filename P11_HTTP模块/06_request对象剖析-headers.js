const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.headers);
  res.end('hello headers!')
})

server.listen(9000, () => {
  console.log('服务已在' + server.address().port + '运行');
})