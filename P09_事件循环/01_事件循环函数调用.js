new Promise((resolve)=> {
  console.log(1111);
  resolve();
}).then(()=> {
  console.log(222);
})

console.log(333);