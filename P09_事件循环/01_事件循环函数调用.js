new Promise((resolve)=> {
  console.log(111);  
  resolve();
}).then(()=> {
  console.log(222); 
})

console.log(333);  


// async 与 await

async function fun(){
  await fun2();
  console.log(444);
}

async function fun2(){
  console.log(555);
}
fun();
console.log(666);
// setTimeout(()=> {
//   console.log(111);
// },0)
// setImmediate(()=> {
//   console.log(222);
// })