/**
 * Created by Administrator on 2016/10/24.
 */
function Person(name){
    this.name=name;
}

Person.prototype.say= function () {
    console.log(this.name)
};

module.exports=Person;  //导出