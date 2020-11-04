// 没有模块化时，会造成变量污染
// var name = "aa";
// console.log(name);

// 可以使用闭包避免变量冲突
// ( function () {
//   var name = "aa";
//   var age = 15;
//   console.log(name);
// })()


// 定义为一个变量
var fooModel = ( function () {
  var name = "aa";
  var age = 15;
  console.log(name);
  return {
    name, age
  }
})()