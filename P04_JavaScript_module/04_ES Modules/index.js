// 要加文件的后缀名
import {name, age} from "./modules/foo.js";
name.name = "jhh";
// console.log(name.name, age);

// 引入文件不加后缀
// webpack可以设置默认查找文件的后缀顺序，
// node默认的是 文件夹 .js .json .node
 
// 只引入目录
// 默认查找 index.js  index.json index.node