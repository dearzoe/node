/**
 * Created by Administrator on 2016/10/20.
 */
var util = require('util');
//继承 inherits
function Parent(){
    this.name="huwezhe";
}

Parent.prototype.say= function () {
    console.log(this.name)
};
function Child(){
    this.name="child"
}
//Child.prototype = new Parent
//子类可以继承父类原型上的方法
util.inherits(Child,Parent);//原型继承

var child = new Child;
child.say();
console.log(child)
console.log(util.inspect(child))
