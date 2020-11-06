const http = require('http');
// 处理URL路径
const url = require('url');
// 处理query数据
const qs = require('querystring');

const server = http.createServer((req,res) => {
  const quer = url.parse(req.url);
  const query = qs.parse(quer.query);
  console.log(query.name);
  res.end('hello world');
})

server.listen(8020,() => {
  console.log('端口' + server.address().port + '正在运行');
})