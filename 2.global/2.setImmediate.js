/**
 * Created by Administrator on 2016/10/20.
 */
setTimeout(function () {
    console.log("a")
},3000);
//把参数函数放在下一个事件中执行
setImmediate(function () {
    console.log("b")
},3000);
