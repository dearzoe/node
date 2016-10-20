/**
 * Created by Administrator on 2016/10/20.
 */
//console.log(global);
console.log("log");
console.info("info");


console.warn("warn");
console.error("error");

console.time("costTime");//costTime 之中代码运行的时间
for(var i=0;i<100000000;i++){

}
console.timeEnd('costTime');

console.log(__filename);//当前模块的文件的绝对路径
console.log(__dirname);//当前模块的所在目录的绝对路径

