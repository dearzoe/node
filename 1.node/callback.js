/**
 * Created by Administrator on 2016/10/20.
 */
function  say(callback){
    callback();
}


function print(){
    setTimeout(function(){
        console.log("hello,world")
    },1000)
}

say(print);