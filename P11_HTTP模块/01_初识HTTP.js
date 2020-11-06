const http = require('http');

const server = http.createServer((req,res) => {
  res.end('hello i am mx')
})

server.listen(8800,'localhost',()=>{
  console.log('服务器已启动，端口：localhost:8800');
})