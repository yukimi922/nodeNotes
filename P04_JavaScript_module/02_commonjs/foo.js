// 这句话应该是在文件顶部进行了赋值
// module.exports = exports;

const name = "michelle";
const age = 18;

function fun(name){
  console.log("hello " + name);
}

// 使用exports导出

exports.name = name;
exports.age = age;
exports.fun = fun;


// node的模块化都是以module.exports为主的，如果之前定义了exports，再通过module.exports导出时
// exports中的内容将不再有任何作用
module.exports = {
  name: "jennie",
  age: 10,
  fun: function(name){ 
    console.log("get out "+ name);
  }
}

// console.log(exports);

// 此时的exports相当于是重新开辟了存储空间，相当于是两个不同的exports，
// exports = {
//   name: "jennie"
// }

// console.log(exports);
// exports = module.exports;
