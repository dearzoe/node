/**
 * Created by Administrator on 2016/10/20.
 */
setTimeout(function () {
    console.log("a")
},1000);
//把参数函数放在下一个事件中顶部执行
setImmediate(function () {//与settimeout 0  是一样的基本，效率稍高
    console.log("b")
});

