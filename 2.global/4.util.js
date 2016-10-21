/**
 * Created by Administrator on 2016/10/20.
 */

var util= require('util');

var obj= new Object();
obj.name='huwenzhe';
Object.defineProperty(obj,'age',{
    value:120,//值
    configurable:true,//是否可配置（可删除）
    writable:true,//是否可改值
    enumerable:false //是否可枚举
})
//delete obj.age;    //验证可配置
console.log(util.inspect(obj,{
    showHidden:true
}));
console.log(util.isArray(""));
console.log(util.isRegExp(/\w+/));
console.log(util.isDate(new Data));
console.log(util.isError(new Error));
