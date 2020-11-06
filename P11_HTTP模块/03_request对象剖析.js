const http = require('http');

const server = http.createServer((req,res) => {
  res.end('hello i am mx');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
})

server.listen(8020,() => {
  console.log('端口' + server.address().port + '正在运行');
})