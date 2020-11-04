const fs = require('fs');
const path = require('path');

// 创建文件，如果文件不存在，则创建

// if(!fs.existsSync('./text')){
//   fs.mkdir('./text',err => {
//     console.log(err);
//   });
// }

// 获取文件夹下所有文件

// fs.readdir('./text', (err, files) => {
//   console.log(files);
// })

// 如果文件夹层层嵌套
let filePath = "";
function redDir(dirname){
  fs.readdir(dirname,{ withFileTypes: true}, (err, files) => {
    if(!err){
      files.forEach(file => {
        //state要拼接路径，很麻烦，直接写item不行
        // fs.stat(item, (err,state) => {
        //   if(state.isDirectory()){
        //     redDir(item)
        //   }
        // })
        if(file.isDirectory()){
          filePath = path.resolve(dirname, file.name);
          redDir(filePath);
        }else {
          console.log(file.name);
        }
      })
    }
  })
}
redDir("./text")