var EventEmitter=require("events");
var util=require("util");
var events=new EventEmitter;
//注册事件
events.addListener("click", function () {
    console.log("click");
});
//发射事件
events.emit("click");
//子类可以继承父类原型上的方法
util.inherits(G,EventEmitter);
function G(){

}
var g=new G();
g.on("hungry",function(){
   console.log("吃饭去了");
});
g.on("sad",function(){
    console.log("购物去了");
});
g.on("happy",function(){
    console.log("开心");
});

g.emit("hungry");
g.emit("sad");
g.emit("happy");