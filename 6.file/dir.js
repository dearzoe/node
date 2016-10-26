var fs = require("fs");
//fs.mkdirSync("a");
//fs.mkdirSync("a/a");
//fs.mkdirSync("a/a/b");
/*创建文件夹*/
/*fs.mkdir("a/a/b/b", function (err) {
    console.log(err);
});*/
/*读取文件夹中的文件*/
fs.readdir("./a/a",function(err,files){
    console.log(files);
});
//查询状态
fs.stat("./a", function (err,stat) {
   console.log(stat) 
});
//访问 access
//修改 modify
//改变 change
/*查询文件夹或文件是否存在*/
fs.exists("./a", function (exists) {
   console.log(exists) 
});
/*根据相对路径获取绝对路径*/
