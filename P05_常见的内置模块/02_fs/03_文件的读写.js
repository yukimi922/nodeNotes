const fs = require('fs');

// fs.writeFile("./1.txt",'hello coderwhy',{flag: 'a'},(err) => {
//   if(err){
//     console.log(err);
//   }
// }); 

fs.readFile("./1.txt",{ encoding: 'utf-8'}, (err,data) => {
  if(err){
    throw(err)
  }
  console.log(data);
})