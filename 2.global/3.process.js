/**
 * Created by Administrator on 2016/10/20.
 */
//当前工作目录
console.log(process.cwd());
//切换到上级工作目录
process.chdir("..");
//内存使用量
console.log(process.memoryUsage());
/*
* { rss: 19120128, 常驻内存   19M
 * heapTotal: 8384512, 堆的总内存  8M
  * heapUsed: 4209360 } 堆已使用的内存量  4M
* */

setImmediate(function () {//与settimeout 0  是一样的基本，效率稍高
    console.log("setImmediate后执行")
});
process.nextTick(function(){
    console.log("nextTick先执行") 
});
setTimeout(function(){
    console.log("setTimeout")
});
console.log(process)