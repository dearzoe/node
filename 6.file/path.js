var path= require("path");
/*路径拼接*/
console.log(path.join(__dirname,"a","b","c"));
console.log(path.resolve());
console.log(path.join(__dirname));
console.log("******************************");
//获取当前路径中的文件名
console.log(path.basename(__filename,".js"));
console.log(path.extname(__filename))
console.log(path.sep)//文件分隔符
console.log(path.delimiter)//环境变量路径分隔符