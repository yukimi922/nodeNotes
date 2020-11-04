const path = require('path');
const fs = require('fs');

let toDir = process.argv[2];
let fromDir = process.argv[3];
let fileType = process.argv[4];


function getDirDesc(dirName,toDir,fileType){
  fs.readdir(dirName,{withFileTypes: true}, (err, files) => {
    // files为第二层多个day开头的文件夹
    files.forEach(file => {
      // file为第二层的每一个文件
      if(file.name.startsWith('P')){
        // 遍历每一个文件夹看是否在目标路径已存在
        const filePath = path.resolve(dirName,file.name);
        const toPath = path.resolve(toDir,file.name);
        if(fs.existsSync(toPath)){
          console.log(file.name + " 已存在");
        }else {
          // 如果不存在，则在目标文件中创建对应名称的文件夹
          fs.mkdir(toPath, err => {
            if(!err) {
              console.log("文件夹创建成功，开始拷贝");
            }
          });
          // 读取第二层每个文件夹里面的内容
          // readdirSync 读出来的是一个数组，只有文件或者文件夹的名称
          // console.log(fs.readdirSync(filePath),"ddddd"); 
          fs.readdir(filePath,{withFileTypes: true}, (err, files) => {
            files.forEach((file,index) => {
              // 以js开头的文件直接拷贝
              if(index !== 0 && file.name.endsWith(".js") && !file.isDirectory()){
                const formfilePath = path.resolve(filePath,file.name);
                const tofilePath = path.resolve(toPath,file.name);
                if(!fs.existsSync(tofilePath)){
                  fs.copyFileSync(formfilePath,tofilePath)
                }else{
                  console.log(file.name + "文件已存在");
                }
              }else if(index !== 0 && file.isDirectory() && file.name.startsWith('0')){
                // 深层拷贝暂未实现
                const pathA = path.resolve(filePath);
                getDirDesc(pathA,toDir,fileType);
              }
            })
          });
        }
      }
    })
  })
}
getDirDesc(fromDir,toDir,fileType)