const http = require('http');
// 处理URL路径
const url = require('url');
// 处理query数据
const qs = require('querystring'); 

// 当接口在 POST 方式请求且参数以 JSON 对象的形式(postman中的raw)传递过来时
const server = http.createServer((req,res) => {
  // res.end('hello server');
  if(req.url === '/login' && req.method === 'POST'){
    // res.end('正在请求登录');
    // 如果确定数据是string格式，可以使用setEncoding设定编码方式为utf-8
    req.setEncoding('utf-8');
    // post方式请求时，原生的数据是以流的方式写入的，使用res.on的方式监听data
    req.on('data', (data) => {
      // console.log(data.toString(), typeof data.toString());
      //将字符串类型的数据转为对象类型，获取参数
      const {name, age} = JSON.parse(data.toString());
      console.log(name, age);
    })
    res.end('登录');
  }
})

server.listen(8020,() => {
  console.log('端口' + server.address().port + '正在运行');
})