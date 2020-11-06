const http = require('http');

// 第一种：使用createServer

// const server = http.createServer((req,res) => {
//   res.end('hello i am mx')
// })

// 第二种：使用类创建server
const server = new http.Server((req, res) => {
  res.end('hello i am mx')
})

//  两者的本质都是调用了Server类

server.listen(8020,() => {
  console.log('端口' + server.address().port + '正在运行');
})